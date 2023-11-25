import styles from "./Cadastro.module.css"
import {useState} from "react";
import axios from "axios";

function Cadastro () {
    const [name,setName] = useState("")
    const [cpf,setCpf] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const [tpsanguineo,setTpSanguineo] = useState("")
    const [peso,setPeso] = useState("")
    const [aniversario,setAniversario] = useState("")
    const [altura,setAltura] = useState("")
    const [genero,setGenero] = useState("")
    function cpfMask(v){
        v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                                 //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
        return v
    }
    function submit(){
        sessionStorage.setItem("cpf", cpf);
        axios.post("http://localhost:8080/usuarios/",{
            nome:name,
            email:email,
            cpf:cpf,
            tpSangue : tpsanguineo,
            idade: aniversario,
            genero : "f",
            peso : peso,
            altura : altura,
            senha : senha
        }).catch((e) => {
            console.log(e)
        })

    }


    return(
        <div className={styles.container}>
            <div className={styles.logincontainer}>
                <h2>Informações do usuario</h2>
                <div className={styles.primeira}>
                    <label for="nome">nome completo</label>
                    <input  onChange={(e) => setName(e.target.value)} type="text" id="nome" name="nome" required/>

                    <label for="Usuário">Usuário</label>
                    <input type="text"    id="Usuário" name="Usuário" required/>

                    <label for="cpf">cpf</label>
                    <input type="text" max={14} value={cpf}   onChange={(e) => {
                        const newValue = cpfMask(e.target.value);
                        if (newValue.length <= 14) {
                            setCpf(newValue);
                        }
                    }}  id="cpf" name="cpf" required/>

                    <label for="e-mail">e-mail</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}  id="e-mail" name="e-mail" required/>

                    <label for="senha">senha</label>
                    <input type="text" onChange={(e) => setSenha(e.target.value)}  id="senha" name="senha" required/>

                    <label for="repetirsenha">repetir senha</label>
                    <input type="text"   id="repetirsenha" name="repetirsenha" required/>

                </div>
            </div>
            <div className={styles.logincontainer}>
                <h2>Informações adicionais</h2>
                <div className={styles.primeira}>
                    <label for="tpsague">tipo sanguineo</label>
                    <input disabled type="text" onChange={(e) => setTpSanguineo("A+")}  id="tpsague" name="tpsague" required/>

                    <label for="peso">peso</label>
                    <input type="number" onChange={(e) => setPeso(e.target.value)}  id="peso" name="peso" required/>

                    <label for="aniversario">idade</label>
                    <input type="number" onChange={(e) => setAniversario(e.target.value)}  id="aniversario" name="aniversario" required/>

                    <label for="altura">altura</label>
                    <input type="number" onChange={(e) => setAltura(e.target.value)}  id="altura" name="altura" required/>

                    <label for="genero">genero</label>
                    {/*<input type="text" onChange={(e) => setGenero(e.target.value)}  id="genero" name="genero" required/>*/}
                    <select disabled onChange={(e) => setGenero(e.target.value)} id="genero" name="genero">
                        <option value="f">Feminino</option>

                    </select>
                    <button onClick={submit}><a>Cadastre-se</a></button>
                </div>
            </div>
        </div>
    )
}
export default Cadastro