import * as Types from '@/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateWishMutationVariables = Types.Exact<{
  wish: Types.WishInput;
}>;


export type CreateWishMutation = { __typename?: 'Mutation', createWish: { __typename?: 'Wish', createdAt: string, description?: string | null, id: string, img?: string | null, link?: string | null, name: string, rate: number, type: Types.ProductSource, updatedAt: string, price?: { __typename?: 'Price', currency: string, value: number } | null } };


export const CreateWishDocument = gql`
    mutation CreateWish($wish: WishInput!) {
  createWish(wishInput: $wish) {
    createdAt
    description
    id
    img
    link
    name
    price {
      currency
      value
    }
    rate
    type
    updatedAt
  }
}
    `;
export type CreateWishMutationFn = Apollo.MutationFunction<CreateWishMutation, CreateWishMutationVariables>;

/**
 * __useCreateWishMutation__
 *
 * To run a mutation, you first call `useCreateWishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWishMutation, { data, loading, error }] = useCreateWishMutation({
 *   variables: {
 *      wish: // value for 'wish'
 *   },
 * });
 */
export function useCreateWishMutation(baseOptions?: Apollo.MutationHookOptions<CreateWishMutation, CreateWishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWishMutation, CreateWishMutationVariables>(CreateWishDocument, options);
      }
export type CreateWishMutationHookResult = ReturnType<typeof useCreateWishMutation>;
export type CreateWishMutationResult = Apollo.MutationResult<CreateWishMutation>;
export type CreateWishMutationOptions = Apollo.BaseMutationOptions<CreateWishMutation, CreateWishMutationVariables>;