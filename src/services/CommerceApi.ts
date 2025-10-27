// import { QueryGetProfilesArgs } from "src/gql/graphql"
import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"
import { User,   QueryGetCategoryEventStatsWhereWhereConditions, CategoryEventStats  } from "../gql/graphql"

import {
  VendorOverviewContent,
 EventOverviewContent,
 CategoryPaginator,
 AllEventContentPaginator,
 
} from "../gql/graphql"
export default class CommerceApi extends BaseApiService {
  // Queries
  
  public GetEventOverviewContent = (range: string) => {
    const requestData = `
    query GetEventOverviewContent ($range: String) {
      GetEventOverviewContent (range: $range) {
        ongoing_events
        ongoing_events_attendees
        ongoing_events_checkedin
        events_created
        events_cancelled
        upcoming_events
        event_hosts
        tickets_sold
        ticket_sales
        ticket_cost
        total_volume
      }
    }
  `

    const response: Promise<
      OperationResult<{ GetEventOverviewContent: EventOverviewContent }>
    > = this.query(requestData, { range })
    return response
  }

  public GetVendorOverviewContent = (range: string) => {
    const requestData = `
    query GetVendorOverviewContent ($range: String) {
      GetVendorOverviewContent (range: $range) {
        product_sales
        product_listed
        products_sold
        vendors
        order_requests
        orders_accepted
        orders_shipped
        orders_completed
      }
    }
  `

    const response: Promise<
      OperationResult<{ GetVendorOverviewContent: VendorOverviewContent }>
    > = this.query(requestData, { range })
    return response
  }

  public GetAuthUser = () => {
    const requestData = `
    query GetAuthUser {
      GetAuthUser {
        id
        uuid
        first_name
        last_name
        email
        status
        created_at
        updated_at
      }
    }
  `

    const response: Promise<
      OperationResult<{ GetAuthUser: User }>
    > = this.query(requestData, {})
    return response
  }
  
  
  public GetCategoryEventStats = (
    where: QueryGetCategoryEventStatsWhereWhereConditions
  ) => {
    const requestData = `
      query GetCategoryEventStats($where: QueryGetCategoryEventStatsWhereWhereConditions) {
        GetCategoryEventStats(where: $where) {
          id
          name
          # Add other Category fields you need
          products_count # If you want the count for your popularity index
        }
      }
    `;
  
    const response: Promise<
      OperationResult<{
        GetCategoryEventStats: Array<{
          id: number;
          name: string;
          products_count?: number;
        }>;
      }>
    > = this.query(requestData, { where });
  
    return response;
  };
  
  
  public GetAllEventContent = (first: number, page: number) => {
   
    const requestData = `
     
     query GetAllEventContent($first: Int, $page: Int) {
       GetAllEventContent(first: $first, page: $page) {
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
           id 
           ticket_revenue
           ticket_price
           status
           no_of_tickets_sold
           location
           image_url
           event_title
           eventStartDate
           eventOnlineUrl
           eventEndDate
         }
       }
     }      
     `
   
    const response: Promise<
      OperationResult<{ GetAllEventContent: AllEventContentPaginator }>
    > = this.query(requestData, { first, page }) 
   
    return response
  }
  
  
}