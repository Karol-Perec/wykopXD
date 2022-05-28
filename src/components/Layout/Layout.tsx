import { PropsWithChildren, useState } from 'react';
import LeftDrawer from './LeftDrawer/LeftDrawer';
import RightDrawer from './RightDrawer/RightDrawer';
import TopBar from './TopBar/TopBar';
import * as S from './Layout.styles';
import { isInIframe } from '../../utils/windowUtils';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  const [showLeftDrawer, setShowLeftDrawer] = useState(false);
  const [showRightDrawer, setShowRightDrawer] = useState(false);

  const handleToggleLeftDrawer = () => setShowLeftDrawer((prevState) => !prevState);
  const handleToggleRightDrawer = () => setShowRightDrawer((prevState) => !prevState);

  return (
    <>
      {!isInIframe() && (
        <TopBar
          onLeftDrawerToggleClick={handleToggleLeftDrawer}
          onRightDrawerToggleClick={handleToggleRightDrawer}
        />
      )}
      <S.Offset />
      <LeftDrawer open={showLeftDrawer} handleToggleDrawer={handleToggleLeftDrawer} />
      <RightDrawer open={showRightDrawer} handleToggleDrawer={handleToggleRightDrawer} />
      <S.Main>
        <S.MainContentContainer>{children}</S.MainContentContainer>
      </S.Main>
    </>
  );
};

export default Layout;
