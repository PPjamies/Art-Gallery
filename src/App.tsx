import * as React from "react"
import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react"
import AuthRoutes from "./router/auth-routes"
import { BrowserRouter } from "react-router-dom"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        w: '100%',
        h: '100%'
      }
    }
  }
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <AuthRoutes/>
    </BrowserRouter>
  </ChakraProvider>
)
