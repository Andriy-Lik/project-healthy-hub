import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
const YourGoalPage = lazy(() => import('../pages/YourGoalPage'));
const SelectGenderPage = lazy(() => import('../pages/SelectGenderPage'));
const BodyParametersPage = lazy(() => import('../pages/BodyParametersPage'));
const YourActivityPage = lazy(() => import('../pages/YourActivityPage'));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/your-goal' element={<YourGoalPage />} />
        <Route path='/select-gender' element={<SelectGenderPage />} />
        <Route path='/body-parameters' element={<BodyParametersPage />} />
        <Route path='/your-activity' element={<YourActivityPage />} />
      </Route>
    </Routes>
  );
};