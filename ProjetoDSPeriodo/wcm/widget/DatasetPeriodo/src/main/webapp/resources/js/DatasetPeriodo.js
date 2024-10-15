var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,
    dsLiberacaoLotes: null,
    dsTableLiberacao: null,
    //método iniciado quando a widget é carregada
    init: function() {
        this.constroiDataTable();
    },


  
    //BIND de eventos
    bindings: {
        local: {
            'pesquisarPeriodo': ['click_showNewDatasetPeriodo'],
            'pesquisarProduto': ['click_showNewDatasetProduto'],
            'pesquisarProdutoEPeriodo': ['click_showNewDatasetProdutoEPeriodo']

        },
        global: {}
    },

    constroiDataTable : function(conteudo){
        let ds = new DataTable("#tabelaPesquisa");
        console.log(ds)
    },
 
    retornaDsLiberacaoLotesPeriodo : function(){
            let dataInicial = $("#periodoInicial").val()
            let dataFinal = $("#periodoFinal").val()
            if(dataInicial != "" && dataFinal != ""){
                let partesDataInicial = dataInicial.split('-');
                let partesDataFinal = dataFinal.split('-');
        
                dataInicial = `${partesDataInicial[0]}${partesDataInicial[1]}${partesDataInicial[2]}`;
                dataFinal = `${partesDataFinal[0]}${partesDataFinal[1]}${partesDataFinal[2]}`;

                let filtroGrupo = DatasetFactory.createConstraint("periodo", dataInicial, dataFinal, ConstraintType.MUST);
                let dsLiberacaoLotes = DatasetFactory.getDataset("dsLiberacaoLotesProtheus", null, new Array(filtroGrupo), null);
                return dsLiberacaoLotes
            }
            console.log(dataInicial, dataFinal)
            return alert("Preencha os campos corretamente!");
                 
    },

    retornaDsLiberacaoLotesProduto : function(){
        let codigo = parseInt($("#idProduto").val())
        
        if(codigo){
            let filtroGrupo = DatasetFactory.createConstraint("produtos", codigo, codigo, ConstraintType.MUST);
            let dsLiberacaoLotes = DatasetFactory.getDataset("dsLiberacaoLotesProtheus", null, new Array(filtroGrupo), null);
            return dsLiberacaoLotes
        }
        console.log(codigo)
        return alert("Preencha o campo antes de pesquisar!");     
    },

    retornaDsLiberacaoLotesProdutoEPeriodo : function(){
        let codigo = parseInt($("#idProdutoEPeriodo").val())
        let dataInicial = $("#periodoEProdutoInicial").val()
        let dataFinal = $("#periodoEProdutoFinal").val()
        
        if(codigo && dataInicial != "" && dataFinal != ""){
            let partesDataInicial = dataInicial.split('-');
            let partesDataFinal = dataFinal.split('-');

            dataInicial = `${partesDataInicial[0]}${partesDataInicial[1]}${partesDataInicial[2]}`;
            dataFinal = `${partesDataFinal[0]}${partesDataFinal[1]}${partesDataFinal[2]}`;


            let filtro1 = DatasetFactory.createConstraint("produtos", codigo, codigo, ConstraintType.MUST);
            let filtro2 = DatasetFactory.createConstraint("periodo", dataInicial, dataFinal, ConstraintType.MUST);
            let constraints = new Array(filtro1, filtro2);
            let dsLiberacaoLotes = DatasetFactory.getDataset("dsLiberacaoLotesProtheus", null, constraints, null);
            return dsLiberacaoLotes
        }
        console.log(codigo)
        return alert("Preencha os campo corretamente!");     
    },

    showNewDatasetProdutoEPeriodo: function () {
        let $table = $("#tabelaPesquisa");
        let $thead = $table.find("thead");
        let $tbody = $table.find("tbody");

        $thead.empty();
        $tbody.empty();
        $("#idProduto").val("");
        $("#periodoInicial").val("");
        $("#periodoFinal").val("");


        try {
            let dataset = this.retornaDsLiberacaoLotesProdutoEPeriodo();
            this.showDataset(dataset);
        } catch (erro) {
            $tbody.append("<tr><td colspan='100%'>" + erro + "</td></tr>");
        }
    },

    showNewDatasetPeriodo: function () {
        let $table = $("#tabelaPesquisa");
        let $thead = $table.find("thead");
        let $tbody = $table.find("tbody");

        $thead.empty();
        $tbody.empty();
        $("#idProduto").val("");
        $('#idProdutoEPeriodo').val("");
        $("#periodoEProdutoInicial").val("")
        $("#periodoEProdutoFinal").val("")


        try {
            let dataset = this.retornaDsLiberacaoLotesPeriodo();
            this.showDataset(dataset);
        } catch (erro) {
            $tbody.append("<tr><td colspan='100%'>" + erro + "</td></tr>");
        }
    },

    showNewDatasetProduto: function () {
        let $table = $("#tabelaPesquisa");
        let $thead = $table.find("thead");
        let $tbody = $table.find("tbody");

        $thead.empty();
        $tbody.empty();
        $('#idProdutoEPeriodo').val("");
        $("#periodoEProdutoInicial").val("");
        $("#periodoEProdutoFinal").val("");
        $("#periodoInicial").val("");
        $("#periodoFinal").val("");

        try {
            let dataset = this.retornaDsLiberacaoLotesProduto();
            this.showDataset(dataset);
        } catch (erro) {
            $tbody.append("<tr><td colspan='100%'>" + erro + "</td></tr>");
        }
    },
    
    showDataset: function (dataset) {
        let $table = $("#tabelaPesquisa");
        let $thead = $table.find("thead");
        let $tbody = $table.find("tbody");

        let $headerRow = $("<tr></tr>");
        dataset.columns.forEach(function (column) {
            $headerRow.append("<th>" + column + "</th>");
        });
        $thead.append($headerRow);

        dataset.values.forEach(function (row) {
            let $row = $("<tr></tr>");
            dataset.columns.forEach(function (column) {
                $row.append("<td>" + row[column] + "</td>");
            });
            $tbody.append($row);
        });
    }

});

