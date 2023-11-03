import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
  applied_date: yup.date().required(),
  resume: yup.string().nullable(),
  cover_letter: yup.string().nullable(),
  job_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
