import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';

export default function App() {
  const headerText = 'Header text from App';
  return (
    <>
      <Header headerText={headerText} />
      <Home />
      <Footer />
    </>
  );
}
