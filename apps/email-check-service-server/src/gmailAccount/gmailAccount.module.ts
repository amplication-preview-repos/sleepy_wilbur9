import { Module } from "@nestjs/common";
import { GmailAccountModuleBase } from "./base/gmailAccount.module.base";
import { GmailAccountService } from "./gmailAccount.service";
import { GmailAccountController } from "./gmailAccount.controller";
import { GmailAccountResolver } from "./gmailAccount.resolver";

@Module({
  imports: [GmailAccountModuleBase],
  controllers: [GmailAccountController],
  providers: [GmailAccountService, GmailAccountResolver],
  exports: [GmailAccountService],
})
export class GmailAccountModule {}
