import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MyButton from "../../components/Buttons/MyButton";
import { Formik } from "formik";
import axios from "axios";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";
import { ChevronDown } from "react-feather";
import BlogCard from "../../components/BlogCard/BlogCard";

import data from '../../data/myExampleData.json';

function HomePage() {

  const [post, setPost] = React.useState(null);

  const baseURL = "https://jsonplaceholder.typicode.com/users/1";

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div className="home-page">
      <Navbar addBlog login sign social />
      <div className="content-container">
        {/* Content Header -- BEGIN */}
        <div className="content-header">
          <div className="header-item">Film çok mu hoşuna gitti ?</div>
          <div className="header-item">
            Duygularını paylaşmak mı istiyorsun ?
          </div>
          <div className="header-item">
            Moviegram ile hemen{" "}
            <Link className="header-link" to="/login">
              Blog Oluştur !
            </Link>
          </div>
        </div>
        <div className="show-blogs-container">
          <div className="show-blogs-title">Popüler Blogları İncele</div>
          <div className="show-blogs-icon">
            <ChevronDown />
          </div>
        </div>
        {/* Content Header -- END  */}

        <div className="blog-container">
          <div className="show-blog-container">
            <div className="blog-list">
            {
              data.map((data) => {
                return(
                  <BlogCard movieData={data} title={data.title} imgUrl={data.imageUrl} text={data.text} />
                  )
              })
            }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
