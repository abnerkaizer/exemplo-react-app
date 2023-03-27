import { useState } from "react"

function Condicional(props) {
    const [email, setEmail] = useState()
    const[userEmail,setUSerEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUSerEmail(email)
    }
    function limparEmail(){
        setUSerEmail('')
    }
    return(
        <>
            <h2>Cadastre seu email</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite o seu email"
                    onChange={(e) =>setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
                {userEmail &&(//se tiver userEmail ele renderiza a div
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button type="submit" onClick={limparEmail} >Limpar email</button>
                    </div>
                )}
            </form>
        </>
    )
}

export default Condicional