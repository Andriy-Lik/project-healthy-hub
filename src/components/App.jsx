import Header from './Header/Header';
import Dashboard from 'pages/DashboardPage/DashboardPage';

export const App = () => {
  return (
    <div>
      <Header title={'Your health'} />
      <Dashboard />
    </div>
  );
};
