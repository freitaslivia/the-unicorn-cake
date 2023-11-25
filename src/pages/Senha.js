import styles from "./Senha.module.css"

function Senha (){
    return(
        <div className={styles.container}>
            <div className={styles.logincontainer}>
                <h2>ESQUECEU SUA SENHA ?</h2>
                <div className={styles.primeira}>
                    <label for="email">Digite seu e-mail</label>
                    <input type="text" id="email" name="email" required/>

                    <button type="submit">enviar</button>
                    <p><a href="/">Voltar</a></p>
                </div>
            </div>
        </div>
    )
}
export default Senha