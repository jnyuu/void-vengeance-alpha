export interface shipCardType {
  sprite: string;
  name: string;
  size: "small" | "medium" | "large";
  classes: Array<"attack" | "tech" | "support" | "industrial">;
  description: string;
  startingAttackPoints: number;
  startingHullPoints: number;
  startingShieldPoints: number;
  attributes?: [
    {
      name: string;
      strength: number;
    }
  ];
}

export interface commandCardType {
  sprite: string;
  name: string;
  description: string;
  casterSizeRestrictions: Array<"small" | "medium" | "large">;
  casterClassRestrictions: Array<"attack" | "tech" | "support" | "industrial">;
  targetSizeRestrictions: Array<"small" | "medium" | "large">;
  targetClassRestrictions: Array<"attack" | "tech" | "support" | "industrial">;
}

export interface allCardsDataType {
  allShipCardsData: shipCardType[];
  allCommandCardsData: commandCardType[];
}
