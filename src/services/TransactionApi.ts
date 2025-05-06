import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"
import {
  MutationUpdateWithdrawalStatusArgs,
  Transaction,
  TransactionPaginator,
} from "../gql/graphql"

export default class TransactionApi extends BaseApiService {
  // mutation
  public UpdateWithdrawalStatus = (
    data: MutationUpdateWithdrawalStatusArgs
  ) => {
    const requestData = `
    mutation UpdateWithdrawalStatus($transaction_id: ID!, $status: String!) {
      UpdateWithdrawalStatus(transaction_id: $transaction_id, status: $status) {
        uuid
        dr_or_cr
        currency
        wallet_id
        user_id
        amount
        wallet_balance
        charge_id
        chargeable_type
        description
        status
        charges
        reference
        state
        gateway
        created_at
        updated_at
        user {
          first_name
          last_name
        }
      }
    }
  `
    const response: Promise<
      OperationResult<{
        UpdateWithdrawalStatus: Transaction
      }>
    > = this.mutation(requestData, data)

    return response
  }

  // Queries
  public GetWithdrawals = (first: number, page: number) => {
    const requestData = `
    query GetWithdrawals($first: Int!, $page: Int!) {
      GetWithdrawals(first: $first, page: $page) {
        paginatorInfo {
          firstItem
          lastItem
          currentPage
          lastPage
          perPage
          total
          hasMorePages
        }
        data {
          uuid
          dr_or_cr
          currency
          wallet_id
          user_id
          amount
          wallet_balance
          charge_id
          chargeable_type
          description
          status
          charges
          reference
          state
          gateway
          created_at
          updated_at
          user {
            first_name
            last_name
          }
        }
      }
    }
  `

    const response: Promise<
      OperationResult<{
        GetWithdrawals: TransactionPaginator
      }>
    > = this.query(requestData, { first, page })

    return response
  }

  // $orderBy: [QueryGetWalletHistoryOrderByOrderByClause]
  // $where: QueryGetWalletHistoryWhereWhereConditions
  // , orderBy: $orderBy, where: $where
  public GetWalletHistory = (
    first: number,
    page: number,
    orderBy?: any[],
    where?: any
  ) => {
    const requestData = `
    query GetWalletHistory(
      $first: Int!
      $page: Int
    ) {
      GetWalletHistory(first: $first, page: $page) {
        paginatorInfo {
          firstItem
          lastItem
          currentPage
          lastPage
          perPage
          total
          hasMorePages
        }
        data {
          uuid
          dr_or_cr
          currency
          wallet_id
          user_id
          amount
          wallet_balance
          charge_id
          chargeable_type
          description
          status
          charges
          reference
          state
          gateway
          created_at
          updated_at
          user {
            first_name
            last_name
          }
        }
      }
    }
  `
    const response: Promise<
      OperationResult<{
        GetWalletHistory: TransactionPaginator
      }>
    > = this.query(requestData, { first, page, orderBy, where })

    console.log("response", response)

    return response
  }

  //
  // $orderBy: [QueryGetTransactionsOrderByOrderByClause]
  // $where: QueryGetTransactionsWhereWhereConditions
  // $whereUser: QueryGetTransactionsWhereUserWhereHasConditions
  // orderBy: $orderBy
  // where: $where
  // whereUser: $whereUser
  public GetTransactions = (
    first: number,
    page: number,
    orderBy?: any[],
    where?: any,
    whereUser?: any
  ) => {
    const requestData = `
    query GetTransactions(
      $first: Int!
      $page: Int
    ) {
      GetTransactions(
        first: $first
        page: $page
        
      ) {
        paginatorInfo {
          firstItem
          lastItem
          currentPage
          lastPage
          perPage
          total
          hasMorePages
        }
        data {
          uuid
          dr_or_cr
          currency
          wallet_id
          user_id
          amount
          wallet_balance
          charge_id
          chargeable_type
          description
          status
          charges
          reference
          state
          gateway
          created_at
          updated_at
          user {
            first_name
            last_name
          }
        }
      }
    }
  `
    const response: Promise<
      OperationResult<{
        GetTransactions: TransactionPaginator
      }>
    > = this.query(requestData, { first, page, orderBy, where, whereUser })

    console.log("response", response)

    return response
  }

  //
  public GetSingleTransaction = (transaction_uuid: string) => {
    const requestData = `
    query GetSingleTransaction($transaction_uuid: String!) {
      GetSingleTransaction(transaction_uuid: $transaction_uuid) {
        uuid
        dr_or_cr
        currency
        wallet_id
        user_id
        amount
        wallet_balance
        charge_id
        chargeable_type
        description
        status
        charges
        reference
        state
        gateway
        created_at
        updated_at
        user {
          first_name
          last_name
        }
      }
    }
  `
    const response: Promise<
      OperationResult<{
        GetSingleTransaction: Transaction
      }>
    > = this.query(requestData, { transaction_uuid })

    console.log("response", response)

    return response
  }
}
