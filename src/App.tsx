import * as React from "react"
import {
  ChakraProvider,
  Box
} from "@chakra-ui/react"

import Login from "./components/Login"

export const App = () => (
  <ChakraProvider>
      <Box p={4}>
        <Login/>
      </Box>
    </ChakraProvider>
)
