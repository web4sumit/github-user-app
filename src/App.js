import './App.css';
import UserSearch from './components/UserSearch';

function App() {
  return (
    <>
    <header>
      <div className='container'>
        <div className='navbar'>
        <h2>Github user</h2>
        </div>
      </div>
    </header>
    <UserSearch />
    </>
  );
}

export default App;
