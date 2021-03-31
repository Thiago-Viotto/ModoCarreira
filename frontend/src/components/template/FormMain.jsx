import React from 'react';
import './FormMain.css';

export default props => {

    return(
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <i class="material-icons prefix">subtitles</i>
                        <input class="icon_prefix" type="text" validate></input>
                        <label for="icon_prefix">Título da notícia</label>
                    </div>
                </div>
            </form>
        </div>
        
    )
}