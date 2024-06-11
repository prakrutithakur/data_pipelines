import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TimepickerStyles from '@/shared/components/form/date-pickers/timepickerStyles';
import Router from './Router';
import store from './store';
import ScrollToTop from './ScrollToTop';
import GlobalStyles from './globalStyles';
import RechartStyles from './rechartStyles';
import NotificationStyles from './notificationStyles';
import CalendarStyles from './calendarStyles';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

const ThemeComponent = ({ children }) => {
  const mode = useSelector((state) => state.theme.className);
  const direction = useSelector((state) => state.rtl.direction);
  const shadow = useSelector((state) => state.shadow.className);
  const border = useSelector((state) => state.border.className);

  const theme = createTheme({
    palette: {
      type: mode,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider
        theme={{
          mode,
          direction,
          shadow,
          border,
        }}
      >
        <GlobalStyles />
        <NotificationStyles />
        <RechartStyles />
        <TimepickerStyles />
        <CalendarStyles />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

ThemeComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const ConnectedThemeComponent = ThemeComponent;

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedThemeComponent>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ScrollToTop>
            <Router />
          </ScrollToTop>
        </ErrorBoundary>
      </ConnectedThemeComponent>
    </Provider>
  );
};

export default App;
