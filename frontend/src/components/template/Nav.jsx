import './Nav.css';
import React, { useEffect } from 'react';
import 'materialize-css/dist/js/materialize.js'

export default props => {

    return (
        <>
            <nav class="default grey darken-4" role="navigation">
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo center">Logo</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Início</a></li>
                <li><a href="sass.html">História de Morais</a></li>
                <li><a href="sass.html">Criar notícias</a></li>
                <li><a href="sass.html">Criar histórico</a></li>
            </ul>
        </>
    )
}