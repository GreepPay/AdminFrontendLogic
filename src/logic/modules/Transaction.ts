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
    page: number = 1
  ): Promise<TransactionPaginator | undefined> => {
    return $api.transaction.GetWithdrawals(first, page).then((response) => {
      this.WithdrawalsPaginator = response.data?.GetWithdrawals
      return this.WithdrawalsPaginator
    })
  }
  public GetWalletHistory = async (
    first: number = 10,
    page: number = 1,
    orderBy?: any[],
    where?: any
  ): Promise<TransactionPaginator | undefined> => {
    return $api.transaction
      .GetWalletHistory(first, page, orderBy, where)
      .then((response) => {
        this.WalletHistoryPaginator = response.data?.GetWalletHistory
        return this.WalletHistoryPaginator
      })
  }

  public GetTransactions = async (
    first: number = 10,
    page: number = 1,
    orderBy?: any[],
    where?: any,
    whereUser?: any
  ): Promise<TransactionPaginator | undefined> => {
    return $api.transaction
      .GetTransactions(first, page, orderBy, where, whereUser)
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
          console.log("UpdateWithdrawalStatus error", error)
          throw new Error(error.message)
        })
    }
  }
}
