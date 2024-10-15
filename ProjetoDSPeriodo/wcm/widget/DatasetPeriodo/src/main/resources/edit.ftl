<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
    <div>
        <h1>Consulta de Liberação de Lote</h1>
    </div>
    
    <div class="panel panel-primary mb-5">
        <div class="panel-heading">
            <h3 class="panel-title">Busca por período</h3>
        </div>
        <div class="panel-body">
            <div class="row">
                <form role="form">
                    <div class="form-group col-md-3">
                        <label for="periodoInicial">Selecione a data inicial</label>
                        <input type="date" name="periodoInicial" id="periodoInicial" class="form-control">
                    </div>
        
                    <div class="form-group col-md-3">
                        <label for="periodoFinal">Selecione a data Final</label>
                        <input type="date" name="periodoFinal" id="periodoFinal" class="form-control">
                    </div>
        
                    <div class="col-md-3 form-group">
                        <label for="pesquisarPeriodo">&nbsp;</label>
                        <button type="button" id="pesquisarPeriodo" class="btn btn-sm btn-success" data-pesquisarPeriodo>Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Busca por Produto</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <form role="form">
                        <div class="form-group col-md-3">
                            <label for="idProduto">Digite o código do Produto</label>
                            <input type="text" name="idProduto" id="idProduto" class="form-control">
                        </div>
            
                        <div class="col-md-3 form-group">
                            <label>&nbsp;</label>
                            <button type="button" id="pesquisarProduto" class="btn btn-sm btn-success" data-pesquisarProduto>Buscar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Busca por Produto e Período</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <form role="form">
                        <div class="form-group col-md-3">
                            <label for="idProduto">Digite o código do Produto</label>
                            <input type="text" name="idProdutoEPeriodo" id="idProdutoEPeriodo" class="form-control">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="periodoInicial">Selecione a data inicial</label>
                            <input type="date" name="periodoEProdutoInicial" id="periodoEProdutoInicial" class="form-control">
                        </div>
            
                        <div class="form-group col-md-3">
                            <label for="periodoFinal">Selecione a data Final</label>
                            <input type="date" name="periodoEProdutoFinal" id="periodoEProdutoFinal" class="form-control">
                        </div>
            
                        <div class="col-md-3 form-group">
                            <label>&nbsp;</label>
                            <button type="button" id="pesquisarProdutoEPeriodo" class="btn btn-sm btn-success" data-pesquisarProdutoEPeriodo>Buscar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="panel panel-primary">
            <div class="panel-body">
                <div class="row" id="divTabelaPesquisa">   
                    <table id="tabelaPesquisa" class="table table-striped table-bordered table-hover">
                        <thead>
            
                        </thead>
            
                        <tbody>
            
                        </tbody>
            
                        <tfoot>
            
                        </tfoot>
                    </table>
                </div>
            </div>
         </div>
</div>
    



<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
