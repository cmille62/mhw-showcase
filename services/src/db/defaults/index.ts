import { ActionDefaults } from "./action.default";
import { CaliberDefaults } from "./caliber.defaults";
import { CategoryDefaults } from "./category.defaults";
import { ManufacturerDefaults } from "./manufacturer.defaults";
import { SafetyDefaults } from "./safety.defaults";

export const DEFAULTS: { [key: string]: any[] } = {
  action: ActionDefaults,
  caliber: CaliberDefaults,
  category: CategoryDefaults,
  manufacturer: ManufacturerDefaults,
  safety: SafetyDefaults,
};
