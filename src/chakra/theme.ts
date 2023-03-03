import { extendTheme } from "@chakra-ui/react"
import { m } from "framer-motion"

export const theme = extendTheme({
  fonts: {
    body: `'Noto Sans', sans-serif`,
  },
  styles: {
    global: () => ({
        body: {
            bg: "#ffffff",
            color: '#000000',
        }

    })
},
})