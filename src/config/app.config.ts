interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Applicant'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read job postings',
    'Apply for jobs',
    'Manage personal user profile',
    'View company information',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage job postings', 'Manage job applications'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c4f88943-3eae-4093-80d3-59658254701f',
};
