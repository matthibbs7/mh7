import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

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
  config
})