import { ReactNode, useState } from 'react';
import SideDrawer from './SideDrawer/SideDrawer';
import TopBar from './TopBar/TopBar';
import * as S from './Layout.styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const toggleSideDrawer = () => setShowSideDrawer((prevState) => !prevState);
  
  return (
    <>
      <TopBar onDrawerToggleClick={toggleSideDrawer} />
      <SideDrawer open={showSideDrawer} onClose={toggleSideDrawer} />
      <S.Main>{children}</S.Main>
    </>
  );
};

export default Layout;
