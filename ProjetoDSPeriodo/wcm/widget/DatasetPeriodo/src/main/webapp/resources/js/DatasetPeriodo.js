var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,
    dsLiberacaoLotes: null,

    //método iniciado quando a widget é carregada
    init: function() {
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'pesquisarPeriodo': ['click_showNewDatasetFull']
        },
        global: {}
    },
 
    retornaDsLiberacaoLotes : function(){
        let dataInicial = $("#periodoInicial").val()
        let dataFinal = $("#periodoFinal").val()

        let partesDataInicial = dataInicial.split('/');
        let partesDataFinal = dataFinal.split('/');

        dataInicial = `${partesDataInicial[2]}${partesDataInicial[1]}${partesDataInicial[0]}`;
        dataFinal = `${partesDataFinal[2]}${partesDataFinal[1]}${partesDataFinal[0]}`;

        console.log(dataInicial, dataFinal)


        let filtroGrupo = DatasetFactory.createConstraint("DD_DTVALID", dataInicial, dataFinal, ConstraintType.MUST);
        let dsLiberacaoLotes = DatasetFactory.getDataset("dsLiberacaoLotesProtheus", null, new Array(filtroGrupo), null);
        return dsLiberacaoLotes
    },

    showNewDatasetFull :function () {
        let div = document.getElementById("tabelaFiltrada");
        div.empty();
         
        //Busca o dataset
        try {
            let dataset = this.retornaDsLiberacaoLotes();
            div.innerHTML = this.showDataset(dataset);
        } catch(erro) {
            div.innerHTML = erro;
        }
    },
     
     showDataset: function(dataset) {
        let tabela = "<table class='table table-striped'>";
         
        //Monta o cabeçalho
        tabela += "<tr>";
        for (let i = 0; i < dataset.columns.length; i++) {
            tabela += "<th>" + dataset.columns[i] + "</th>";
        }
        tabela += "</tr>";
     
        //Monta os registros   
        for (let x = 0; x < dataset.values.length; x++) {
            tabela += "<tr>";
            let row = dataset.values[x];
            for (let y = 0; y < dataset.columns.length; y++) {
                tabela += "<td>" + row[dataset.columns[y]] + "</td>";
            }
            tabela += "</tr>";
        }
         
        tabela += "</table>";
        return tabela;
    }

});

