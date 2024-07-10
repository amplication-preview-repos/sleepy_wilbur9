import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmailTemplateWhereInput = {
  id?: StringFilter;
  templateContent?: StringNullableFilter;
};
