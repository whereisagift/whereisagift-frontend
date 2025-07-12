export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
};

export type AuthPayload = {
  auth_date: Scalars['Int']['input'];
  first_name: Scalars['String']['input'];
  hash: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  last_name?: InputMaybe<Scalars['String']['input']>;
  photo_url?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type Booking = {
  __typename?: 'Booking';
  date: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
};

export type CreateWishInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<PriceInput>;
  rate?: InputMaybe<Scalars['Int']['input']>;
  wishlistIds: Array<Scalars['ID']['input']>;
};

export type CreateWishlistInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  wishIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createWish: Wish;
  createWishlist?: Maybe<Wishlist>;
  deleteWish: Scalars['Boolean']['output'];
  login?: Maybe<User>;
  logout: Scalars['Boolean']['output'];
  updateWish: Wish;
};


export type MutationCreateWishArgs = {
  input: CreateWishInput;
};


export type MutationCreateWishlistArgs = {
  input: CreateWishlistInput;
};


export type MutationDeleteWishArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  authPayload: AuthPayload;
};


export type MutationUpdateWishArgs = {
  id: Scalars['ID']['input'];
  input: UpdateWishInput;
};

export type Price = {
  __typename?: 'Price';
  currency: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type PriceInput = {
  currency: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type Product = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price?: Maybe<Price>;
  type: ProductSource;
};

export enum ProductSource {
  Manual = 'Manual',
  Steam = 'Steam',
  Wildberries = 'Wildberries'
}

export type Query = {
  __typename?: 'Query';
  me: User;
  productByUrl: Product;
  user?: Maybe<User>;
  wish: Wish;
  wishes: Array<Wish>;
  wishlist: Wishlist;
  wishlists: Array<Wishlist>;
};


export type QueryProductByUrlArgs = {
  url: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWishArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWishlistArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateWishInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<PriceInput>;
  rate?: InputMaybe<Scalars['Int']['input']>;
  wishlistIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type User = {
  __typename?: 'User';
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  photoUrl?: Maybe<Scalars['String']['output']>;
  telegramId: Scalars['String']['output'];
  username: Scalars['String']['output'];
  wishes: Array<Wish>;
  wishlists: Array<Wishlist>;
};

export type Wish = {
  __typename?: 'Wish';
  createdAt: Scalars['DateTime']['output'];
  creator: User;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  img?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price?: Maybe<Price>;
  rate: Scalars['Int']['output'];
  type: ProductSource;
  updatedAt: Scalars['DateTime']['output'];
  wishlists: Array<Wishlist>;
};

export type Wishlist = {
  __typename?: 'Wishlist';
  creator: User;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  wishes: Array<Wish>;
};
