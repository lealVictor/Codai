let nome = "John Doe";
let nomeHtml = document.getElementById("nome-html")
let cargo = "Developer"
let cargoHtml = document.getElementById("cargo-html")
let telefone = "(67) 99999-9999"
let telefoneHtml = document.getElementById("telefone-html")
let email = "johndoe@email.com"
let emailHtml = document.getElementById("email-html")
let texto1 = document.getElementById("text-1")
let texto2 = document.getElementById("text-2")

insereNoHtml = (identificador, conteudo) => {
    identificador.innerHTML = conteudo
}

insereNoHtml(nomeHtml, nome)
insereNoHtml(cargoHtml, cargo)
insereNoHtml(telefoneHtml, telefone)
insereNoHtml(emailHtml, email)

handleProjetos = () => {
    texto2.style.display = "block"
    texto1.style.display = "none"
}
handleSobre = () => {
    texto1.style.display = "block"
    texto2.style.display = "none"
}