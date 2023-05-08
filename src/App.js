import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Profile from "./pages/Profile";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <Router basename="/netflix-clone">
        {!user ? (
          <LoginPage />
        ) : (
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/netflix-clone" element={<HomePage />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
