import { BaseApiService } from "./common/BaseService"
import { OperationResult } from "urql"
import {
  User,
  AuthResponse,
  MutationSignInArgs,
  MutationActivateAdminAccountArgs,
} from "src/gql/graphql"

export default class AuthApi extends BaseApiService {
  // Queries
  public GetAuthUser = () => {
    const requestData = `
      query GetAuthUser {
        GetAuthUser {
          id
          email
          uuid
          profile {
                profile_picture
              }
          role {
            id
            name
            created_at
            description
          }  
          created_at
          first_name 
          last_name
          status
          updated_at
          username 
          phone
          phone_verified_at
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
            profile {
                profile_picture
              }
            role {
              id
              name
              created_at
              description
            }  
            created_at
            first_name 
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

  public SignUp = (email: string) => {
    const requestData = `
    mutation SignUp($email: String!) {
      SignUp(email: $email) {
      id
      email
          profile { 
                profile_picture 
      user_type
      verification_status
      }

      }
    }
  `
    const response: Promise<
      OperationResult<{
        SignUp: User
      }>
    > = this.mutation(requestData, { email })

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
        email
        uuid
        role {
          id
          name
          created_at
          description
        }  
      }
    }
  `

    const response: Promise<
      OperationResult<{
        ActivateAdminAccount: User
      }>
    > = this.mutation(requestData, data)

    
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
 
    return response
  }
}
