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
  public GetWithdrawals = ( orderType = "CREATED_AT", order: "ASC" | "DESC" = "DESC",first: number, page: number) => {
    const requestData = `
    query GetWithdrawals($first: Int!, $page: Int!) {
      GetWithdrawals(first: $first, page: $page,  orderBy: {
            column: ${orderType ? orderType : "CREATED_AT"},
            order: ${order}
          } ) {
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
    wallet_id: string,
    first: number,
    page: number,
    orderBy?: any[]
  ) => {
    const requestData = `
    query GetWalletHistory(
      $first: Int!
      $page: Int 
    ) {
      GetWalletHistory(
      first: $first
      page: $page
      where: {
        column: WALLET_ID
        operator: EQ
        value: ${wallet_id}
      } 
      orderBy: [
        {
          column: CREATED_AT
          order: DESC
        }
      ]) {
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
            role {
              name
            }
          }
        }
      }
    }
  `
    const response: Promise<
      OperationResult<{
        GetWalletHistory: TransactionPaginator
      }>
    > = this.query(requestData, { first, page })

    return response
  }

  //
  // $orderBy: [QueryGetTransactionsOrderByOrderByClause]
  // $where: QueryGetTransactionsWhereWhereConditions
  // $whereUser: QueryGetTransactionsWhereUserWhereHasConditions
  // where: $where
  // whereUser: $whereUser
  public GetTransactions = (
    first: number,
    page: number,
    whereUser?: any,
    orderType = "CREATED_AT", order: "ASC" | "DESC" = "DESC",
    where?: any
  ) => {
    const requestData = `
    query GetTransactions(
      $first: Int!
      $page: Int
    ) {
      GetTransactions(
        first: $first
        page: $page  
        ${
          whereUser
            ? `whereUser: {
                 OR: [
        { column: FIRST_NAME, operator: LIKE, value: ${whereUser} }
        { column: LAST_NAME, operator: LIKE, value: ${whereUser} }
        { column: EMAIL, operator: LIKE, value: ${whereUser}}
        ] }
      `
            : ""
        }
        orderBy: {
              column: ${orderType ? orderType : "CREATED_AT"},
              order: ${order}
            }  
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
            role {
              name
            }
          }
        }
      }
    }
  `
    const response: Promise<
      OperationResult<{
        GetTransactions: TransactionPaginator
      }>
    > = this.query(requestData, { first, page, whereUser, where })
 
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
           role {
              name
            }
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
