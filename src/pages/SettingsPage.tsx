import { Check } from '@mui/icons-material';
import {
  CardContent,
  FormControlLabel,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material';
import { useContext, MouseEvent } from 'react';
import { Card, MainContentContainer } from '~/components/UI/Containers';
import SettingsContext from '~/contexts/Settings/SettingsContext';
import ThemeContext from '~/contexts/Theme/ThemeContext';
import useTitle from '~/hooks/useTitle';
import { PrimaryColor, ThemeMode, themeModeTitles } from '~/theme';

const SettingsPage = () => {
  useTitle('Ustawienia');
  const { setPrimaryColor, primaryColor, changeThemeMode, themeMode } = useContext(ThemeContext);
  const { doShowAdultContent, setDoShowAdultContent } = useContext(SettingsContext);
  const theme = useTheme();

  const handleChangeColor = (_: MouseEvent, color: PrimaryColor) => setPrimaryColor(color);

  return (
    <MainContentContainer>
      <Card centered>
        <CardContent>
          <Typography variant='h2' color={theme.palette.text.primary}>
            Kolor główny
          </Typography>
          <div style={{ height: '60px' }}>
            <ToggleButtonGroup value={primaryColor} exclusive style={{ gap: 10 }}>
              {Object.values(PrimaryColor).map((color) => (
                <ToggleButton
                  key={color}
                  value={color}
                  onClick={handleChangeColor}
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

          <ToggleButtonGroup value={themeMode} exclusive>
            {Object.values(ThemeMode).map((mode) => (
              <ToggleButton key={mode} value={mode} onClick={changeThemeMode}>
                {themeModeTitles[mode]}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </CardContent>
      </Card>
      <Card centered>
        <CardContent>
          <FormControlLabel
            control={
              <Switch checked={doShowAdultContent} onChange={(_, show) => setDoShowAdultContent(show)} name='jason' />
            }
            label={<Typography component='span'>Pokazuj treści +18</Typography>}
            componentsProps={{ typography: { color: 'InfoText' } }}
          />
        </CardContent>
      </Card>
    </MainContentContainer>
  );
};

export default SettingsPage;
