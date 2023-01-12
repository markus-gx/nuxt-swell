import { CardCamel } from 'swell-js/types/card/camel'
import { Order } from 'swell-js/types/order'
import { Subscription } from 'swell-js/types/subscription'
import { AccountCamel } from 'swell-js/types/account/camel'
import { AddressSnake } from 'swell-js/types/account/snake'

export interface BaseModel {
  date_created?: string;
  date_updated?: string;
  id?: string;
}

export interface InitOptions {
  currency?: string;
  key?: string;
  locale?: string;
  previewContent?: boolean;
  session?: string;
  store?: string;
  timeout?: number;
  useCamelCase?: boolean;
  URL?: string;
  vaultUrl?: string;
}

export interface Query {
  limit?: number;
  page?: number;
  expand?: string[];
}

export interface ProductQuery extends Query {
  category?: string;
  categories?: string[];
  $filters?: unknown;
}

export interface SearchQuery extends Query {
  search: string;
}

export interface ResultsResponse<T> {
  count: number;
  page: number;
  pages?: {
    [index: number]: {
      start: number;
      end: number;
    };
  };
  results: Array<T>;
}
