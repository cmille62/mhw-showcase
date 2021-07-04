import { RawSafetyType } from "../index";

export const SafetyDefaults: RawSafetyType[] = [
  {
    safety: "No Manual Safety",
    conversion: [],
  },
  {
    safety: "Manual Safety",
    conversion: [
      "Thumb Safety",
      "Pivot Safety",
      "Cross-Bolt Safety",
      "Tang Safety",
    ],
  },
  {
    safety: "Ambidextrous Manual Safety",
    conversion: [],
  },
  {
    safety: "Trigger Safety",
    conversion: [],
  },
  {
    safety: "Backstrap Safety",
    conversion: ["Grip Safety"],
  },
  {
    safety: "Magazine Disconnect",
    conversion: [],
  },
  {
    safety: "Magazine Disconnect",
    conversion: [],
  },
  {
    safety: "Half-Cock",
    conversion: ["Hammer Safety"],
  },
];
