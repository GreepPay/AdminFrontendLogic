// import { QueryGetProfilesArgs } from "src/gql/graphql"
import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"
import {
    User,
  VendorOverview,
  GeneralOverview,
  BusinessOverview,
  CustomerOverview,
  TransactionOverview,
  EventOverview ,
  DasboardP2POverview,
} from "../gql/graphql"


export default class DashboardApi extends BaseApiService {
  // Queries
  public GetGeneralOverview = (range: string) => {
    const requestData = `
    query GetGeneralOverview ($range: String) {
      GetGeneralOverview (range: $range) {
        totalMerchants
        totalCustomers
        totalTransactions
        totalVolume
      }
    }
  `

    const response: Promise<
      OperationResult<{ GetGeneralOverview: GeneralOverview }>
    > = this.query(requestData, { range })
    return response
  }

  public GetMerchantOverview = (range: string) => {
    const requestData = `
    query GetMerchantOverview ($range: String) {
      GetMerchantOverview (range: $range) {
        income
        withdrawals
        shopSales
        fee
      }
    }
  `

    const response: Promise<
      OperationResult<{ GetMerchantOverview: BusinessOverview }>
    > = this.query(requestData, { range })
    return response
  }

  public GetCustomerOverview = (range: string) => {
    const requestData = `
    query GetCustomerOverview ($range: String)  {
      GetCustomerOverview (range: $range) {
        added
        fee
        purchases
        sent
      }
    }
  `

    const response: Promise<
      OperationResult<{ GetCustomerOverview: CustomerOverview }>
    > = this.query(requestData, { range })
    return response
  }

  public GetTransactionOverview = (range: string) => {
    const requestData = `
    query GetTransactionOverview ($range: String)  {
      GetTransactionOverview (range: $range) {
        moneyIn
        moneyOut
        transactions
        volume
      }
    }
  `

    const response: Promise<
      OperationResult<{ GetTransactionOverview: TransactionOverview }>
    > = this.query(requestData, { range })
    return response
  }

  public GetEventOverview = (range: string) => {
    const requestData = `
    query GetEventOverview ($range: String) {
      GetEventOverview (range: $range) {
      ongoing_events
      events_created
      event_hosts
      tickets_sold
      }
    }
  `

    const response: Promise<
      OperationResult<{ GetEventOverview: EventOverview }>
    > = this.query(requestData, { range })
    return response
  }

  public GetP2POverview = (range: string) => {
    const requestData = `
    query GetP2POverview ($range: String) {
      GetP2POverview (range: $range) {
        active_trades
        exchangers
        trades_completed
        volume
      }
    }
  `

    const response: Promise<
      OperationResult<{ GetP2POverview: DasboardP2POverview }>
    > = this.query(requestData, { range })
    return response
  }

  public GetVendorOverview = (range: string) => {
    const requestData = `
    query GetVendorOverview ($range: String) {
      GetVendorOverview (range: $range) {
      ongoing_orders
      product_sales
      product_listed
      vendors
      }
    }
  `

    const response: Promise<
      OperationResult<{ GetVendorOverview: VendorOverview }>
    > = this.query(requestData, { range })
    return response
  }

  public GetAuthUser = () => {
    const requestData = `
    query GetAuthUser {
      GetAuthUser {
        id
        uuid
        first_name
        last_name
        email
        status
        created_at
        updated_at
      }
    }
  `

    const response: Promise<
      OperationResult<{ GetAuthUser: User }>
    > = this.query(requestData, {})
    return response
  }
}