import {memo, useMemo} from 'react'
import {Provider} from 'react-redux'
import {ThemeProvider, useMediaQuery} from "@mui/material";

import './App.css'
import {App as AppDesktop} from "$desktop";
import {store} from '$store/config/store'
import './global.css'
import {useModeListener} from "$styles/useModeListener";
import {App as AppMobile} from "mobile";

export const AppContainer = memo(() => {
  const theme = useModeListener()
  const matches = useMediaQuery('(min-width:600px)');

  const Layout = useMemo(() => matches ? AppDesktop : AppMobile, [matches])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout/>
      </ThemeProvider>
    </Provider>)
})

AppContainer.displayName = 'AppContainer'
