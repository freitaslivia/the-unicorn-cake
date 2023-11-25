import { FaPowerOff } from "react-icons/fa";
import styles from './Header.module.css'
import Logo from "./img/hapvidawhite.png"

function HeaderPage () {
    return(
        <div className={styles.HeaderLogin}>
            <div className={styles.HeaderConteudo}>
                <div className={styles.quadradologo}>
                    <img className={styles.fotologo} width="200" src={Logo} />
                </div>
                <div className={styles.paginas}>
                    <ul>
                        <li><a href="/home">HOME</a></li>
                        <li><a href="/alergias">ALERGIAS</a></li>
                        <li><a href="/exames">EXAMES</a></li>
                        <li><a href="/consultas">CONSULTAS</a></li>
                        <li><a href="/medicamentos">MEDICAMENTOS</a></li>
                    </ul> 
                </div>
                <nav className={styles.HeaderDireita}>
                    {<FaPowerOff />}
                    <h2>SAIR</h2>
                </nav>
            </div>
        </div>
    )
}

export default HeaderPage