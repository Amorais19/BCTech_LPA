import * as S from "./styles"

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
                        <img src="src/assets/home.png" alt="home" />
                        <a href=""><p id="text">Home</p></a>
                    </div>
                    <div id="icons">
                        <img src="src/assets/contacte.png" alt="contacte-nos" />
                        <a href=""><p id="text">Contacte-nos</p></a>
                    </div>
                </div>
                <div id="sessao">
                    <h3 id="title">Junte-se a nós</h3>
                    <div id="icons">
                        <img src="src/assets/cadastro.png" alt="cadastre-se" />
                        <a href=""><p id="text">Cadastre-se</p></a>
                    </div>
                    <div id="icons">
                        <img src="src/assets/login.png" alt="login" />
                        <a href=""><p id="text">Login</p></a>
                    </div>
                </div>
            </section>
        </S.Footer>
    )
}