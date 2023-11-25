import { FaPowerOff } from "react-icons/fa";
import foto from "../components/img/imagens em alta (1).jpg"
import styles from "./Alergias.module.css"
import {useState} from "react";
import axios from "axios";


function Alergias (){
    const [getDescription, setDescription] = useState("")
    const [getType, setType] = useState("")

    function submitForm () {
       axios.post('http://localhost:8080/alergias/', {
           cpf:"111.111.111-11",
           tipo:"x",
           descricaoGrau:""
       }).then(e => console.log(e))
    }

    return(
        <div className={styles.base}>
            <img className={styles.foto} src={foto}></img>
            <div className={styles.textos}>
                <h2>ALERGIAS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </p>
            </div>
            <div className={styles.estrurua}>
                <div className={styles.alergias}>
                    <ul>
                        <li>
                            <div className={styles.titulo}>
                                <h2>TIPO</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua. Amet est placerat in
                                egestas.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>TIPO</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua. Amet est placerat in
                                egestas.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>TIPO</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua. Amet est placerat in
                                egestas.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>TIPO</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua. Amet est placerat in
                                egestas.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>TIPO</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua. Amet est placerat in
                                egestas.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>TIPO</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua. Amet est placerat in
                                egestas.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.novaAlergia}>
                    <h2>NOVA ALERGIA</h2>
                    <div className={styles.escrever}>
                        <label for="textotipo">Digite o tipo:</label>
                        <textarea id="textotipo" onChange={(e) => setType(e.target.value)} name="textotipo" rows="4" cols="50"></textarea>
                        <label for="textotipo">Digite a descrição:</label>
                        <textarea id="textodescrição"  onChange={(e) => setDescription(e.target.value)}  name="textodescrição" rows="4" cols="50"></textarea>
                        <button type="submit" onClick={submitForm}>cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Alergias