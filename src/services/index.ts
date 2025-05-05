import AuthApi from "./AuthApi"
import UserApi from "./UserApi"
import NotificationApi from "./NotificationApi"
import WalletApi from "./WalletApi"
import DashboardApi from "./DashboardApi"
import TransactionApi from "./TransactionApi"
import VerificationApi from "./VerificationApi"

export const $api = {
  auth: new AuthApi(),
  user: new UserApi(),
  notification: new NotificationApi(),
  wallet: new WalletApi(),
  dashboard: new DashboardApi(),
  transaction: new TransactionApi(),
  verification: new VerificationApi(),
}
