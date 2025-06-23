import * as Types from '@/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type WishlistsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type WishlistsQuery = { __typename?: 'Query', wishlists: Array<{ __typename?: 'Wishlist', id: string, name: string, description?: string | null, creator: { __typename?: 'User', firstName: string, id: string, lastName?: string | null } }> };


export const WishlistsDocument = gql`
    query Wishlists {
  wishlists {
    id
    name
    description
    creator {
      firstName
      id
      lastName
    }
  }
}
    `;

/**
 * __useWishlistsQuery__
 *
 * To run a query within a React component, call `useWishlistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWishlistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWishlistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useWishlistsQuery(baseOptions?: Apollo.QueryHookOptions<WishlistsQuery, WishlistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WishlistsQuery, WishlistsQueryVariables>(WishlistsDocument, options);
      }
export function useWishlistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WishlistsQuery, WishlistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WishlistsQuery, WishlistsQueryVariables>(WishlistsDocument, options);
        }
export function useWishlistsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WishlistsQuery, WishlistsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WishlistsQuery, WishlistsQueryVariables>(WishlistsDocument, options);
        }
export type WishlistsQueryHookResult = ReturnType<typeof useWishlistsQuery>;
export type WishlistsLazyQueryHookResult = ReturnType<typeof useWishlistsLazyQuery>;
export type WishlistsSuspenseQueryHookResult = ReturnType<typeof useWishlistsSuspenseQuery>;
export type WishlistsQueryResult = Apollo.QueryResult<WishlistsQuery, WishlistsQueryVariables>;