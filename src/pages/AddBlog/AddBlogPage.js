import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Formik } from "formik";
import FormInput from "../../components/FormInput/FormInput";
import "./AddBlog.css"

function AddBlogPage() {
  return (
    <div className="page-container">
      <Navbar social />
      <div className="add-blog-container">
        <Formik
          initialValues={{ movie:"", title: "", text: "" }}
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
                <div className="sign-title">Blog ekle</div>
              </div>
              <FormInput
                title="Film Seç"
                type="movie"
                name="movie"
                handleBlur={handleBlur}
                value={values.movie}
                onChange={handleChange}
              />
              <FormInput
                title="Blog Başlığı"
                type="title"
                name="title"
                handleBlur={handleBlur}
                value={values.title}
                onChange={handleChange}
              />
              <FormInput
                title="Blog Metni"
                type="text"
                name="text"
                value={values.text}
                onChange={handleChange}
              />
              <button
                className="btn-form"
                type="submit"
                disabled={isSubmitting}
              >
                Ekle
              </button>
            </form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
}

export default AddBlogPage;
