import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



3
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider >
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
)


//<ChakraProvider theme={theme}>
//import theme