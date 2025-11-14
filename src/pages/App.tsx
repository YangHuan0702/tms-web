import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { useAppDispatch } from '../store/hooks';
import { useSelector } from 'react-redux';
import { updateAppName } from '../store/features/dictSlice';

function App() {
  const {appName} = useSelector((state: any) => state.dictInfo);

  const dispatch = useAppDispatch();

  // 更新store
  dispatch(updateAppName("新的标签名"))

  return (
    <div className="App">
      <header className='App-header'>
        {appName}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
          >
            Learn React
          </a>
      </header>
    </div>
  );
}

export default App;
