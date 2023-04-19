import  '../components/Ciccio.css'
import { useState } from 'react'

interface PropsType{
    //per implementare le valore dati dal padre
    valore:number
    aggiorna :Function
    contatore: number
}

function Ciccio(props: PropsType){
    //per renderli aggiornabili in tempo reale
    const {valore, aggiorna , contatore} = props 
    

    const cliccato = () => {
        props.aggiorna(props.contatore +1)
    }

    return(
     <>
     <h1>Il Bottone vale = {props.valore}</h1>
        <button onClick={()=>{ cliccato() }} >Premimi {}</button>
    </>   
    )
}

export default Ciccio