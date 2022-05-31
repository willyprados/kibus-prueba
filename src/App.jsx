import AppTheme from "./theme/AppTheme";
import Header from "./components/organisms/Header/Header";
import Welcome from "@/components/organisms/Welcome/Welcome";
import Carousel from "@/components/organisms/Carousel/Carousel";
import Footer from "@/components/organisms/Footer/Footer";

function App() {
  return (
    <AppTheme>
      <Header />
      <Welcome />
      <Carousel />
      <Footer />
    </AppTheme>
  );
}

export default App;
