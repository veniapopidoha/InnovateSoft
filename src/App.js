import './App.css';
import { Footer } from './modules/Footer';
import { Header } from './modules/Header';
import { MainPage } from './modules/MainPage';
import { Sections } from './modules/Sections';

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Sections />
      <Footer />
    </>
  );
}

export default App;
