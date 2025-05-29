import * as Types from '@/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateWishListMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type CreateWishListMutation = { __typename?: 'Mutation', createWishlist?: { __typename?: 'Wishlist', id: string, name: string } | null };


export const CreateWishListDocument = gql`
    mutation CreateWishList($name: String!) {
  createWishlist(name: $name) {
    id
    name
  }
}
    `;
export type CreateWishListMutationFn = Apollo.MutationFunction<CreateWishListMutation, CreateWishListMutationVariables>;

/**
 * __useCreateWishListMutation__
 *
 * To run a mutation, you first call `useCreateWishListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWishListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWishListMutation, { data, loading, error }] = useCreateWishListMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateWishListMutation(baseOptions?: Apollo.MutationHookOptions<CreateWishListMutation, CreateWishListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWishListMutation, CreateWishListMutationVariables>(CreateWishListDocument, options);
      }
export type CreateWishListMutationHookResult = ReturnType<typeof useCreateWishListMutation>;
export type CreateWishListMutationResult = Apollo.MutationResult<CreateWishListMutation>;
export type CreateWishListMutationOptions = Apollo.BaseMutationOptions<CreateWishListMutation, CreateWishListMutationVariables>;