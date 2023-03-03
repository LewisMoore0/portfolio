import './App.css';
import { Banner } from './Banner';

function App() {
  return (
    <div className="App">
         <Banner />

      <div className='wrapper'>
      <div className='container'>
        <div className='column'>
            <h1> div1 </h1>
        </div>
        <div className='column'>
            <h1> div2 </h1>
        </div>
        <div className='column'>
            <h1> div3 </h1>
        </div>
      </div>
      <div className='container'>
        <div className='column'>
            <h1> div1.2 </h1>
        </div>
        <div className='column'>
            <h1> div2.2 </h1>
        </div>
        <div className='column'>
            <h1> div3 </h1>
        </div>
      </div>
      </div>
    </div>

  );
}

export default App;
