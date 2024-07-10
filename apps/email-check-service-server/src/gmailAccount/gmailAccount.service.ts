import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GmailAccountServiceBase } from "./base/gmailAccount.service.base";

@Injectable()
export class GmailAccountService extends GmailAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
