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
};

export type AuthPayload = {
  auth_date: Scalars['Int']['input'];
  first_name: Scalars['String']['input'];
  hash: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  last_name: Scalars['String']['input'];
  photo_url: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Booking = {
  __typename?: 'Booking';
  date: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createWish?: Maybe<Wish>;
  createWishlist?: Maybe<Wishlist>;
  login?: Maybe<User>;
  logout: Scalars['Boolean']['output'];
};


export type MutationCreateWishArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateWishlistArgs = {
  name: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  authPayload: AuthPayload;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  user?: Maybe<User>;
  users: Array<User>;
  wishes?: Maybe<Array<Wish>>;
  wishlists?: Maybe<Array<Wishlist>>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  photoUrl: Scalars['String']['output'];
  telegramId: Scalars['String']['output'];
  username: Scalars['String']['output'];
  wishes?: Maybe<Array<Maybe<Wish>>>;
  wishlists?: Maybe<Array<Maybe<Wishlist>>>;
};

export type Wish = {
  __typename?: 'Wish';
  booking?: Maybe<Booking>;
  creator: User;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  orderDate?: Maybe<Scalars['String']['output']>;
  pictureUrl?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  wishlists?: Maybe<Array<Maybe<Wishlist>>>;
};

export type Wishlist = {
  __typename?: 'Wishlist';
  creator: User;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  wishes?: Maybe<Array<Wish>>;
};
