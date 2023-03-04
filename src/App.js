import './App.css';
import { Banner } from './Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className='wrapper'>
          <img className='portrait' src='IMG_0168 Medium.jpeg'></img>
        <div className='text-container'>
          <h1>Text Container Div</h1>
        </div>
      </div>
    </div>

  );
}

export default App;
