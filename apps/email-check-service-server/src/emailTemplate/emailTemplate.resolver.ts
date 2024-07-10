import * as graphql from "@nestjs/graphql";
import { EmailTemplateResolverBase } from "./base/emailTemplate.resolver.base";
import { EmailTemplate } from "./base/EmailTemplate";
import { EmailTemplateService } from "./emailTemplate.service";

@graphql.Resolver(() => EmailTemplate)
export class EmailTemplateResolver extends EmailTemplateResolverBase {
  constructor(protected readonly service: EmailTemplateService) {
    super(service);
  }
}
