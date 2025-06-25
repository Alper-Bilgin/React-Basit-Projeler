import React from "react";

const Result = ({ formData }) => {
  return (
    <div>
      <h2>Form Sonucu</h2>
      <ul>
        <li>
          <strong>Ad:</strong> {formData.firstName}
        </li>
        <li>
          <strong>Soyad:</strong> {formData.lastName}
        </li>
        <li>
          <strong>Cinsiyet:</strong> {formData.gender}
        </li>
        <li>
          <strong>Yaş:</strong> {formData.age}
        </li>
        <li>
          <strong>Doğum Tarihi:</strong> {formData.birthDate}
        </li>
        <li>
          <strong>Okul:</strong> {formData.school}
        </li>
        <li>
          <strong>Bölüm:</strong> {formData.department}
        </li>
        <li>
          <strong>Mezuniyet Yılı:</strong> {formData.graduationYear}
        </li>
      </ul>
    </div>
  );
};

export default Result;
