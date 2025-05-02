import { $api } from "../../services"
import { CombinedError } from "urql"
import Common from "./Common"
import { Logic } from ".."
import {
  AdminDashboardMetrics,
  Profile,
  ProfilePaginator,
} from "../../gql/graphql"

export default class User extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public AdminDashboardMetrics: AdminDashboardMetrics | undefined = undefined
  public UserProfile: Profile | undefined = undefined
  public AdminProfilePaginator: ProfilePaginator | undefined

  // Mutation Variables

  // Queries
  // public GetAdminDashboardMetrics = async (
  //   range = ""
  // ): Promise<AdminDashboardMetrics | undefined> => {
  //   return $api.user.GetAdminDashboardMetrics().then((response) => {
  //     const metrics = response.data?.GetAdminDashboardMetrics
  //     this.AdminDashboardMetrics = metrics
  //     return metrics
  //   })
  // }

  public GetAllAdminProfiles = async (): Promise<
    ProfilePaginator | undefined
  > => {
    return $api.user.GetAllAdminProfiles().then((response) => {
      this.AdminProfilePaginator = response.data?.GetProfiles
      return this.AdminProfilePaginator
    })
  }

  // Mutations
}
