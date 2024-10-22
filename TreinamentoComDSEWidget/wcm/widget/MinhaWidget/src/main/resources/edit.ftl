<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">

	<div class="panel panel-default">
	    <div class="panel-primary">
	        <h3 class="panel-title">Consulte os clientes cadastrados</h3>
	        <p>Preencha os campos que deseje fazer a filtragem e busque pelos resultados desejados</p>
	    </div>
	    <div class="panel-body">
	        <form role="form">
	        	<div class="row">
	        		<div class="form-group col-md-3">
	        			<label for="nome">Nome</label>
	        			<input type="text" name="nome" id="nome" class="form-control">
	        		</div>
	        		<div class="form-group col-md-2">
	        			<label for="cpf">CPF</label>
	        			<input type="text" name="cpf" id="cpf" class="form-control" minlength="11" maxlength="11" placeholder="Apenas números...">
	        		</div>
	        		<div class="form-group col-md-2">
	        			<label for="idadeMinima">Idade Mínima</label>
	        			<input type="number" name="idadeMinima" id="idadeMinima" class="form-control">
	        		</div>
	        		<div class="form-group col-md-2">
	        			<label for="idadeMaxima">Idade Máxima</label>
	        			<input type="number" name="idadeMaxima" id="idadeMaxima" class="form-control">
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="profissao">Profissão</label>
	        			<input type="text" name="profissao" id="profissao" class="form-control">
	        		</div>
        		</div>
        		<div class="row"> 
        			<div class="form-group col-md-3">
	        			<label for="dataNascimentoInicial">Data de Nascimento Inicial</label>
	        			<input type="date" name="dataNascimentoInicial" id="dataNascimentoInicial" class="form-control">
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="dataNascimentoFinal">Data de Nascimento Final</label>
	        			<input type="date" name="dataNascimentoFinal" id="dataNascimentoFinal" class="form-control">
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="endereco">Endereço</label>
	        			<input type="text" name="endereco" id="endereco" class="form-control">
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="escolaridade">Escolaridade</label>
	        			<select type="text" name="escolaridade" id="escolaridade" class="form-control">
	        				<option value="todos">Todos</option>
	        				<option value="ensinoFundamentalIncompleto">Ensino Fundamental Incompleto</option>
	        				<option value="ensinoFundamentalCompleto">Ensino Fundamental Completo</option>
	        				<option value="ensinoMedioIncompleto">Ensino Médio Incompleto</option>
	        				<option value="ensinoMedioCompleto">Ensino Médio Completo</option>
	        				<option value="ensinoSuperiorIncompleto">Ensino Superior Incompleto</option>
	        				<option value="ensinoSuperiorCompleto">Ensino Superior Completo</option>
	        			</select>
	        		</div>
	        		
        		</div>
        		<div class="row">
        			<div class="form-group col-md-3">
	        			<label for="estadoCivil">Estado Civil</label>
	        			<select type="text" name="estadoCivil" id="estadoCivil" class="form-control">
	        				<option value="todos">Todos</option>
	        				<option value="solteiro">Solteiro(a)</option>
	        				<option value="casado">Casado(a)</option>
	        				<option value="divorciado">Divorciado(a)</option>
	        				<option value="viuvo">Viuvo(a)</option>
	        			</select>
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="salarioMinimo">Salário - Valor mínimo</label>
	        			<input type="number" name="salarioMinimo" id="salarioMinimo" class="form-control" placeholder="Apenas números...">
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="salarioMaximo">Salário - Valor máximo</label>
	        			<input type="number" name="salarioMaximo" id="salarioMaximo" class="form-control" placeholder="Apenas números...">
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="sexo">Sexo</label>
	        			<select type="text" name="sexo" id="sexo" class="form-control">
	        				<option value="ambos">Ambos</option>
	        				<option value="masculino">Masculino</option>
	        				<option value="feminino">Feminino</option>
	        			</select>
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="pesquisarItens">&nbsp &nbsp </label>
                        <div class="input-group">
                            <button type="button" id="pesquisarItens" class="btn btn-success" data-pesquisarItens>Buscar</button>
                        </div>
	        		</div>
        		</div>
	        </form>
	    </div>
	</div>
	
	<div class="panel primary">
    <div class="panel-heading">
        <h3 class="panel-title"></h3>
    </div>
    <div class="panel-body">
        <table id="tabelaPesquisa" class="table table-striped table-bordered table-hover">
       		<thead>
	       		<tr>
		       		<th></th>
		       		<th></th>
		       		<th></th>
		       		<th></th>
		       		<th></th>
		       		<th></th>
		       		<th></th>
		       		<th></th>
		       		<th></th>
		       		<th></th>
	       		</tr>
       		</thead>
       		
       		<tbody>
       		</tbody>
			<tfoot>
				<tr>
					<th>Nome</th>
					<th>CPF</th>
					<th>Idade</th>
					<th>Profissão</th>
					<th>Data de Nascimento</th>
					<th>Endereço</th>
					<th>Escolaridade</th>
					<th>Sexo</th>
					<th>Salário</th>
					<th>Estado Civil</th>
				</tr>
			</tfoot>

        </table>
    </div>
</div>

</div>

<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
<link rel="stylesheet" href="https://cdn.datatables.net/2.1.8/css/dataTables.dataTables.css" />
  
<script src="https://cdn.datatables.net/2.1.8/js/dataTables.js"></script>
