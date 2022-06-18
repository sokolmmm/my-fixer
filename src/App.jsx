import './App.scss';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import SignInLayout from './components/SignInLayout/SignInLayout';
import SignIn from './components/SignInLayout/SignIn/SignIn';
import PassRecovery from './components/SignInLayout/PassRecovery/PassRecovery';
import PassReset from './components/SignInLayout/PassReset/PassReset';
import SignUpLayout from './components/SignUpLayout/SignUpLayout';
import SignUp from './components/SignUpLayout/SignUp/SignUp';
import CompleteAccount from './components/SignUpLayout/CompleteAccount/CompleteAccount';
import ResetSuccessful from './components/SignInLayout/ResetSuccessful/ResetSuccessful';
import CompleteAccountSuccessful from './components/SignUpLayout/CompleteAccountSuccessful/AccountSuccessful';
import Profile from './components/Profile/Profile';

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
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/"
          element={(
            <div>
              <ul>
                <li>
                  <NavLink to="/signin"> signin </NavLink>
                </li>
                <li>
                  <NavLink to="/signin/password-recovery"> password-recovery </NavLink>
                </li>
                <li>
                  <NavLink to="/signin/password-reset"> password-reset </NavLink>
                </li>
                <li>
                  <NavLink to="/signin/password-reset-successful">password-reset-successful </NavLink>
                </li>
                <li>
                  <NavLink to="/signup"> signup </NavLink>

                </li>
                <li>
                  <NavLink to="/signup/complete-account"> complete-account </NavLink>

                </li>
                <li>
                  <NavLink to="/signup/complete-account-successful"> complete-account-successful </NavLink>
                </li>
                <li>
                  <NavLink to="/profile"> profile </NavLink>
                </li>
              </ul>
            </div>
)}
        />
      </Routes>
    </div>
  );
}

export default App;
