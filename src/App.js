import React from 'react'
import './App.css'
import HeaderToolbar from './components/HeaderToolbar'
import { createMuiTheme } from '@material-ui/core/styles'
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/styles'
import { create } from 'jss'
import rtl from 'jss-rtl'


const theme = createMuiTheme({
    direction: 'rtl',
})
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })


function App() {
    return (
        <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
                <div className="App">
                    <HeaderToolbar />
                </div>
            </StylesProvider>
        </ThemeProvider>
    )
}

export default App
