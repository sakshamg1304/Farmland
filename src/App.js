import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import login from './components/loginPage/login';
import signup from './components/signUp/signup';
import { Container } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Container>
          <Switch>
            <Route path="/login" exact component={login} />
            <Route path="/signup" exact component={signup} />
          </Switch>
        </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
