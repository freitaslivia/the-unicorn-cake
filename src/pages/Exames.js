import { FaPowerOff } from "react-icons/fa";
import foto from "../components/img/imagens em alta (1).jpg"
import styles from "./Consultas.module.css"

function Exames (){
    return(
        <div className={styles.base}>
            <img className={styles.foto} src={foto}></img>
            <div className={styles.textos}>
                <h2>EXAMES</h2>
                <p>Aqui estão os exames recentes e futuros, você pode adicionar, consultar, editar ou deletar seus
                   exames.
                </p>
            </div>
            <div className={styles.estrurua}>
                <div className={styles.alergias}>
                    <ul>
                        <li>
                            <div className={styles.titulo}>
                                <h2>HEMOGRAMA</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Manter pelo menos 8 horas de
                                    Jejum antes do exame. Exame
                                    realizado no Amais da Heitor
                                    Penteado.

                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>DIABÉTES</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Manter pelo menos 8 horas de
Jejum antes do exame. Exame
realizado no São Camilo
Pompéia.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.titulo}>
                                <h2>ECOCARDIOGRAMA</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Agendar exame
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.novaAlergia}>
                    <h2>NOVO EXAME</h2>
                    <div className={styles.escrever}>
                        <label for="textonome">Digite seu nome:</label>
                        <textarea id="textonome" name="textonome" rows="4" cols="50"></textarea>
                        <label for="textodescrição">Digite a descrição:</label>
                        <textarea id="textodescrição" name="textodescrição" rows="4" cols="50"></textarea>
                        <label for="textohora">Digite a hora:</label>
                        <textarea id="textohora" name="textohora" rows="4" cols="50"></textarea>
                        <button type="submit">cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Exames