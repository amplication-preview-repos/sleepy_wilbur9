import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailTemplateServiceBase } from "./base/emailTemplate.service.base";

@Injectable()
export class EmailTemplateService extends EmailTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
