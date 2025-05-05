import { NotificationPaginator } from "../../gql/graphql"
import { $api } from "../../services"
import Common from "./Common"
import { PushNotifications } from "@capacitor/push-notifications"
import { getPlatforms } from "@ionic/vue"

export default class Notification extends Common {
  constructor() {
    super()
  }

  // Base Variables
  public UnreadNotification = 0
  public ManyNotifications: NotificationPaginator | undefined

  // Mutation Variables

  public reset = () => {
    this.ManyNotifications = undefined
  }

  // Queries
  public GetNotifications = async (first: number, page: number) => {
    return $api.notification.GetNotifications(first, page).then((response) => {
      this.ManyNotifications = response.data?.GetNotifications
      return this.ManyNotifications
    })
  }

  // Mutations

  public MarkNotificationsAsRead = async (notificationIds: number[]) => {
    return $api.notification
      .MarkNotificationsAsRead(notificationIds)
      .then(() => {
        this.GetNotifications(1, 50)
      })
  }

  public registerNotifications = async () => {
    // set unread notification container

    if (localStorage.getItem("unread_notification") == null) {
      localStorage.setItem("unread_notification", "0")
    }

    let permStatus = await PushNotifications.checkPermissions()

    if (permStatus.receive === "prompt") {
      permStatus = await PushNotifications.requestPermissions()
    }

    if (permStatus.receive !== "granted") {
      console.error("User denied permissions!")
    }

    await PushNotifications.register()
  }

  public getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications()
    console.log("delivered notifications", notificationList)
  }
}



// Mutations:

// MarkNotificationsAsRead

// Queries:

// GetNotifications

