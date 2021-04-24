
//EntidadFacturacionGrupoAQuery Entity: EntidadFacturacionGrupoA
task.executeQuery.Q_FACTAUOA_IC34 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.EntidadFacturacionGrupoA = true;
    
    executeQueryEventArgs.parameters.cedula = executeQueryEventArgs.commons.api.vc.model.CedulaBusquedaGrupoA.cedulaBusqueda
};