import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 style={{ backgroundColor: 'orange' }}>Demo Styling in ReactJS</h1>
      </div>
    </div>
  );
}

export default App;
