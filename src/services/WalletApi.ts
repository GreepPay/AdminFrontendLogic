import { WalletPaginator } from "../gql/graphql"
import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"

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
}
