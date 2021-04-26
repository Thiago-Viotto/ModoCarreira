import React, { useState } from 'react';
import './FormNews.css';
import M from 'materialize-css';
const axios = require('axios');

export default props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    let valueURLImg = ''; // used by image upload
    let optionFormNew = 'secondary'; // is Secondary new by default

    const createNew = async () => {
        const data = new FormData()
        data.append('file', selectedFile);

        await axios.post("http://localhost:8000/upload", data, {
        }).then(res => {
            valueURLImg = `http://localhost:3000/images/${res.data.originalname}`
        })

        if (document.getElementById('checkboxForm').checked) { // is principal new
            optionFormNew = 'main';
        } 

        await axios.post(`http://localhost:3001/${optionFormNew}`, {
            title: title,
            description: description,
            image: valueURLImg
        }).then(resp => {
            console.log(resp.data)
            M.toast({html: `Notícia cadastrada com sucesso`, classes: 'rounded', inDuration: 175, outDuration: 75})
        }).catch(error => {
            console.log(error)
        })

    }

    return (
        <div class="row">
            <div><h3 id="titleFormMain">Criar notícias</h3></div>

            <form class="col s12" action="#" encType="multipart/form-data">
                <div class="switch">
                    <label>
                        Secundária
                        <input id="checkboxForm" type="checkbox" />
                        <span class="lever"></span>
                        Principal
                    </label>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">subtitles</i>
                        <input id="icon_prefix" type="text" class="validate" value={title} onChange={e => setTitle(e.target.value)} ></input>
                        <label for="icon_prefix">Título da notícia</label>
                    </div>
                    <div class="input-field col s12">
                        <i class="material-icons prefix">assignment</i>
                        <textarea id="textarea1" class="materialize-textarea" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                        <label for="textarea1">Descrição da notícia</label>
                    </div>
                </div>
                <div class="file-field input-field col s12">
                    <div class="btn" id="btnImage">
                        <span>IMAGEM</span>
                        <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" />
                    </div>
                </div>
                <div class="col s12" id="btnFormMain">
                    <button class="btn waves-effect waves-light" type="submit" name="action" onClick={createNew}>CRIAR
                    <i class="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>

    )
}