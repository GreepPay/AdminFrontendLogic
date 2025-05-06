// import { QueryGetProfilesArgs } from "src/gql/graphql"
import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"
import {
  GeneralOverview,
  BusinessOverview,
  CustomerOverview,
  TransactionOverview,
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
}
