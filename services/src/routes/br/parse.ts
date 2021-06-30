import { CategoryModel, ManufacturerModel, RawProductsType } from "../../db";
import { BrProductType } from "../../types";

/**
 * Parse through the BR API Document and format it as desired.
 * @param param0
 */
export async function parseDocument({
  description,
  part_number,
  upc,
  ...input
}: BrProductType): Promise<Partial<RawProductsType>> {
  const result: Partial<RawProductsType> = {
    description,
    sku: part_number,
    upc,
  };

  const category = await CategoryModel.findOne({ category: input.category });

  if (!category) {
    const category = await CategoryModel.findOne({
      conversion: { $in: [input.category] },
    });
    result.category = category.category;
  }

  if (!result.category) {
    result.category = input.category;
  }

  const parse = description.split(" ");

  const mfg = await ManufacturerModel.findOne({
    manufacturer: { $regex: parse[0], $options: "i" },
  });

  result.mfg = mfg.manufacturer;
  const spaces = result.mfg.match(/\s/g);
  if (spaces) {
    result.mfgSku = parse[spaces.length];
  } else {
    result.mfgSku = parse[1];
  }

  return result;
}
