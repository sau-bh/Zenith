import HomePage from "./HomePage"
import { CustomThemeProvider } from "./ThemeContext"
function App() {
  return (
    <>
      <CustomThemeProvider>
        <HomePage />
      </CustomThemeProvider>
    </>
  )
}

export default App
