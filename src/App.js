import styles from './App.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 style={{ backgroundColor: 'orange' }}>Demo Styling in ReactJS</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
