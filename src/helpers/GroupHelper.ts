import _ from 'lodash';

import { groups } from '../data/groups';
import { NicheGroupType } from '../types/groups.types';

export class GroupHelper {
  public static getGroupLink(
    stateCode: string,
    professionalArea: NicheGroupType | string
  ): string | false {
    const stateGroup = groups.find((group) => group.stateCode === stateCode);

    if (!stateGroup) {
      return false;
    }

    if (
      professionalArea === NicheGroupType.OUTR ||
      professionalArea === NicheGroupType.SELECIONE
    ) {
      // send to global groups
      const activeMainGroups = stateGroup?.mainGroups.filter(
        (group) => group.status === true
      );

      const link = _.shuffle(activeMainGroups)[0].url;

      return link;
    }

    // else, lets shuffle some niche groups and get a target link

    const activeNicheGroups = stateGroup?.nicheGroups.filter(
      (nicheGroup) => nicheGroup.status === true
    );

    const targetedNicheGroups = activeNicheGroups?.filter(
      (tng) => tng.nicheGroupKey === professionalArea
    );

    const targetedNicheGroupLink = _.shuffle(targetedNicheGroups)[0].url;

    return targetedNicheGroupLink;
  }
}
