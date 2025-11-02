import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"
import { MutationUpdateUserRoleArgs, 
        ProfilePaginator, 
        Customer,
        Business,
        EventHostStatsPaginator,
        UserTicketStatsPaginator,
        ExchangeAdStatsPaginator,
        VendorOverviewContent,
        VendorOrderStatsPaginator,
        VendorProductStatsPaginator,
} from "src/gql/graphql"

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

     
    return response
  }

  // Queries
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
    page: $page,  
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

  // New query methods
  public GetBusinesses = (first: number, page: number) => {
    const requestData = `
    query GetBusinesses($first: Int!, $page: Int!) {
      GetBusinesses(first: $first, page: $page) {
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
          id
          auth_user_id
          business_name
          logo
          location
          banner
          description
          website
          resident_permit
          passport
          registration_number
          documents
          created_at
          updated_at
          country
          city
          getEventHostsWithStats {
            business_name
            business_logo
            events_created
            events_completed
            events_cancelled
            total_ticket_cost
            total_tickets_sold
          }
        }
      }
    }
    `

    const response: Promise<
      OperationResult<{
        GetBusinesses: {
          paginatorInfo: {
            firstItem: number
            lastItem: number
            currentPage: number
            lastPage: number
            perPage: number
            total: number
            hasMorePages: boolean
          }
          data: Business[]
        }
      }>
    > = this.query(requestData, { first, page })

    return response
  }

  public GetCustomers = (first: number, page: number) => {
    const requestData = `
    query GetCustomers($first: Int!, $page: Int!) {
      GetCustomers(first: $first, page: $page) {
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
          id
          city
          country
          created_at
          location
          notification_preferences
          passport
          resident_permit
          student_id
          updated_at
          getUsersWithTicketStats {
            user_name
            profile_picture
            total_events_bought
            total_tickets_bought
          }
        }
      }
    }
    `

    const response: Promise<
      OperationResult<{
        GetCustomers: {
          paginatorInfo: {
            firstItem: number
            lastItem: number
            currentPage: number
            lastPage: number
            perPage: number
            total: number
            hasMorePages: boolean
          }
          data: Customer[]
        }
      }>
    > = this.query(requestData, { first, page })

    return response
  }
  
  
  public GetEventHosts = (first: number, page: number) => {
    const requestData = `
      query GetEventHosts($first: Int!, $page: Int) {
        GetEventHosts(first: $first, page: $page) {
          paginatorInfo {
            count
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
            count
          }
          data {
            id
            total_tickets_sold
            total_ticket_cost
            events_created
            events_completed
            events_cancelled
            business_name
            business_logo
          }
        }
      }
    `
    const response: Promise<
      OperationResult<{ GetEventHosts: EventHostStatsPaginator }>
    > = this.query(requestData, { first, page })
  
    return response
  }
  
  public GetEventAttendees = (first: number, page: number) => {
    const requestData = `
      query GetEventAttendees($first: Int, $page: Int) {
        GetEventAttendees(first: $first, page: $page) {
          paginatorInfo {
            count
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
          }
          data {
            id
            user_name
            total_tickets_bought
            total_events_bought
            profile_picture
          }
        }
      }
    `
    const response: Promise<
      OperationResult<{ GetEventAttendees: UserTicketStatsPaginator }>
    > = this.query(requestData, { first, page })
  
    return response
  }

  public GetExchangeAds = (first: number, page: number) => {
    const requestData = `
      query GetExchangeAds($first: Int, $page: Int) {
        GetExchangeAds(first: $first, page: $page) {
          paginatorInfo {
            count
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
          }
          data {
            volume
            user_balance
            rate
            percent_of_successful_trades
            no_of_orders
            min_amount
            max_amount
            currencies {
              to
              from
            }
            business_name
            business_logo
          }
        }
      }
    `
    const response: Promise<
      OperationResult<{ GetExchangeAds: ExchangeAdStatsPaginator }>
    > = this.query(requestData, { first, page })
  
    return response
  }
 
  public GetVendorProductStats = (first: number, page: number) => {
    const requestData = `
      query GetVendorProductStats($first: Int!, $page: Int!) {
        GetVendorProductStats(first: $first, page: $page) {
          paginatorInfo {
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
            count
          }
          data {
            product_type
            product_title
            product_price
            currency
            product_left
            product_category
            product_image
            number_sold
            id
            Variants
          }
        }
      }
    `
    const response: Promise<
      OperationResult<{ GetVendorProductStats: VendorProductStatsPaginator }>
    > = this.query(requestData, { first, page })

    return response
  }

  public GetVendorOrderStats = (first: number, page: number) => {
    const requestData = `
      query GetVendorOrderStats($first: Int, $page: Int) {
        GetVendorOrderStats(first: $first, page: $page) {
          paginatorInfo {
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
            count
          }
          data {
            total_cost_ordered
            products {
              unit_price
              total_price
              quantity
              product_title
              product_image
              product_id
            }
            order_status
            number_of_items
            id
            date_time
            customer
            currency
          }
        }
      }
    `
    const response: Promise<
      OperationResult<{ GetVendorOrderStats: VendorOrderStatsPaginator }>
    > = this.query(requestData, { first, page })

    return response
  }

  public GetVendorOverviewContent = (range: string) => {
    const requestData = `
      query GetVendorOverviewContent($range: String!) {
        GetVendorOverviewContent(range: $range) {
          vendors
          products_sold
          products_listed
          product_sales
          orders_shipped
          orders_refunded
          orders_completed
          orders_accepted
          order_requests
        }
      }
    `
    const response: Promise<
      OperationResult<{ GetVendorOverviewContent: VendorOverviewContent }>
    > = this.query(requestData, { range })

    return response
  }

  

}