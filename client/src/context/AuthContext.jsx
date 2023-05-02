import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens')
      ? jwt_decode(localStorage.getItem('authTokens'))
      : null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data.token);
      setUser(jwt_decode(data.token));
      localStorage.setItem('authTokens', JSON.stringify(data.token));
      history('/');
    } else {
      setError(data.message);
    }
  };

  const registerUser = async (email, password) => {
    const response = await fetch('/api/admin/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.status === 201) {
      history('/admin/login/190023');
    } else {
      const data = await response.json();
      setError(data.message);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    history('/');
  };

  const contextData = {
    user,
    error,
    loginUser,
    logoutUser,
    registerUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {error ? <div>{error}</div> : null}
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
