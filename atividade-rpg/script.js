function fazerPersonagem() {
    let nome = document.getElementById("nome").value;
    let classe = document.getElementById("classes").value;
    let habilidade = document.getElementById("habilidades").value;

    let frase = `🛡️ O herói ${nome}, da classe ${classe}, foi criado com sucesso!
Sua habilidade especial é ${habilidade}. Que a aventura comece!`;

    document.getElementById("resultado").innerText = frase;
}
