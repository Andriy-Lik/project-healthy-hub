import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Loader from '../Loader';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
