import './Nav.css';
import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import 'materialize-css/dist/js/materialize.js'

// Import components
import Historic from './Historic';
import FormMain from './FormMain';
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
                <li><Link to="/">Início</Link></li>
                <li><Link to="/historic">História de Morais</Link></li>
                <li><Link to="/createNews">Criar notícias</Link></li>
                <li><Link to="/createHistoric">Criar histórico</Link></li>
            </ul>

            <Switch>
                <Route path="/historic">
                    <Historic />
                </Route>
                <Route path="/createNews">
                    <FormMain />
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