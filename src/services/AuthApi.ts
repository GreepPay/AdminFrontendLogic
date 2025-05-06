import { BaseApiService } from "./common/BaseService"
import { OperationResult } from "urql"
import {
  User,
  AuthResponse,
  MutationSignInArgs,
  MutationSignUpArgs,
  MutationActivateAdminAccountArgs,
} from "src/gql/graphql"

export default class AuthApi extends BaseApiService {
  // Queries
  public GetAuthUser = () => {
    const requestData = `
      query GetAuthUser {
        GetAuthUser {
          uuid
          first_name
          last_name
          phone
          email_verified_at
          phone_verified_at
          username
          profile {
            profile_picture
            verification_status
            default_currency
            business {
              banner
              business_name
              city
              country
              description
              logo
            }
          }
          wallet {
            total_balance
            point_balance
            currency
            state
          }
        }
      }
		`

    const response: Promise<
      OperationResult<{
        GetAuthUser: User
      }>
    > = this.query(requestData, {})

    return response
  }

  // Mutation
  public SignIn = (data: MutationSignInArgs) => {
    const requestData = `
      mutation SignIn($email: String!, $password: String!) {
        SignIn(email: $email, password: $password) {
          token
          user {
            id
            email
            uuid
            role {
              id
              name
              created_at
              description
            }  
            created_at
            first_name
            email_verified_at
            last_name
            status
            updated_at
            username 
            phone
            phone_verified_at
          }
        }
      } 
		`

    const response: Promise<OperationResult<{ SignIn: AuthResponse }>> =
      this.mutation(requestData, data)

    return response
  }

  public SignUp = (data: MutationSignUpArgs) => {
    const requestData = `
    mutation SignUp($email: String!) {
      SignUp(email: $email) {
        id
        uuid
        first_name
        last_name
        username
        email
        phone
        email_verified_at
        phone_verified_at
        status
        profile {
          avatar
          gender
          address
        }
        wallet {
          id
          balance
          currency
        }
        created_at
        updated_at
        role {
          id
          name
        }
      }
    }
  `
    const response: Promise<
      OperationResult<{
        SignUp: User
      }>
    > = this.mutation(requestData, data)

    console.log("response", response)

    return response
  }

  public ActivateAdminAccount = (data: MutationActivateAdminAccountArgs) => {
    const requestData = `
    mutation ActivateAdminAccount(
      $email: String!
      $otp: String!
      $first_name: String!
      $last_name: String!
      $password: String!
    ) {
      ActivateAdminAccount(
        email: $email
        otp: $otp
        first_name: $first_name
        last_name: $last_name
        password: $password
      ) {
        id
        uuid
        first_name
        last_name
        username
        email
        phone
        email_verified_at
        phone_verified_at
        status
        profile {
          avatar
          gender
          address
        }
        wallet {
          id
          balance
          currency
        }
        created_at
        updated_at
        role {
          id
          name
        }
      }
    }
  `

    const response: Promise<
      OperationResult<{
        ActivateAdminAccount: User
      }>
    > = this.mutation(requestData, data)

    console.log("response", response)

    return response
  }

  public AdminLogout = () => {
    const requestData = `
    mutation AdminLogout {
      AdminLogout
    }
  `

    const response: Promise<
      OperationResult<{
        AdminLogout: boolean
      }>
    > = this.mutation(requestData, {})

    console.log("response", response)

    return response
  }
}
