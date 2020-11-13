import { observable, action } from "mobx";
import { Import } from "../typings";

export class ImportStore {
  @observable public preview: Import = {
    data: [{}, {}, {}, {}],
  };

  @action public setPreview = (updated: Import) => {
    this.preview = updated;
  };
}
