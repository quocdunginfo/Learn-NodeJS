import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import LeftNavLayout from './Layout/LeftNavLayout';

export default function App() {
  const headerText = 'Header text from App';
  const menuItems = [
    { text: "Login", link: '/login' },
    { text: "Users", link: '/users' }
  ];
  return (
    <>
      <LeftNavLayout menuItems={menuItems}>
        <Header headerText={headerText} />
        <Home />
        <Footer />
      </LeftNavLayout>
    </>
  );
}
