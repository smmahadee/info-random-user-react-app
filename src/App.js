import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import NavbarUI from './component/Navbar/NavbarUI';
import Users from './component/UserInfo/Users';

import { userInfoApi } from './api/userInfoApi';
import { userInfoAction } from './reducers/userInfoSlice';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(userInfoApi)
      .then(res => {
        const { data } = res.data;
        dispatch(userInfoAction.saveUserInfo(data));
      })
      .catch(err => {
        dispatch(userInfoAction.catchError(err));
      });
  });
  return (
    <div>
      <NavbarUI />
      <Users />
    </div>
  );
}
