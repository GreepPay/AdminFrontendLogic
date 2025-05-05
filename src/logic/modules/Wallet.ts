import { $api } from "../../services"
import { CombinedError } from "urql"
import Common from "./Common"
import { Logic } from ".."
import { Profile, WalletPaginator } from "../../gql/graphql"

export default class Wallet extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public WalletPaginator: WalletPaginator | undefined

  // Mutation Variables

  // Queries
  public GetWallets = async (
    first: number = 10,
    page: number = 1
  ): Promise<any | undefined> => {
    return $api.wallet.GetWallets(first, page).then((response) => {
      this.WalletPaginator = response.data?.GetWallets
      return this.WalletPaginator
    })
  }

  // Mutations
}

// Queries:

// GetWallets
