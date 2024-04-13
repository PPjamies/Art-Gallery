import * as React from "react"
import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react"
import Login from "./components/Login"

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
      <Login/>
  </ChakraProvider>
)
