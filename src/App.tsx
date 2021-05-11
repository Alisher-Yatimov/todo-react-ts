import { useSelector } from "react-redux";
import { IStore } from "./types/State";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./router/Routes";

function App() {
  const checked = useSelector((state: IStore) => state.theme);
  return (
    <ThemeProvider theme={checked ? theme.dark : theme.light}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
