import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Login from '../pages/auth/Login';
import Register from "../pages/auth/Register";
import ChangePassword from "../pages/auth/ChangePassword"
import ForgetPassword from "../pages/auth/ForgetPassword"

function AuthNavigation() {
    return (
      <Router>
          <Routes>
            {/* <Route exact path="/" element={<Register />} /> */}
            <Route exact path="/" element={<Login />} />
            <Route exact path="/changePassword" element={<ChangePassword />} />
            <Route exact path="/forgetPassword" element={<ForgetPassword />} />
          </Routes>
      </Router>
    )
}

export default AuthNavigation
