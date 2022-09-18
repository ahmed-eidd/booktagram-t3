import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().default('').required(),
  location: Yup.string().default('').required(),
  type: Yup.string().default('').required(),
  speakers: Yup.string().default('').required(),
  time: Yup.string().default('').required(),
  date: Yup.date().default(new Date()).required(),
});
