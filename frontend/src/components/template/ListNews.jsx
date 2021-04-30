import React, { useState, useEffect } from 'react'
import M from 'materialize-css'
import './ListNews.css'
const axios = require('axios');

export default props => {
    const [mainNews, setMainNews] = useState([]);

    let optionFormNew = 'main'; // is main new by default

    useEffect(async () => {
        await axios.get(`http://localhost:3001/${optionFormNew}`)
            .then(resp => {
                console.log(resp.data)
                setMainNews(resp.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, [])

    const setNews = async () => {
        if (document.getElementById('checkboxForm').checked) { // is secondary new
            optionFormNew = 'secondary';
        } else {
            optionFormNew = 'main';
        }

        await axios.get(`http://localhost:3001/${optionFormNew}`)
            .then(resp => {
                setMainNews(resp.data)
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <div class="row">
            <div><h3 id="titleFormMain">Notícias</h3></div>
            <div class="switch">
                <label>
                    Principal
                        <input id="checkboxForm" type="checkbox" onClick={setNews} />
                    <span class="lever"></span>
                    Secundária
                    </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título da notícia</th>
                        <th>Ações</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {mainNews.map((news, index) => (
                        <tr key={index}>
                            <td>{news.id}</td>
                            <td>{news.title}</td>
                            <td style={{ width: 100 }}><button class="btn waves-effect waves-light" type="submit">Editar</button></td>
                            <td><button style={{ backgroundColor: 'red' }} class="btn waves-effect waves-light" type="submit">Remover</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
