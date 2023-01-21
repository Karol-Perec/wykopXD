import { CircularProgress } from '@mui/material';
import { PropsWithChildren, useContext, useEffect, useState } from 'react';
import AuthContext from '~/contexts/Auth/AuthContext';
import useAuth from '~/hooks/api/useAuth';
import * as S from './Layout.styles';
import LeftDrawer from './SideDrawers/LeftDrawer';
import RightDrawer from './SideDrawers/RightDrawer';
import TopBar from './TopBar/TopBar';

const Layout = ({ children }: PropsWithChildren) => {
  const [showLeftDrawer, setShowLeftDrawer] = useState(false);
  const [showRightDrawer, setShowRightDrawer] = useState(false);
  const { authData } = useContext(AuthContext);
  const { mutate: auth, isLoading } = useAuth();

  useEffect(() => {
    if (!authData?.token && !isLoading) auth();
  }, [auth, authData?.token, isLoading]);

  const handleToggleLeftDrawer = () => setShowLeftDrawer((prev) => !prev);
  const handleToggleRightDrawer = () => setShowRightDrawer((prev) => !prev);

  return (
    <>
      <TopBar
        onLeftDrawerToggleClick={handleToggleLeftDrawer}
        onRightDrawerToggleClick={handleToggleRightDrawer}
      />
      <S.Offset />
      <LeftDrawer open={showLeftDrawer} onUserAction={handleToggleLeftDrawer} />
      <RightDrawer open={showRightDrawer} onUserAction={handleToggleRightDrawer} />
      <S.Main>{isLoading ? <CircularProgress /> : children}</S.Main>
    </>
  );
};

export default Layout;
