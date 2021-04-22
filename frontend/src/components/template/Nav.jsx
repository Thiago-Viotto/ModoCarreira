import './Nav.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import 'materialize-css/dist/js/materialize.js'

// Import components
import Historic from './Historic';
import FormNews from './FormNews';
import CreateHistoric from './CreateHistoric';
import Home from './Home';

export default props => {

    return (
        <Router>
            <nav class="default grey darken-4" role="navigation">
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo center">Logo</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                <li><a href="/">Início</a></li>
                <li><a href="/historic">História de Morais</a></li>
                <li><a href="/createNews">Criar notícias</a></li>
                <li><a href="/createHistoric">Criar histórico</a></li>
            </ul>

            <Switch>
                <Route path="/historic">
                    <Historic />
                </Route>
                <Route path="/createNews">
                    <FormNews />
                </Route>
                <Route path="/createHistoric">
                    <CreateHistoric />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}