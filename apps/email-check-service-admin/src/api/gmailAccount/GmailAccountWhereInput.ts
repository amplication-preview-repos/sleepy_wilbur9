import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GmailAccountWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
};
