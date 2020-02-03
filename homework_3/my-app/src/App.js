import React from 'react';
import AppTitle from './components/AppTitle';
import AppSearch from './components/AppSearch';
import AppInfo from './components/AppInfo';
import SearchButtons from './components/SearchButtons';

import AddInfo from './components/AddInfo';
import AddButton from './components/AddButton';

import TodoList from './components/TodoList';
import css from './index.css';

function App() {
  return (
    <div className="main">

      <div className="row justify-content-between align-items-center">
        <AppTitle />
        <AppInfo />
      </div>

      <div className="row input-group mb-3 justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
        <AppSearch />
        <SearchButtons />
      </div>

      <div className="task">
        <TodoList />
		  </div>

      <div className="row input-group mb-3 justify-content-between add" role="toolbar" aria-label="Toolbar with button groups">
        <AddInfo />
        <AddButton />
		  </div>

    </div>
  );
}

export default App;
