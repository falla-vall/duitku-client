import { HttpClient } from "@duitku/common/http-client";
import apiConfig from "@duitku/configs/api.config";
import { Signature, combineUrl, currentDate } from "@duitku/utils";

import type {
  DuitkuClientOptions,
  PaymentMethodResponse,
  RequestTransactionPayload,
  RequestTransactionResponse,
} from "@duitku/types/duitku-client.type";

/**
 * @module DuitkuClient
 * @description Duitku Client
 *
 */
export class DuitkuClient {
  apiKey: string;
  merchantCode: string;
  sandbox: boolean;
  httpClient: HttpClient;
  options?: DuitkuClientOptions;
  /**
   * @param {string} apiKey - API Key
   * @param {string} merchantCode - Merchant Code
   * @param {Object} options - Options
   *
   */
  constructor(
    apiKey: string,
    merchantCode: string,
    options?: DuitkuClientOptions,
  ) {
    this.apiKey = apiKey;
    this.merchantCode = merchantCode;
    this.options = options;
    this.sandbox = options?.sandbox || false;
    this.httpClient = new HttpClient();
  }

  /**
   * @function getPaymentMethods
   * @description Get Payment Methods
   * @constructor
   * @param {number} amount - Amount
   *
   */
  async getPaymentMethods(amount: number) {
    const url = combineUrl(
      apiConfig({ sandbox: this.sandbox }).baseApiUrl,
      "paymentmethod/getpaymentmethod",
    );
    const datetime = currentDate();
    const signature = new Signature(
      `${this.merchantCode}${amount}${datetime}${this.apiKey}`,
    ).sha256();
    const payload = {
      merchantcode: this.merchantCode,
      amount,
      datetime,
      signature,
    };
    const { data } = await this.httpClient.post(url, payload);
    return data.paymentFee as PaymentMethodResponse[];
  }

  async requestTransaction(_payload: RequestTransactionPayload) {
    const url = combineUrl(
      apiConfig({ sandbox: this.sandbox }).baseApiUrl,
      "v2/inquiry",
    );
    const signature = new Signature(
      `${this.merchantCode}${_payload.merchantOrderId}${_payload.paymentAmount}${this.apiKey}`,
    ).md5();
    const payload = {
      merchantCode: this.merchantCode,
      signature,
      ..._payload,
    };
    const { data } = await this.httpClient.post(url, payload);
    return data as RequestTransactionResponse;
  }
}
