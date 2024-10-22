var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,
    dataTableInstance : null,
	dataSetPDF_Excel : null,

    //método iniciado quando a widget é carregada
    init: function() {
    	this.constroiDataTable();
		FLUIGC.switcher.init("#MySwitchButtonCheckbox");
		FLUIGC.switcher.onChange("#MySwitchButtonCheckbox", function(event, state){
			if(state === false){
				$("#formConsulta").show();
				$("#formCadastro").hide();
				$("#divTabelaPesquisa").show();
			}else{
				$("#formConsulta").hide();
				$("#formCadastro").show();
				$("#divTabelaPesquisa").hide();
			}

		  });
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'pesquisarItens': ['click_showDataSet'],
			'cadastrarCliente':['click_capturaDadosCliente'],
			'gerarPDF':['click_gerarPdf'],
			'gerarExcel':['click_gerarExcel']
        },
        global: {}
    },
    
    constroiDataTable : function(){
    	this.dataTableInstance = $("#tabelaPesquisa").DataTable({
            paging: true,
            pageLength: 5, 
            lengthMenu: [5, 10, 25, 50, 100],
			responsive: true,
            scrollX: true,
            language: {
                "lengthMenu": "Mostrar _MENU_ registros por página",
                "zeroRecords": "Nada encontrado - desculpe",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "Nenhum registro disponível",
                "infoFiltered": "(filtrado de _MAX_ registros no total)",
				"search": "Pesquisar"
            },
            columns : [
                {
					title: 'Nome',
					//data:"Nome"
				},
                {
					title: 'CPF',
					render: function(data){
						return data.substr(0,3) + "." + data.substr(3,3) + "." + data.substr(6,3) + "-" + data.substr(9,2)
					}
					//data:"CPF"
				},
                {
					title: 'Idade',
					//data:"Idade"
				},
                {
					title: 'Profissão',
					//data: "Profissao"
				},
                {
					title: 'Data de Nascimento',
					render: function (data, type, row) {
						// Converte o formato YYYYMMDD para DD/MM/YYYY
						if (data) {
							return data.substr(6, 2) + '/' + data.substr(4, 2) + '/' + data.substr(0, 4);
						}
						return ''; // Retorna vazio se não houver data
					}
					//data: "DataDeNascimento"
				},
                {
					title: 'Endereço',
					//data:"Endereco"

				},
                {
					title: 'Escolaridade',
					//data:'Escolaridade'
				
				},
                {
					title: 'Sexo',
					//data: "Sexo"
				},

                {
					title: 'Salário',
					render: $.fn.dataTable.render.number( '.', ',', 2, 'R$' ),
					//data:"Salario"
				},
                {
					title: "Estado Civil",
					//data: "EstadoCivil"
				}
            ],
			initComplete: function () {
				this.api()
					.columns()
					.every(function () {
						let column = this;
						let footer = column.footer();
						if (footer) {
							let title = footer.textContent;  // Agora só acessa se não for null
							
							// Create input element
							let input = document.createElement('input');
							input.placeholder = title;
							input.style.width = '100px'; 
							footer.replaceChildren(input);
							
							// Event listener for user input
							input.addEventListener('keyup', () => {
								if (column.search() !== this.value) {
									column.search(input.value).draw();
								}
							});
						} else {
							console.warn('Footer not found for column:', column.index());
						}
					});
			}
        });
    },
    showDataSetDados : function(dataset){
    	if (this.dataTableInstance) {
            this.dataTableInstance.clear().draw();
        } else {
            this.constroiDataTable();
        }

        dataset.values.forEach(function (linha) {
            let informacoesDaLinha = Object.values(linha);
			let linhaOrganizada = [informacoesDaLinha[4], informacoesDaLinha[2], informacoesDaLinha[0], informacoesDaLinha[1], informacoesDaLinha[3], informacoesDaLinha[6], informacoesDaLinha[9], informacoesDaLinha[7], informacoesDaLinha[8], informacoesDaLinha[5]]
            this.dataTableInstance.row.add(linhaOrganizada).draw();
        }, this);
		console.log("chamou showDataSetDados")
    },
 
    filtraDadosDataSet: function(){
    	let nome = $("#nome").val();
    	let cpf = $("#cpf").val();
    	let idadeMinima = $("#idadeMinima").val();
    	let idadeMaxima = $("#idadeMaxima").val();
    	let profissao = $("#profissao").val()
    	let dataNascimentoInicial = $("#dataNascimentoInicial").val();
    	let dataNascimentoFinal = $("#dataNascimentoFinal").val();
    	let endereco = $("#endereco").val();
    	let escolaridade = $("#escolaridade").val();
    	let estadoCivil = $("#estadoCivil").val();
    	let salarioMinimo = $("#salarioMinimo").val();
    	let salarioMaximo = $("#salarioMaximo").val();
    	let sexo = $("#sexo").val();
    	let grupoFiltro = [];
    	
		console.log("nome: " + nome, "cpf:"+ cpf, "idadeMinima:"+ idadeMinima, "idadeMaxima:"+ idadeMaxima,"profissao:" + profissao, "dataNascimentoInicio: " +dataNascimentoInicial, "dataNascimentoFinal:"+ dataNascimentoFinal,"endereco:"+ endereco, "escolariadade" + escolaridade, "estadoCivil" +  estadoCivil, "salarioMinomo" +  salarioMinimo, "salarioMaximo" + salarioMaximo, "sexo" + sexo);

    	if (nome != ""){
    		let nomeFiltro = "%" + nome + "%"
    		let filtro1 = DatasetFactory.createConstraint("Nome", nomeFiltro, nomeFiltro, ConstraintType.MUST, true);
    		grupoFiltro.push(filtro1);
			console.log("nome certo")
    	}
    	if (cpf != "" && !isNaN(cpf)){
    		parseInt(cpf);
    		let filtro2 = DatasetFactory.createConstraint("CPF", "%" + cpf + "%", "%" + cpf + "%", ConstraintType.SHOULD, true);
    		grupoFiltro.push(filtro2);
			console.log("cpf certo")
    	}
    	
    	if (idadeMinima != "" && idadeMaxima != "" && idadeMaxima > idadeMinima){
    		let filtro3 = DatasetFactory.createConstraint("Idade", parseInt(idadeMinima), parseInt(idadeMaxima), ConstraintType.MUST);
    		grupoFiltro.push(filtro3);
			console.log("idade certo")
    	}
    	if ((idadeMinima != "" && idadeMaxima === "") || (idadeMinima === "" && idadeMaxima != "" || idadeMaxima < idadeMinima)){
    		FLUIGC.toast({
                title: 'Erro: ',
                message: 'Por favor preecha ambos os campos de Idade corretamente para filtragem!',
                type: 'danger'
                });
    	}
    	
    	if (profissao != ""){
    		let filtro4 = DatasetFactory.createConstraint("Profissao", "%" + profissao + "%","%"+  profissao + "%", ConstraintType.SHOULD, true);
    		grupoFiltro.push(filtro4);
			console.log("profissao certo")
    	}
    	
    	if(dataNascimentoInicial != "" & dataNascimentoFinal != "" && dataNascimentoFinal > dataNascimentoInicial){
            let partesDataInicial = dataNascimentoInicial.split('-');
            let partesDataFinal = dataNascimentoFinal.split('-');
    
            dataNascimentoInicial = `${partesDataInicial[0]}${partesDataInicial[1]}${partesDataInicial[2]}`;
            dataNascimentoFinal = `${partesDataFinal[0]}${partesDataFinal[1]}${partesDataFinal[2]}`;
            
            let filtro5 = DatasetFactory.createConstraint("DataDeNascimento", dataNascimentoInicial, dataNascimentoFinal, ConstraintType.MUST);
            grupoFiltro.push(filtro5);
			console.log("data certo")
    	}
    	
    	if((dataNascimentoInicial != "" && dataNascimentoFinal === "") || (dataNascimentoInicial === "" && dataNascimentoFinal != "") || dataNascimentoFinal < dataNascimentoInicial){
    		FLUIGC.toast({
                title: 'Erro: ',
                message: 'Por favor preecha ambos os campos de Data de Nascimento corretamente para filtragem!',
                type: 'danger'
                });
    	}
    	
    	if (endereco != ""){
    		let enderecoFiltro = "%" + endereco + "%"
    		let filtro6 = DatasetFactory.createConstraint("Endereco", enderecoFiltro, enderecoFiltro, ConstraintType.SHOULD, true)
    		grupoFiltro.push(filtro6)
			console.log("endereco certo")
    	}
    	
    	if(escolaridade != "todos" && escolaridade !== null){
    		let escolaridadeFiltrada = this.traduzirEscolaridade(escolaridade);
    		if (escolaridadeFiltrada != ""){
    			let filtro7 = DatasetFactory.createConstraint("Escolaridade", escolaridadeFiltrada, escolaridadeFiltrada, ConstraintType.MUST);
    			grupoFiltro.push(filtro7);
				console.log("escolaridade certo")
    		}
    	}
    	
    	if(estadoCivil != "todos" && estadoCivil !== null){
    		let estadoCivilFiltrado = this.traduzirEstadoCivil(estadoCivil);
    		if (estadoCivilFiltrado != null){
    			let filtro8 = DatasetFactory.createConstraint("EstadoCivil", estadoCivilFiltrado, estadoCivilFiltrado, ConstraintType.SHOULD);
    			grupoFiltro.push(filtro8);
				let estadoNovo = estadoCivilFiltrado.slice(0, -1) + "a";
				let filtro9 = DatasetFactory.createConstraint("EstadoCivil", estadoNovo, estadoNovo, ConstraintType.SHOULD);
    			grupoFiltro.push(filtro9);
				console.log("estadocivil certo")
    		}
    	}
    	
    	if (salarioMinimo != "" && salarioMaximo != "") {

			let salarioMinimoFloat = parseFloat(salarioMinimo);
			let salarioMaximoFloat = parseFloat(salarioMaximo);
		

			if (!isNaN(salarioMinimoFloat) && !isNaN(salarioMaximoFloat) && salarioMinimoFloat < salarioMaximoFloat) {
				let filtro9 = DatasetFactory.createConstraint("CAST(Salario AS DECIMAL)", salarioMinimoFloat, salarioMaximoFloat, ConstraintType.MUST);
				grupoFiltro.push(filtro9);
				console.log("Salário filtrado corretamente");
			} else {
				FLUIGC.toast({
					title: 'Erro: ',
					message: 'Por favor preencha ambos os campos de Salário corretamente para filtragem!',
					type: 'danger'
				});
			}
		} else if ((salarioMinimo != "" && salarioMaximo === "") || (salarioMinimo === "" && salarioMaximo != "") || salarioMaximo < salarioMinimo) {
			FLUIGC.toast({
				title: 'Erro: ',
				message: 'Por favor preencha ambos os campos de Salário corretamente para filtragem!',
				type: 'danger'
			});
		}
    	
    	if(sexo != "ambos" && sexo !== null){
    		let sexoSelecionado = this.traduzirSexo(sexo);
    		if (sexoSelecionado != "" && sexoSelecionado){
    			filtro10 = DatasetFactory.createConstraint("Sexo", sexoSelecionado, sexoSelecionado, ConstraintType.MUST);
    			grupoFiltro.push(filtro10)
				console.log("sexo certo")
    		}
    	}
    	
    	let dsDadosFiltrado = DatasetFactory.getDataset("DatasetTreinamento", null, grupoFiltro, null);
		console.log(JSON.stringify(grupoFiltro))
    	return dsDadosFiltrado
    	
    },
    
    traduzirEscolaridade : function (escolaridade) {
        let mapaEscolaridade = {
            "ensinoFundamentalIncompleto": "Ensino Fundamental Incompleto",
            "ensinoFundamentalCompleto": "Ensino Fundamental Completo",
            "ensinoMedioIncompleto": "Ensino Médio Incompleto",
            "ensinoMedioCompleto": "Ensino Médio Completo",
            "ensinoSuperiorIncompleto": "Ensino Superior Incompleto",
            "ensinoSuperiorCompleto": "Ensino Superior Completo",
            "todos": ""
        };

        return mapaEscolaridade[escolaridade];
    },
    
    traduzirEstadoCivil : function(estadoCivil){
    	let mapaEstadoCivil = {
    			"todos": '',
    			"solteiro": "Solteiro",
    			"casado": "Casado",
    			"divorciado": "Divorciado",
    			"viuvo": "Viuvo"
    	};
    	
    	return mapaEstadoCivil[estadoCivil]
    },
    
    traduzirSexo : function(sexo){
    	let mapaSexo = {
    			"masculino": "Masculino",
    			"feminino": "Feminino",
    			"ambos": ""
    	}
    	
    	return mapaSexo[sexo]
    },
    
    showDataSet: function(){
		//$("#divTabelaPesquisa").hide();
		console.log("chamou showDataSet")
    	try{
    		let dataset = this.filtraDadosDataSet();
			console.log(dataset)
    		this.showDataSetDados(dataset)
			dataSetPDF_Excel = dataset;
			console.log("chamou showDataSet")
    	}catch (erro){
    		this.showError(erro);
    	}
    	this.limparCampos();
		//$("#divTabelaPesquisa").show()
    },
    
    limparCampos: function(){
       	$("#nome").val("");
    	$("#cpf").val("");
    	$("#idadeMinima").val("");
    	$("#idadeMaxima").val("");
    	$("#profissao").val("")
    	$("#dataNascimentoInicial").val("");
    	$("#dataNascimentoFinal").val("");
    	$("#endereco").val("");
    	$("#escolaridade").val("");
    	$("#estadoCivil").val("");
    	$("#salarioMinimo").val("");
    	$("#salarioMaximo").val("");
    	$("#sexo").val("");
    },
    
    showError: function(erro){
    	let $table = $("#tabelaPesquisa");
        let $tbody = $table.find("tbody");
        $tbody.append("<tr><td colspan='100%'>" + erro + "</td></tr>");
		console.log(erro)
    },

	adicionarClienteDataset: function (nome, cpf, idade, profissao, dataDeNascimento, endereco, escolaridade, sexo, salario, estadoCivil) {
		try {
			// Obtém o dataset existente pelo nome
			let dataset = DatasetFactory.getDataset("DatasetTreinamento", null, null, null);
			console.log("entrou", dataset)
			
			// Adiciona os valores ao Dataset através de um serviço apropriado ou lógica de persistência
			let constraints = [];
			constraints.push(DatasetFactory.createConstraint("Nome", nome, nome, ConstraintType.MUST));
			constraints.push(DatasetFactory.createConstraint("CPF", cpf, cpf, ConstraintType.MUST));
			constraints.push(DatasetFactory.createConstraint("Idade", idade, idade, ConstraintType.MUST));
			constraints.push(DatasetFactory.createConstraint("Profissao", profissao, profissao, ConstraintType.MUST));
			constraints.push(DatasetFactory.createConstraint("DataDeNascimento", dataDeNascimento, dataDeNascimento, ConstraintType.MUST));
			constraints.push(DatasetFactory.createConstraint("Endereco", endereco, endereco, ConstraintType.MUST));
			constraints.push(DatasetFactory.createConstraint("Escolaridade", escolaridade, escolaridade, ConstraintType.MUST));
			constraints.push(DatasetFactory.createConstraint("Sexo", sexo, sexo, ConstraintType.MUST));
			constraints.push(DatasetFactory.createConstraint("Salario", salario, salario, ConstraintType.MUST));
			constraints.push(DatasetFactory.createConstraint("EstadoCivil", estadoCivil, estadoCivil, ConstraintType.MUST));
	
			// Adiciona os dados ao dataset existente
			let newDataset = DatasetFactory.getDataset("DatasetTreinamento", null, constraints, null);
			console.log("salvou", newDataset)
			FLUIGC.toast({
				title: 'Sucesso:',
				message: 'Registro adicionado com sucesso!',
				type: 'success'
			});
	
		} catch (error) {
			// Tratamento de erro
			FLUIGC.toast({
				title: 'Erro:',
				message: 'Não foi possível adicionar o registro ao dataset. Verifique os dados e tente novamente.',
				type: 'danger'
			});
		}
	},

	capturaDadosCadastro: function() {
		// Pegando os valores de um formulário
		let nome = $("#nomeCadastro").val();
		let cpf = $("#cpfCadastro").val();
		let idade = $("#idadeCadastro").val();
		let profissao = $("#profissaoCadastro").val();
		let dataDeNascimento = $("#dataDeNascimentoCadastro").val();
		let endereco = $("#enderecoCadastro").val();
		let escolaridade = $("#escolaridadeCadastro").val();
		let sexo = $("#sexoCadastro").val();
		let salario = parseFloat($("#salarioCadastro").val());
		let estadoCivil = $("#estadoCivilCadastro").val();
		console.log("capturou os dados", nome, cpf, idade, profissao, dataDeNascimento, endereco, escolaridade, sexo, salario, estadoCivil)
	
		// Adicionando o registro ao Dataset existente
		adicionarClienteDataset(nome, cpf, idade, profissao, dataDeNascimento, endereco, escolaridade, sexo, salario, estadoCivil);
	},

	gerarPdf: function() {
		// Obtém os dados filtrados do dataset
		let dataset = dataSetPDF_Excel
		console.log(dataset ,"dataset")
	
		// Verifica se há dados no dataset
		if (dataset.length === 0) {
			FLUIGC.toast({
				title: 'Aviso: ',
				message: 'Nenhum dado encontrado para exportar.',
				type: 'warning'
			});
			return;
		}
	
		
		let tableHeaders = [
			{ text: 'Nome', bold: true },
			{ text: 'CPF', bold: true },
			{ text: 'Idade', bold: true },
			{ text: 'Profissão', bold: true },
			{ text: 'Data de Nascimento', bold: true },
			{ text: 'Endereço', bold: true },
			{ text: 'Escolaridade', bold: true },
			{ text: 'Sexo', bold: true },
			{ text: 'Salário', bold: true },
			{ text: 'Estado Civil', bold: true }
		];
	
		let tableBody = dataset.values.map(item => {
			return [
				item.Nome,                
				item.CPF,                 
				item.Idade,               
				item.Profissao,           
				item.DataDeNascimento,      
				item.Endereco,           
				item.Escolaridade,        
				item.Sexo,               
				item.Salario,            
				item.EstadoCivil          
			];
		});
	
		
		tableBody.unshift(tableHeaders);
	
		
		let conteudo = {
			content: [
				{ text: 'Relatório de Dados', style: 'header' },
				{
					table: {
						headerRows: 1,
						widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'], // Ajuste as larguras conforme necessário
						body: tableBody
					}
				}
			],
			styles: {
				header: {
					fontSize: 18,
					bold: true,
					marginBottom: 15
				}
			}
		};
	
		// Gera e abre o PDF
		pdfMake.createPdf(conteudo).open();
	},

	gerarExcel: function() {
		// Obtém os dados filtrados do dataset
		let dataset = dataSetPDF_Excel
	
		// Verifica se há dados no dataset
		if (dataset.values.length === 0) {
			FLUIGC.toast({
				title: 'Aviso: ',
				message: 'Nenhum dado encontrado para exportar.',
				type: 'warning'
			});
			return;
		}
	
		
		let tableHeaders = ['Nome', 'CPF', 'Idade', 'Profissão', 'Data de Nascimento', 'Endereço', 'Escolaridade', 'Sexo', 'Salário', 'Estado Civil'];
	
		
		let tableBody = dataset.values.map(item => {
			return [
				item.Nome,                
				item.CPF,                
				item.Idade,               
				item.Profissao,           
				item.DataDeNascimento,    
				item.Endereco,            
				item.Escolaridade,       
				item.Sexo,                
				item.Salario,             
				item.EstadoCivil          
			];
		});
	
		// Adiciona os cabeçalhos ao início do array de dados
		tableBody.unshift(tableHeaders);
	
		// Cria uma nova planilha com os dados
		let worksheet = XLSX.utils.aoa_to_sheet(tableBody);
	
		// Cria uma nova pasta de trabalho e adiciona a planilha a ela
		let workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');
	
		// Exporta o arquivo Excel
		XLSX.writeFile(workbook, 'relatorio_dados.xlsx');
	}
	
	

});