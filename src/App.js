import style from './App.module.css'
import Phone from './components/Phone'
import Quote from './components/Quote';

function App() {
  return (
    <div className={style.App}>
      <Phone/>
      <Quote/>
    </div>
  );
}

export default App;
