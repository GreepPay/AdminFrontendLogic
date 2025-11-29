import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"
import {
  VerificationPaginator,
  MutationToggleVerificationStatusArgs,
  MutationApproveRejectVerificationRequestArgs,
} from "src/gql/graphql"
import Verification from "src/logic/modules/Verification"

export default class VerificationApi extends BaseApiService {
  // mutation
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
  
  public ToggleVerificationStatus = (
     data: MutationToggleVerificationStatusArgs
   ) => {
     const requestData = `
       mutation ToggleVerificationStatus(
         $status: String!
         $note: String!
         $businessId: String!
         $user_type: String
       ) {
         ToggleVerificationStatus(
           status: $status
           note: $note
           businessId: $businessId
           user_type: $user_type
         ) {
           id
           status
           note
           business_id
           user_type
           updated_at
           created_at
           user {
             phone
             phone_verified_at
             profile {
               customer {
                 notification_preferences
                 location
                 id
               }
             }
           }
         }
       }
     `
 
     const response: Promise<
       OperationResult<{
         ToggleVerificationStatus:Verification 
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
