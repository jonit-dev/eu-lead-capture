import { AvailableStates, IGroup, NicheGroupType } from '../types/groups.types';

export const telegramGroups: IGroup[] = [
  {
    stateCode: AvailableStates.ES,
    mainGroups: [
      {
        name: "EmpregoUrgente.com - ES",
        url: "https://t.me/empregourgenteESc",
        status: true,
      },
    ],
    nicheGroups: [],
  },
  {
    stateCode: AvailableStates.SP,
    mainGroups: [
      {
        name: "EmpregoUrgente.com - SP",
        url: "https://t.me/empregourgenteSPc",
        status: true,
      },
    ],
    nicheGroups: [],
  },
  {
    stateCode: AvailableStates.MG,
    mainGroups: [
      {
        name: "EmpregoUrgente.com - MG",
        url: "https://t.me/empregourgenteMGc",
        status: true,
      },
    ],
    nicheGroups: [],
  },
  {
    stateCode: AvailableStates.RJ,
    mainGroups: [
      {
        name: "EmpregoUrgente.com - RJ",
        url: "https://t.me/empregourgenteRJc",
        status: true,
      },
    ],
    nicheGroups: [],
  },
];

export const whatsappGroups: IGroup[] = [
  {
    stateCode: AvailableStates.ES,
    mainGroups: [
      {
        name: "Emprego Urgente ES - #1",
        url: "https://chat.whatsapp.com/K3mKt9yREN8JUBfQUN6Y2r",
        status: true,
      },
      {
        name: "Emprego Urgente ES - #2",
        url: "https://chat.whatsapp.com/HJV3zqgoU0W1ZpEa6Rtdym",
        status: true,
      },
      {
        name: "Emprego Urgente ES - #3",
        url: "https://chat.whatsapp.com/E4dtl6wK6xw4uBfuJw7MNW",
        status: true,
      },
      {
        name: "Emprego Urgente ES - #4",
        url: "https://chat.whatsapp.com/GIYWbj4hxr8JtkoI4XXSrE",
        status: true,
      },
      {
        name: "Emprego Urgente ES - #5",
        url: "https://chat.whatsapp.com/KlQy0bGSrcQJthT3AopDCM",
        status: true,
      },
    ],
    nicheGroups: [
      {
        name: "Vagas Adm &  Atend ES 1",
        url: "https://chat.whatsapp.com/F4KjvRAkzxAHsmlZ0rBpUn",
        status: true,
        nicheGroupKey: NicheGroupType.ADMIN,
      },
      {
        name: "Vagas Estética - ES  1",
        url: "https://chat.whatsapp.com/LEwzaRaQ2TnIaCxvQESiqU",
        status: true,
        nicheGroupKey: NicheGroupType.ESTET,
      },
      {
        name: "Constr, Indust, Log ES 1",
        url: "https://chat.whatsapp.com/FZ2LDDOx7zVET8F6P8n7Pv",
        status: true,
        nicheGroupKey: NicheGroupType.CONSTRUC,
      },
      {
        name: "Saude, Limp, Cuidad ES 1",
        url: "https://chat.whatsapp.com/E5xpq47qyJ87T9XBJyoueM",
        status: true,
        nicheGroupKey: NicheGroupType.SAUDE,
      },
      {
        name: "Vagas Segur & Patr ES 1",
        url: "https://chat.whatsapp.com/Di2CdPP4m2O04OzWmnUH8E",
        status: true,
        nicheGroupKey: NicheGroupType.SEGUR,
      },
      {
        name: "Vagas - Vend & Comer ES 1",
        url: "https://chat.whatsapp.com/KnpQpDdUVEvI5hJXTg8UlJ",
        status: true,
        nicheGroupKey: NicheGroupType.VEND,
      },
    ],
  },
  {
    stateCode: AvailableStates.SP,
    mainGroups: [
      // ! TEMP CLOSED
      {
        name: "Emprego Urgente SP - #1",
        url: "https://chat.whatsapp.com/DITRy3cquo38EBkdacf8DS",
        status: false,
      },

      // ! TEMP CLOSED
      {
        name: "Emprego Urgente SP - #2",
        url: "https://chat.whatsapp.com/IpyZFwgaiDBAnGDTMLmV4i",
        status: false,
      },
      {
        name: "Emprego Urgente SP - #3",
        url: "https://chat.whatsapp.com/I5wVYy32fKDDKSZldDRa3U",
        status: true,
      },
      // ! TEMP CLOSED
      {
        name: "Emprego Urgente SP - #4",
        url: "https://chat.whatsapp.com/GnN84IIcvd15rJs09ukqP7",
        status: false,
      },
      {
        name: "Emprego Urgente SP - #5",
        url: "https://chat.whatsapp.com/FGvtUkCrwc6JVeTzxrHPVt",
        status: true,
      },
    ],
    nicheGroups: [
      {
        name: "Vagas Adm &  Atend ES 1",
        url: "https://chat.whatsapp.com/FxNAnH2eRWb5ZD8goni1wp",
        status: true,
        nicheGroupKey: NicheGroupType.ADMIN,
      },
      {
        name: "Vagas Estética - SP 1",
        url: "https://chat.whatsapp.com/DEyF9AAkBrRFBdbJeCq4Ar",
        status: true,
        nicheGroupKey: NicheGroupType.ESTET,
      },
      {
        name: "Constr, Indust, Log SP 1",
        url: "https://chat.whatsapp.com/EoZgjLVbt1aFZFNN1ShBwo",
        status: true,
        nicheGroupKey: NicheGroupType.CONSTRUC,
      },
      {
        name: "Saude, Limp, Cuidad SP 1",
        url: "https://chat.whatsapp.com/C69NfrXFYpX5qRwmbwqSUz",
        status: true,
        nicheGroupKey: NicheGroupType.SAUDE,
      },
      {
        name: "Vagas Segur & Patr SP 1",
        url: "https://chat.whatsapp.com/DvifYRP3589JPafuhrlM1W",
        status: true,
        nicheGroupKey: NicheGroupType.SEGUR,
      },
      {
        name: "Vagas - Vend & Comer SP 1",
        url: "https://chat.whatsapp.com/FSiouiSjCKMDpiulfrbpE5",
        status: true,
        nicheGroupKey: NicheGroupType.VEND,
      },
    ],
  },
  {
    stateCode: AvailableStates.MG,
    mainGroups: [
      {
        name: "Emprego Urgente BH - #1",
        url: "https://chat.whatsapp.com/GAyfZlKAfmk006WxsLw5Ds",
        status: true,
      },
      {
        name: "Emprego Urgente BH - #2",
        url: "https://chat.whatsapp.com/CKcZNtHDQHSJSUgLUUt5cz",
        status: true,
      },
      {
        name: "Emprego Urgente BH - #3",
        url: "https://chat.whatsapp.com/GHipWCH8e45Dk2pDxhREsC",
        status: true,
      },
      {
        name: "Emprego Urgente BH - #4",
        url: "https://chat.whatsapp.com/Erxuy7np1vvFstNALvkXiW",
        status: true,
      },
      {
        name: "Emprego Urgente BH - #4",
        url: "https://chat.whatsapp.com/Gjag48MTQnZE2S8enRpsxW",
        status: true,
      },
    ],
    nicheGroups: [
      {
        name: "Vagas Adm &  Atend BH 1",
        url: "https://chat.whatsapp.com/FF939YPdISu0raSWwNF1jC",
        status: true,
        nicheGroupKey: NicheGroupType.ADMIN,
      },
      {
        name: "Vagas Estética - BH  1 ",
        url: "https://chat.whatsapp.com/L5bddo27xPL3QqtnKyf1Y3",
        status: true,
        nicheGroupKey: NicheGroupType.ESTET,
      },
      {
        name: "Constr, Indust, Log BH 1",
        url: "https://chat.whatsapp.com/HgOY9tfw8Fc1WnfLtVBMYK",
        status: true,
        nicheGroupKey: NicheGroupType.CONSTRUC,
      },
      {
        name: "Saude, Limp, Cuidad BH 1",
        url: "https://chat.whatsapp.com/GYVjsYggDLj4pPhpB9DaIN",
        status: true,
        nicheGroupKey: NicheGroupType.SAUDE,
      },
      {
        name: "Vagas Segur & Patr BH 1",
        url: "https://chat.whatsapp.com/JazbysziMcN8MYJcldUMUI",
        status: true,
        nicheGroupKey: NicheGroupType.SEGUR,
      },
      {
        name: "Vagas - Vend & Comer BH 1 ",
        url: "https://chat.whatsapp.com/Efz2w23tujI5VeDuYOxBEj",
        status: true,
        nicheGroupKey: NicheGroupType.VEND,
      },
    ],
  },
  {
    stateCode: AvailableStates.RJ,
    mainGroups: [
      {
        name: "EmpregoUrgente.com RJ #1",
        url: "https://chat.whatsapp.com/BWONdvqquihKnUqGVhMLb1",
        status: true,
      },
      {
        name: "EmpregoUrgente.com RJ #2",
        url: "https://chat.whatsapp.com/EdF7jAo0zTsHWubeiZ4CLv",
        status: true,
      },
      {
        name: "EmpregoUrgente.com RJ #3",
        url: "https://chat.whatsapp.com/BPMsLkCLY257otEW7NFE9u",
        status: true,
      },
    ],
    nicheGroups: [
      {
        name: "Vagas Adm &  Atend RJ 1",
        url: " https://chat.whatsapp.com/ETABpfpwbqA7oaEyzxpaIH",
        status: true,
        nicheGroupKey: NicheGroupType.ADMIN,
      },
      {
        name: "Vagas Estética - RJ  1",
        url: "https://chat.whatsapp.com/CfBg3LCaQVu83U92KVWnl6",
        status: true,
        nicheGroupKey: NicheGroupType.ESTET,
      },
      {
        name: "Constr, Indust, Log RJ 1",
        url: "https://chat.whatsapp.com/BB3na5n8wrjJMoOHZlgUjJ",
        status: true,
        nicheGroupKey: NicheGroupType.CONSTRUC,
      },
      {
        name: "Saude, Limp, Cuidad RJ 1",
        url: "https://chat.whatsapp.com/F6mLteT0lDs1kK31A0asDU",
        status: true,
        nicheGroupKey: NicheGroupType.SAUDE,
      },

      {
        name: "Vagas Segur & Patr RJ 1",
        url: "https://chat.whatsapp.com/ICuBcfY8NUI2LYApGiz8xd",
        status: true,
        nicheGroupKey: NicheGroupType.SEGUR,
      },
      {
        name: "Vagas - Vend & Comer RJ 1 ",
        url: "https://chat.whatsapp.com/EomAznlzalh1TrsU9xmU0B",
        status: true,
        nicheGroupKey: NicheGroupType.VEND,
      },
    ],
  },
];
