import { FaPowerOff } from "react-icons/fa";
import foto from "../components/img/imagens em alta (1).jpg"
import styles from "./Consultas.module.css"

function Consultas (){
    return(
        <div className={styles.base}>
            <img className={styles.foto} src={foto}></img>
            <div className={styles.textos}>
                <h2>CONSULTAS</h2>
                <p>Criei, consulte, edite ou delete suas consultas. Você pode criar até 6 consultas simultâneas
nessa tela. Quando todas as 6 consultas estiverem preenchidas, delete as mais antigas para
continuar usando esta página.
                </p>
            </div>
            <div className={styles.estrurua}>
                <div className={styles.alergias}>
                    <ul>
                        <li>
                            <div className={styles.titulo}>
                                <h2>CARDIO SÃO LUIZ</h2>
                                <div> 
                                    {<FaPowerOff />}
                                    {<FaPowerOff />}
                                </div>
                            </div>
                            <div className={styles.paragrafo}>
                                <p>Dr Roberto, São Luiz Itaim.
Cardio.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.novaAlergia}>
                    <h2>NOVA CONSULTA</h2>
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
export default Consultas