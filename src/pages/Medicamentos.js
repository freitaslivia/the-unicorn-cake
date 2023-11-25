import { FaPowerOff } from "react-icons/fa";
import foto from "../components/img/imagens em alta (1).jpg"
import styles from "./Medicamentos.module.css"

function Medicamentos (){
    return(
        <div className={styles.base}>
            <img className={styles.foto} src={foto}></img>
            <div className={styles.textos}>
                <h2>MEDICAMENTOS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </p>
            </div>
            <div className={styles.estrurua}>
                <div className={styles.alergias}>
                    <ul>
                        <li>
                            <div className={styles.titulo}>
                                <h2>MEDICAMENTO 01</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Dosagem: LOREM IPSUM
Via: LOREM IPSUM
Hora: LOREM IPSUM
Qtd dias: LOREM IPSUM
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>MEDICAMENTO 02</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Dosagem: LOREM IPSUM
Via: LOREM IPSUM
Hora: LOREM IPSUM
Qtd dias: LOREM IPSUM
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>MEDICAMENTO 03</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Dosagem: LOREM IPSUM
Via: LOREM IPSUM
Hora: LOREM IPSUM
Qtd dias: LOREM IPSUM
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>MEDICAMENTO 04</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Dosagem: LOREM IPSUM
Via: LOREM IPSUM
Hora: LOREM IPSUM
Qtd dias: LOREM IPSUM
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>MEDICAMENTO 05</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Dosagem: LOREM IPSUM
Via: LOREM IPSUM
Hora: LOREM IPSUM
Qtd dias: LOREM IPSUM
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>MEDICAMENTO 06</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Dosagem: LOREM IPSUM
Via: LOREM IPSUM
Hora: LOREM IPSUM
Qtd dias: LOREM IPSUM
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.novaAlergia}>
                    <h2>NOVA MEDICAMENTO</h2>
                    <div className={styles.escrever}>
                        <label for="textonome">Digite seu nome:</label>
                        <textarea id="textonome" name="textonome" rows="4" cols="50"></textarea>
                        <label for="textodosagem">Digite a dosagem:</label>
                        <textarea id="textodosagem" name="textodosagem" rows="4" cols="50"></textarea>
                        <label for="textoadm">Digite a vida de adiministração:</label>
                        <textarea id="textoadm" name="textoadm" rows="4" cols="50"></textarea>
                        <label for="textohora">Digite a hora:</label>
                        <textarea id="textohora" name="textohora" rows="4" cols="50"></textarea>
                        <label for="textodias">Digite a quantidade de dias:</label>
                        <textarea id="textodias" name="textodias" rows="4" cols="50"></textarea>
                        <button type="submit">cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Medicamentos