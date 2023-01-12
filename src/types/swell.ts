import { Account, Address, PasswordTokenInput } from 'swell-js/types/account'
import { Card, InputCreateToken, TokenResponse } from 'swell-js/types/card'
import { Order } from 'swell-js/types/order'
import { Attribute } from 'swell-js/types/attribute'
import { Cart, CartItem } from 'swell-js/types/cart'
import { Settings } from 'swell-js/types/settings'
import { Category } from 'swell-js/types/category'
import { EnabledCurrency, FormatInput, SelectCurrencyReturn } from 'swell-js/types/currency'
import { Locale } from 'swell-js/types/locale'
import {
  InputPaymentElementCard,
  InputPaymentElementIdeal,
  InputPaymentElementPaypal, InputPaymentRedirect,
  Payment
} from 'swell-js/types/payment'
import { FlexibleProductInput, PriceRange, Product } from 'swell-js/types/product'
import { Subscription } from 'swell-js/types/subscription'
import { InitOptions, ResultsResponse } from './swell-extended'

export interface Swell {
  init (storeId: string, publicKey: string, options?: InitOptions): void

  get (url: string, query: object): Promise<unknown>

  put (url: string, query: object): Promise<unknown>

  post (url: string, query: object): Promise<unknown>

  account: {
    create (input: Account): Promise<Account>;
    createAddress (input: Address): Promise<Address>;
    createCard (input: Card): Promise<Card>;
    deleteAddress (id: string): Promise<Address>;
    deleteCard (id: string): Promise<Card>;
    get (): Promise<Account>;
    getAddresses (input: object): Promise<Address>;
    getCards (input: object): Promise<Card[]>;
    getOrder (id: string): Promise<Order>;
    getOrders (): ResultsResponse<Promise<Order>>;
    listAddresses (): Promise<Address[]>;
    listCards (): Promise<Card[]>;
    listOrders (input?: object): ResultsResponse<Promise<Order>>;
    login (
      user: string,
      password: string | PasswordTokenInput,
    ): Promise<Account | null>;
    logout (): Promise<unknown>;
    recover (input: object): Promise<Account>;
    update (input: Account): Promise<Account>;
    updateAddress (id: string, input: Address): Promise<Address>;
  }
  attributes: {
    get (input: string): Promise<Attribute>;
    list (input?: object): Promise<ResultsResponse<Attribute>>;
    get (): Promise<ResultsResponse<Attribute>>;
  }
  card: {
    createToken (input: InputCreateToken): Promise<TokenResponse>;
    validateCVC (input: string): boolean;
    validateExpiry (input: string): boolean;
    validateNumber (input: string): boolean;
  }
  cart: {
    addItem (input: CartItem): Promise<Cart>;
    get (input?: string): Promise<Cart | null>;
    getSettings (): Promise<Settings>;
    getShippingRates (): Promise<object>; // TODO: add shipping Rate object
    removeItem (input: string): Promise<Cart>;
    recover (input: string): Promise<Cart>;
    setItems (input: [CartItem]): Promise<Cart>;
    updateItem (id: string, input: CartItem): Promise<Cart>;
    update (input: object): Promise<Cart>;
  }
  categories: {
    get (input: string): Promise<Category>;
    list (input?: object): Promise<ResultsResponse<Category>>;
    get (): Promise<ResultsResponse<Category>>;
  }
  currency: {
    format (input: number, format: FormatInput): string;
    list (): Promise<Array<EnabledCurrency>>;
    select (input: string): Promise<SelectCurrencyReturn>;
    selected (): Promise<string>;
  }
  locale: {
    get (): Promise<Locale>;
    list (): Promise<Array<Locale>>;
    selected (): Promise<string>;
    select (locale: string): Promise<{ locale: string }>;
    set (code: string): Promise<Locale>;
  }
  payment: {
    authenticate (id: string): Promise<unknown>;
    authorizeGateway (input: object): Promise<unknown>;
    createElements (input: {
      card?: InputPaymentElementCard;
      paypal?: InputPaymentElementPaypal;
      ideal?: InputPaymentElementIdeal;
    }): Promise<unknown>;
    createIntent (input: {
      gateway: string;
      intent: object;
    }): Promise<unknown>;
    get (input: string): Promise<Payment>;
    handleRedirect (input: {
      card?: InputPaymentRedirect;
      paysafecard?: InputPaymentRedirect;
      klarna?: InputPaymentRedirect;
    }): Promise<unknown>;
    tokenize (input: {
      card?: object;
      ideal?: object;
      klarna?: object;
      bancontact?: object;
      paysafecard?: object;
    }): Promise<unknown>;
    updateIntent (input: {
      gateway: string;
      intent: object;
    }): Promise<unknown>;
  }
  products: {
    categories (
      products: FlexibleProductInput,
    ): Promise<ResultsResponse<Category>>;
    filters (products: FlexibleProductInput): Promise<object[]>;
    filterableAttributeFilters (
      products: Array<Product>,
      options?: object,
    ): Array<Attribute>;
    get (id: string, input?: object): Promise<Product>;
    list (input?: object): Promise<ResultsResponse<Product>>;
    priceRange (product: FlexibleProductInput): PriceRange;
    variation (product: Product, options: object): Promise<Product>;
  }
  settings: {
    get (
      id?: string,
      def?: string | number | Settings,
    ): Promise<Settings>;
    getCurrentLocale (): Promise<string>;
    getStoreLocale (): Promise<string>;
    getStoreLocales (): Promise<Array<string>>;
    load (): Promise<Settings> | null;
    menus (input?: string): Promise<Settings>;
    payments (
      id?: string,
      def?: string | number | Settings,
    ): Promise<Settings>;
    subscriptions (
      id?: string,
      def?: string | number | Settings,
    ): Promise<Settings>;
    session (
      id?: string,
      def?: string | number | Settings,
    ): Promise<Settings>;
  }
  subscriptions: {
    addItem (id: string, input: object): Promise<Subscription>;
    create (input: object): Promise<Subscription>;
    get (id: string): Promise<Subscription>;
    list (): Promise<ResultsResponse<Subscription>>;
    removeItem (id: string, itemId: string): Promise<unknown>;
    update (id: string, input: object): Promise<Subscription>;
    updateItem (
      id: string,
      itemId: string,
      input: any,
    ): Promise<Subscription>;
  }
}
