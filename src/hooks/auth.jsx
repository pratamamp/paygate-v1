import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();
const API_URL = process.env.REACT_APP_API_GATEWAY;

function AuthWrapper({ children }) {
  const userProfile = { name: null, email: null, id: null, token: null };
  const [userInfo, updateUserInfo] = useState(userProfile);
  let navigate = useNavigate();

  const signIn = async (email, password) => {
    try {
      await axios
        .post(`${API_URL}/users/login,`, { email, password })
        .then((response) => {
          if (response.data) {
            const token = response.data.data.token;
            const decode = jwtDecode(token);
            updateUserInfo({
              id: decode.data.id,
            });
          }
        });
    } catch (err) {}
  };
  return <div>AuthWrapper</div>;
}

export default AuthWrapper;
