import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInLayout from './components/SignInLayout/SignInLayout';
import SignIn from './components/SignInLayout/SignIn/SignIn';
import PassRecovery from './components/SignInLayout/PassRecovery/PassRecovery';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignInLayout />}>
          <Route index element={<SignIn />} />
          <Route path="password-recovery" element={<PassRecovery />} />
          <Route path="passsword" element={<PassRecovery />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
