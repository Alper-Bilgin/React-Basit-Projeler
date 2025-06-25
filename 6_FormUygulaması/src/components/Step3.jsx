import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Step3 = ({ formData, nextStep, prevStep, handleFormData }) => {
  return (
    <Formik
      initialValues={{
        school: formData.school,
        department: formData.department,
        graduationYear: formData.graduationYear,
      }}
      validationSchema={Yup.object({
        school: Yup.string().required("Okul adı zorunlu"),
        department: Yup.string().required("Bölüm zorunlu"),
        graduationYear: Yup.number().required("Mezuniyet yılı zorunlu").min(1900, "Geçerli bir yıl girin"),
      })}
      onSubmit={(values) => {
        handleFormData(values);
        nextStep();
      }}
    >
      <Form>
        <div>
          <label>Okul:</label>
          <Field name="school" type="text" />
          <ErrorMessage name="school" component="div" className="error" />
        </div>
        <div>
          <label>Bölüm:</label>
          <Field name="department" type="text" />
          <ErrorMessage name="department" component="div" className="error" />
        </div>
        <div>
          <label>Mezuniyet Yılı:</label>
          <Field name="graduationYear" type="number" />
          <ErrorMessage name="graduationYear" component="div" className="error" />
        </div>
        <button type="button" onClick={prevStep}>
          Geri
        </button>
        <button type="submit">Bitir</button>
      </Form>
    </Formik>
  );
};

export default Step3;
