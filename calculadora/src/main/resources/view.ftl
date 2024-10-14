<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">

    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title"> Calculadora + ${pageRender.getUser().fullName}</h3>
        </div>
        <div class="panel-body">
            <div class="row">
                <input type="number" name="number1" id="number1" class="form-control col-md-2">
                <input type="number" name="number2" id="number2" class="form-control col-md-2">
                <input type="number" name="result" id="result" readonly class="form-control col-md-2">
            </div>

            <div class="row">
                <button class="btn btn-sm btn-primary col-md-1" id="btnSoma" data-btnSoma>+</button>
                <button class="btn btn-sm btn-primary col-md-1" id="btnSub" data-btnSub>-</button>
                <button class="btn btn-sm btn-primary col-md-1" id="btnMult" data-btnMult>X</button>
                <button class="btn btn-sm btn-primary col-md-1" id="btnDiv" data-btnDiv>%</button>
            </div>
        </div>
    </div>

</div>