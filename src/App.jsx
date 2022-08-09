import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignUpLayout from './layouts/SignUpLayout/SignUpLayout';
import SignInLayout from './layouts/SignInLayout/SignInLayout';
import MainLayout from './layouts/MainLayout/MainLayout';

import SignIn from './pages/SignIn/SignIn/SignIn';
import PassRecovery from './pages/SignIn/PassRecovery/PassRecovery';
import PassReset from './pages/SignIn/PassReset/PassReset';
import SignUp from './pages/SignUp/SignUp/SignUp';
import ResetSuccessful from './pages/SignIn/ResetSuccessful/ResetSuccessful';
import CompleteAccount from './pages/SignUp/CompleteAccount/CompleteAccount';
import CompleteAccountSuccessful from './pages/SignUp/CompleteAccountSuccessful/CompleteAccountSuccessful';

import AdminZone from './pages/AdminZone/AdminZone';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';

import PersonalInfo from './components/Profile/PersonalInfo/PersonalInfo';
import AccountInfo from './components/Profile/AccountInfo/AccountInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<SignInLayout />}>
          <Route index element={<SignIn />} />
          <Route path="password-recovery" element={<PassRecovery />} />
          <Route path="password-reset" element={<PassReset />} />
          <Route path="password-reset-successful" element={<ResetSuccessful />} />
        </Route>
        <Route path="/sign-up" element={<SignUpLayout />}>
          <Route index element={<SignUp />} />
          <Route path="complete-account" element={<CompleteAccount />} />
          <Route path="complete-account-successful" element={<CompleteAccountSuccessful />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="profile/:userId" element={<Profile />}>
            <Route path="account-info" element={<AccountInfo />} />
            <Route path="personal-info" element={<PersonalInfo />} />
          </Route>
          <Route path="search" element={<Search />} />
          <Route path="admin-zone" element={<AdminZone />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
