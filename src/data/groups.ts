import { AvailableStates, IGroup, NicheGroupType } from '../types/groups.types';

export const TelegramGroups: IGroup[] = [
  // {
  //   payerId: 1,
  //   stateCode: AvailableStates.SP,
  //   mainGroups: [
  //     {
  //       name: "Seu Jobs SP",
  //       url: "https://t.me/empregosaopaulo",
  //       status: true,
  //     },
  //   ],
  //   nicheGroups: [],
  // },
  {
    payerId: 0,
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
    payerId: 0,
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
    payerId: 0,
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
    payerId: 0,
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

export const WhatsAppGroups: IGroup[] = [
  // {
  //   payerId: 1, // ! SeuJobs
  //   stateCode: AvailableStates.SP,
  //   mainGroups: [
  //     {
  //       name: "Vagas SP",
  //       url: "https://chat.whatsapp.com/ChazGTU7tIDAyRYL2WRXoz",
  //       status: true,
  //     },
  //   ],
  //   nicheGroups: [],
  // },
  {
    payerId: 0,
    stateCode: AvailableStates.ES,
    mainGroups: [
      {
        name: "Emprego Urgente ES - #1",
        url: "https://chat.whatsapp.com/K3mKt9yREN8JUBfQUN6Y2r",
        status: false,
      },
      {
        name: "Emprego Urgente ES - #2",
        url: "https://chat.whatsapp.com/HJV3zqgoU0W1ZpEa6Rtdym",
        status: false,
      },
      {
        name: "Emprego Urgente ES - #3",
        url: "https://chat.whatsapp.com/E4dtl6wK6xw4uBfuJw7MNW",
        status: false,
      },
      {
        name: "Emprego Urgente ES - #4",
        url: "https://chat.whatsapp.com/GIYWbj4hxr8JtkoI4XXSrE",
        status: false,
      },
      {
        name: "Emprego Urgente ES - #5",
        url: "https://chat.whatsapp.com/KlQy0bGSrcQJthT3AopDCM",
        status: false,
      },
      {
        name: "Emprego Urgente ES - #6",
        url: "https://chat.whatsapp.com/Filvdb1sdqPBUFM3aAA0oc",
        status: true,
      },
      {
        name: "Emprego Urgente ES - #7",
        url: "https://chat.whatsapp.com/C84NFe54tga7O4NPJYoPL3",
        status: true,
      },
    ],
    nicheGroups: [
      {
        name: "Vagas Adm &  Atend ES 1",
        url: "https://chat.whatsapp.com/F4KjvRAkzxAHsmlZ0rBpUn",
        status: false,
        nicheGroupKey: NicheGroupType.ADMIN,
      },
      {
        name: "Vagas Adm &  Atend ES 2",
        url: "https://chat.whatsapp.com/CwdXoHIsuYwIRQNEJsjlLb",
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
    payerId: 0,
    stateCode: AvailableStates.SP,
    mainGroups: [
      {
        name: "Emprego Urgente SP - #1",
        url: "https://chat.whatsapp.com/DITRy3cquo38EBkdacf8DS",
        status: false,
      },
      {
        name: "Emprego Urgente SP - #2",
        url: "https://chat.whatsapp.com/IpyZFwgaiDBAnGDTMLmV4i",
        status: false,
      },
      {
        name: "Emprego Urgente SP - #3",
        url: "https://chat.whatsapp.com/I5wVYy32fKDDKSZldDRa3U",
        status: false,
      },

      {
        name: "Emprego Urgente SP - #4",
        url: "https://chat.whatsapp.com/GnN84IIcvd15rJs09ukqP7",
        status: false,
      },
      {
        name: "Emprego Urgente SP - #5",
        url: "https://chat.whatsapp.com/FGvtUkCrwc6JVeTzxrHPVt",
        status: false,
      },
      {
        name: "Emprego Urgente SP - #6",
        url: "https://chat.whatsapp.com/F4QRtu2uLHaLD56MzeYder",
        status: false,
      },
      {
        name: "Emprego Urgente SP - #7",
        url: "https://chat.whatsapp.com/I2fbUbALQG7IqgdUrrtO2R",
        status: false,
      },
      {
        name: "Emprego Urgente SP - #8",
        url: "https://chat.whatsapp.com/HsXpz7z7Tz7DTjJOB99ys2",
        status: true,
      },
      {
        name: "Emprego Urgente SP - #9",
        url: "https://chat.whatsapp.com/Jxwz2YrFc5c4qXMWE6kQNw",
        status: true,
      },
      {
        name: "Emprego Urgente SP - #10",
        url: "https://chat.whatsapp.com/FcaWsurSOY6BCRATQVNJEb",
        status: true,
      },
      {
        name: "Emprego Urgente SP - #11",
        url: "https://chat.whatsapp.com/FdhBsge2jP74Aw6HaudDfr",
        status: true,
      },
      {
        name: "Emprego Urgente SP - #12",
        url: "https://chat.whatsapp.com/KjJkrzsJOvQ4RusLr2mQre",
        status: true,
      },
      {
        name: "Emprego Urgente SP - #13",
        url: "https://chat.whatsapp.com/IBNakA0N6xFIUhVpKJgEtE",
        status: true,
      },
    ],
    nicheGroups: [
      {
        name: "Vagas Adm &  Atend SP 1",
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
    payerId: 0,
    stateCode: AvailableStates.MG,
    mainGroups: [
      {
        name: "Emprego Urgente BH - #1",
        url: "https://chat.whatsapp.com/GAyfZlKAfmk006WxsLw5Ds",
        status: false,
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
        name: "Emprego Urgente BH - #5",
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
    payerId: 0,
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
