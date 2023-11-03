import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  founded_date: yup.date().nullable(),
  industry: yup.string().nullable(),
  website: yup.string().nullable(),
  name: yup.string().required(),
});
