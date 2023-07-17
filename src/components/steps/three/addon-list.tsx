export type Addon = {
  id: number;
  title: string;
  description: string;
  price: {
    monthly: {
      price: number;
    };
    yearly: {
      price: number;
    };
  };
};

export const addonList: Addon[] = [
  {
    id: 1,
    title: "Online service",
    description: "Access to multiplayer games",
    price: {
      monthly: {
        price: 1,
      },
      yearly: {
        price: 10,
      },
    },
  },
  {
    id: 2,
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: {
      monthly: {
        price: 2,
      },
      yearly: {
        price: 20,
      },
    },
  },
  {
    id: 3,
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: {
      monthly: {
        price: 12,
      },
      yearly: {
        price: 120,
      },
    },
  },
];
