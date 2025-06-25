import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Step2 = ({ formData, nextStep, prevStep, handleFormData }) => {
  return (
    <Formik
      initialValues={{
        age: formData.age,
        birthDate: formData.birthDate,
      }}
      validationSchema={Yup.object({
        age: Yup.number().required("Yaş zorunlu").min(0, "Geçerli bir yaş girin"),
        birthDate: Yup.date().required("Doğum tarihi zorunlu"),
      })}
      onSubmit={(values) => {
        handleFormData(values);
        nextStep();
      }}
    >
      <Form>
        <div>
          <label>Yaş:</label>
          <Field name="age" type="number" />
          <ErrorMessage name="age" component="div" className="error" />
        </div>
        <div>
          <label>Doğum Tarihi:</label>
          <Field name="birthDate" type="date" />
          <ErrorMessage name="birthDate" component="div" className="error" />
        </div>
        <button type="button" onClick={prevStep}>
          Geri
        </button>
        <button type="submit">İleri</button>
      </Form>
    </Formik>
  );
};

export default Step2;
