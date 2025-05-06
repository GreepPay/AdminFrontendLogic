import { $api } from "../../services"
import { CombinedError } from "urql"
import Common from "./Common"
import { Logic } from ".."
import {
  MutationActivateAdminAccountArgs,
  MutationUpdateUserRoleArgs,
  Profile,
  ProfilePaginator,
} from "../../gql/graphql"

export default class User extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public UserProfile: Profile | undefined = undefined
  public AdminProfilePaginator: ProfilePaginator | undefined
  public CustomerProfilePaginator: ProfilePaginator | undefined
  public MerchantProfilePaginator: ProfilePaginator | undefined
  public UpdateRoleResult?: boolean

  // Mutation Variables
  public UpdateUserRolePayload: MutationUpdateUserRoleArgs | undefined

  // Queries
  // public GetAllAdminProfiles = async (): Promise<
  //   ProfilePaginator | undefined
  // > => {
  //   return $api.user.GetAllAdminProfiles().then((response) => {
  //     this.AdminProfilePaginator = response.data?.GetProfiles
  //     return this.AdminProfilePaginator
  //   })
  // }

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

  // Mutations
  public UpdateUserRole = () => {
    if (this.UpdateUserRolePayload) {
      return $api.user
        .UpdateUserRole(this.UpdateUserRolePayload)
        .then((response) => {
          if (typeof response.data?.UpdateUserRole === "boolean") {
            this.UpdateRoleResult = response.data.UpdateUserRole
            return this.UpdateRoleResult
          }
        })
        .catch((error: CombinedError) => {
          console.log("UpdateUserRole error", error)
          throw new Error(error.message)
        })
    }
  }

  public DeleteUser = (user_uuid: string) => {
    if (user_uuid) {
      return $api.user
        .DeleteUser(user_uuid)
        .then((response) => {
          if (typeof response.data?.DeleteUser === "boolean") {
            return response.data.DeleteUser
          }
        })
        .catch((error: CombinedError) => {
          throw new Error(error.message)
        })
    }
  }

  public FreezeAccount = (user_uuid: string) => {
    if (user_uuid) {
      return $api.user
        .FreezeAccount(user_uuid)
        .then((response) => {
          if (typeof response.data?.FreezeAccount === "boolean") {
            return response.data.FreezeAccount
          }
        })
        .catch((error: CombinedError) => {
          console.log("FreezeAccount error", error)
          throw new Error(error.message)
        })
    }
  }

  public UnfreezeAccount = (user_uuid: string) => {
    if (user_uuid) {
      return $api.user
        .UnfreezeAccount(user_uuid)
        .then((response) => {
          if (typeof response.data?.UnfreezeAccount === "boolean") {
            return response.data.UnfreezeAccount
          }
        })
        .catch((error: CombinedError) => {
          console.log("UnfreezeAccount error", error)
          throw new Error(error.message)
        })
    }
  }
}
