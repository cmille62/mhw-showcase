import { FieldType } from "../typings/fields";

const generic: FieldType[] = [
  { title: "SKU", key: "sku", path: "sku" },
  { title: "MFG Part Number", key: "mfgSku", path: "mfgSku" },
  { title: "UPC", key: "upc", path: "upc" },
  { title: "Title", key: "title", path: "title" },
  { title: "Category", key: "category", path: "category" },
  { title: "Manufacturer", key: "manufacturer", path: "mfg" },
  {
    title: "Description",
    key: "description",
    path: "description",
    type: "textarea",
  },
];

const firearmFields: FieldType[] = [
  { title: "Model", key: "model", path: "model" },
  { title: "Finish", key: "finish", path: "finish" },
  { title: "Capacity", key: "capacity", path: "capacity" },
];

const barreledFields: FieldType[] = [
  { title: "Barrel Length", key: "barrelLength", path: "barrel.length" },
  { title: "Front Sight", key: "frontSight", path: "sight.front" },
  { title: "Rear Sight", key: "rearSight", path: "sight.rear" },
  { title: "Rear Optic", key: "rearSight", path: "sight.optic" },
  { title: "Caliber", key: "caliber", path: "barrel.caliber" },
];

const magazineField: FieldType[] = [
  {
    title: "Magazine Capacity",
    key: "magazineCapacity",
    path: "magazine.capacity",
  },
  { title: "Magazine Qty", key: "magazineQty", path: "magazine.qty" },
];

const tacticalField: FieldType[] = [
  { title: "Rail", key: "rail", path: "rail", type: "boolean" },
  {
    title: "Thread Pitch",
    key: "threadPitch",
    path: "barrel.threaded",
    type: "boolean",
  },
  { title: "Thread Pitch", key: "threadPitch", path: "barrel.pitch" },
  { title: "Muzzle Device", key: "muzzleDevice", path: "barrel.device" },
];

export const fields: Record<string, FieldType[]> = {
  generic,
  firearmFields,
  barreledFields,
  magazineField,
  tacticalField,
};

export const fetchFields = (type: string) => {
  switch (type) {
    case "Rifle":
    case "Handgun":
      return [
        ...generic,
        ...firearmFields,
        ...barreledFields,
        ...magazineField,
        ...tacticalField,
      ];
  }

  return [];
};
