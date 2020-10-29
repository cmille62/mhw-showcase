import Axios from "axios";
import {
  BR_ENDPOINT,
  BR_USERNAME,
  BR_PASSWORD,
  BR_CUSTOMER,
} from "../../utils/constants";

export class BR {
  static token: string;

  static async authorize() {
    const response = await Axios.post(`${BR_ENDPOINT}-token-auth/`, {
      username: BR_USERNAME,
      password: BR_PASSWORD,
      customer: BR_CUSTOMER,
    });

    if (response.status !== 200) {
      //   throw new Error(`Error Logging into BR: ${response.data}.`);
      console.log("Count not log into BR");
    } else {
      console.log("Successfully logged into BR");
    }

    this.token = response.data.token;
  }

  static async getToken() {
    if (!this.token) {
      await this.authorize();
    }
    return this.token;
  }

  static async getHeader() {
    if (!this.token) {
      await this.authorize();
    }

    return {
      Authorization: "Token " + this.token,
    };
  }
}

export default BR;
