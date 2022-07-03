import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInLayout from './components/Layouts/SignInLayout/SignInLayout';
import SignIn from './components/SignIn/SignIn/SignIn';
import PassRecovery from './components/SignIn/PassRecovery/PassRecovery';
import PassReset from './components/SignIn/PassReset/PassReset';
import SignUp from './components/SignUp/SignUp/SignUp';
import CompleteAccount from './components/SignUp/CompleteAccount/CompleteAccount';
import ResetSuccessful from './components/SignIn/ResetSuccessful/ResetSuccessful';
import MainLayout from './components/Layouts/MainLayout/MainLayout';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
import SignUpLayout from './components/Layouts/SignUpLayout/SignUpLayout';
import CompleteAccountSuccessful from './components/SignUp/CompleteAccountSuccessful/CompleteAccountSuccessful';
import AccountInfo from './components/Profile/AccountInfo/AccountInfo';
import PersonalInfo from './components/Profile/PersonalInfo/PersonalInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignInLayout />}>
          <Route index element={<SignIn />} />
          <Route path="password-recovery" element={<PassRecovery />} />
          <Route path="password-reset" element={<PassReset />} />
          <Route path="password-reset-successful" element={<ResetSuccessful />} />
        </Route>
        <Route path="/signup" element={<SignUpLayout />}>
          <Route index element={<SignUp />} />
          <Route path="complete-account" element={<CompleteAccount />} />
          <Route path="complete-account-successful" element={<CompleteAccountSuccessful />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="profile" element={<Profile />}>
            <Route path="account-info" element={<AccountInfo />} />
            <Route path="personal-info" element={<PersonalInfo />} />
          </Route>
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
