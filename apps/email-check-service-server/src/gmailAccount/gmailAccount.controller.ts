import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GmailAccountService } from "./gmailAccount.service";
import { GmailAccountControllerBase } from "./base/gmailAccount.controller.base";

@swagger.ApiTags("gmailAccounts")
@common.Controller("gmailAccounts")
export class GmailAccountController extends GmailAccountControllerBase {
  constructor(protected readonly service: GmailAccountService) {
    super(service);
  }
}
