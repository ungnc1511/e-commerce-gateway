import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('list_all')
  async getAllCompany() {
    return this.companyService.getAllCompany();
  }

  @Get('get_company/:id')
  getCompany(@Param('id') id: string) {
    return this.companyService.getCompany(id);
  }

  @Post('create_new_company')
  createCompany(@Body() data) {
    return this.companyService.createCompany(data);
  }

  @Patch('edit_company/:id')
  updateCompany(@Param('id') id: string, @Body() data) {
    return this.companyService.updateCompany({ ...data, id });
  }

  @Delete('delete-company/:id')
  deleteCompany(@Param('id') id: string) {
    return this.companyService.deleteCompany(id);
  }
}
