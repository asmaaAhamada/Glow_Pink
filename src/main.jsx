import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import App from './App'
import store from './store'
import ThemeWrapper from './desighn/ThemeContext'

const theme = createTheme({
  palette: {
    mode: 'light'
  }
})

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       <ThemeWrapper >
          <CssBaseline />
          <App />
      </ThemeWrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)