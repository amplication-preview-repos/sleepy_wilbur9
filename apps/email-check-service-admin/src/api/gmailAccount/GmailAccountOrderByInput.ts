import { SortOrder } from "../../util/SortOrder";

export type GmailAccountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
};
