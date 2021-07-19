import React from 'react';
import './App.css';
import Search from './components/Search/index';
import Results from './components/Results/index';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Github search</h1>
      </header>

      <article className="content">
        <Search />

        <Results />
      </article>

      <footer>
        By dniskav 2021
      </footer>
    </div>
  );
}

export default App;
