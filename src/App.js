import * as React from "react";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import SignPage from "./pages/Sign/SignPage";
import AddBlogPage from "./pages/AddBlog/AddBlogPage";
import CardDetailPage from "./pages/CardDetail/CardDetailPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign" element={<SignPage />} />
        <Route path="addBlog" element={<AddBlogPage />} />
        <Route path="cardDetail" element={<CardDetailPage />} />
      </Routes>
  </BrowserRouter>
  );
}
export default App;