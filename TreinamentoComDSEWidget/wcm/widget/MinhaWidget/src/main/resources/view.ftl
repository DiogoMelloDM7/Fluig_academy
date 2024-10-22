<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">

	<div class="panel panel-primary">
	    <div class="panel-heading">
	        <h1 class="fs-xl-padding-left">Consulte ou Cadastre clientes</h1>
	        <h3 class="fs-xl-padding-left">Preencha os campos que deseje fazer a filtragem e busque pelos clientes desejados ou preencha todos os campos para cadastrar um novo cliente!</h3>
	    </div>
	    <div class="panel-body">
			<input id="MySwitchButtonCheckbox" type="checkbox" data-on-text="Cadastrar" data-off-text="Consultar" data-on-color="success" data-off-color="info" data-size="normal">
	        <form role="form" id="formConsulta">
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
                            <button type="button" id="pesquisarItens" class="btn btn-info" data-pesquisarItens>Buscar Cliente</button>
                        </div>
	        		</div>
					

        		</div>
	        </form>


			<form role="form" id="formCadastro" style="display:none;">
	        	<div class="row">
	        		<div class="form-group col-md-3">
	        			<label for="nomeCadastro">Nome</label>
	        			<input type="text" name="nomeCadastro" id="nomeCadastro" class="form-control">
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="cpfCadastro">CPF</label>
	        			<input type="text" name="cpfCadastro" id="cpfCadastro" class="form-control" minlength="11" maxlength="11" placeholder="Apenas números...">
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="idadeCadastro">Idade</label>
	        			<input type="number" name="idadeCastro" id="idadeCadastro" class="form-control">
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="profissaoCadastro">Profissão</label>
	        			<input type="text" name="profissaoCadastro" id="profissaoCadastro" class="form-control">
	        		</div>
        		</div>
        		<div class="row"> 
        			<div class="form-group col-md-4">
	        			<label for="dataNascimentoCadastro">Data de Nascimento</label>
	        			<input type="date" name="dataNascimentoCadastro" id="dataNascimentoCadastro" class="form-control">
	        		</div>
	        		<div class="form-group col-md-4">
	        			<label for="enderecoCadastro">Endereço</label>
	        			<input type="text" name="enderecoCadastro" id="enderecoCadastro" class="form-control">
	        		</div>
	        		<div class="form-group col-md-4">
	        			<label for="escolaridadeCadastro">Escolaridade</label>
	        			<select type="text" name="escolaridadeCadastro" id="escolaridadeCadastro" class="form-control">
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
        			<div class="form-group col-md-4">
	        			<label for="estadoCivilCadastro">Estado Civil</label>
	        			<select type="text" name="estadoCivilCadastro" id="estadoCivilCadastro" class="form-control">
	        				<option value="solteiro">Solteiro(a)</option>
	        				<option value="casado">Casado(a)</option>
	        				<option value="divorciado">Divorciado(a)</option>
	        				<option value="viuvo">Viuvo(a)</option>
	        			</select>
	        		</div>
	        		<div class="form-group col-md-4">
	        			<label for="salarioCadastro">Salário</label>
	        			<input type="number" name="salarioCadastro" id="salarioCadastro" class="form-control" placeholder="Apenas números...">
	        		</div>
	        		<div class="form-group col-md-4">
	        			<label for="sexoCadastro">Sexo</label>
	        			<select type="text" name="sexoCadastro" id="sexoCadastro" class="form-control">
	        				<option value="masculino">Masculino</option>
	        				<option value="feminino">Feminino</option>
	        			</select>
	        		</div>
	        		<div class="form-group col-md-3">
	        			<label for="cadastrarCliente">&nbsp &nbsp </label>
                        <div class="input-group">
                            <button type="button" id="cadastrarCliente" class="btn btn-success" data-cadastrarCliente>Cadastrar Cliente</button>
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
    <div class="panel-body" id="divTabelaPesquisa">
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

		<div class="btn-group">
			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
				<span class="caret"></span>
			</button>
			<ul class="dropdown-menu" role="menu">
				<li id="gerarPDF" data-gerarPDF><a>Gerar PDF</a></li>
				<li id="gerarExcel" data-gerarExcel><a>Gerar Excel</a></li>


			</ul>
		</div>
    </div>
</div>

</div>

<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
<link rel="stylesheet" href="https://cdn.datatables.net/2.1.8/css/dataTables.dataTables.css" />
  
<script src="https://cdn.datatables.net/2.1.8/js/dataTables.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.3/xlsx.full.min.js"></script>
