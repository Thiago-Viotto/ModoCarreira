import './App.css';
import '../css/materialize.min.css';
import React from 'react';
import Main from '../components/template/Main';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';


export default props =>
    <div className="app">
        <Nav />
        <Main />
        <Footer />
    </div>
