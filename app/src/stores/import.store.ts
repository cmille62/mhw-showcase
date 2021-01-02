import { observable, action, makeObservable } from "mobx";
import { Import } from "../typings";

export class ImportStore {
  constructor() {
    makeObservable(this, {
      preview: observable,
      setPreview: action,
    });
  }

  public preview: Import = {
    data: [{}, {}, {}, {}],
  };

  public setPreview = (updated: Import) => {
    this.preview = updated;
  };
}
