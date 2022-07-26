import "./styles/reset.css";
import "./styles/style.css";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Watch from "./pages/Watch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/profile/manage" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
