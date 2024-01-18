export interface IAccounts {
  accountId: number;
  email: string;
  authToken: string;
  creationDate: Date | number | string;
  profiles: IProfile[];
}

export interface IProfile {
  profileId: number;
  country: string;
  marketplace: string;
  campings: ICampaign[];
}

export interface ICampaign {
  campaignId: number;
  clicks: number;
  cost: number;
  date: Date;
}

export const data: IAccounts[] = [
  {
    accountId: 0,
    email: "test@gmail.com",
    authToken: "asdcasd",
    creationDate: new Date(2023, 12, 16),
    profiles: [
      {
        profileId: 0,
        country: "UA",
        marketplace: "rozetka",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
        ],
      },
      {
        profileId: 1,
        country: "US",
        marketplace: "amazon",
        campings: [
          {
            campaignId: 1,
            clicks: 20,
            cost: 2000,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 2,
        country: "UA",
        marketplace: "prom",
        campings: [
          {
            campaignId: 2,
            clicks: 20,
            cost: 3000,
            date: new Date(2024, 1, 1),
          },
        ],
      },
    ],
  },
  {
    accountId: 1,
    email: "anewTest@gmail.com",
    authToken: "bdckv3",
    creationDate: new Date(1995, 10, 1),
    profiles: [
      {
        profileId: 0,
        country: "UK",
        marketplace: "Uk market",
        campings: [
          {
            campaignId: 0,
            clicks: 45,
            cost: 7000,
            date: new Date(2022, 11, 16),
          },
        ],
      },
      {
        profileId: 1,
        country: "US",
        marketplace: "Us makret",
        campings: [
          {
            campaignId: 1,
            clicks: 20,
            cost: 2000,
            date: new Date(2022, 11, 17),
          },
        ],
      },
      {
        profileId: 2,
        country: "UA",
        marketplace: "Ua market",
        campings: [
          {
            campaignId: 2,
            clicks: 60,
            cost: 3600,
            date: new Date(2022, 1, 1),
          },
        ],
      },
    ],
  },
];

export const testdata: IAccounts[] = [
  {
    accountId: 1,
    email: "aroskam0@php.net",
    authToken: "adsfvasdv",
    creationDate: "1697437135000",
    profiles: [
      {
        profileId: 1,
        country: "France",
        marketplace: "Asian openbill",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 2,
        country: "Indonesia",
        marketplace: "Common waterbuck",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 3,
        country: "Afghanistan",
        marketplace: "Cat, ringtail",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 4,
        country: "Croatia",
        marketplace: "Rhinoceros, white",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 5,
        country: "Brazil",
        marketplace: "Black kite",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
    ],
  },
  {
    accountId: 2,
    email: "jdumbar1@nydailynews.com",
    authToken: "hadfheth",
    creationDate: "1690351616000",
    profiles: [
      {
        profileId: 1,
        country: "France",
        marketplace: "Asian openbill",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 2,
        country: "Indonesia",
        marketplace: "Common waterbuck",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 3,
        country: "Afghanistan",
        marketplace: "Cat, ringtail",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 4,
        country: "Croatia",
        marketplace: "Rhinoceros, white",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 5,
        country: "Brazil",
        marketplace: "Black kite",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
    ],
  },
  {
    accountId: 3,
    email: "wbertram2@nsw.gov.au",
    authToken: "bhashdbasd",
    creationDate: "1675960086000",
    profiles: [
      {
        profileId: 1,
        country: "France",
        marketplace: "Asian openbill",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 2,
        country: "Indonesia",
        marketplace: "Common waterbuck",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 3,
        country: "Afghanistan",
        marketplace: "Cat, ringtail",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 4,
        country: "Croatia",
        marketplace: "Rhinoceros, white",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 5,
        country: "Brazil",
        marketplace: "Black kite",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
    ],
  },
  {
    accountId: 4,
    email: "crottenbury3@vk.com",
    authToken: "ghayusieha",
    creationDate: "1678027852000",
    profiles: [
      {
        profileId: 1,
        country: "France",
        marketplace: "Asian openbill",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 2,
        country: "Indonesia",
        marketplace: "Common waterbuck",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 3,
        country: "Afghanistan",
        marketplace: "Cat, ringtail",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 4,
        country: "Croatia",
        marketplace: "Rhinoceros, white",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 5,
        country: "Brazil",
        marketplace: "Black kite",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
    ],
  },
  {
    accountId: 5,
    email: "jsaffin4@answers.com",
    authToken: "0wtwerkger",
    creationDate: "1689413251000",
    profiles: [
      {
        profileId: 1,
        country: "France",
        marketplace: "Asian openbill",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 2,
        country: "Indonesia",
        marketplace: "Common waterbuck",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 3,
        country: "Afghanistan",
        marketplace: "Cat, ringtail",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 4,
        country: "Croatia",
        marketplace: "Rhinoceros, white",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
      {
        profileId: 5,
        country: "Brazil",
        marketplace: "Black kite",
        campings: [
          {
            campaignId: 0,
            clicks: 10,
            cost: 1000,
            date: new Date(2023, 11, 16),
          },
          {
            campaignId: 1,
            clicks: 14,
            cost: 1030,
            date: new Date(2023, 11, 18),
          },
          {
            campaignId: 2,
            clicks: 70,
            cost: 10040,
            date: new Date(2023, 11, 17),
          },
        ],
      },
    ],
  },
];
