import * as graphql from "@nestjs/graphql";
import { GmailAccountResolverBase } from "./base/gmailAccount.resolver.base";
import { GmailAccount } from "./base/GmailAccount";
import { GmailAccountService } from "./gmailAccount.service";

@graphql.Resolver(() => GmailAccount)
export class GmailAccountResolver extends GmailAccountResolverBase {
  constructor(protected readonly service: GmailAccountService) {
    super(service);
  }
}
