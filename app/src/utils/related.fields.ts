import { FieldType, FIELD_INPUT } from "../typings";

const generic: FieldType[] = [
  { title: "SKU", key: "sku", path: "sku", required: true },
  { title: "MFG Part Number", key: "mfgSku", path: "mfgSku" },
  { title: "UPC", key: "upc", path: "upc" },
  { title: "Title", key: "title", path: "title" },
  {
    title: "Category",
    key: "category",
    path: "category",
    type: FIELD_INPUT.Lookup,
    required: true,
  },
  {
    title: "Manufacturer",
    key: "manufacturer",
    type: FIELD_INPUT.Lookup,
    path: "mfg",
  },
  {
    title: "Description",
    key: "description",
    path: "description",
    type: FIELD_INPUT.Textarea,
    required: true,
  },
];

const firearmFields: FieldType[] = [
  { title: "Model", key: "model", path: "model" },
  { title: "Finish", key: "finish", path: "attributes.finish" },
];

const safetyFields: FieldType[] = [
  {
    title: "Safety",
    key: "safety",
    type: FIELD_INPUT.Lookup,
    path: "attributes.safety",
  },
];

const barreledFields: FieldType[] = [
  {
    title: "Barrel Length",
    key: "barrelLength",
    path: "attributes.barrel.length",
  },
  { title: "Front Sight", key: "frontSight", path: "attributes.sight.front" },
  { title: "Rear Sight", key: "rearSight", path: "attributes.sight.rear" },
  { title: "Rear Optic", key: "rearSight", path: "attributes.sight.optic" },
  {
    title: "Caliber",
    key: "caliber",
    type: FIELD_INPUT.Lookup,
    path: "attributes.barrel.caliber",
  },
];

const magazineField: FieldType[] = [
  {
    title: "Magazine Capacity",
    key: "magazineCapacity",
    path: "attributes.magazine.capacity",
  },
  {
    title: "Magazine Qty",
    key: "magazineQty",
    path: "attributes.magazine.qty",
  },
];

const tacticalField: FieldType[] = [
  { title: "Rail", key: "rail", path: "rail", type: "boolean" },
  {
    title: "Thread Pitch",
    key: "threadPitch",
    path: "attributes.barrel.threaded",
    type: "boolean",
  },
  {
    title: "Thread Pitch",
    key: "threadPitch",
    path: "attributes.barrel.pitch",
  },
  {
    title: "Muzzle Device",
    key: "muzzleDevice",
    path: "attributes.barrel.device",
  },
];

export const fields: Record<string, FieldType[]> = {
  generic,
  firearmFields,
  barreledFields,
  magazineField,
  tacticalField,
};

export const fetchFields = (type?: string) => {
  switch (type) {
    case "Rifle":
    case "Handgun":
      return [
        ...generic,
        ...firearmFields,
        ...barreledFields,
        ...magazineField,
        ...tacticalField,
        ...safetyFields,
      ];
  }

  return [];
};
