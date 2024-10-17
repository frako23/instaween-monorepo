import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Find from "./pages/find/Find";
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-black min-h-screen">
      {pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      {pathname !== "/" && <Footer />}
      <Toaster />
    </div>
  );
};

export default App;
