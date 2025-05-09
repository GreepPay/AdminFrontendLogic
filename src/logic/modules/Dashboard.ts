import { $api } from "../../services"
import Common from "./Common"
import {
  GeneralOverview,
  BusinessOverview,
  CustomerOverview,
  TransactionOverview,
} from "../../gql/graphql"

export default class Dashboard extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public GeneralOverview: GeneralOverview | undefined = undefined
  public MerchantOverview: BusinessOverview | undefined = undefined
  public CustomerOverview: CustomerOverview | undefined = undefined
  public TransactionOverview: TransactionOverview | undefined = undefined

  // Analytics data
  public AnalyticsData: {
    allTime?: TransactionOverview
    daily?: TransactionOverview
    weekly?: TransactionOverview
    monthly?: TransactionOverview
  } = {}

  // Mutation Variables

  // Queries
  public GetGeneralOverview = async (
    range: string = ""
  ): Promise<GeneralOverview | undefined> => {
    return $api.dashboard.GetGeneralOverview(range).then((response) => {
      this.GeneralOverview = response.data?.GetGeneralOverview
      return this.GeneralOverview
    })
  }

  public GetMerchantOverview = async (
    range: string = ""
  ): Promise<BusinessOverview | undefined> => {
    return $api.dashboard.GetMerchantOverview(range).then((response) => {
      this.MerchantOverview = response.data?.GetMerchantOverview
      return this.MerchantOverview
    })
  }

  public GetCustomerOverview = async (
    range: string = ""
  ): Promise<CustomerOverview | undefined> => {
    return $api.dashboard.GetCustomerOverview(range).then((response) => {
      this.CustomerOverview = response.data?.GetCustomerOverview
      return this.CustomerOverview
    })
  }

  public GetTransactionOverview = async (
    range: string = ""
  ): Promise<TransactionOverview | undefined> => {
    return $api.dashboard.GetTransactionOverview(range).then((response) => {
      this.TransactionOverview = response.data?.GetTransactionOverview
      return this.TransactionOverview
    })
  }

  public GetAnalyticsData = async (): Promise<{
    allTime?: TransactionOverview
    daily?: TransactionOverview
    weekly?: TransactionOverview
    monthly?: TransactionOverview
  }> => {
    const timeframes = ["", "daily", "weekly", "monthly"]
    const keys = ["allTime", "daily", "weekly", "monthly"]

    const results = await Promise.all(
      timeframes.map((range) =>
        $api.dashboard
          .GetTransactionOverview(range)
          .then((res) => res.data?.GetTransactionOverview)
      )
    )

    keys.forEach((key, index) => {
      this.AnalyticsData[key as keyof typeof this.AnalyticsData] =
        results[index]
    })

    return this.AnalyticsData
  }
}
