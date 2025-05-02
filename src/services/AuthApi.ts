import { BaseApiService } from "./common/BaseService"
import { OperationResult } from "urql"
import {
  User,
  AuthResponse,
  MutationSignInArgs,
  MutationUpdateUserRoleArgs,
  MutationDeleteUserArgs,
  MutationMarkNotificationsAsReadArgs,
  MutationFreezeAccountArgs,
  MutationUnfreezeAccountArgs,
  MutationApproveRejectVerificationRequestArgs,
  MutationUpdateWithdrawalStatusArgs,
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

  //   public ResendEmailOTP = (data: MutationResendEmailOtpArgs) => {
  //     const requestData = `
  //     mutation ResendEmailOTP($email: String!) {
  //       ResendEmailOTP(email: $email)
  //     }
  //   `

  //     const response: Promise<OperationResult<{ ResendEmailOTP: boolean }>> =
  //       this.mutation(requestData, data)

  //     return response
  //   }
}
