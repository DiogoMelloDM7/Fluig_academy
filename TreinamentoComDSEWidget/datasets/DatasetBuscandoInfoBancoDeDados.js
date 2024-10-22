function createDataset(fields, constraints, sortFields) {
var filtros = [];
var query = '';
var filial = '';
var numNota = '';
var serdc = '';
var codiTransportadora = '';

for (var i = 0; i < constraints.length; i++) {
if (constraints[i]._field == 'FILIAL') {
filial = constraints[i]._initialValue;
} else if (constraints[i]._field == 'NRDC'){
numNota = constraints[i]._initialValue;
} else if (constraints[i]._field == 'SERDC'){
serdc = constraints[i]._initialValue;
} else if(constraints[i]._field == 'CDTRP'){
codiTransportadora = constraints[i]._initialValue;
}
}

query = " SELECT GWL_NRDC, GWD_CDTRP, GU6_DESC "
+ " FROM GWL010 GWL "
+ " INNER JOIN GWD010 GWD "
+ " ON GWD_FILIAL = GWL_FILIAL"
+ " AND GWD_NROCO = GWL_NROCO"
+ " AND GWD.D_E_L_E_T_ = ''"
+ " INNER JOIN GU6010 GU6"
+ " ON GU6_CDMOT = GWD_CDMOT "
+ " AND GU6.D_E_L_E_T_ = ''"
+ " ORDER BY GWL_NRDC, GWD_CDTRP"


filtros.push(DatasetFactory.createConstraint('SQL', query, query, ConstraintType.MUST));
filtros.push(DatasetFactory.createConstraint('dataSource', 'Protheus', 'Protheus', ConstraintType.MUST));

try {
var dataset = DatasetFactory.getDataset('dsSQL', null, filtros, null);
return dataset;
} catch (e) {
log.error(e);
}
}
