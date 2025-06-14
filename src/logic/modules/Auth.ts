import { $api } from "../../services"
import { CombinedError } from "urql"
import Common from "./Common"
import {
  MutationActivateAdminAccountArgs,
  MutationSignInArgs,
  User,
} from "src/gql/graphql"
import { Logic } from ".."

export default class Auth extends Common {
  constructor() {
    super()
    this.AccessToken = localStorage.getItem("access_token")
    const authUserRaw = localStorage.getItem("auth_user")

    try {
      this.AuthUser =
        authUserRaw && authUserRaw !== "undefined"
          ? JSON.parse(authUserRaw)
          : undefined
    } catch (error) {
      console.warn("Failed to parse auth_user:", error)
      this.AuthUser = undefined
    }
  }

  // Base Variables
  public AccessToken: string | null = null
  public AuthUser: User | undefined = undefined
  public RequestUuid: string | null = null

  // Mutation Variables
  public SignInPayload: MutationSignInArgs | undefined
  public ActivateAccountPayload: MutationActivateAdminAccountArgs | undefined

  // Private methods
  private SetUpAuth = (AuthResponse: any | undefined) => {
    if (AuthResponse) {
      this.AccessToken = AuthResponse.token
      this.AuthUser = this.updatedData(this.AuthUser, AuthResponse.user)

      // save to localstorage
      localStorage.setItem(
        "access_token",
        this.AccessToken ? this.AccessToken : ""
      )
      localStorage.setItem("auth_user", JSON.stringify(this.AuthUser))
    }
  }

  // Queries
  public GetAuthUser = async (): Promise<User | undefined> => {
    // Logic.Common.showLoader({ loading: true, show: true })
    return $api.auth
      .GetAuthUser()
      .then((response) => {
        this.AuthUser = response.data?.GetAuthUser
        return this.AuthUser
      })
      .catch((error: CombinedError) => {
        localStorage.clear()
        this.AccessToken = ""
        this.AuthUser = undefined
        throw error
      })
      .finally(() => {
        Logic.Common.hideLoader()
      })
  }

  // Mutations
  public SignIn = (formIsValid: boolean) => {
    // Logic.Common.showLoader({ loading: true, show: true })
    if (formIsValid && this.SignInPayload) {
      return $api.auth
        .SignIn(this.SignInPayload)
        .then((response) => {
          if (response.data?.SignIn) {
            this.SetUpAuth(response.data.SignIn)
            return response.data
          }
        })
        .catch((error: CombinedError) => {
          throw new Error(error.message)
        })
        .finally(() => {
          Logic.Common.hideLoader()
        })
    }
  }

  public ActivateAdminAccount = (formIsValid: boolean) => {
    // Logic.Common.showLoader({ loading: true, show: true })
    if (formIsValid && this.ActivateAccountPayload) {
      return $api.auth
        .ActivateAdminAccount(this.ActivateAccountPayload)
        .then((response) => {
          return response.data?.ActivateAdminAccount
        })
        .catch((error: CombinedError) => {
          throw new Error(error.message)
        })
        .finally(() => {
          Logic.Common.hideLoader()
        })
    }
  }

  public SignUp = async (email: string): Promise<User | undefined> => {
    // Logic.Common.showLoader({ loading: true, show: true })
    return $api.auth
      .SignUp(email)
      .then((response) => {
        return response.data?.SignUp
      })
      .catch((error: CombinedError) => {
        throw new Error(error.message)
      })
      .finally(() => {
        Logic.Common.hideLoader()
      })
  }

  public AdminLogout = () => {
    this.AccessToken = ""
    this.AuthUser = undefined
    localStorage.clear()
    Logic.Common.GoToRoute("/auth/login")
    // $api.auth
    //   .AdminLogout()
    //   .then(() => {
    //   })
    //   .catch((error: CombinedError) => {
    //     throw new Error(error.message)
    //   })
  }
}
