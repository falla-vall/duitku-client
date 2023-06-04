export interface DuitkuClientOptions {
  sandbox?: boolean;
}

export interface PaymentMethodResponse {
  paymentMethod: string;
  paymentName: string;
  paymentImage: string;
  totalFee: string;
}

export interface RequestTransactionResponse {
  merchantCode: string;
  reference: string;
  paymentUrl: string;
  vaNumber: string;
  amount: string;
  statusCode: string;
  statusMessage: string;
}

export interface CheckTransactionResponse {
  merchantOrderId: string;
  reference: string;
  amount: string;
  statusCode: "00" | "01" | "02";
  statusMessage: string;
}

export interface Address {
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  phone?: string;
  countryCode?: string;
}

export interface ItemDetail {
  name: string;
  quantity: number;
  price: number;
}

export interface CustomerDetail {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  billingAddress?: Address;
  shippingAddress?: Address;
}

export interface OVO {
  paymentDetails: {
    paymentType: string;
    amount: number;
  }[];
}

export interface Shopee {
  promo_ids: string;
  useCoin: boolean;
}

export interface AccountLink {
  credentialCode: string;
  ovo: OVO;
  shopee: Shopee;
}

export interface CreditCardDetail {
  acquirer: string;
  binWhitelist?: string[];
}

export interface RequestTransactionPayload {
  paymentAmount: number;
  merchantOrderId: string;
  productDetails: string;
  email: string;
  additionalParam?: Record<string, any>;
  paymentMethod: string;
  merchantUserInfo?: string;
  customerVaName: string;
  phoneNumber?: string;
  itemDetails: ItemDetail[];
  customerDetail?: CustomerDetail;
  returnUrl: string;
  callbackUrl: string;
  expiryPeriod?: number;
  accountLink?: AccountLink;
  creditCardDetail?: CreditCardDetail;
}
