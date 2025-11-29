import { $api } from "../../services"
import Common from "./Common"
import {
  MutationApproveRejectVerificationRequestArgs,
  MutationToggleVerificationStatusArgs,
  VerificationPaginator,
} from "../../gql/graphql"
import { CombinedError } from "urql"

export default class Verification extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public VerificationPaginator: VerificationPaginator | undefined
  
  public ToggleVerificationStatusPayload?: MutationToggleVerificationStatusArgs

  // Mutation Variables
  public VerificationActionPayload?: MutationApproveRejectVerificationRequestArgs

  // Queries
  public GetVerificationRequests = async (
    first: number = 10,
    page: number = 1,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
  ): Promise<VerificationPaginator | undefined> => {
    return $api.verification
      .GetVerificationRequests(orderType, order,first, page)
      .then((response) => {
        this.VerificationPaginator = response.data?.GetVerificationRequests
        return this.VerificationPaginator
      })
  }

  // Mutations
  public ApproveRejectVerificationRequest = () => {
    if (this.VerificationActionPayload) {
      return $api.verification
        .ApproveRejectVerificationRequest(this.VerificationActionPayload)
        .then((response) => {
          if (
            typeof response.data?.ApproveRejectVerificationRequest === "boolean"
          ) {
            return response.data.ApproveRejectVerificationRequest
          }
        })
        .catch((error: CombinedError) => {
            throw new Error(error.message)
        })
    }
  }
  
  public ToggleVerificationStatus = () => {
    if (this.ToggleVerificationStatusPayload) {
      return $api.verification
        .ToggleVerificationStatus(this.ToggleVerificationStatusPayload)
        .then((response) => {
          // Return the verification object or success status
          return response.data?.ToggleVerificationStatus
        })
        .catch((error: CombinedError) => {
          throw new Error(error.message)
        })
    }
  }
}
