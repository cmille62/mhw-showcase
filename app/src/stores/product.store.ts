import { observable, action, makeObservable, runInAction } from "mobx";
import { Product } from "../typings";
import { ProductAPI } from "../services";

type ProductAPI = typeof ProductAPI;

export class ProductStore {
  products: Product[];
  count = 0;
  selected?: Product;

  error?: string;

  constructor() {
    makeObservable(this, {
      products: observable,
      selected: observable,
      count: observable,
      get: action,
      select: action,
      clear: action,
      save: action,
    });

    this.products = [{}, {}, {}, {}] as Product[];
    this.get();
  }

  public async get(query?: { [key: string]: string | number }) {
    const response = await ProductAPI.getAll(query as any);
    this.getCount((query?.query as string) || "");
    if (response.status === 200) {
      if (this.error) {
        this.error = undefined;
      }
      console.log(response);
      if (response.data) {
        this.products = response.data;
      }
    } else {
      this.error = "Fail";
    }
  }

  public async getCount(query: string) {
    const response = await ProductAPI.getCount(query);

    runInAction(() => {
      this.count = response.data?.qty || 0;
    });
  }

  public async getBy(value: string, type: string) {
    return await ProductAPI.getBy(value, type);
  }

  public select(product: Product) {
    this.selected = product;
  }

  public clear() {
    this.selected = undefined;
  }

  public async save() {
    if (this.selected) {
      const response = await ProductAPI.update(this.selected);

      console.log(response);
    }
  }
}
