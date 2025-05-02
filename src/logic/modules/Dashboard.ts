import { $api } from "../../services"
import { CombinedError } from "urql"
import Common from "./Common"
import { Logic } from ".."
import { AdminDashboardMetrics, Profile } from "../../gql/graphql"

export default class User extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public AdminDashboardMetrics: AdminDashboardMetrics | undefined = undefined
  public UserProfile: Profile | undefined = undefined

  // Mutation Variables

  // Queries
  public GetAdminDashboardMetrics = async (
    range = ""
  ): Promise<AdminDashboardMetrics | undefined> => {
    return $api.user.GetAdminDashboardMetrics().then((response) => {
      const metrics = response.data?.GetAdminDashboardMetrics
      this.AdminDashboardMetrics = metrics
      return metrics
    })
  }

  public GetProfiles = async (): Promise<Profile | undefined> => {
    return $api.user.GetAllAdminProfiles().then((response) => {
      const profile = response.data?.AdminUsers
      console.log("user profile:", profile)
      this.UserProfile = profile
      return profile
    })
  }

  // Mutations
}
