import React from 'react';
import Login from './components/Login/Login'
import Chats from './components/Chats/Chats'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Switch>
            <Route path='/chats' exact render={() => <Chats />} />
            <Route path='/' exact render={() => <Login />} />
          </Switch>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
