import { $api } from "../../services"
import { CombinedError } from "urql"
import Common from "./Common" 
import {
  MutationActivateAdminAccountArgs,
  MutationUpdateUserRoleArgs,
  Profile,
  ProfilePaginator,
  Customer,
  Business,
  VendorOverviewContent,
  VendorOrderStatsPaginator,
  VendorProductStatsPaginator,
  EventHostStatsPaginator,
  UserTicketStatsPaginator,
  ExchangeAdStatsPaginator,
} from "../../gql/graphql"

export default class User extends Common {
  constructor() {
    super()
      this.defineReactiveProperty("ExchangeAdStatsPaginator", undefined);
      this.defineReactiveProperty("UserTicketStatsPaginator", undefined);
      this.defineReactiveProperty("EventHostStatsPaginator", undefined);
      this.defineReactiveProperty("MerchantProfilePaginator", undefined);
      this.defineReactiveProperty("VendorProductStatsPaginator", undefined);
      this.defineReactiveProperty("VendorOrderStatsPaginator", undefined);
      this.defineReactiveProperty("VendorOverviewContent", undefined);
  }

  // Base Variables
  public UserProfile: Profile | undefined = undefined
  public AdminProfilePaginator: ProfilePaginator | undefined
  public CustomerProfilePaginator: ProfilePaginator | undefined
  public EventHostStatsPaginator: EventHostStatsPaginator | undefined
  public UserTicketStatsPaginator: UserTicketStatsPaginator | undefined
  public ExchangeAdStatsPaginator:ExchangeAdStatsPaginator | undefined
  public VendorOverviewContent: VendorOverviewContent | undefined
  public VendorOrderStatsPaginator: VendorOrderStatsPaginator | undefined
  public VendorProductStatsPaginator: VendorProductStatsPaginator | undefined
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
  
  public GetEventHostStats = async (
    first: number = 10,
    page: number = 1
  ): Promise<any | undefined> => {
    return $api.user.GetEventHosts(first, page).then((response) => {
      this.EventHostStatsPaginator = response.data?.GetEventHosts 
      return this.EventHostStatsPaginator
    })
  }

  
  public GetVendorProductStats = async (
    first: number = 10,
    page: number = 1
  ): Promise<any | undefined> => {
    return $api.user.GetVendorProductStats(first, page).then((response) => {
      this.VendorProductStatsPaginator = response.data?.GetVendorProductStats
      return this.VendorProductStatsPaginator
    })
  }

  public GetVendorOrderStats = async (
    first: number = 10,
    page: number = 1
  ): Promise<any | undefined> => {
    return $api.user.GetVendorOrderStats(first, page).then((response) => {
      this.VendorOrderStatsPaginator = response.data?.GetVendorOrderStats
      return this.VendorOrderStatsPaginator
    })
  }

  public GetVendorOverviewContent = async (
    range: string
  ): Promise<any | undefined> => {
    return $api.user.GetVendorOverviewContent(range).then((response) => {
      this.VendorOverviewContent = response.data?.GetVendorOverviewContent
      return this.VendorOverviewContent
    })
  }
  
  
  public GetEventAttendees = async (
    first: number = 10,
    page: number = 1
  ): Promise<any | undefined> => {
    return $api.user.GetEventAttendees(first, page).then((response) => {
      this.UserTicketStatsPaginator = response.data?.GetEventAttendees
      return this.UserTicketStatsPaginator
    })
  }

  
  
  public GetExchangeAds = async (
    first: number = 10,
    page: number = 1
  ): Promise<any | undefined> => {
    return $api.user.GetExchangeAds(first, page).then((response) => {
      this.ExchangeAdStatsPaginator = response.data?.GetExchangeAds
      return this.ExchangeAdStatsPaginator
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
            throw new Error(error.message)
        })
    }
  }
}
