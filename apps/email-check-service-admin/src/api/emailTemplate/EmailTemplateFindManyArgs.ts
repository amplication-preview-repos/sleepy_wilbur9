import { EmailTemplateWhereInput } from "./EmailTemplateWhereInput";
import { EmailTemplateOrderByInput } from "./EmailTemplateOrderByInput";

export type EmailTemplateFindManyArgs = {
  where?: EmailTemplateWhereInput;
  orderBy?: Array<EmailTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
