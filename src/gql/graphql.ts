/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** Arbitrary data encoded in JavaScript Object Notation. See https://www.json.org. */
  JSON: any;
  /**
   * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
   * as they may not be parsed correctly on the server side. Use `String` literals if you are
   * dealing with really large numbers to be on the safe side.
   */
  Mixed: any;
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: any;
};

/** A blockchain account */
export type Account = {
  __typename?: 'Account';
  /** Account Type */
  account_type: Scalars['String'];
  /** Account Created At */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Account Status */
  status: Scalars['String'];
  /** Stellar Address */
  stellar_address: Scalars['String'];
  /** Account Updated At */
  updated_at?: Maybe<Scalars['DateTime']>;
  /** Unique UUID */
  uuid: Scalars['String'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String'];
  user: User;
};

/** Business profile details. */
export type Business = {
  __typename?: 'Business';
  auth_user_id?: Maybe<Scalars['String']>;
  /** Business banner URL. */
  banner?: Maybe<Scalars['String']>;
  /** Business name. */
  business_name?: Maybe<Scalars['String']>;
  /** Business city */
  city?: Maybe<Scalars['String']>;
  /** Business country */
  country?: Maybe<Scalars['String']>;
  /** When the business profile was created. */
  created_at: Scalars['DateTime'];
  /** Business description. */
  description?: Maybe<Scalars['String']>;
  /** Array of document URLs. */
  documents?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Unique identifier for the business. */
  id: Scalars['String'];
  /** Business location. */
  location?: Maybe<Scalars['String']>;
  /** Business logo URL. */
  logo?: Maybe<Scalars['String']>;
  /** Business passport document URL. */
  passport?: Maybe<Scalars['String']>;
  /** Business registration number. */
  registration_number?: Maybe<Scalars['String']>;
  /** Business resident permit document URL. */
  resident_permit?: Maybe<Scalars['String']>;
  /** When the business profile was last updated. */
  updated_at: Scalars['DateTime'];
  /** Business website URL. */
  website?: Maybe<Scalars['String']>;
};

export type BusinessOverview = {
  __typename?: 'BusinessOverview';
  fee: Scalars['Float'];
  income: Scalars['Float'];
  shopSales: Scalars['Float'];
  withdrawals: Scalars['Float'];
};

export type BusinessProfile = {
  __typename?: 'BusinessProfile';
  auth_user_id: Scalars['String'];
  business?: Maybe<Business>;
  created_at: Scalars['DateTime'];
  default_currency: Scalars['String'];
  profile_picture?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  user?: Maybe<User>;
  user_type: Scalars['String'];
  verification_status: Scalars['String'];
  verifications: Array<Verification>;
};

/** A single customer profile */
export type Customer = {
  __typename?: 'Customer';
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Profile Created At */
  created_at: Scalars['DateTime'];
  /** Unique ID */
  id: Scalars['String'];
  /** Location */
  location?: Maybe<Scalars['String']>;
  /** Notification Preferences */
  notification_preferences: Scalars['String'];
  /** Passport */
  passport?: Maybe<Scalars['String']>;
  /** Resident Permit */
  resident_permit?: Maybe<Scalars['String']>;
  /** Student ID */
  student_id?: Maybe<Scalars['String']>;
  /** Profile Updated At */
  updated_at: Scalars['DateTime'];
};

export type CustomerOverview = {
  __typename?: 'CustomerOverview';
  added: Scalars['Float'];
  fee: Scalars['Float'];
  purchases: Scalars['Float'];
  sent: Scalars['Float'];
};

export type CustomerProfile = {
  __typename?: 'CustomerProfile';
  auth_user_id: Scalars['String'];
  created_at: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  default_currency: Scalars['String'];
  profile_picture?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  user?: Maybe<User>;
  user_type: Scalars['String'];
  verification_status: Scalars['String'];
  verifications: Array<Verification>;
};

export type DateRangeInput = {
  from?: InputMaybe<Scalars['DateTime']>;
  to?: InputMaybe<Scalars['DateTime']>;
};

export enum DocumentType {
  InternationalPassport = 'International_Passport',
  License = 'License',
  ResidentPermit = 'Resident_Permit',
  StudentId = 'Student_ID'
}

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  rates: Array<ExchangeRateItem>;
};

export type ExchangeRateItem = {
  __typename?: 'ExchangeRateItem';
  buy: Scalars['Float'];
  code: Scalars['String'];
  locale: Scalars['String'];
  rateId: Scalars['String'];
  sell: Scalars['Float'];
  updatedAt: Scalars['String'];
};

export type GeneralOverview = {
  __typename?: 'GeneralOverview';
  totalCustomers: Scalars['Int'];
  totalMerchants: Scalars['Int'];
  totalTransactions: Scalars['Int'];
  totalVolume: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ActivateAdminAccount: User;
  AdminLogout: Scalars['Boolean'];
  ApproveRejectVerificationRequest: Scalars['Boolean'];
  DeleteUser: Scalars['Boolean'];
  FreezeAccount: Scalars['Boolean'];
  /** Mark specific notifications as read for the authenticated user. */
  MarkNotificationsAsRead?: Maybe<Scalars['Boolean']>;
  ResendEmailOTP: Scalars['Boolean'];
  SignIn: AuthResponse;
  SignUp: User;
  UnfreezeAccount: Scalars['Boolean'];
  UpdateUserRole: Scalars['Boolean'];
  UpdateWithdrawalStatus?: Maybe<Transaction>;
};


export type MutationActivateAdminAccountArgs = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  otp: Scalars['String'];
  password: Scalars['String'];
};


export type MutationApproveRejectVerificationRequestArgs = {
  status: Scalars['String'];
  user_uuid: Scalars['String'];
  verificationId: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  user_uuid: Scalars['String'];
};


export type MutationFreezeAccountArgs = {
  user_uuid: Scalars['String'];
};


export type MutationMarkNotificationsAsReadArgs = {
  notification_ids: Array<Scalars['Int']>;
};


export type MutationResendEmailOtpArgs = {
  email: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
};


export type MutationUnfreezeAccountArgs = {
  user_uuid: Scalars['String'];
};


export type MutationUpdateUserRoleArgs = {
  role: Scalars['String'];
  uuid: Scalars['String'];
};


export type MutationUpdateWithdrawalStatusArgs = {
  status: Scalars['String'];
  transaction_id: Scalars['ID'];
};

/** A notification on Greep */
export type Notification = {
  __typename?: 'Notification';
  /** User UUID to whom the notification belongs */
  auth_user_id: Scalars['String'];
  /** Notification Content */
  content: Scalars['String'];
  /** Notification Created At */
  created_at: Scalars['DateTime'];
  /** Delivery status of the notification */
  delivery_status: Scalars['String'];
  /** Email address if the notification is an email */
  email?: Maybe<Scalars['String']>;
  /** Unique ID */
  id: Scalars['Int'];
  /** Whether the notification has been read */
  is_read: Scalars['Boolean'];
  /** Notification Title */
  title: Scalars['String'];
  /** Notification Type: Email or Push */
  type: Scalars['String'];
  /** Notification Updated At */
  updated_at: Scalars['DateTime'];
};

/** A paginated list of Notification items. */
export type NotificationPaginator = {
  __typename?: 'NotificationPaginator';
  /** A list of Notification items. */
  data: Array<Notification>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

/** A single point transaction */
export type PointTransaction = {
  __typename?: 'PointTransaction';
  /** Transaction Amount */
  amount: Scalars['Float'];
  /** Charge ID */
  charge_id: Scalars['String'];
  /** Chargeable Type */
  chargeable_type: Scalars['String'];
  /** PointTransaction Created At */
  created_at: Scalars['DateTime'];
  /** Currency (default: 'USDC') */
  currency: Scalars['String'];
  /** Point Transaction Description */
  description: Scalars['String'];
  /** Credit or Debit: 'credit' or 'debit' */
  dr_or_cr: Scalars['String'];
  /** Extra Data (JSON string) */
  extra_data?: Maybe<Scalars['String']>;
  /** Point Balance */
  point_balance: Scalars['Float'];
  /** Point Transaction Reference */
  reference: Scalars['String'];
  /** State of the point transaction ('active' or 'archived') */
  state: Scalars['String'];
  /** Point Transaction Status ('default', 'pending', 'successful') */
  status: Scalars['String'];
  /** Point Transaction Updated At */
  updated_at: Scalars['DateTime'];
  /** User ID */
  user_id: Scalars['Int'];
  /** Unique UUID */
  uuid: Scalars['String'];
  /** Wallet ID */
  wallet_id: Scalars['Int'];
};

export type Profile = {
  __typename?: 'Profile';
  auth_user_id: Scalars['String'];
  business?: Maybe<Business>;
  created_at: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  default_currency?: Maybe<Scalars['String']>;
  profile_picture?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  user?: Maybe<User>;
  user_type: UserType;
  verification_status: VerificationStatus;
  verifications: Array<Verification>;
};

/** A paginated list of Profile items. */
export type ProfilePaginator = {
  __typename?: 'ProfilePaginator';
  /** A list of Profile items. */
  data: Array<Profile>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ProfileUnion = BusinessProfile | CustomerProfile;

export type Query = {
  __typename?: 'Query';
  /** Get the authenticated user */
  GetAuthUser?: Maybe<User>;
  GetCustomerOverview: CustomerOverview;
  GetGeneralOverview: GeneralOverview;
  GetMerchantOverview: BusinessOverview;
  GetNotifications: NotificationPaginator;
  GetProfiles: ProfilePaginator;
  GetSingleTransaction?: Maybe<Transaction>;
  GetTransactionOverview: TransactionOverview;
  GetTransactions: TransactionPaginator;
  GetVerificationRequests: VerificationPaginator;
  GetWalletHistory: TransactionPaginator;
  GetWallets: WalletPaginator;
  GetWithdrawals: TransactionPaginator;
};


export type QueryGetCustomerOverviewArgs = {
  range?: InputMaybe<Scalars['String']>;
};


export type QueryGetGeneralOverviewArgs = {
  range?: InputMaybe<Scalars['String']>;
};


export type QueryGetMerchantOverviewArgs = {
  range?: InputMaybe<Scalars['String']>;
};


export type QueryGetNotificationsArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetProfilesArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetProfilesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetProfilesWhereWhereConditions>;
  whereUser?: InputMaybe<QueryGetProfilesWhereUserWhereHasConditions>;
  whereUserRole?: InputMaybe<QueryGetProfilesWhereUserRoleWhereHasConditions>;
};


export type QueryGetSingleTransactionArgs = {
  transaction_uuid: Scalars['String'];
};


export type QueryGetTransactionOverviewArgs = {
  range?: InputMaybe<Scalars['String']>;
};


export type QueryGetTransactionsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetTransactionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<QueryGetTransactionsWhereWhereConditions>;
  whereProfile?: InputMaybe<QueryGetTransactionsWhereProfileWhereHasConditions>;
  whereUser?: InputMaybe<QueryGetTransactionsWhereUserWhereHasConditions>;
};


export type QueryGetVerificationRequestsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetVerificationRequestsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetVerificationRequestsWhereWhereConditions>;
  whereUser?: InputMaybe<QueryGetVerificationRequestsWhereUserWhereHasConditions>;
};


export type QueryGetWalletHistoryArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetWalletHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetWalletHistoryWhereWhereConditions>;
};


export type QueryGetWalletsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetWalletsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetWalletsWhereWhereConditions>;
  whereProfile?: InputMaybe<QueryGetWalletsWhereProfileWhereHasConditions>;
  whereUser?: InputMaybe<QueryGetWalletsWhereUserWhereHasConditions>;
};


export type QueryGetWithdrawalsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetWithdrawalsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetWithdrawalsWhereWhereConditions>;
  whereUser?: InputMaybe<QueryGetWithdrawalsWhereUserWhereHasConditions>;
};

/** Allowed column names for Query.GetProfiles.orderBy. */
export enum QueryGetProfilesOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.GetProfiles.orderBy. */
export type QueryGetProfilesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetProfilesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetProfiles.where. */
export enum QueryGetProfilesWhereColumn {
  CreatedAt = 'CREATED_AT',
  UserType = 'USER_TYPE'
}

/** Allowed column names for Query.GetProfiles.whereUser. */
export enum QueryGetProfilesWhereUserColumn {
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME'
}

/** Allowed column names for Query.GetProfiles.whereUserRole. */
export enum QueryGetProfilesWhereUserRoleColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `whereUserRole` argument of the query `GetProfiles`. */
export type QueryGetProfilesWhereUserRoleWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetProfilesWhereUserRoleWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetProfilesWhereUserRoleWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetProfilesWhereUserRoleWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetProfilesWhereUserRoleColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `whereUserRole` argument of the query `GetProfiles`. */
export type QueryGetProfilesWhereUserRoleWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetProfilesWhereUserRoleWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Dynamic WHERE conditions for the `whereUser` argument of the query `GetProfiles`. */
export type QueryGetProfilesWhereUserWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetProfilesWhereUserWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetProfilesWhereUserWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetProfilesWhereUserWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetProfilesWhereUserColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `whereUser` argument of the query `GetProfiles`. */
export type QueryGetProfilesWhereUserWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetProfilesWhereUserWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `GetProfiles`. */
export type QueryGetProfilesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetProfilesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetProfilesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetProfilesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetProfilesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetProfiles`. */
export type QueryGetProfilesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetProfilesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetTransactions.orderBy. */
export enum QueryGetTransactionsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.GetTransactions.orderBy. */
export type QueryGetTransactionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetTransactionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetTransactions.where. */
export enum QueryGetTransactionsWhereColumn {
  Amount = 'AMOUNT',
  ChargeableType = 'CHARGEABLE_TYPE',
  Currency = 'CURRENCY',
  DrOrCr = 'DR_OR_CR',
  Reference = 'REFERENCE',
  Status = 'STATUS'
}

/** Allowed column names for Query.GetTransactions.whereProfile. */
export enum QueryGetTransactionsWhereProfileColumn {
  UserType = 'USER_TYPE'
}

/** Dynamic WHERE conditions for the `whereProfile` argument of the query `GetTransactions`. */
export type QueryGetTransactionsWhereProfileWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetTransactionsWhereProfileWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetTransactionsWhereProfileWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetTransactionsWhereProfileWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetTransactionsWhereProfileColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `whereProfile` argument of the query `GetTransactions`. */
export type QueryGetTransactionsWhereProfileWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetTransactionsWhereProfileWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetTransactions.whereUser. */
export enum QueryGetTransactionsWhereUserColumn {
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME'
}

/** Dynamic WHERE conditions for the `whereUser` argument of the query `GetTransactions`. */
export type QueryGetTransactionsWhereUserWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetTransactionsWhereUserWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetTransactionsWhereUserWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetTransactionsWhereUserWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetTransactionsWhereUserColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `whereUser` argument of the query `GetTransactions`. */
export type QueryGetTransactionsWhereUserWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetTransactionsWhereUserWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `GetTransactions`. */
export type QueryGetTransactionsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetTransactionsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetTransactionsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetTransactionsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetTransactionsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetTransactions`. */
export type QueryGetTransactionsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetTransactionsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetVerificationRequests.orderBy. */
export enum QueryGetVerificationRequestsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.GetVerificationRequests.orderBy. */
export type QueryGetVerificationRequestsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetVerificationRequestsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetVerificationRequests.where. */
export enum QueryGetVerificationRequestsWhereColumn {
  CreatedAt = 'CREATED_AT',
  Status = 'STATUS'
}

/** Allowed column names for Query.GetVerificationRequests.whereUser. */
export enum QueryGetVerificationRequestsWhereUserColumn {
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME'
}

/** Dynamic WHERE conditions for the `whereUser` argument of the query `GetVerificationRequests`. */
export type QueryGetVerificationRequestsWhereUserWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetVerificationRequestsWhereUserWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetVerificationRequestsWhereUserWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetVerificationRequestsWhereUserWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetVerificationRequestsWhereUserColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `whereUser` argument of the query `GetVerificationRequests`. */
export type QueryGetVerificationRequestsWhereUserWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetVerificationRequestsWhereUserWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `GetVerificationRequests`. */
export type QueryGetVerificationRequestsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetVerificationRequestsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetVerificationRequestsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetVerificationRequestsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetVerificationRequestsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetVerificationRequests`. */
export type QueryGetVerificationRequestsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetVerificationRequestsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetWalletHistory.orderBy. */
export enum QueryGetWalletHistoryOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.GetWalletHistory.orderBy. */
export type QueryGetWalletHistoryOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetWalletHistoryOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetWalletHistory.where. */
export enum QueryGetWalletHistoryWhereColumn {
  WalletId = 'WALLET_ID'
}

/** Dynamic WHERE conditions for the `where` argument of the query `GetWalletHistory`. */
export type QueryGetWalletHistoryWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetWalletHistoryWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetWalletHistoryWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetWalletHistoryWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetWalletHistoryWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetWalletHistory`. */
export type QueryGetWalletHistoryWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetWalletHistoryWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetWallets.orderBy. */
export enum QueryGetWalletsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.GetWallets.orderBy. */
export type QueryGetWalletsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetWalletsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetWallets.where. */
export enum QueryGetWalletsWhereColumn {
  Currency = 'CURRENCY',
  State = 'STATE'
}

/** Allowed column names for Query.GetWallets.whereProfile. */
export enum QueryGetWalletsWhereProfileColumn {
  UserType = 'USER_TYPE'
}

/** Dynamic WHERE conditions for the `whereProfile` argument of the query `GetWallets`. */
export type QueryGetWalletsWhereProfileWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetWalletsWhereProfileWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetWalletsWhereProfileWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetWalletsWhereProfileWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetWalletsWhereProfileColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `whereProfile` argument of the query `GetWallets`. */
export type QueryGetWalletsWhereProfileWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetWalletsWhereProfileWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetWallets.whereUser. */
export enum QueryGetWalletsWhereUserColumn {
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME'
}

/** Dynamic WHERE conditions for the `whereUser` argument of the query `GetWallets`. */
export type QueryGetWalletsWhereUserWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetWalletsWhereUserWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetWalletsWhereUserWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetWalletsWhereUserWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetWalletsWhereUserColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `whereUser` argument of the query `GetWallets`. */
export type QueryGetWalletsWhereUserWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetWalletsWhereUserWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `GetWallets`. */
export type QueryGetWalletsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetWalletsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetWalletsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetWalletsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetWalletsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetWallets`. */
export type QueryGetWalletsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetWalletsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetWithdrawals.orderBy. */
export enum QueryGetWithdrawalsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.GetWithdrawals.orderBy. */
export type QueryGetWithdrawalsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetWithdrawalsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetWithdrawals.where. */
export enum QueryGetWithdrawalsWhereColumn {
  Reference = 'REFERENCE',
  Status = 'STATUS'
}

/** Allowed column names for Query.GetWithdrawals.whereUser. */
export enum QueryGetWithdrawalsWhereUserColumn {
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME'
}

/** Dynamic WHERE conditions for the `whereUser` argument of the query `GetWithdrawals`. */
export type QueryGetWithdrawalsWhereUserWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetWithdrawalsWhereUserWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetWithdrawalsWhereUserWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetWithdrawalsWhereUserWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetWithdrawalsWhereUserColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `whereUser` argument of the query `GetWithdrawals`. */
export type QueryGetWithdrawalsWhereUserWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetWithdrawalsWhereUserWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Dynamic WHERE conditions for the `where` argument of the query `GetWithdrawals`. */
export type QueryGetWithdrawalsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetWithdrawalsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetWithdrawalsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetWithdrawalsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetWithdrawalsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetWithdrawals`. */
export type QueryGetWithdrawalsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetWithdrawalsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = 'BETWEEN',
  /** Equal operator (`=`) */
  Eq = 'EQ',
  /** Greater than operator (`>`) */
  Gt = 'GT',
  /** Greater than or equal operator (`>=`) */
  Gte = 'GTE',
  /** Whether a value is within a set of values (`IN`) */
  In = 'IN',
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = 'IS_NOT_NULL',
  /** Whether a value is null (`IS NULL`) */
  IsNull = 'IS_NULL',
  /** Simple pattern matching (`LIKE`) */
  Like = 'LIKE',
  /** Less than operator (`<`) */
  Lt = 'LT',
  /** Less than or equal operator (`<=`) */
  Lte = 'LTE',
  /** Not equal operator (`!=`) */
  Neq = 'NEQ',
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = 'NOT_BETWEEN',
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = 'NOT_IN',
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = 'NOT_LIKE'
}

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type SupportedCurrency = {
  __typename?: 'SupportedCurrency';
  code: Scalars['String'];
  country: Scalars['String'];
  currency: Scalars['String'];
  supported_methods: Array<Scalars['String']>;
};

/** A single transaction */
export type Transaction = {
  __typename?: 'Transaction';
  /** Transaction Amount */
  amount: Scalars['Float'];
  /** Charge ID */
  charge_id: Scalars['String'];
  /** Chargeable Type */
  chargeable_type: Scalars['String'];
  /** Charges */
  charges: Scalars['Float'];
  /** Transaction Created At */
  created_at: Scalars['DateTime'];
  /** Currency (default: 'USDC') */
  currency: Scalars['String'];
  /** Transaction Description */
  description: Scalars['String'];
  /** Credit or Debit: 'credit' or 'debit' */
  dr_or_cr: Scalars['String'];
  /** Gateway (default: 'Greep-wallet') */
  gateway: Scalars['String'];
  profile?: Maybe<Profile>;
  /** Transaction Reference */
  reference: Scalars['String'];
  /** State of the transaction ('active' or 'archived') */
  state: Scalars['String'];
  /** Transaction Status ('default', 'pending', 'successful') */
  status: Scalars['String'];
  /** Transaction Updated At */
  updated_at: Scalars['DateTime'];
  user?: Maybe<User>;
  /** User ID */
  user_id: Scalars['Int'];
  /** Unique UUID */
  uuid: Scalars['String'];
  /** Wallet Balance */
  wallet_balance: Scalars['Float'];
  /** Wallet ID */
  wallet_id: Scalars['Int'];
};

export type TransactionOverview = {
  __typename?: 'TransactionOverview';
  moneyIn: Scalars['Float'];
  moneyOut: Scalars['Float'];
  transactions: Scalars['Int'];
  volume: Scalars['Float'];
};

/** A paginated list of Transaction items. */
export type TransactionPaginator = {
  __typename?: 'TransactionPaginator';
  /** A list of Transaction items. */
  data: Array<Transaction>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum TransactionType {
  Credit = 'credit',
  Debit = 'debit'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

/** An account trustline */
export type Trustline = {
  __typename?: 'Trustline';
  /** Account UUID */
  account_id?: Maybe<Scalars['String']>;
  /** Asset Code */
  asset_code: Scalars['String'];
  /** Asset Issuer */
  asset_issuer: Scalars['String'];
  /** Trustline Created At */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Unique UUID */
  id: Scalars['String'];
  /** Trustline Status */
  status: Scalars['String'];
  /** Trust Limit */
  trust_limit?: Maybe<Scalars['Float']>;
};

/** A User in Greep */
export type User = {
  __typename?: 'User';
  /** The user created at */
  created_at: Scalars['DateTime'];
  /** The user email */
  email: Scalars['String'];
  /** The user email verified at */
  email_verified_at?: Maybe<Scalars['DateTime']>;
  /** The user first name */
  first_name: Scalars['String'];
  /** User ID */
  id?: Maybe<Scalars['Int']>;
  /** The user last name */
  last_name: Scalars['String'];
  /** The user phone */
  phone?: Maybe<Scalars['String']>;
  /** The user phone verified at */
  phone_verified_at?: Maybe<Scalars['DateTime']>;
  /** The attached profile */
  profile: Profile;
  role?: Maybe<Role>;
  /** The user status */
  status: Scalars['String'];
  /** The user updated at */
  updated_at: Scalars['DateTime'];
  /** The user username */
  username?: Maybe<Scalars['String']>;
  /** Unique UUID */
  uuid: Scalars['String'];
  /** The attached wallet */
  wallet: Wallet;
};

/** A single beneficiary */
export type UserBank = {
  __typename?: 'UserBank';
  /** Account Number */
  account_no: Scalars['String'];
  /** Bank Code */
  bank_code: Scalars['String'];
  /** Bank Name */
  bank_name: Scalars['String'];
  /** Currency (default: 'USDC') */
  currency: Scalars['String'];
  /** Is Verified */
  is_verified: Scalars['Boolean'];
  /** Metadata associated with the beneficiary */
  meta_data?: Maybe<Scalars['String']>;
  /** State of the beneficiary (active or archived) */
  state: Scalars['String'];
  /** Unique UUID */
  uuid: Scalars['String'];
  /** Wallet ID */
  wallet_id: Scalars['Int'];
};

export enum UserType {
  Admin = 'Admin',
  Business = 'Business',
  Customer = 'Customer',
  Rider = 'Rider'
}

/** Verification request details. */
export type Verification = {
  __typename?: 'Verification';
  /** The authenticated user ID. */
  auth_user_id: Scalars['String'];
  /** When the verification request was created. */
  created_at: Scalars['DateTime'];
  /** Type of document submitted for verification. */
  document_type: DocumentType;
  /** URL of the submitted document. */
  document_url: Scalars['String'];
  /** Unique primary key. */
  id: Scalars['ID'];
  /** Current status of the verification request. */
  status: VerificationStatus;
  /** When the verification request was last updated. */
  updated_at: Scalars['DateTime'];
  user?: Maybe<User>;
  /** The user type associated with the verification. */
  user_type: UserType;
  /** Additional verification data if needed. */
  verification_data?: Maybe<Scalars['JSON']>;
};

/** A paginated list of Verification items. */
export type VerificationPaginator = {
  __typename?: 'VerificationPaginator';
  /** A list of Verification items. */
  data: Array<Verification>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum VerificationStatus {
  Approved = 'Approved',
  Pending = 'Pending',
  Rejected = 'Rejected'
}

/** A single wallet */
export type Wallet = {
  __typename?: 'Wallet';
  /** Cash Per Point */
  cash_per_point: Scalars['Float'];
  /** Cash Point Balance */
  cash_point_balance: Scalars['Float'];
  /** Wallet Created At */
  created_at: Scalars['DateTime'];
  /** Credited Amount */
  credited_amount: Scalars['Float'];
  /** Credited Point Amount */
  credited_point_amount: Scalars['Float'];
  /** Currency (default: 'USDC') */
  currency: Scalars['String'];
  /** Debited Amount */
  debited_amount: Scalars['Float'];
  /** Debited Point Amount */
  debited_point_amount: Scalars['Float'];
  /** Wallet ID */
  id?: Maybe<Scalars['Int']>;
  /** Locked Balance */
  locked_balance: Scalars['Float'];
  /** Point Balance */
  point_balance: Scalars['Float'];
  /** Wallet State ('active' or 'archived') */
  state: Scalars['String'];
  /** Total Balance */
  total_balance: Scalars['Float'];
  /** Wallet Updated At */
  updated_at: Scalars['DateTime'];
  user?: Maybe<User>;
  /** Unique UUID */
  uuid: Scalars['String'];
};

/** A paginated list of Wallet items. */
export type WalletPaginator = {
  __typename?: 'WalletPaginator';
  /** A list of Wallet items. */
  data: Array<Wallet>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<WhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<WhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<WhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<Scalars['String']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<WhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};
