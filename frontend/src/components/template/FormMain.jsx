import React from 'react';
import './FormMain.css';

export default props => {

    return (
        <div class="row">
            <div><h3 id="titleFormMain">Criar notícias</h3></div>

            <form class="col s12" action="#">
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">subtitles</i>
                        <input id="icon_prefix" type="text" class="validate"></input>
                        <label for="icon_prefix">Título da notícia</label>
                    </div>
                    <div class="input-field col s12">
                        <i class="material-icons prefix">assignment</i>
                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                        <label for="textarea1">Descrição da notícia</label>
                    </div>
                </div>
                <div class="file-field input-field col s12">
                    <div class="btn" id="btnImage">
                        <span>IMAGEM</span>
                        <input type="file" />
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" />
                    </div>
                </div>
                <div class="col s12" id="btnFormMain">
                    <button class="btn waves-effect waves-light" type="submit" name="action">CRIAR
                    <i class="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>

    )
}