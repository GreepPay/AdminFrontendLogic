import { $api } from "../../services"
import Common from "./Common"
import {
  MutationUpdateWithdrawalStatusArgs,
  Transaction,
  TransactionPaginator,
} from "../../gql/graphql"
import { CombinedError } from "urql"

export default class TransactionModule extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public WithdrawalsPaginator: TransactionPaginator | undefined = undefined
  public WalletHistoryPaginator: TransactionPaginator | undefined = undefined
  public TransactionsPaginator: TransactionPaginator | undefined = undefined
  public SingleTransaction: Transaction | undefined = undefined
  public Withdrawal: Transaction | undefined = undefined

  // Mutation Variables
  public WithdrawalPayload: MutationUpdateWithdrawalStatusArgs | undefined

  // Queries
  public GetWithdrawals = async (
    first: number = 10,
    page: number = 1,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
  ): Promise<TransactionPaginator | undefined> => {
    return $api.transaction.GetWithdrawals( orderType,order,first, page,).then((response) => {
      this.WithdrawalsPaginator = response.data?.GetWithdrawals
      return this.WithdrawalsPaginator
    })
  }
  public GetWalletHistory = async (
    wallet_id: string,
    first: number = 10,
    page: number = 1,
    orderBy?: any[]
  ): Promise<TransactionPaginator | undefined> => {
    return $api.transaction
      .GetWalletHistory(wallet_id, first, page)
      .then((response) => {
        this.WalletHistoryPaginator = response.data?.GetWalletHistory
        return this.WalletHistoryPaginator
      })
  }

  public GetTransactions = async (
    first: number = 10,
    page: number = 1,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereUser?: any
  ): Promise<TransactionPaginator | undefined> => {
    return $api.transaction
      .GetTransactions(first, page, whereUser,orderType, order )
      .then((response) => {
        this.TransactionsPaginator = response.data?.GetTransactions
        return this.TransactionsPaginator
      })
  }

  public GetSingleTransaction = async (
    transactionUuid: string
  ): Promise<Transaction | undefined> => {
    return $api.transaction
      .GetSingleTransaction(transactionUuid)
      .then((response) => {
        this.SingleTransaction = response.data?.GetSingleTransaction
        return this.SingleTransaction
      })
  }

  // Mutations
  public UpdateWithdrawalStatus = () => {
    if (this.WithdrawalPayload) {
      return $api.transaction
        .UpdateWithdrawalStatus(this.WithdrawalPayload)
        .then((response) => {
          if (response.data?.UpdateWithdrawalStatus) {
            this.Withdrawal = response.data.UpdateWithdrawalStatus
            return this.Withdrawal
          }
        })
        .catch((error: CombinedError) => {
          throw new Error(error.message)
        })
    }
  }
}
