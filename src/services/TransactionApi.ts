// import { QueryGetProfilesArgs } from "src/gql/graphql"
import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"
import {
  GeneralOverview,
  BusinessOverview,
  CustomerOverview,
  TransactionOverview,
} from "../gql/graphql"

export default class TransactionApi extends BaseApiService {
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
 
}
