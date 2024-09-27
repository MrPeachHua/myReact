import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [data, setData] = React.useState('');
  useEffect(() => {
    fetch('https://finance.yiduoyunfan.asia/about')
     .then(response => response.text())
     .then(response => {
       setData(response);
      });

  }, [data]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data}
        </a>
      </header>
    </div>
  );
}


export default App;
