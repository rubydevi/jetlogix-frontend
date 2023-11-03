import React, {
  useEffect, useState, useRef, useContext,
} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';

import AuthContext from '../context/AuthProvider';

const LOGIN_URL = '/login';
function Login() {
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      user: {
        email,
        password: pwd,
      },
    };
    try {
      const res = await axios.post(LOGIN_URL, JSON.stringify(formData), {
        headers: { 'Content-Type': 'application/json' },
        Accept: '*/*',
      });
      // console.log(res);
      const authToken = res.headers.authorization;
      const { role } = res.data.data;
      const username = res.data.data.name;
      const { email } = res.data.data;
      // console.log(authToken);
      setAuth({
        role,
        authToken,
        email,
        username,
      });
      // clean the input filed
      setEmail('');
      setPwd('');
      navigate(from, { replace: true });
    } catch (err) {
      // console.log(err);
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? 'errMsg' : 'offscreen'}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1 className="header">Sign In</h1>
      <form onSubmit={handleSubmit} className="">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          ref={userRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="on"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          autoComplete="on"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          <Link to="/register">Sign Up</Link>
        </span>
      </p>
    </section>
  );
}

export default Login;