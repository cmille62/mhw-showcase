import { observable, action, makeObservable } from "mobx";
import { CollectionAPI } from "../services";

export class CollectionStore {
  constructor() {
    makeObservable(this, {
      lookup: observable,
      fetch: action,
    });
  }

  public fetch = async (collection: string, path?: string) => {
    if (!this.lookup[collection]?.length) {
      const result = await CollectionAPI.distinct(
        collection,
        path || collection
      );
      this.lookup[collection] = result.data;
    }

    return this.lookup[collection] || [];
  };

  public lookup: Record<string, any> = {};
}
