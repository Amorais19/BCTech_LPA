import * as S from "./styles"
import home from "../../assets/home.png" 
import conecte from "../../assets/contacte.png"
import cadastro from "../../assets/cadastro.png"
import login from "../../assets/login.png"
export function Footer() {
    return (
        <S.Footer>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <section>
                <p id="logo">BCTech</p>
                <div id="sessao">
                    <h3 id="title">Menu</h3>
                    <div id="icons">
                        <img src={home} alt="home" id="img"/>
                        <a href="/"><p id="text">Home</p></a>
                    </div>
                    <div id="icons">
                        <img src={conecte} alt="contacte-nos" id="img"/>
                        <a href="/Contacte-nos"><p id="text">Contacte-nos</p></a>
                    </div>
                </div>
                <div id="sessao">
                    <h3 id="title">Junte-se a nós</h3>
                    <div id="icons">
                        <img src={cadastro} alt="cadastre-se" id="img"/>
                        <a href="/Cadastre-se_Empresa"><p id="text">Cadastre-se</p></a>
                    </div>
                    <div id="icons">
                        <img src={login} alt="login" id="img"/>
                        <a href="/Login"><p id="text">Login</p></a>
                    </div>
                </div>
            </section>
        </S.Footer>
    )
}