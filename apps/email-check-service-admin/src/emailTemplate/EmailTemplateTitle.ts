import { EmailTemplate as TEmailTemplate } from "../api/emailTemplate/EmailTemplate";

export const EMAILTEMPLATE_TITLE_FIELD = "id";

export const EmailTemplateTitle = (record: TEmailTemplate): string => {
  return record.id?.toString() || String(record.id);
};
