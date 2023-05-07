import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '~/api/useAuth';
import AuthContext from '~/contexts/Auth/AuthContext';
import Loading from '../UI/Loading';
import * as S from './Layout.styles';
import LeftDrawer from './SideDrawers/LeftDrawer';
import RightDrawer from './SideDrawers/RightDrawer';
import TopBar from './TopBar/TopBar';

const Layout = () => {
  const [showLeftDrawer, setShowLeftDrawer] = useState(false);
  const [showRightDrawer, setShowRightDrawer] = useState(false);
  const { token } = useContext(AuthContext);
  const { mutate: auth, isLoading } = useAuth();

  useEffect(() => {
    if (!token && auth && !isLoading) auth();
  }, [auth, token, isLoading]);

  const handleToggleLeftDrawer = () => setShowLeftDrawer((prev) => !prev);
  const handleToggleRightDrawer = () => setShowRightDrawer((prev) => !prev);

  return (
    <>
      <TopBar
        onLeftDrawerToggleClick={handleToggleLeftDrawer}
        onRightDrawerToggleClick={handleToggleRightDrawer}
      />
      <LeftDrawer open={showLeftDrawer} onUserAction={handleToggleLeftDrawer} />
      <RightDrawer open={showRightDrawer} onUserAction={handleToggleRightDrawer} />
      <S.Main>{!token || isLoading ? <Loading /> : <Outlet />}</S.Main>
    </>
  );
};

export default Layout;
