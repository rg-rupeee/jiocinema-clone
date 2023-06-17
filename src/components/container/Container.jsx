import { Outlet } from 'react-router';

const Container = () => {
  return (
    <>
      <div>this is header</div>
      <Outlet />
      <div>this is footer</div>
    </>
  );
};

export default Container;
