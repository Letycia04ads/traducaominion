// URL da API que você deseja acessar
function buscarTexto() {
    var texto = document.getElementById('texto').value;

    const apiUrl = 'https://api.funtranslations.com/translate/minion.json?text='+texto;
    // Fazer uma solicitação GET à API usando fetch()
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('verifique o seu texto e tente novamente');
            }
            const retorno = response.json(); // Converte a resposta em JSON  
            return retorno;

        })

        .then(data => {
            // Aqui você pode manipular os dados recebidos da API
            console.log(data.contents.translated);

            traducao = data.contents.translated;
            

            document.getElementById("disabledText").value = traducao;

        })


}