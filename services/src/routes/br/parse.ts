import { CategoryModel, ManufacturerModel, RawProductsType } from "../../db";
import { BrProductType } from "../../types";
import { trimNumber, trimWhitespace } from "../../utils";

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
    attributes: {},
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
    result.model = parse[spaces.length + 1];
  } else {
    result.mfgSku = parse[1];
    result.model = parse[2];
  }

  const comma = description.split(",");
  result.attributes.barrel = { caliber: "", length: trimNumber(comma[1]) };
  result.attributes.finish = comma[2];

  return trimWhitespace(result);
}
