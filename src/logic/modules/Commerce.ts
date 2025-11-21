import Common from "./Common";
import {
  QueryGetCategoryEventStatsWhereWhereConditions,
  QueryGetCategoryEventStatsWhereColumn,
  QueryWhereOperators,
  VendorOverviewContent,
  CategoryEventStats,
  AllEventContentPaginator,
 
} from "../../gql/graphql";
import { $api } from "../../services";
import { CombinedError } from "urql";
import { Logic } from "..";


export default class Commerce extends Common {
    // Base Variables
    public   VendorOverviewContent:   VendorOverviewContent| undefined;
    public CategoryEventStats: CategoryEventStats | undefined;
    public AllEventContentPaginator:AllEventContentPaginator|undefined;
  constructor() {
    super();
    this.defineReactiveProperty("VendorOverviewContent", undefined);
    this.defineReactiveProperty("AllEventContentPaginator", undefined);
  }
  
  public GetVendorOverview = async(range: string)=>{
    return $api.commerce.GetVendorOverviewContent(range).then((response)=>{
      this.VendorOverviewContent = response.data?.GetVendorOverviewContent;
      return response.data?.GetVendorOverviewContent;
      
    }); 
      
    }  
    
    
    public GetAllEventContent = async (
      first: number = 10,
      page: number = 1,
      orderType = "CREATED_AT",
      order = "DESC" as "DESC" | "ASC",
    ): Promise<AllEventContentPaginator | undefined> => {
      return $api.commerce.GetAllEventContent(orderType,order,first, page).then((response) => {
        this.AllEventContentPaginator = response.data?.GetAllEventContent;
        return this.AllEventContentPaginator;
      });
    }
  
    
    public GetCategoryEventStats = async (
      city: string,
      startDate: string,
      endDate: string
    ): Promise<any[] | undefined> => {
      const where: QueryGetCategoryEventStatsWhereWhereConditions = {
        AND: [
          { 
            column: QueryGetCategoryEventStatsWhereColumn.EventLocation, // "eventLocation"
            operator: QueryWhereOperators.Like, 
            value: `%${city}%` 
          },
          { 
            column: QueryGetCategoryEventStatsWhereColumn.CreatedAt, // "created_at" 
            operator: QueryWhereOperators.Gte, 
            value: startDate 
          },
          { 
            column: QueryGetCategoryEventStatsWhereColumn.CreatedAt, // "created_at"
            operator: QueryWhereOperators.Lte, 
            value: endDate 
          }
        ]
      };
    
      return $api.commerce
        .GetCategoryEventStats(where)
        .then((response) => {
          const categories = response.data?.GetCategoryEventStats;
          // Transform to match your popularity index format
          const popularityData = categories?.map(category => ({
            category: category.name,
            count: category.products_count || 0 // Use actual count field
          }));
          return popularityData;
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(
            error,
            "Failed to fetch category event stats",
            "error-alert"
          );
          return undefined;
        });
    };
  

}