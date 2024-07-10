import { GmailAccount as TGmailAccount } from "../api/gmailAccount/GmailAccount";

export const GMAILACCOUNT_TITLE_FIELD = "email";

export const GmailAccountTitle = (record: TGmailAccount): string => {
  return record.email?.toString() || String(record.id);
};
