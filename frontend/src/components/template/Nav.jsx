import './Nav.css';
import React, { useEffect } from 'react';
import $ from "jquery";

export default props => {

    useEffect(() => {
        $(document).ready(function () {
            $('.sidenav').sidenav();
        });
    })

    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <ul class="left hide-on-med-and-down">
                        <li><a href="sass.html">Início</a></li>
                        <li><a href="sass.html">História de Morais</a></li>
                    </ul>
                    <a href="#!" class="brand-logo center">Logo</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="sass.html">Criar notícias</a></li>
                        <li><a href="sass.html">Criar histórico</a></li>
                    </ul>
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