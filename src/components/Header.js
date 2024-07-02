import { useState } from "react"

import "../App.css"

export const Header = ({ black, optionSelect }) => {
    // selecionar o HTML das opções
    let options = document.querySelectorAll('.options li')

    // useState da opção selecionada
    const [selectOption, setSelectOption] = useState()


    // mudar use stade da opção selecionada no tipo
    const handleOption = (value) => {
        setSelectOption(value)
        localStorage.setItem("selectOption", value)
        window.location.reload()
    }

    // mudar o border-bottom de acordo com a seleção do usuário
    for (let i = 0; i < options.length; i++) {
        if (options[i].innerHTML === selectOption) {
            options[i].classList.add("select-option")
        } else {
            options[i].classList.remove("select-option")
        }

        // selecionar o tipo automaticamente quando entrar na página Movie
        if (window.location.href.substring(22, 50) !== "") {
            if (options[i].innerHTML === optionSelect) {
                options[i].classList.add("select-option")
            } else {
                options[i].classList.remove("select-option")
            }
        }
    }

    return (
        <header className={black ? "header-black" : ""}>
            <div className="header-left">
                <a href="/">
                    <img className="header-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
                        alt="netflix-logo" />
                </a>

                <ul className="options">
                    <li onClick={() => handleOption("Todos")}>Todos</li>
                    <li onClick={() => handleOption("Séries")}>Séries</li>
                    <li onClick={() => handleOption("Filmes")}>Filmes</li>
                </ul>
            </div>

            <a href="/user">
                <img className="header-user"
                    src={localStorage.getItem("user")}
                    alt="user-image" />
            </a>
        </header>
    )
}