import { $api } from "../../services"
import { CombinedError } from "urql"
import Common from "./Common"
import { MutationSignInArgs, User } from "src/gql/graphql"

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
  public ActivateAccountPayload: MutationSignInArgs | undefined

  // Private methods
  private SetUpAuth = (AuthResponse: any | undefined) => {
    console.log("AuthResponse", AuthResponse)
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
    return $api.auth.GetAuthUser().then((response) => {
      this.AuthUser = response.data?.GetAuthUser
      localStorage.setItem("auth_user", JSON.stringify(this.AuthUser))
      return this.AuthUser
    })
  }

  // Mutations
  public SignIn = (formIsValid: boolean) => {
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
          console.log("error", error)
          throw new Error(error.message)
        })
    }
  }

  public ActivateAccount = (formIsValid: boolean) => {
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
    }
  }

  // SignUp

  // SignIn

  // ActivateAdminAccount

  // AdminLogout
  // Queries:

  // GetAuthUser
}
