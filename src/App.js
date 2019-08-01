import React from 'react'
import './App.css'
import { createMuiTheme } from '@material-ui/core/styles'
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/styles'
import { create } from 'jss'
import rtl from 'jss-rtl'
import AppLayout from './containers/AppLayoutContainer/AppLayout'
import configStore from './configStore'


const theme = createMuiTheme({
    direction: 'rtl',
})
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })


function App() {
    return (
        <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
                <div className="App">
                    <AppLayout />
                </div>
            </StylesProvider>
        </ThemeProvider>
    )
}

export default App
