import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

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