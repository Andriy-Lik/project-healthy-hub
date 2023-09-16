import Header from './Header/Header';
import Dashboard from 'pages/DashboardPage/DashboardPage';
// import { RecommendedFood } from "pages/RecommendedFoodPage/RecommendedFoodPage";

export const App = () => {
  return (
    <div>
      <Header title={'Hello World'} />
      <Dashboard />
    </div>
  );
};