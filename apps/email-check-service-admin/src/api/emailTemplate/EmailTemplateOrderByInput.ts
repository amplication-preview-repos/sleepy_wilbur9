import { SortOrder } from "../../util/SortOrder";

export type EmailTemplateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  templateContent?: SortOrder;
};
