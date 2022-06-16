import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInLayout from './components/SignInLayout/SignInLayout';
import SignIn from './components/SignInLayout/SignIn/SignIn';
import PassRecovery from './components/SignInLayout/PassRecovery/PassRecovery';
import PassReset from './components/SignInLayout/PassReset/PassReset';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignInLayout />}>
          <Route index element={<SignIn />} />
          <Route path="password-recovery" element={<PassRecovery />} />
          <Route path="password-reset" element={<PassReset />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
