import {
  QueryGetAdminDashboardMetricsArgs,
  AdminDashboardMetrics,
  QueryGetProfilesArgs,
} from "src/gql/graphql"
import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"

export default class DashboardApi extends BaseApiService {
  // Queries
  public GetAdminDashboardMetrics = () => {
    // public GetAdminDashboardMetrics = (range: string) => {
    const requestData = `
    query GetAdminDashboardMetrics {
        GetAdminDashboardMetrics(range: "monthly") {
        totalVolume
        totalTransactions
        totalCustomers
        customerOverview {
          added
          fee
          purchases
          sent
        }
        totalMerchants
        merchantOverview {
          fee
          income
          shopSales
          withdrawals
        }
      }
    }
    `

    const response: Promise<
      OperationResult<{
        GetAdminDashboardMetrics: AdminDashboardMetrics
      }>
    > = this.query(requestData, {})

    console.log("response", response)

    return response
  }

  public GetProfiles = () => {
    const requestData = `
      query GetProfiles {
        GetProfiles(
          first: 24
          # where: {
          #   column: USER_TYPE
          #   operator: EQ
          #   value: "Business"
          # }
          # whereUser: {
          #   column: FIRST_NAME
          #   operator: LIKE
          #   value: "John"
          # }
          # whereUserRole: {
          #   column: NAME
          #   operator: EQ
          #   value: "Admin"
          # }
        ) {
          paginatorInfo {
            currentPage
            lastPage
            perPage
            total
            hasMorePages
          }
          data {
            auth_user_id
            user_type
            verification_status
            default_currency
            user {
              uuid
              first_name
              email
              role {
                name
              }
            }
            business {
              business_name
              country
              documents
            }
            # customer {
            #   country
            # }
          }
        }
      } 
  `

    const response: Promise<
      OperationResult<{
        UserProfile: any
      }>
    > = this.query(requestData, {})

    return response
  }
}
