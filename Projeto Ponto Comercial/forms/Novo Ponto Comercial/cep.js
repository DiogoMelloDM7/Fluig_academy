$('#cep').blur(function(){
    var cep = $("#cep").val(); // Obtém o valor do campo CEP
    $.getJSON("https://viacep.com.br/ws/" + cep + "/json/", function(dados){
        if (!("erro" in dados)) {
            // Preenche os campos com os dados retornados
            $("#logradouro").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
            $("#cidade").val(dados.localidade);
            $("#estado").val(dados.uf);
        } else {
            // CEP não encontrado
            alert("CEP não encontrado.");
        }
    });
});
