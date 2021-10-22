import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import StockScreen from './screens/StockScreen';
import DashBoard from './screens/DashBoard';
import GTL from './screens/GTL';

function App() {
  return (
    <Router>
      <Header/>
        <main>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/stock' component={StockScreen}/>
          <Route path='/dashboard' component={DashBoard}/>
          <Route path='/gtl' component={GTL}/>
        </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
