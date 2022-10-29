import { PropsWithChildren, useState } from 'react';
import * as S from './Layout.styles';
import LeftDrawer from './SideDrawers/LeftDrawer';
import RightDrawer from './SideDrawers/RightDrawer';
import TopBar from './TopBar/TopBar';

const Layout = ({ children }: PropsWithChildren) => {
  const [showLeftDrawer, setShowLeftDrawer] = useState(false);
  const [showRightDrawer, setShowRightDrawer] = useState(false);

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
      <S.Main>{children}</S.Main>
    </>
  );
};

export default Layout;
