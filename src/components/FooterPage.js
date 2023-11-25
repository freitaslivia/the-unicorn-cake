import styles from './FooterPage.module.css'
import Hapvida from './img/hapvidawhite.png'
import Fiap from './img/fiap_white.png'
import Logo from './img/LOGO_BRANCO.png'

function FooterPage (){
    return(
        <div className={styles.footer}>
            <div className={styles.equipe}>
                <h2>EQUIPE</h2>
                <ul>
                    <li>RM 099732 - André de Souza callejão - 1TDSPN</li>
                    <li>RM 550133 - Ian Navas - 1TDSPW</li>
                    <li>RM 099768 - Luiza Nunes de Jesus - 1TDSPM</li>
                    <li>RM 099892 - Livia Freitas Ferreira 1TDSPM</li>
                    <li>RM 551325 - Renato Russano Romeu - 1TDSPN</li>
                </ul>
            </div>
            <div className={styles.paginas}>
                <h2>PÁGINAS</h2>
                <div className={styles.quadrados}>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                            <a href='#'>Perfil do usuário</a>
                        </li>
                        <li>
                            <a href='#'>Alergias</a>
                            <a href='#'>Cadastrar alergias</a>
                        </li>
                        <li>
                            <a href='#'>Exames</a>
                            <a href='#'>Cadastrar exames</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href='#'>Consultas</a>
                            <a href='#'>Cadastrar Consultas</a>
                        </li>
                        <li>
                            <a href='#'>Medicamentos</a>
                            <a href='#'>Cadastrar Medicamentos</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href='#'>Download kit de imagens e fontes</a>
                        </li>
                        <li>
                            <a href='#'>Download documentação do projeto</a>
                        </li>
                        <li>
                            <a href='https://github.com/freitaslivia/the-unicorn-cake' target='_blank'>Github</a>
                        </li>
                        <li>
                            <a href='#'>Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.direita}>
                <div className={styles.logos}>
                    <img width="100" src={Hapvida} alt='logo'/>
                    <img width="80" src={Fiap} alt='logo'/>
                </div>
                <div className={styles.iconeUnicorn}>
                    <div>
                        <img width="50" src={Logo} alt='logo'/>
                    </div>
                    <div className={styles.pUnicorn}>
                        <p className={styles.pum}>The Unicorn Cake</p>
                        <p className={styles.pdois}>no make sense to make sense</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterPage