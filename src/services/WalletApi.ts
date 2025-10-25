import { WalletPaginator } from "../gql/graphql"
import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"
import {
  P2pOverviewContent,
  ExchangeOrder,
  OrderByClause,


} from "../gql/graphql"

export default class WalletApi extends BaseApiService {
  // Query
  public GetWallets = (first: number, page: number) => {
    const requestData = `
     query GetWallets ($first: Int!, $page: Int!)   {
      GetWallets ( first: $first,    page: $page  ) {
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
          id
          cash_per_point
          cash_point_balance
          created_at
          credited_point_amount
          credited_amount
          currency
          debited_point_amount
          locked_balance
          point_balance
          total_balance
          state
          debited_amount
          uuid
          user {
            first_name
            last_name
            profile {
                profile_picture
              }
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
        GetWallets: WalletPaginator
      }>
    > = this.query(requestData, { first, page })

    return response
  }
  
  
  public GetP2POverviewContent = (range: string) => {
    const requestData = `
      query GetP2POverviewContent($range: String) {
        GetP2POverviewContent(range: $range) {
          volume
          trades_completed
          trades
          trade_ads
          location
          exchangers
          currencies_in_trade
          average_trade_size
          active_trades
        }
      }
  `

    const response: Promise<
      OperationResult<{ GetP2POverviewContent: P2pOverviewContent }>
    > = this.query(requestData, { range })
    return response
  }
  
  

  // P2P Orders
  public GetP2pOrders = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC" = "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetP2pOrders($first: Int!, $page: Int!) {
        GetP2pOrders(first: $first, page: $page) {
          data {
            id
            uuid
            amount
            expected_amount
            status
            payment_type
            payout_option
            pickup_location_address_line
            pickup_location_city
            pickup_location_country
            created_at
            updated_at
            expired_at
            ad {
              uuid
              from_currency
              to_currency
              rate
              status
              business {
                uuid
                business_name
                logo
                address
                city
                country
              }
            }
            user {
              id
              uuid
              first_name
              last_name
              email
              phone
            }
          }
          paginatorInfo {
            count
            currentPage
            firstItem
            hasMorePages
            lastItem
            lastPage
            perPage
            total
          }
        }
      }
    `

    const response: Promise<
      OperationResult<{
        GetP2pOrders: {
          data: ExchangeOrder[]
          paginatorInfo: any
        }
      }>
    > = this.query(requestData, {
      first: count,
      page,
    })

    return response
  }

  public GetP2pOrder = (uuid: string) => {
    const requestData = `
      query GetP2pOrder($uuid: String!) {
        GetP2pOrder(uuid: $uuid) {
          id
          uuid
          amount
          expected_amount
          status
          payment_type
          payout_option
          pickup_location_address_line
          pickup_location_city
          pickup_location_country
          conversation_uuid
          created_at
          updated_at
          expired_at
          ad {
            uuid
            from_currency
            to_currency
            rate
            status
            business {
              uuid
              business_name
              logo
              address
              city
              country
              user {
                id
                uuid
                first_name
                last_name
                email
              }
            }
          }
          user {
            id
            uuid
            first_name
            last_name
            email
            phone
          }
        }
      }
    `

    const response: Promise<
      OperationResult<{
        GetP2pOrder: ExchangeOrder
      }>
    > = this.query(requestData, {
      uuid,
    })

    return response
  }

}


