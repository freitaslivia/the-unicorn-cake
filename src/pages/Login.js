import styles from "./Login.module.css"

function Login (){
    return(
        <div className={styles.container}>
            <div className={styles.logincontainer}>
                <h2>Login</h2>
                <div className={styles.primeira}>
                    <label for="Usuário">Usuário</label>
                    <input type="text" id="Usuário" name="Usuário" required/>

                    <label for="Senha">Senha</label>
                    <input type="password" id="Senha" name="Senha" required/>

                    <button type="submit"><a href="/home">Entrar</a></button>
                    <p><a href="/senha">Esqueceu sua senha?</a></p>
                    <p><a href="/cadastro">Cadastre-se</a></p>
                </div>
            </div>
        </div>
        
    )
}
export default Login