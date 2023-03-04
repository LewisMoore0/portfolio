import './App.css';
import { Banner } from './Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className='wrapper'>
          <img className='portrait' src='IMG_0168 Medium.jpeg'></img>
          <div className='icon-container'>
            <img className='github-icon' src='FreeWebToolkit_1677952336.ico'></img>
          </div> 
          <div className='linkedin-icon' >
           <img className='linkedin-icon' src='FreeWebToolkit_1677952484.ico'></img>
          </div>
      </div>
    </div>

  );
}

export default App;
