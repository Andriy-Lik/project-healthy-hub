import Header from './Header/Header';
import Dashboard from 'pages/DashboardPage/DashboardPage';
import WelcomePage from 'pages/WellcomPage/WellcomPage';

export const App = () => {
  return (
    <div>
      <Header title={'Hello World'} />
      <WelcomePage />
      <Dashboard />
    </div>
  );
};
