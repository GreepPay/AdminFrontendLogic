import { $api } from "../../services"
import Common from "./Common"
import { VerificationPaginator } from "../../gql/graphql"

export default class Verification extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public VerificationPaginator: VerificationPaginator | undefined

  // Mutation Variables

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
  // ApproveRejectVerificationRequest
}
