import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "informed";
import "./style.css";
import Login from "../../img/Login.jpg";



const login = () => {
  return (
    <>
      <div className="containerLogin">
        <div className="containerCardLogin">
          <div className="halfJPG">
            <img src={Login} className="imgAngel" />
          </div>
          <div className="halfWhite">
            <div className="titleSesion">
              <h1>Inicio de Sesión</h1>
            </div>
            <div className="form">
              <div>
                <Form >
                  <div className="divInputs">
                    <Input
                      name="user"
                      type="text"
                      placeholder="Usuario"
                      className="form-control"
                    />
                  </div>
                  <div className="divInputs">
                    <Input
                      name="password"
                      type="password"
                      placeholder="Contraseña"
                      className="form-control"
                    />
                  </div>
                  <div className="divInputs">
                    <button className="btn">
                      <Link to='/menu'>
                        Enviar
                      </Link>
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;