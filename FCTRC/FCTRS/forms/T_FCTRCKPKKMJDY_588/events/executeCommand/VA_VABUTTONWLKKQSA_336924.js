

//Entity: EntidadClienteBusquedaGrupoA
//EntidadClienteBusquedaGrupoA. (Button) View: FormularioFacturacionClientesGrupoA
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONWLKKQSA_336924 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EntidadClienteBusquedaGrupoA = true;
    executeCommandEventArgs.parameters.nombre = executeCommandEventArgs.commons.api.vc.model.EntidadClienteBusquedaGrupoA.nombre;
};