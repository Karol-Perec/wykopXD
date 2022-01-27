import { ReactNode, useState } from 'react';
import SideDrawer from './SideDrawer/SideDrawer';
import TopBar from './TopBar/TopBar';
import * as S from './Layout.styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleSideDrawerClose = () => {
    setShowSideDrawer(false);
  };

  const handleSideDrawerOpen = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <>
      <TopBar onDrawerToggleClick={handleSideDrawerOpen} />
      <SideDrawer
        open={showSideDrawer}
        onClose={handleSideDrawerClose}
      />
      <S.Main>{children}</S.Main>
    </>
  );
};

export default Layout;
