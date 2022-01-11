import { ReactNode, useState } from 'react';
import { TopBar } from './TopBar/TopBar';
import * as S from './Layout.styles';
import { SideDrawer } from './SideDrawer/SideDrawer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
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
        onBackdropClick={handleSideDrawerClose}
      />
      <S.Main>{children}</S.Main>
    </>
  );
};
