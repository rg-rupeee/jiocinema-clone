import { Routes, Route } from 'react-router-dom';

import Home from '../screens/home/Home';
import PageNotFound from '../screens/page-not-found/PageNotFound';
import Container from '../components/container/Container';

import commonRoutes from './commonRoutes';
import privateRoutes from './privateRoutes';
import authRoutes from './authRoutes';
import listingRoutes from './listingRoutes';

const Index = () => {
  return (
    <Routes>
      {authRoutes.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
      <Route element={<Container />}>
        <Route path='/' element={<Home />} index />
        {listingRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
        {privateRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
        {commonRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default Index;
