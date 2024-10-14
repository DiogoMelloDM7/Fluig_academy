var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {

    },

    //BIND de eventos
    bindings: {
        local: {
            'btnMult': ['click_multiplica'],
            'btnSoma': ['click_soma'],
            'btnSub': ['click_subtrai'],
            'btnDiv': ['click_divide']
        },
        global: {}
    },

    multiplica : function(){

        let valor1 = parseFloat($("#number1").val());
        let valor2 = parseFloat($("#number2").val());
        $("#result").val(valor1 * valor2);
        console.log(valor1 * valor2);
    },

    soma : function(){

        let valor1 = parseFloat($("#number1").val());
        let valor2 = parseFloat($("#number2").val());
        $("#result").val(valor1 + valor2);
        console.log(valor1 + valor2);
    },

    divide : function(){

        let valor1 = parseFloat($("#number1").val());
        let valor2 = parseFloat($("#number2").val());
        $("#result").val(valor1 / valor2);
        console.log(valor1 / valor2);
    },

    subtrai : function(){

        let valor1 = parseFloat($("#number1").val());
        let valor2 = parseFloat($("#number2").val());
        $("#result").val(valor1 - valor2);
        console.log(valor1 - valor2);
    },





});