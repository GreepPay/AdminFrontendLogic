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
}
