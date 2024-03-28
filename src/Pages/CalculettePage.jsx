import React, { useEffect, useState } from "react";

const Calculette = () => {
  // Etats - States
  // Créer un état calcul
  // Créer un état calcul
  const clickOnButton = (e) => {
    console.log(e.target.innerHTML);
    // Met à jour l'état calcul
  }

  // Comportements - Les fonctions




  useEffect(() => {
  }, []);

  // Affichages - return

  return (
    <>
        
        {/* html de la calculatrice */}
        <div className="container">
            <h1 className="text-center">Calculette TEST</h1>
                <div className="col-6 offset-3 d-flex align-tems-center">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="totalCalculette">Total</span>
                        <input type="text" className="form-control col-5" placeholder="Total" aria-label="Total" aria-describedby="totalCalculette" id="result"disabled />
                    </div>
        </div>            
            
                    <div className="d-flex flex-column align-items-center bg-secondary gap-3">
                        <div className="d-flex flex-row gap-2 col-5">
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" ocClick={clickOnButton}>1</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd">2</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd">3</button>
                            <button type="button" className="btn btn-info col-3 caracterToAdd">+</button>
                        </div>
                        <div className="d-flex flex-row gap-2 col-5">
                            <button type="button" className="btn btn-primary col-3 caracterToAdd">4</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd">5</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd">6</button>
                            <button type="button" className="btn btn-info col-3 caracterToAdd">-</button>
                        </div>
                        <div className="d-flex flex-row gap-2 col-5">
                            <button type="button" className="btn btn-primary col-3 caracterToAdd">7</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd">8</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd">9</button>
                            <button type="button" className="btn btn-info col-3 caracterToAdd">/</button>
                        </div>
                        <div className="d-flex flex-row gap-2 col-5">
                            <button type="button" className="btn btn-primary col-3 caracterToAdd">.</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd">0</button>
                            <button type="button" className="btn btn-danger col-3" id="reset">C</button>
                            <button type="button" className="btn btn-info col-3 caracterToAdd">*</button>
                        </div>
                        <div className="d-flex flex-row gap-4 col-5">
                            <button type="button" className="btn btn-danger col-9" id="deleteC">DELETE</button>
                            <button type="button" className="btn btn-info col-3" id="egal">=</button>
                        </div>
                    </div>   
                </div>
    </>
    );
};
export default Calculette;
