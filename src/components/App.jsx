import Header from './Header/Header';
import Dashboard from 'pages/DashboardPage/DashboardPage';
import Diary from 'pages/DiaryPage/DiaryPage';

export const App = () => {
  return (
    <div>
      <Header title={'Hello World'} />
      <Dashboard />
      <Diary />
    </div>
  );
};
