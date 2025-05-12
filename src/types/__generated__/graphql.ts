/* eslint-disable */
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

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  createWish?: Maybe<Wish>;
  createWishlist?: Maybe<Wishlist>;
};


export type MutationCreateUserArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateWishArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateWishlistArgs = {
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<User>;
  wishes?: Maybe<Array<Maybe<Wish>>>;
  wishlists?: Maybe<Array<Maybe<Wishlist>>>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  wishes?: Maybe<Array<Maybe<Wish>>>;
  wishlists?: Maybe<Array<Maybe<Wishlist>>>;
};

export type Wish = {
  __typename?: 'Wish';
  creator: User;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  wishlist?: Maybe<Wishlist>;
};

export type Wishlist = {
  __typename?: 'Wishlist';
  creator: User;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  wishes?: Maybe<Array<Maybe<Wish>>>;
};
