import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { selectIsRefreshing } from 'redux/Auth/authSelectors';
import { currentUser } from 'redux/Auth/authOperations';
import Loader from './Loader/Loader';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
const YourGoalPage = lazy(() => import('../pages/YourGoalPage'));
const SelectGenderPage = lazy(() => import('../pages/SelectGenderPage'));
const BodyParametersPage = lazy(() => import('../pages/BodyParametersPage'));
const YourActivityPage = lazy(() => import('../pages/YourActivityPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage'));
const RecommendedFoodPage = lazy(() => import('../pages/RecommendedFoodPage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    isRefreshing ? (
      <Loader />
    ) : (
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path='/signup' element={<RestrictedRoute redirectTo='/main' component={<SignUpPage />} />}></Route>
          <Route path='/your-goal' element={<RestrictedRoute redirectTo='/main' component={<YourGoalPage />} />} />
          <Route path='/select-gender' element={<RestrictedRoute redirectTo='/main' component={<SelectGenderPage />} />} />
          <Route path='/body-parameters' element={<RestrictedRoute redirectTo='/main' component={<BodyParametersPage />} />} />
          <Route path='/your-activity' element={<RestrictedRoute redirectTo='/main' component={<YourActivityPage />} />} />
          <Route path='/signin' element={<RestrictedRoute redirectTo='/main' component={<SignInPage />} />} />
          <Route path='/forgot-password' element={<RestrictedRoute redirectTo='/signin' component={<ForgotPasswordPage />} />} />
          
          <Route path='/main' element={<PrivateRoute redirectTo='/signin' component={<MainPage />} />} />
          <Route path='/dashboard' element={<PrivateRoute redirectTo='/signin' component={<DashboardPage />} />} />
          <Route path='/diary' element={<PrivateRoute redirectTo='/signin' component={<DiaryPage />} />} />
          <Route path='/recommended-food' element={<PrivateRoute redirectTo='/signin' component={<RecommendedFoodPage />} />} />
          <Route path='/settings' element={<PrivateRoute redirectTo='/signin' component={<SettingsPage />} />} />
        </Route>
      </Routes>
    )    
  ); 
};