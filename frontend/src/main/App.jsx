import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import React, { useEffect } from 'react';
import Main from '../components/template/Main';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';


export default props => {
    useEffect(() => {
        let sidenav = document.querySelector('#mobile-demo');
        M.Sidenav.init(sidenav, {});
    })

    return (
        < div className="app" >
            <Nav />
            <Main />
            <Footer />
        </div >
    )
}