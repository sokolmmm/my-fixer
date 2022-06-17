import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInLayout from './components/SignInLayout/SignInLayout';
import SignIn from './components/SignInLayout/SignIn/SignIn';
import PassRecovery from './components/SignInLayout/PassRecovery/PassRecovery';
import PassReset from './components/SignInLayout/PassReset/PassReset';
import SignUpLayout from './components/SignUpLayout/SignUpLayout';
import SignUp from './components/SignUpLayout/SignUp/SignUp';
import CompleteAccount from './components/SignUpLayout/CompleteAccount/CompleteAccount';
import ResetSuccessful from './components/SignInLayout/ResetSuccessful/ResetSuccessful';
import CompleteAccountSuccessful from './components/SignUpLayout/CompleteAccountSuccessful/AccountSuccessful';

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
        <Route path="/" element={<div> hello </div>} />
      </Routes>
    </div>
  );
}

export default App;
