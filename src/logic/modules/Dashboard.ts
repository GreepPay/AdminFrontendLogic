import { $api } from "../../services"
import { CombinedError } from "urql"
import Common from "./Common"
import { Logic } from ".."
import { AdminDashboardMetrics, Profile } from "../../gql/graphql"

export default class Dashboard extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public GeneralOverview: any = null
  public MerchantOverview: any = null
  public CustomerOverview: any = null
  public TransactionOverview: any = null

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

  public GetTransactionOverview = async (): Promise<any | undefined> => {
    return $api.dashboard.GetTransactionOverview().then((response) => {
      const data = response.data?.GetTransactionOverview
      this.TransactionOverview = data
      return data
    })
  }

  public GetCustomerOverview = async (): Promise<any | undefined> => {
    return $api.dashboard.GetCustomerOverview().then((response) => {
      const data = response.data?.GetCustomerOverview
      this.CustomerOverview = data
      return data
    })
  }

  public GetMerchantOverview = async (): Promise<any | undefined> => {
    return $api.dashboard.GetMerchantOverview().then((response) => {
      const data = response.data?.GetMerchantOverview
      console.log("data", data)

      this.MerchantOverview = data
      return data
    })
  }
  public GetGeneralOverview = async (): Promise<any | undefined> => {
    return $api.dashboard.GetGeneralOverview().then((response) => {
      const data = response.data?.GetGeneralOverview
      this.GeneralOverview = data
      return data
    })
  }

  // public GetProfiles = async (): Promise<Profile | undefined> => {
  //   return $api.user.GetAllAdminProfiles().then((response) => {
  //     const profile = response.data?.AdminUsers
  //     console.log("user profile:", profile)
  //     this.UserProfile = profile
  //     return profile
  //   })
  // }

  // Mutations
}
