import _ from 'lodash';

import { telegramGroups, whatsappGroups } from '../data/groups';
import { PlatformType } from '../types/account.types';
import { AvailableStates, IGroup, NicheGroupType } from '../types/groups.types';

export class GroupHelper {
  private static _findGroupByState = (
    platformGroups: IGroup[],
    stateCode: AvailableStates | string
  ) => {
    const group = platformGroups.find(
      (groupItem) => groupItem.stateCode === stateCode
    );

    if (!platformGroups) {
      return false;
    }

    return group;
  };

  private static _findLinkFromGroup = (
    platform: PlatformType | string,
    group: IGroup,
    professionalArea: NicheGroupType | string
  ) => {
    if (
      professionalArea === NicheGroupType.OUTR ||
      professionalArea === NicheGroupType.SELECIONE ||
      platform === PlatformType.Telegram // TELEGRAM USERS WILL ONLY BE REDIRECTED TO GENERAL GROUPS!
    ) {
      // send to global groups
      const activeMainGroups = group?.mainGroups.filter(
        (groupItem) => groupItem.status === true
      );

      const link = _.shuffle(activeMainGroups)[0].url;

      return link;
    }

    // else, lets shuffle some niche groups and get a target link
    // this is a whatsapp only feature

    const activeNicheGroups = group?.nicheGroups.filter(
      (nicheGroup) => nicheGroup.status === true
    );

    const targetedNicheGroups = activeNicheGroups?.filter(
      (tng) => tng.nicheGroupKey === professionalArea
    );

    const targetedNicheGroupLink = _.shuffle(targetedNicheGroups)[0].url;

    return targetedNicheGroupLink;
  };

  public static getGroupLink(
    platform: PlatformType | string,
    stateCode: string,
    professionalArea: NicheGroupType | string
  ): string | false {
    let link = "";

    switch (platform) {
      case PlatformType.Telegram:
        const telegramStateGroup = GroupHelper._findGroupByState(
          telegramGroups,
          stateCode
        );

        if (!telegramStateGroup) {
          return false;
        }

        link = GroupHelper._findLinkFromGroup(
          platform,
          telegramStateGroup,
          professionalArea
        );
        return link;

      case PlatformType.WhatsApp:
      default:
        const whatsAppStateGroup = GroupHelper._findGroupByState(
          whatsappGroups,
          stateCode
        );

        if (!whatsAppStateGroup) {
          return false;
        }

        link = GroupHelper._findLinkFromGroup(
          platform,
          whatsAppStateGroup,
          professionalArea
        );
        return link;
    }
  }
}
