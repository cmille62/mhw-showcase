import { RawProductsType } from "../../db";
import { BrProductType } from "../../types";
import { parseDocument } from "./parse";

jest.mock("../../db", () => {
  return {
    CategoryModel: {
      findOne: jest.fn(),
    },
    ManufacturerModel: {
      findOne: jest.fn(),
    },
  };
});

const makeBRDocument = (override?: Partial<BrProductType>): BrProductType => {
  override = override || {};
  return {
    category: "",
    description: "",
    item_status: "",
    min_quantity: 0,
    part_number: "",
    quantity: 0,
    shippable: false,
    spl_price: 0,
    unit_price: 0,
    upc: "",
    ...override,
  };
};

describe("Helper Function: Parse Document", () => {
  it("Should handle document with little information.", async () => {
    // CategoryModel.mockReturnValue(() => {
    //     findOne: () => { return { category: "Handgun" } }
    // });
    // ManufacturerModel.mock

    const document: BrProductType = makeBRDocument();
    const expected: Partial<RawProductsType> = {
      category: "Handgun",
    };

    const result = await parseDocument(document);
    expect(result).toEqual(expected);
  });
});
