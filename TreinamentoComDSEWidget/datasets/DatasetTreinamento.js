function defineStructure() {
    addColumn("Nome");
    addColumn("CPF");
    addColumn("Idade");
    addColumn("Profissao");
    addColumn("DataDeNascimento");
    addColumn("Endereco");
    addColumn("Escolaridade");
    addColumn("Sexo");
    addColumn("Salario");
    addColumn("EstadoCivil");
    
    setKey(["CPF"]); // Define a chave primária, pode ser outro campo
    addIndex(["Nome"]); // Adiciona um índice, se necessário
}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {

	let dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("Nome");
	dataset.addColumn("CPF");
	dataset.addColumn("Idade");
	dataset.addColumn("Profissao");
	dataset.addColumn("DataDeNascimento");
	dataset.addColumn("Endereco");
	dataset.addColumn("Escolaridade");
	dataset.addColumn("Sexo");
	dataset.addColumn("Salario");
	dataset.addColumn("EstadoCivil");
	
	dataset.addRow(new Array("Fábio Rios Costa", "15354698721", "28", "Serralheiro", "19961021", "Rua Espanha, 430 - Jardim Internacional", "Ensino médio Completo" , "Masculino", "4500.00", "Casado"))
	dataset.addRow(new Array("Ana Maria Souza", "23456789123", "32", "Enfermeira", "19920814", "Avenida Brasil, 210 - Centro", "Ensino Superior Completo", "Feminino", "6500.00", "Solteira"));
	dataset.addRow(new Array("Carlos Eduardo Lima", "34567891234", "45", "Engenheiro Civil", "19790312", "Rua das Flores, 100 - Jardim das Acácias", "Ensino Superior Completo", "Masculino", "12000.00", "Casado"));
	dataset.addRow(new Array("Beatriz Silva Oliveira", "45678912345", "27", "Advogada", "19970205", "Rua das Palmeiras, 123 - Vila Nova", "Ensino Superior Completo", "Feminino", "8500.00", "Solteira"));
	dataset.addRow(new Array("Fernando Almeida Santos", "56789123456", "38", "Motorista", "19860422", "Rua João Pessoa, 50 - Jardim Primavera", "Ensino Médio Completo", "Masculino", "3000.00", "Divorciado"));
	dataset.addRow(new Array("Mariana Costa", "67891234567", "29", "Professora", "19950217", "Avenida Central, 400 - Bela Vista", "Ensino Superior Completo", "Feminino", "4000.00", "Casada"));
	dataset.addRow(new Array("João Pedro Martins", "78912345678", "35", "Eletricista", "19890910", "Rua São José, 85 - Centro", "Ensino Médio Completo", "Masculino", "3500.00", "Solteiro"));
	dataset.addRow(new Array("Patrícia Mendes", "89012345679", "41", "Arquiteta", "19830530", "Rua Dom Pedro II, 560 - Vila Real", "Ensino Superior Completo", "Feminino", "9500.00", "Casada"));
	dataset.addRow(new Array("Lucas Ribeiro", "90123456780", "22", "Estudante", "20020515", "Rua Santa Clara, 47 - Jardim América", "Ensino Superior Incompleto", "Masculino", "0.00", "Solteiro"));
	dataset.addRow(new Array("Renata Gomes", "01234567891", "30", "Designer Gráfico", "19940923", "Avenida Paulista, 1500 - Bela Vista", "Ensino Superior Completo", "Feminino", "5500.00", "Solteira"));
	dataset.addRow(new Array("Gabriel Silva", "12345678901", "25", "Analista de Sistemas", "19980805", "Rua dos Andradas, 900 - Centro", "Ensino Superior Completo", "Masculino", "7000.00", "Solteiro"));
	dataset.addRow(new Array("Roberto Fernandes", "23456789012", "52", "Médico", "19720414", "Rua da Saúde, 123 - Vila Mariana", "Ensino Superior Completo", "Masculino", "15000.00", "Casado"));
	dataset.addRow(new Array("Camila Rocha", "34567890123", "31", "Jornalista", "19931125", "Avenida Independência, 230 - Centro", "Ensino Superior Completo", "Feminino", "6000.00", "Solteira"));
	dataset.addRow(new Array("Paulo Henrique Teixeira", "45678901234", "48", "Gerente de Projetos", "19760318", "Rua dos Pioneiros, 750 - Jardim Europa", "Ensino Superior Completo", "Masculino", "11000.00", "Casado"));
	dataset.addRow(new Array("Cláudia Carvalho", "56789012345", "26", "Nutricionista", "19980210", "Rua Santos Dumont, 30 - Vila Rica", "Ensino Superior Completo", "Feminino", "5000.00", "Solteira"));
	dataset.addRow(new Array("Ricardo Moreira", "67890123456", "34", "Vendedor", "19900125", "Rua dos Operários, 200 - Jardim Industrial", "Ensino Médio Completo", "Masculino", "3500.00", "Casado"));
	dataset.addRow(new Array("Letícia Andrade", "78901234567", "28", "Psicóloga", "19960807", "Rua XV de Novembro, 190 - Centro", "Ensino Superior Completo", "Feminino", "8000.00", "Solteira"));
	dataset.addRow(new Array("Marcelo Nogueira", "89012345678", "39", "Empresário", "19850213", "Rua Domingos Jorge Velho, 700 - Centro", "Ensino Superior Completo", "Masculino", "20000.00", "Casado"));
	dataset.addRow(new Array("Débora Lima", "90123456789", "33", "Farmacêutica", "19910819", "Rua General Osório, 321 - Jardim das Nações", "Ensino Superior Completo", "Feminino", "7000.00", "Casada"));
	dataset.addRow(new Array("André Barbosa", "01234567890", "44", "Padeiro", "19791202", "Rua das Flores, 50 - Jardim Imperial", "Ensino Fundamental Completo", "Masculino", "2500.00", "Casado"));
	dataset.addRow(new Array("Marta Ferreira", "12345678012", "29", "Assistente Social", "19950128", "Avenida Getúlio Vargas, 540 - Centro", "Ensino Superior Completo", "Feminino", "4500.00", "Solteira"));
	dataset.addRow(new Array("Pedro Lima", "23456789013", "37", "Cozinheiro", "19870615", "Rua dos Alfeneiros, 420 - Jardim Central", "Ensino Médio Completo", "Masculino", "3000.00", "Divorciado"));
	dataset.addRow(new Array("Juliana Azevedo", "34567890124", "25", "Dentista", "19990104", "Rua das Margaridas, 105 - Vila Nova", "Ensino Superior Completo", "Feminino", "9000.00", "Solteira"));
	dataset.addRow(new Array("Rodrigo Alves", "45678901235", "42", "Advogado", "19820516", "Rua Boa Vista, 310 - Centro", "Ensino Superior Completo", "Masculino", "9500.00", "Casado"));
	dataset.addRow(new Array("Vanessa Mendes", "56789012346", "36", "Publicitária", "19880303", "Avenida Santos, 890 - Jardim do Lago", "Ensino Superior Completo", "Feminino", "7500.00", "Solteira"));
	dataset.addRow(new Array("Tiago Ribeiro", "67890123457", "40", "Mecânico", "19840721", "Rua da Paz, 80 - Bairro São José", "Ensino Médio Completo", "Masculino", "3500.00", "Casado"));
	dataset.addRow(new Array("Gabriela Soares", "78901234568", "31", "Fisioterapeuta", "19930917", "Rua São Paulo, 670 - Vila Nova", "Ensino Superior Completo", "Feminino", "6000.00", "Solteira"));
	dataset.addRow(new Array("Renato Oliveira", "89012345679", "28", "Professor", "19960329", "Rua Sete de Setembro, 111 - Jardim Alvorada", "Ensino Superior Completo", "Masculino", "4000.00", "Casado"));
	dataset.addRow(new Array("Alessandra Sousa", "90123456790", "35", "Engenheira Química", "19890113", "Avenida das Nações, 540 - Centro", "Ensino Superior Completo", "Feminino", "10500.00", "Casada"));
	dataset.addRow(new Array("Felipe Cardoso", "01234567891", "43", "Administrador", "19810107", "Rua Frei Caneca, 45 - Centro", "Ensino Superior Completo", "Masculino", "9500.00", "Divorciado"));

	return dataset;
}
function onMobileSync(user) {

}