import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  student_id: yup.string().nullable(),
  lesson_id: yup.string().nullable(),
});
