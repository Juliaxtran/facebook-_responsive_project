
import './App.css';
import * as React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';


function App() {


  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default App;
