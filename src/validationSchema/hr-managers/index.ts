import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  hire_date: yup.date().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
