import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './Layout';

const WelcomePage = lazy(() => import('../pages/WellcomPage/WellcomPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage/ForgotPasswordPage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage/DiaryPage'));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/diary' element={<DiaryPage />} />
      </Route>
    </Routes>
  );
};
