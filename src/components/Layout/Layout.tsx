import { PropsWithChildren, useState } from 'react';
import SideDrawer from './SideDrawer/SideDrawer';
import TopBar from './TopBar/TopBar';
import * as S from './Layout.styles';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleToggleSideDrawer = () => setShowSideDrawer((prevState) => !prevState);

  return (
    <>
      <TopBar onDrawerToggleClick={handleToggleSideDrawer} />
      <S.Offset />
      <SideDrawer open={showSideDrawer} handleToggleSideDrawer={handleToggleSideDrawer} />
      <S.Main>
        <S.MainContentContainer>{children}</S.MainContentContainer>
      </S.Main>
    </>
  );
};

export default Layout;
