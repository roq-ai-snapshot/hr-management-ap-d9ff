import { ApplicationInterface } from 'interfaces/application';
import { EmployeeInterface } from 'interfaces/employee';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description?: string;
  requirements?: string;
  salary?: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  employee?: EmployeeInterface[];
  company?: CompanyInterface;
  _count?: {
    application?: number;
    employee?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  requirements?: string;
  company_id?: string;
}
