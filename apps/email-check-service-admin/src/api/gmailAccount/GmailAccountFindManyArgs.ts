import { GmailAccountWhereInput } from "./GmailAccountWhereInput";
import { GmailAccountOrderByInput } from "./GmailAccountOrderByInput";

export type GmailAccountFindManyArgs = {
  where?: GmailAccountWhereInput;
  orderBy?: Array<GmailAccountOrderByInput>;
  skip?: number;
  take?: number;
};
