import { PropsWithChildren, useState } from 'react';
import LeftDrawer from './LeftDrawer/LeftDrawer';
import RightDrawer from './RightDrawer/RightDrawer';
import TopBar from './TopBar/TopBar';
import * as S from './Layout.styles';

const Layout = ({ children }: PropsWithChildren) => {
  const [showLeftDrawer, setShowLeftDrawer] = useState(false);
  const [showRightDrawer, setShowRightDrawer] = useState(false);

  const handleToggleLeftDrawer = () => setShowLeftDrawer((prevState) => !prevState);
  const handleToggleRightDrawer = () => setShowRightDrawer((prevState) => !prevState);

  return (
    <>
      <TopBar
        onLeftDrawerToggleClick={handleToggleLeftDrawer}
        onRightDrawerToggleClick={handleToggleRightDrawer}
      />
      <S.Offset />
      <LeftDrawer open={showLeftDrawer} onUserAction={handleToggleLeftDrawer} />
      <RightDrawer open={showRightDrawer} onUserAction={handleToggleRightDrawer} />
      <S.Main>
        <S.MainContentContainer>{children}</S.MainContentContainer>
      </S.Main>
    </>
  );
};

export default Layout;
