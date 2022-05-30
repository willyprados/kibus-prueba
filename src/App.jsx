import AppTheme from "./theme/AppTheme";
import Header from "./components/organisms/Header/Header";
import Welcome from "@/components/organisms/Welcome/Welcome";

function App() {
  return (
    <AppTheme>
      <Header />
      <Welcome />
    </AppTheme>
  );
}

export default App;
