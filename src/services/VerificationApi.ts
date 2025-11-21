import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"
import {
  MutationApproveRejectVerificationRequestArgs,
  VerificationPaginator,
} from "src/gql/graphql"

export default class VerificationApi extends BaseApiService {
  // mutatioin
  public ApproveRejectVerificationRequest = (
    data: MutationApproveRejectVerificationRequestArgs
  ) => {
    const requestData = `
    mutation ApproveRejectVerificationRequest(
      $user_uuid: String!
      $verificationId: String!
      $status: String!
    ) {
      ApproveRejectVerificationRequest(
        user_uuid: $user_uuid
        verificationId: $verificationId
        status: $status
      )
    }
  `

    const response: Promise<
      OperationResult<{
        ApproveRejectVerificationRequest: boolean
      }>
    > = this.mutation(requestData, data)
 
    return response
  }

  // Queries
  public GetVerificationRequests = (orderType = "CREATED_AT",
order: "ASC" | "DESC" = "DESC",first: number, page: number) => {
    const requestData = `
    query GetVerificationRequests($first: Int!, $page: Int!) {
        GetVerificationRequests(first: $first, page: $page,orderBy: {
              column: ${orderType ? orderType : "CREATED_AT"},
              order: ${order}
            }) {
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

    return response
  }
}
