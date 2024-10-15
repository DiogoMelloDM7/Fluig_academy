/**
 * Consulta liberação de lotes no Protheus.
 * @function createDataset
 * @author Everton Alves <everton@laticinosaviacao.com.br>
 * @since 15/10/2023
 * @param {Array} fields -  Campos do Dataset que serão retornados.
 * @param {Array} constraints - Condições de busca do Dataset.
 * @param {Array} sortFields - campos para ordenação dos registros do Dataset.
 * @returns {Object} - Dataset com o resultado da consulta.
 */
function createDataset(fields, constraints, sortFields) {
	var filtros = [];
	var query = '';
	var filial = '01';
	var dataInicial = '20241001';
	var dataFinal = '20241031';
	var produtoInicial = '';
	var produtoFinal = 'zzzzzzzzzzzzzzz';
	var dataSource = 'Protheus';
	
	if (constraints) {
		for (var i = 0; i < constraints.length; i++) {
			if (constraints[i].fieldName == 'filial') {
				filial = constraints[i].initialValue + '';
			} else if (constraints[i].fieldName == 'periodo') { 
				dataInicial = constraints[i].initialValue + '';
				dataFinal = constraints[i].finalValue + '';
			} else if (constraints[i].fieldName == 'produtos') { 
				produtoInicial = constraints[i].initialValue + '';
				produtoFinal = constraints[i].finalValue + '';
			}
		}
	}
	
	query = " SELECT DD_FILIAL," +
				" DD_ZZDTINC," +
				" DD_PRODUTO," +
				" B1_DESC," +
				" DD_LOCAL," +
				" DD_LOTECTL," +
				" DD_DTVALID," +
				" SUM(DD_QTDORIG) DD_QTDORIG," +
				" DD_OBSERVA" +
			" FROM SDD010 SDD" +
				" INNER JOIN SB1010 SB1" +
					" ON 1=1" +
						" AND B1_FILIAL = DD_FILIAL" +
						" AND B1_COD = DD_PRODUTO" +
						" AND SB1.D_E_L_E_T_ = ''" +
			" WHERE 1=1" +
				" AND DD_FILIAL = '" + filial + "'" +
				" AND DD_ZZDTINC BETWEEN '" + dataInicial + "' AND '" + dataFinal + "'" +
				" AND DD_PRODUTO BETWEEN '" + produtoInicial + "' AND '" + produtoFinal + "'" +
				" AND DD_SALDO = 0" +
				" AND SDD.D_E_L_E_T_ = ''" +
			" GROUP BY DD_FILIAL," +
				" DD_ZZDTINC," +
				" DD_PRODUTO," +
				" B1_DESC," +
				" DD_LOCAL," +
				" DD_LOTECTL," +
				" DD_DTVALID," +
				" DD_OBSERVA" +
			" ORDER BY DD_FILIAL, DD_PRODUTO, DD_LOTECTL";
	
	filtros.push(DatasetFactory.createConstraint('SQL', query, query, ConstraintType.MUST));
	filtros.push(DatasetFactory.createConstraint('dataSource', dataSource, dataSource, ConstraintType.MUST));
	
	try {
		var dataset = DatasetFactory.getDataset('dsSQL', null, filtros, null);
		return dataset;
	} catch (e) {
		log.error(e);
	}
}