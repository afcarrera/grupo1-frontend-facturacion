
//ClientesFacturacionGrupoAQuery Entity: EntidadClienteGrupoA
task.executeQuery.Q_CLIEGTEN_XH49 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.EntidadClienteGrupoA = true;
	executeQueryEventArgs.parameters.nombre = executeQueryEventArgs.commons.api.vc.model.EntidadClienteBusquedaGrupoA.nombre;
};