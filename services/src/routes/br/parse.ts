import { CategoryModel, RawProductsType } from "../../db";
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

  result.mfg = parse[0];
  result.mfgSku = parse[1];

  return result;
}
