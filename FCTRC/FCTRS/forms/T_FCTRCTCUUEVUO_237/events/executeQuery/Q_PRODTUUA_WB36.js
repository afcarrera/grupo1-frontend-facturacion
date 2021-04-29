
//EntidadProductoGrupoAQuery Entity: EntidadProductoGrupoA
task.executeQuery.Q_PRODTUUA_WB36 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
	executeQueryEventArgs.parameters.codigoProd = executeQueryEventArgs.commons.api.vc.model.EntidadDetalleFactura.codigoProducto;
    //executeQueryEventArgs.commons.serverParameters.EntidadProductoGrupoA = true;
};