import { $api } from "../../services"
import Common from "./Common"
import {
  MutationApproveRejectVerificationRequestArgs,
  VerificationPaginator,
} from "../../gql/graphql"
import { CombinedError } from "urql"

export default class Verification extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public VerificationPaginator: VerificationPaginator | undefined

  // Mutation Variables
  public VerificationActionPayload?: MutationApproveRejectVerificationRequestArgs

  // Queries
  public GetVerificationRequests = async (
    first: number = 10,
    page: number = 1
  ): Promise<VerificationPaginator | undefined> => {
    return $api.verification
      .GetVerificationRequests(first, page)
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
}
