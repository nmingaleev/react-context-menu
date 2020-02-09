import React from 'react';

import Container from './components/Container';

import './App.css';

const menuItems = [
  {
    text: 'Item 1',
    onClick: () => { console.log('Item 1 clicked!'); }
  },
  {
    text: 'Item 2',
    onClick: () => { console.log('Item 2 clicked!'); }
  }
];

function App() {
  return (
    <div className="app">
      <div className='containers'>
        <div className='containers__item'>
          <Container menuItems={menuItems}>
            Container 1
          </Container>
        </div>

        <div className='containers__item'>
          <Container menuItems={menuItems}>
            Container 2
          </Container>
        </div>

        <div className='containers__item'>
          <Container menuItems={menuItems}>
            Container 3
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
