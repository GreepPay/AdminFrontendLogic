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

  // public GetProfiles = () => {
  //   const requestData = `
  //     query GetProfiles {
  //       GetProfiles(
  //         first: 24
  //         # where: {
  //         #   column: USER_TYPE
  //         #   operator: EQ
  //         #   value: "Business"
  //         # }
  //         # whereUser: {
  //         #   column: FIRST_NAME
  //         #   operator: LIKE
  //         #   value: "John"
  //         # }
  //         # whereUserRole: {
  //         #   column: NAME
  //         #   operator: EQ
  //         #   value: "Admin"
  //         # }
  //       ) {
  //         paginatorInfo {
  //           currentPage
  //           lastPage
  //           perPage
  //           total
  //           hasMorePages
  //         }
  //         data {
  //           auth_user_id
  //           user_type
  //           verification_status
  //           default_currency
  //           user {
  //             uuid
  //             first_name
  //             email
  //             role {
  //               name
  //             }
  //           }
  //           business {
  //             business_name
  //             country
  //             documents
  //           }
  //           # customer {
  //           #   country
  //           # }
  //         }
  //       }
  //     }
  // `

  //   const response: Promise<
  //     OperationResult<{
  //       UserProfile: any
  //     }>
  //   > = this.query(requestData, {})

  //   return response
  // }
}
