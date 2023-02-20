import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    body: `'Noto Sans', sans-serif`,
  },
  styles: {
    global: () => ({
        body: {
            bg: "#131313",
            color: '#eeeeee'
        }
    })
},
})