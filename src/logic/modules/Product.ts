import {
  QueryGetProductsOrderByOrderByClause,
  QueryGetCategoriesOrderByOrderByClause,
  Product as GqlProduct,
  ProductPaginator,
  Category,
  CategoryPaginator,
  Ticket, 
  TicketPaginator, 
  ProductVariant ,
  EventOverviewContent,
} from "../../gql/graphql";

import { $api } from "../../services";
import { CombinedError } from "urql";
import Common from "./Common";
import { Logic } from "..";

export default class Product extends Common {
  // Base Variables
  public ProductsPaginator: ProductPaginator | undefined;
  public SingleProduct: GqlProduct | undefined;
  public ProductCategoriesPagination: CategoryPaginator | undefined;
  public ManyShopProducts: ProductPaginator | undefined;
  public ManyEventProducts: ProductPaginator | undefined;
  public EventOverviewContent: EventOverviewContent | undefined;
  public EventTickets: ProductVariant[] | undefined;
  public TicketsPaginator: TicketPaginator | undefined;
  public SingleTicket: Ticket | undefined;

  constructor() {
    super();
    this.defineReactiveProperty("SingleProduct", undefined);
    this.defineReactiveProperty("ManyShopProducts", undefined);
    this.defineReactiveProperty("ManyEventProducts", undefined);
    this.defineReactiveProperty("ProductsPaginator", undefined);
    this.defineReactiveProperty("ProductCategoriesPagination", undefined);
    this.defineReactiveProperty("EventOverviewContent", undefined);
    this.defineReactiveProperty("TicketsPaginator", undefined);
    this.defineReactiveProperty("SingleTicket", undefined);
    this.defineReactiveProperty("EventTickets", undefined);
  }

  public GetShopProducts = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    searchQuery = "",
    isSearch = false
  ) => {
    let whereQuery = "";

    if (searchQuery) {
      whereQuery = `{
          column: NAME
          operator: LIKE
          value: "%${searchQuery}%"
          AND: {
            column: TYPE
            operator: EQ
            value: "physical"
            OR: {
              column: TYPE
              operator: EQ
              value: "digital"
            }
          }
        }`;
    } else {
      whereQuery = `{
          column: TYPE
          operator: EQ
          value: "physical"
          OR: {
            column: TYPE
            operator: EQ
            value: "digital"
          }
        }`;
    }

    return $api.product
      .GetProducts(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyShopProducts = response.data?.GetProducts;
        }
        return response.data?.GetProducts;
      });
  };

  public GetEventProducts = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    searchQuery = "",
    isSearch = false
  ) => {
    let whereQuery = "";

    if (searchQuery) {
      whereQuery = `{
          column: NAME
          operator: LIKE
          value: "%${searchQuery}%"
          AND: {
            column: TYPE
            operator: EQ
            value: "event"
          }
        }`;
    } else {
      whereQuery = `{
          column: TYPE
          operator: EQ
          value: "event"
        }`;
    }

    return $api.product
      .GetProducts(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyEventProducts = response.data?.GetProducts;
        }
        return response.data?.GetProducts;
      });
  };

public GetProduct = async (uuid: string) => {
    return $api.product.GetProduct(uuid).then((response) => {
      this.SingleProduct = response.data?.GetProduct;
      return response.data?.GetProduct;
    });
  };
 
  
public GetEventOverview = async(range: string)=>{
  return $api.commerce.GetEventOverviewContent(range).then((response)=>{
    this.EventOverviewContent = response.data?.GetEventOverviewContent;
    return response.data?.GetEventOverviewContent;
    
  }); 
} 
    
      
  
public GetSingleProduct = async (
    product_id: string | number
  ): Promise<GqlProduct | undefined> => {
    const where = {
      column: "ID",
      operator: "EQ",
      value: String(product_id),
    };
    return $api.product
      .GetSingleProduct(where)
      .then((response) => {
        this.SingleProduct = response.data?.GetSingleProduct;
        return this.SingleProduct;
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(
          error,
          "Failed to fetch product details",
          "error-alert"
        );
        return undefined;
      });
  };

  public GetCategories = async (
    first: number,
    page: number,
    orderBy?: QueryGetCategoriesOrderByOrderByClause[]
  ): Promise<CategoryPaginator | undefined> => {
    return $api.product
      .GetCategories(first, page, orderBy ?? [])
      .then((response) => {
        this.ProductCategoriesPagination = response.data?.GetCategories;
        return this.ProductCategoriesPagination;
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(
          error,
          "Failed to fetch categories",
          "error-alert"
        );
        return undefined;
      });
  };
  
  public GetMyTickets = async (
    first: number,
    page: number
  ): Promise<TicketPaginator | undefined> => {
    return $api.product
      .GetMyTickets(first, page)
      .then((response) => {
        this.TicketsPaginator = response.data?.GetMyTickets;
        return this.TicketsPaginator;
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(error, "Failed to fetch tickets", "error-alert");
        return undefined;
      });
  };
}
