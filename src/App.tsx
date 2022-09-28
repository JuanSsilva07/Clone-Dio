import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Feed } from "./pages/Feed";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
