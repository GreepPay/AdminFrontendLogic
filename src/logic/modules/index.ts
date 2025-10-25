import Auth from "./Auth"
import Common from "./Common"
import Form from "./Form"
import User from "./User"
import Notification from "./Notification"
import Commerce from "./Commerce"
import Dashboard from "./Dashboard"
import Wallet from "./Wallet"
import Transaction from "./Transaction"
import Verification from "./Verification"
import Utils from "./Utils"
import Product from "./Product"

export const Logic = {
  Auth: new Auth(),
  Common: new Common(),
  Form: new Form(),
  Notification: new Notification(),
  User: new User(),
    Product: new Product(),
  Commerce: new Commerce(),
  Dashboard: new Dashboard(),
  Wallet: new Wallet(),
  Transaction: new Transaction(),
  Verification: new Verification(),
  Utils: new Utils(),
}
