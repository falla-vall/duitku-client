import CryptoJS from "crypto-js";
import { DateTime } from "luxon";

export class Signature {
  constructor(private text: string) {}

  sha256() {
    return CryptoJS.SHA256(this.text).toString(CryptoJS.enc.Hex);
  }

  md5() {
    return CryptoJS.MD5(this.text).toString(CryptoJS.enc.Hex);
  }
}

export const combineUrl = (baseUrl: string, path: string) => {
  return `${baseUrl}/${path}`;
};

export const currentDate = () => {
  return DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss");
};
