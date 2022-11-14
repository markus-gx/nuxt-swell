import {
  Address,
  AddressWithContact, Cart,
  CartInput,
  CartOption,
  CreateAccountInput, ListResult, Order,
  Product,
  Query,
  SearchQuery
} from 'swell-js'

/**
 * Override namepsace swell to make composables typed.
 */
export interface Swell{
  account: {
    create(input: CreateAccountInput): Promise<unknown>,
    createAddress(input: AddressWithContact): Promise<AddressWithContact>,
    createCard(input: object): Promise<unknown>,
    deleteAddress(id: string): Promise<unknown>,
    deleteCard(id: string): Promise<unknown>,
    get(): Promise<unknown>,
    getAddresses({}): Promise<unknown>,
    getOrder(id?: string): Promise<unknown>,
    listAddresses(): Promise<ListResult<unknown>>,
    listCards(): Promise<ListResult<unknown>>,
    listOrders(input: object): Promise<ListResult<unknown>>,
    login(user: string, password: string): Promise<unknown>,
    logout(): Promise<unknown>,
    recover(input: object): Promise<unknown>,
    update(input: object): Promise<unknown>,
    updateCard(input: object): Promise<unknown>,
    updateAddress(id: string, data: Address): Promise<AddressWithContact>,
  }
  attributes: {
    get(input: string): Promise<unknown>
    list(input: object): Promise<ListResult<unknown>>
  },
  card: {
    createToken(input: object): Promise<unknown>,
    validateCVC(input: string): boolean,
    validateExpiry(input: string): boolean,
    validateNumber(input: string): boolean,
  },
  cart: {
    addItem(input: CartInput): Promise<Cart>,
    applyCoupon(input: string): Promise<Cart>,
    applyGiftcard(input: string): Promise<Cart>,
    get(): Promise<Cart>,
    getSettings(): Promise<unknown>,
    removeCoupon(): Promise<Cart>,
    removeGiftcard(itemId: string): Promise<Cart>,
    removeItem(itemId: string): Promise<Cart>,
    setItems(input: CartInput[]): Promise<Cart>,
    submitOrder(): Promise<Order>,
    update(input: any): Promise<Cart>,
    updateItem(itemId: string, input: any): Promise<Cart>,
  },
  categories: {
    get(input: string): Promise<unknown>,
    list(input: object): Promise<ListResult<unknown>>,
  },
  currency: {
    format(input: number, format: object): string,
    list(): Promise<ListResult<unknown>>,
    select(input: string): Promise<unknown>,
    selected(): Promise<string>,
  },
  locale: {
    selected(): Promise<string>,
    select(locale: string): Promise<unknown>,
  },
  payment: {
    createElements(input: object): Promise<unknown>,
    tokenize(input: object): void,
  },
  products: {
    get(productId: string): Promise<Product>,
    list(input: Query | SearchQuery): Promise<ListResult<Product>>,
    variation(productId: string, options: CartOption): Promise<Product>,
  },
  settings: {
    get(): Promise<unknown>,
    load(): Promise<unknown>,
    menus(input?: string): Promise<unknown>,
    payments(): Promise<unknown>,
  },
  subscriptions: {
    addItem(id: string, input: object): Promise<unknown>
    create(input: object): Promise<unknown>
    get(id: string): Promise<unknown>
    list(): Promise<ListResult<unknown>>
    removeItem(id: string, itemId: string): Promise<unknown>
    update(id: string, input: object): Promise<unknown>
    updateItem(id: string, itemId: string, input: any): Promise<unknown>
  }
}
