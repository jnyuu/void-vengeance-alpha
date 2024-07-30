import { allCardsDataType } from "../types/card.types";

export const allCardsData: allCardsDataType = {
  allShipCardsData: [
    {
      sprite: "Frigate X0-1 Sprite",
      name: "Frigate X0-1",
      size: "small",
      classes: ["attack"],
      description: "basic Frigate",
      startingAttackPoints: 2,
      startingHullPoints: 2,
      startingShieldPoints: 2,
    },
    {
      sprite: "Frigate Y0-1 Sprite",
      name: "Frigate Y0-1",
      size: "medium",
      classes: ["attack"],
      description: "basic Frigate",
      startingAttackPoints: 4,
      startingHullPoints: 4,
      startingShieldPoints: 4,
    },
  ],
  allCommandCardsData: [
    {
      sprite: "Barrage small Sprite",
      name: "Barrage small",
      description: "fire a barrage from the cannons",
      casterSizeRestrictions: ["small"],
      casterClassRestrictions: ["attack"],
      targetSizeRestrictions: ["small"],
      targetClassRestrictions: ["attack"],
    },
  ],
};
