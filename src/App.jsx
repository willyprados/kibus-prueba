import AppTheme from "./theme/AppTheme";
import Header from "./components/organisms/Header/Header";
import Welcome from "@/components/organisms/Welcome/Welcome";
import Carousel from "@/components/organisms/Carousel/Carousel";

function App() {
  return (
    <AppTheme>
      <Header />
      <Welcome />
      <Carousel />
    </AppTheme>
  );
}

export default App;
