import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import UsersList from './components/UsersList';
import Error from './components/Error'
import { useSelector } from 'react-redux';
import Loading from './components/Loading';


function App() {
  const users = useSelector(state => state.users)
  const error = useSelector(state => state.error)
  const loading = useSelector(state => state.loading)
  return (
    <div className="App">
      <Header />
      <Search />
      { error ? <Error /> : ''}
      {
        loading ?
        <Loading /> :
        <UsersList users={users} /> 
      }
    </div>
  );
}

export default App;
