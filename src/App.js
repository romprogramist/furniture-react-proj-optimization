import React from 'react';
import Header from './components/header/Header';
import Modals from './components/modals/Modals';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Faq from './components/faq/Faq';
import Contacts from './components/contacts/Сontacts';
// import Faq from 

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Routes>с
				<Route path="/" element={<Main/>}/>	
        <Route path="about" element={<About/>} />	
        <Route path="FAQ" element={<Faq/>} />
        <Route path="contacts" element={<Contacts/>} />
			</Routes>
      <Footer/>
      <Modals/>
    </React.Fragment>
  );
}

export default App;
