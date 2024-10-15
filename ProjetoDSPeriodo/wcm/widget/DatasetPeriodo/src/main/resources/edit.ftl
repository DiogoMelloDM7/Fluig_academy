<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
    <div class="row">
        <form role="form">
            <div class="form-group col-md-3">
                <label for="periodoInicial">Selecione a data inicial</label>
                <input type="text" name="periodoInicial" id="periodoInicial" class="form-control">
            </div>

            <div class="form-group col-md-3">
                <label for="periodoFinal">Selecione a data Final</label>
                <input type="text" name="periodoFinal" id="periodoFinal" class="form-control">
            </div>

            <div class="col-md-3">
                <button type="button" id="pesquisarPeriodo" class="btn btn-sm btn-success" data-pesquisarPeriodo>Buscar</button>
            </div>
        </form>
    </div>

    <div class="row" id="divTabelaPesquisa">   
        <table id="tabelaPesquisa" class="table table-striped">
            <thead>

            </thead>

            <tbody>

            </tbody>

            <tfoot>

            </tfoot>
        </table>
    </div>

    <div id="tabelaFiltrada">

    </div>

</div>

<script>
	let mySimpleCalendar = FLUIGC.calendar('#periodoInicial');
    let mySimpleCalendar2 = FLUIGC.calendar('#periodoFinal');
</script>

<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>