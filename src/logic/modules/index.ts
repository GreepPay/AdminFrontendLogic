import Auth from "./Auth"
import Common from "./Common"
import Form from "./Form"
import User from "./User"
import Notification from "./Notification"
import Dashboard from "./Dashboard"

export const Logic = {
  Auth: new Auth(),
  Common: new Common(),
  Form: new Form(),
  Notification: new Notification(),
  User: new User(),
  Dashboard: new Dashboard(),
}
