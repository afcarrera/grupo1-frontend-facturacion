

//Entity: EntidadIdFactura
//EntidadIdFactura. (Button) View: FormularioFacturacionGrupoA
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONVNVEJEN_144992 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    
    var nav = executeCommandEventArgs.commons.api.navigation;
		
	 nav.address = {
      moduleId: "FCTRC", //id modulo
      subModuleId: "FCTRS", //id submodulo
      taskId: "T_FCTRCKPKKMJDY_588", //id formulario
      taskVersion: "1.0.0",
      viewContainerId: "VC_FACTURACIU_624588" //id de la vista
      
    }
		 
	nav.openModalWindow("VC_FACTURACIU_624588", null);
    
};