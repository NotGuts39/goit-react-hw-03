import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';



const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Name is required')
          .min(3, 'Name must be at least 3 characters')
          .max(50, 'Name must not exceed 50 characters'),
        number: Yup.string()
          .required('Number is required')
          .min(3, 'Number must be at least 3 characters')
          .max(50, 'Number must not exceed 50 characters'),
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form className={css.form}>
  <div className={css.formGroup}>
    <label htmlFor="name" className={css.label}>Name</label>
    <Field type="text" id="name" name="name" className={css.input} />
    <ErrorMessage name="name" component="div" className={css.error} />
  </div>
  <div className={css.formGroup}>
    <label htmlFor="number" className={css.label}>Number</label>
    <Field type="text" id="number" name="number" className={css.input} />
    <ErrorMessage name="number" component="div" className={css.error} />
  </div>
  <button type="submit" className={css.button}>Add Contact</button>
</Form>
    </Formik>
  );
};

export default ContactForm;