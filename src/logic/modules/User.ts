import { $api } from "../../services"
import { CombinedError } from "urql"
import Common from "./Common"
import { Logic } from ".."
import { Profile, ProfilePaginator } from "../../gql/graphql"

export default class User extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public UserProfile: Profile | undefined = undefined
  public AdminProfilePaginator: ProfilePaginator | undefined
  public CustomerProfilePaginator: ProfilePaginator | undefined
  public MerchantProfilePaginator: ProfilePaginator | undefined

  // Mutation Variables

  // Queries
  public GetAllAdminProfiles = async (): Promise<
    ProfilePaginator | undefined
  > => {
    return $api.user.GetAllAdminProfiles().then((response) => {
      this.AdminProfilePaginator = response.data?.GetProfiles
      return this.AdminProfilePaginator
    })
  }

  public GetCustomerProfiles = async (
    first: number = 10,
    page: number = 1
  ): Promise<any | undefined> => {
    return $api.user.GetCustomerProfiles(first, page).then((response) => {
      this.CustomerProfilePaginator = response.data?.GetProfiles
      return this.CustomerProfilePaginator
    })
  }

  public GetMerchantProfiles = async (
    first: number = 10,
    page: number = 1
  ): Promise<any | undefined> => {
    return $api.user.GetMerchantProfiles(first, page).then((response) => {
      this.MerchantProfilePaginator = response.data?.GetProfiles
      return this.MerchantProfilePaginator
    })
  }

  public GetAdminProfiles = async (
    first: number = 10,
    page: number = 1
  ): Promise<any | undefined> => {
    return $api.user.GetAdminProfiles(first, page).then((response) => {
      this.AdminProfilePaginator = response.data?.GetProfiles
      return this.AdminProfilePaginator
    })
  }

  // public GetAdminProfiles = async (): Promise<any | undefined> => {
  //   return $api.user.GetAdminProfiles().then((response) => {
  //     this.AdminProfilePaginator = response.data?.GetProfiles
  //     return this.AdminProfilePaginator
  //   })
  // }

  // Mutations
}

// Mutations:

// UpdateUserRole

// DeleteUser

// FreezeAccount

// UnfreezeAccount

// Queries:

// GetProfiles
