import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"
import { VerificationPaginator } from "src/gql/graphql"

export default class VerificationApi extends BaseApiService {
  // Queries
  public GetVerificationRequests = (first: number, page: number) => {
    const requestData = `
    query GetVerificationRequests($first: Int!, $page: Int!) {
        GetVerificationRequests(first: $first, page: $page) {
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
            auth_user_id
            created_at
            document_url 
            document_type 
            status
            id
            verification_data
            user {
              first_name
              last_name
              profile {
                profile_picture
              }
            }
          }
        }
      }
  `
    const response: Promise<
      OperationResult<{
        GetVerificationRequests: VerificationPaginator
      }>
    > = this.query(requestData, { first, page })
    console.log("response", response)

    return response
  }
}
