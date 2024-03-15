import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./utils/PrivateRoute";
import AuthLayout from "./layouts/AuthLayout";
import Homepage from "./pages/homepage/Homepage";
import Profile from "./pages/profile/Profile";
import RootLayout from "./layouts/RootLayout";
import TopicSelection from "./pages/topicSelection/TopicSelection";

function App() {
  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <AuthProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/topic-selection" element={<TopicSelection />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
