import './Main.css';
import React from 'react';

export default props => {

    return (
        <>
            <main className="content">

                <div class="row">

                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src="images/teste.png" alt="Imagem da postagem" />
                                <span class="card-title">Card Title</span>
                            </div>
                        </div>
                    </div>


                    <div class="col s12 m4">
                        <div class="card medium">
                            <div class="card-image">
                                <img src="images/teste.png" alt="Imagem da postagem" />
                                <span class="card-title">Card Title</span>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively. </p>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </>
    )
}

