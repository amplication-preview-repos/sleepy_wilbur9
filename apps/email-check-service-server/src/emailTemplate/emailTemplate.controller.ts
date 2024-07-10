import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailTemplateService } from "./emailTemplate.service";
import { EmailTemplateControllerBase } from "./base/emailTemplate.controller.base";

@swagger.ApiTags("emailTemplates")
@common.Controller("emailTemplates")
export class EmailTemplateController extends EmailTemplateControllerBase {
  constructor(protected readonly service: EmailTemplateService) {
    super(service);
  }
}
