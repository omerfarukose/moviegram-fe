import React from "react";
import { Formik } from "formik";
import Navbar from "../../components/Navbar/Navbar";
import "./Sign.css";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";

function SignPage() {
  return (
    <div className="sign-page">
      <Navbar social/>
      <div className="form-container">
        <Formik
          className="formik-container"
          initialValues={{ email: "", username: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="input-container" onSubmit={handleSubmit}>
              <div className="sign-title-container">
                <div className="sign-title">Yeni bir hesap oluştur</div>
                <div className="sign-login-title">
                  <div className="gray-title">Zaten bir hesabın var mı ?</div>
                  <Link className="blue-title" to="/login">
                    Giriş Yap
                  </Link>
                </div>
              </div>
              <FormInput
                title="Mail"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <FormInput
                title="Kullanıcı Adı"
                type="username"
                name="username"
                handleBlur={handleBlur}
                value={values.username}
                onChange={handleChange}
              />
              <FormInput
                title="Parola"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />

              <button
                className="btn-form"
                type="submit"
                disabled={isSubmitting}
              >
                Hesap Olustur
              </button>
            </form>
          )}
        </Formik>
        <img className="form-img" src="./images/movie-boy.svg" />
      </div>
    </div>
  );
}

export default SignPage;
