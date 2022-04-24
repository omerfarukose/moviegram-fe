import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";
import { Formik } from "formik";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login-page">
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
                <div className="sign-title">Moviegram'a giriş yap</div>
                <div className="sign-login-title">
                  <div className="gray-title">Moviegram hesabın yok mu ? </div>
                  <Link className="blue-title" to="/sign">
                    Hesap oluştur
                  </Link>
                </div>
              </div>
              <FormInput
                title="Kullanıcı Adı & Mail"
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
                Giriş Yap
              </button>
            </form>
          )}
        </Formik>
        <img className="form-img" src="./images/movie-boy.svg" alt="#"/>
      </div>
    </div>
  );
}

export default LoginPage;
