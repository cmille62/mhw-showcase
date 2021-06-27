export type FirearmActionType =
  | "Bolt Action"
  | "Double / Single Action"
  | "Double Action Only"
  | "Lever Action"
  | "Over / Under"
  | "Pump Action"
  | "Semi-Auto"
  | "Side By Side"
  | "Single Action"
  | "Single Shot";

export const FIREARM_ACTIONS: FirearmActionType[] = [
  "Bolt Action",
  "Double / Single Action",
  "Double Action Only",
  "Lever Action",
  "Over / Under",
  "Pump Action",
  "Semi-Auto",
  "Side By Side",
  "Single Action",
  "Single Shot",
];

export type CategoryType =
  | "Handgun"
  | "Rifle"
  | "Shotgun"
  | "Revolver"
  | "Receiver"
  | "Suppressor"
  | "Other NFA";

export const CATEGORY_TYPE: CategoryType[] = [
  "Handgun",
  "Rifle",
  "Shotgun",
  "Revolver",
  "Receiver",
  "Suppressor",
  "Other NFA",
];
