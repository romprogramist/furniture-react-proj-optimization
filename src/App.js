import React from 'react';
import Header from './components/header/Header';
import Modals from './components/modals/Modals';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';


function App() {
  return (
    <React.Fragment>
    <Header/>
		<Main/>
		<Modals/>
		<Footer/>
    </React.Fragment>
  );
}

export default App;
