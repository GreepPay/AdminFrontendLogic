import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"
import { MutationUpdateUserRoleArgs, ProfilePaginator } from "src/gql/graphql"

export default class UserApi extends BaseApiService {
  //
  public UpdateUserRole = (data: MutationUpdateUserRoleArgs) => {
    const requestData = `
    mutation UpdateUserRole($uuid: String!, $role: String!) {
      UpdateUserRole(uuid: $uuid, role: $role)
    }
  `

    const response: Promise<
      OperationResult<{
        UpdateUserRole: boolean
      }>
    > = this.mutation(requestData, data)

    return response
  }

  public DeleteUser = (user_uuid: string) => {
    const requestData = `
    mutation DeleteUser($user_uuid: String!) {
      DeleteUser(user_uuid: $user_uuid)
    }
  `

    const response: Promise<
      OperationResult<{
        DeleteUser: boolean
      }>
    > = this.mutation(requestData, { user_uuid })

    return response
  }

  public FreezeAccount = (user_uuid: string) => {
    const requestData = `
    mutation FreezeAccount($user_uuid: String!) {
      FreezeAccount(user_uuid: $user_uuid)
    }
  `
    const response: Promise<
      OperationResult<{
        FreezeAccount: boolean
      }>
    > = this.mutation(requestData, { user_uuid })

    console.log("FreezeAccount response", response)

    return response
  }

  public UnfreezeAccount = (user_uuid: string) => {
    const requestData = `
    mutation UnfreezeAccount($user_uuid: String!) {
      UnfreezeAccount(user_uuid: $user_uuid)
    }
  `
    const response: Promise<
      OperationResult<{
        UnfreezeAccount: boolean
      }>
    > = this.mutation(requestData, { user_uuid })

    console.log("UnfreezeAccount response", response)

    return response
  }

  // Queries
  // public GetAllAdminProfiles = () => {
  //   const requestData = `
  //     query GetProfiles {
  //       GetProfiles(
  //         first: 10
  //         # where: {
  //         #   column: USER_TYPE
  //         #   operator: EQ
  //         #   value: "Business"
  //         # }
  //         # whereUser: {
  //         #   column: FIRST_NAME
  //         #   operator: LIKE
  //         #   value: "John"
  //         # }
  //         # whereUserRole: {
  //         #   column: NAME
  //         #   operator: EQ
  //         #   value: "Admin"
  //         # }
  //       ) {
  //         paginatorInfo {
  //           currentPage
  //           lastPage
  //           perPage
  //           total
  //           hasMorePages
  //         }
  //         data {
  //           auth_user_id
  //           user_type
  //           verification_status
  //           default_currency
  //            updated_at
  //           user {
  //             uuid
  //             first_name
  //             email
  //             last_name
  //             profile {
  //               profile_picture
  //             }
  //             role {
  //               name 
  //               id
  //               description
  //             }
  //           } 
  //           # customer {
  //           #   country
  //           # }
  //         }
  //       }
  //     } 
  // `

  //   const response: Promise<
  //     OperationResult<{
  //       GetProfiles: any
  //     }>
  //   > = this.query(requestData, {})

  //   return response
  // }

  //
  public GetCustomerProfiles = (first: number, page: number) => {
    const requestData = `
   query GetProfiles ($first: Int!, $page: Int!)  {
      GetProfiles (
        first: $first,
        page: $page  
        where: {
          column: USER_TYPE
          operator: EQ
          value: "Customer"
        }
      ) {
        paginatorInfo {
          firstItem
          lastItem
          currentPage
          lastPage
          perPage
          total
          hasMorePages
        }
        data {
          auth_user_id 
            updated_at
            user {
              uuid
              first_name 
              last_name
              profile {
                profile_picture
              } 
            }  
          }
        }
      }
  `
    const response: Promise<
      OperationResult<{
        GetProfiles: ProfilePaginator
      }>
    > = this.query(requestData, { first, page })

    return response
  }

  //
  public GetMerchantProfiles = (first: number, page: number) => {
    const requestData = `
   query GetProfiles  ($first: Int!, $page: Int!)  {
  GetProfiles(
      first: $first,
    page: $page  
    where: {
      column: USER_TYPE
      operator: EQ
      value: "Business"
    }
  ) {
    paginatorInfo {
     firstItem
      lastItem
      currentPage
      lastPage
      perPage
      total
      hasMorePages
    }
    data {
        auth_user_id 
        updated_at
        user {
          uuid
          first_name 
          last_name
          profile {
            profile_picture
          } 
        }  
      }
    }
  }
  `

    const response: Promise<
      OperationResult<{
        GetProfiles: any
      }>
    > = this.query(requestData, { first, page })

    return response
  }

  //
  public GetAdminProfiles = (first: number, page: number) => {
    const requestData = `
  query GetProfiles  ($first: Int!, $page: Int!)  {
  GetProfiles(
      first: $first,
      page: $page  
      whereUserRole: {
      column: NAME
      operator: IN
      value: ["Admin", "SuperAdmin"]
    }

  ) {
    paginatorInfo {
     firstItem
      lastItem
      currentPage
      lastPage
      perPage
      total
      hasMorePages
    }
    data {
       auth_user_id
            user_type
            verification_status
            default_currency
             updated_at
            user {
              uuid
              first_name
              email
              last_name
              profile {
                profile_picture
              }
              role {
                name 
                id
                description
              }
            } 
          }
        }
      }

  `
    const response: Promise<
      OperationResult<{
        GetProfiles: any
      }>
    > = this.query(requestData, { first, page })

    return response
  }
}

/* 
whereUser: {
      column: FIRST_NAME
      operator: LIKE
      value: "John"
    }
whereUser: {
      column: LAST_NAME
      operator: LIKE
      value: "John"
    }
whereUser: {
      column: EMAIL
      operator: LIKE
      value: “ufelidan@gmail.com”
    }

you can use this if u want to search for a customer using FIRST_NAME, LAST_NAME, EMAIL
 */
