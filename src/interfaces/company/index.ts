import { HrManagerInterface } from 'interfaces/hr-manager';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  founded_date?: any;
  industry?: string;
  website?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  hr_manager?: HrManagerInterface[];
  job?: JobInterface[];

  _count?: {
    hr_manager?: number;
    job?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  industry?: string;
  website?: string;
  name?: string;
  tenant_id?: string;
}
