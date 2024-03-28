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
            <h1 className="text-center">Calculette avec REACT</h1>
                <div className="col-6 offset-3 d-flex align-tems-center">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="totalCalculette">Total</span>
                        <input type="text" className="form-control col-5" placeholder="Total" aria-label="Total" aria-describedby="totalCalculette" id="result"disabled />
                    </div>
                </div>
        </div>            
            
                    <div className="d-flex flex-column align-items-center bg-secondary gap-3">
                        <div className="d-flex flex-row gap-2 col-5">
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" onClick={clickOnButton}>1</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" onClick={clickOnButton}>2</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" onClick={clickOnButton}>3</button>
                            <button type="button" className="btn btn-info col-3 caracterToAdd" onClick={clickOnButton}>+</button>
                        </div>
                        <div className="d-flex flex-row gap-2 col-5">
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" onClick={clickOnButton}>4</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" onClick={clickOnButton}>5</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" onClick={clickOnButton}>6</button>
                            <button type="button" className="btn btn-info col-3 caracterToAdd" onClick={clickOnButton}>-</button>
                        </div>
                        <div className="d-flex flex-row gap-2 col-5">
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" onClick={clickOnButton}>7</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" onClick={clickOnButton}>8</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" onClick={clickOnButton}>9</button>
                            <button type="button" className="btn btn-info col-3 caracterToAdd"    onClick={clickOnButton}>/</button>
                        </div>
                        <div className="d-flex flex-row gap-2 col-5">
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" onClick={clickOnButton}>.</button>
                            <button type="button" className="btn btn-primary col-3 caracterToAdd" onClick={clickOnButton}>0</button>
                            <button type="button" className="btn btn-danger col-3" id="reset" onClick={clickOnButton}>C</button>
                            <button type="button" className="btn btn-info col-3 caracterToAdd" onClick={clickOnButton}>*</button>
                        </div>
                        <div className="d-flex flex-row gap-4 col-5">
                            <button type="button" className="btn btn-danger col-9" id="deleteC" onClick={clickOnButton}>DELETE</button>
                            <button type="button" className="btn btn-info col-3" id="egal" onClick={clickOnButton}>=</button>
                        </div>
                    </div>   
    </>
    );
};
export default Calculette;
