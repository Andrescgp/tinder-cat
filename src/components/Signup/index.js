import React from 'react'
import Logo from '../../static/logo-login.png'

export const Signup = () => (
<div className="center">
    <div className="complex">
            
            
    <section id="content">

        {/* LOGO */}
        <div id="logos">
            <img src={Logo} className="app-logo" alt="Logotipo" />
            </div>
            
           {/*FORMULARIO*/}

               <h1 className="subheader">Registro</h1>

               <form className="mid-form">
                    <div className="form-group">
                        <label for="nombre">Nombre  </label>
                        <input id="name" type="text" name="nombre" />
                    </div>

                    <div className="form-group">
                        <label for="apellidos">Nick</label>
                        <input id="name" type="text" />
                    </div>
                    <div className="form-group">
                        <label for="apellidos">Email</label>
                        <input id="name" type="text" />
                    </div>
                    <div className="form-group">
                        <label for="apellidos">Contaseña</label>
                        <input type="password" pattern=".{6,}" />
                    </div>
                    <div className="form-group-l radibuttons">
                        <label class="form-group">Género</label>
                        <input type="radio" name="genero" value="hombre" /> Gato 
                        <input type="radio" name="genero" value="mujer" /> Gata 
                        <input type="radio" name="genero" value="otro" /> Otro
                    </div>
                    <div class="form-group">
                    <label for="apellidos">Fecha</label>
                    <input type="date"></input>
                    </div>
                    <div class="form-group">
                            <label for="bio">Biografia</label>
                            <textarea name="bio"></textarea>
                     </div>
                    

                        

                    
                    

                    <input type="submit" value="Enviar" className="btn-success" />

               </form>           
        </section>
    </div>  
</div>
)

