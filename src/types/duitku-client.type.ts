export interface DuitkuClientOptions {
  sandbox?: boolean;
}

export interface PaymentMethod {
  paymentMethod: string;
  paymentName: string;
  paymentImage: string;
  totalFee: string;
}
