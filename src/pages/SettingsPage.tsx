import { Check } from '@mui/icons-material';
import { Card, Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useContext } from 'react';
import useTitle from 'hooks/useTitle';
import ThemeContext from '../contexts/Theme/ThemeContext';
import { PrimaryColor, ThemeMode } from '../theme';

const SettingsPage = () => {
  useTitle('Ustawienia');
  const { handleSetPrimaryColor, primaryColor, handleToggleThemeMode, themeMode } =
    useContext(ThemeContext);

  const handleColor = (event: React.MouseEvent<HTMLElement>, color: PrimaryColor) => {
    handleSetPrimaryColor(color);
  };

  return (
    <Container>
      <Card>
        <ToggleButtonGroup value={primaryColor} exclusive>
          {Object.values(PrimaryColor).map((color) => (
            <ToggleButton
              key={color}
              value={color}
              onClick={handleColor}
              style={{ backgroundColor: color, borderRadius: '50%', width: '50px', height: '50px' }}
            >
              {color === primaryColor && <Check />}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Card>

      <Card>
        <ToggleButtonGroup value={themeMode} exclusive>
          {Object.values(ThemeMode).map((mode) => (
            <ToggleButton key={mode} value={mode} onClick={handleToggleThemeMode}>
              {mode}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Card>
    </Container>
  );
};

export default SettingsPage;
