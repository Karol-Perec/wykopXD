import { Check } from '@mui/icons-material';
import { Container, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material';
import { useContext, MouseEvent } from 'react';
import ThemeContext from '~/contexts/Theme/ThemeContext';
import useTitle from '~/hooks/useTitle';
import { PrimaryColor, ThemeMode, themeModeTitles } from '~/theme';

const SettingsPage = () => {
  useTitle('Ustawienia');
  const { handleSetPrimaryColor, primaryColor, handleChangeThemeMode, themeMode } =
    useContext(ThemeContext);
  const theme = useTheme();

  const handleColor = (_: MouseEvent, color: PrimaryColor) => handleSetPrimaryColor(color);

  return (
    <Container style={{ marginTop: 16, textAlign: 'center' }}>
      <Typography variant='h2' color={theme.palette.text.primary}>
        Kolor główny
      </Typography>
      <div style={{ height: '60px' }}>
        <ToggleButtonGroup value={primaryColor} exclusive style={{ gap: 10 }}>
          {Object.values(PrimaryColor).map((color) => (
            <ToggleButton
              key={color}
              value={color}
              onClick={handleColor}
              style={{
                backgroundColor: color,
                borderRadius: '50%',
                width: '50px',
                height: '50px',
              }}
            >
              {color === primaryColor && <Check />}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <Typography variant='h2' color={theme.palette.text.primary}>
        Motyw
      </Typography>
      <div>
        <ToggleButtonGroup value={themeMode} exclusive>
          {Object.values(ThemeMode).map((mode) => (
            <ToggleButton key={mode} value={mode} onClick={handleChangeThemeMode}>
              {themeModeTitles[mode]}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    </Container>
  );
};

export default SettingsPage;
