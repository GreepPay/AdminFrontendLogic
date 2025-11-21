import { $api } from "../../services"
import { CombinedError } from "urql"
import Common from "./Common"
import { WalletPaginator, 
  P2pOverviewContent,
  ExchangeOrder, 
  PaginatorInfo,} from "../../gql/graphql"
import { Logic } from ".."

export default class Wallet extends Common {
  // Base Variables
  public WalletPaginator: WalletPaginator | undefined
  public P2pOverviewContent :P2pOverviewContent | undefined
  public ManyP2pOrders:
    | { data: ExchangeOrder[]; paginatorInfo: PaginatorInfo; }
    | undefined
  public SingleP2pOrder: ExchangeOrder | undefined
  
  
  
  constructor() {
    super()
    this.defineReactiveProperty("WalletPaginator", undefined);
    this.defineReactiveProperty("P2pOverviewContent", undefined);
    this.defineReactiveProperty("ManyP2pOrders", undefined)
    this.defineReactiveProperty("SingleP2pOrder", undefined)
    
  }



  // Mutation Variables
  // Queries
  public GetWallets = async (
    first: number = 10,
    page: number = 1,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
  ): Promise<any | undefined> => {
    return $api.wallet.GetWallets(orderType,order,first, page).then((response) => {
      this.WalletPaginator = response.data?.GetWallets
      return this.WalletPaginator
    })
  }
  
  
  // P2P Overview Query
  public GetP2POverviewContent= async (
    range: string
  ): Promise<P2pOverviewContent | undefined> => {
    return $api.wallet.GetP2POverviewContent(range).then((response) => {
      this.P2pOverviewContent = response.data?.GetP2POverviewContent
      return this.P2pOverviewContent
    })
  }
  
  
  // P2P Orders
  public GetP2pOrders = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereQuery = "",
    isSearch = false
  ) => {
    return $api.wallet
      .GetP2pOrders(page, count, orderType, order, whereQuery)
      .then((response) => {
        this.ManyP2pOrders = response.data?.GetP2pOrders
        return this.ManyP2pOrders
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(error, "Oops!", "error-alert")
        throw error
      })
  }

  public GetP2pOrder = async (uuid: string) => {
    return $api.wallet
      .GetP2pOrder(uuid)
      .then((response) => {
        this.SingleP2pOrder = response.data?.GetP2pOrder
        return this.SingleP2pOrder
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(error, "Oops!", "error-alert")
        throw error
      })
  }
  
  
  
}
