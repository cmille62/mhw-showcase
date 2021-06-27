import Axios from "axios";
import {
  REST,
  BR_ENDPOINT,
  BR_USERNAME,
  BR_PASSWORD,
  BR_CUSTOMER,
} from "../../utils";

export class BR {
  static token: string;

  static async authorize(): Promise<void> {
    const response = await Axios.post(`${BR_ENDPOINT}-token-auth/`, {
      username: BR_USERNAME,
      password: BR_PASSWORD,
      customer: BR_CUSTOMER,
    });

    if (response.status !== REST.OK) {
      //   throw new Error(`Error Logging into BR: ${response.data}.`);
      console.log("Count not log into BR");
    } else {
      console.log("Successfully logged into BR");
    }

    this.token = response.data.token;
  }

  static async getToken(): Promise<string> {
    if (!this.token) {
      await this.authorize();
    }
    return this.token;
  }

  static async getHeader(): Promise<any> {
    if (!this.token) {
      await this.authorize();
    }

    return {
      Authorization: "Token " + this.token,
    };
  }
}
