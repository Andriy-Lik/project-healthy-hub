import Header from './Header/Header';
import WelcomePage from 'pages/WelcomePage/WelсomePage';
import Dashboard from 'pages/DashboardPage/DashboardPage';


export const App = () => {
  return (
    <div>
      <Header title={'Hello World'} />
      <WelcomePage />
      <Dashboard />
    </div>
  );
};
