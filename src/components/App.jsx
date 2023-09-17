import Header from './Header/Header';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import WelcomePage from '../../src/pages/WelcomePage';
import Dashboard from 'pages/DashboardPage/DashboardPage';


export const App = () => {
  return (
    <div>
      <Header title={'Hello World'} />
      <WelcomePage />
      <SignUpPage />
      <Dashboard />
    </div>
  );
};
