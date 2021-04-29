
//gridCommand (Button) QueryView: QV_RY97_GWB17
//Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
task.gridCommand.CEQV_201QV_RY97_GWB17_172 = function (entities, gridExecuteCommandEventArgs) {
    gridExecuteCommandEventArgs.commons.execServer = false;
    //gridExecuteCommandEventArgs.commons.serverParameters.EntidadDetalleFactura = true;
    var nav = gridExecuteCommandEventArgs.commons.api.navigation;
		
	 nav.address = {
      moduleId: "FCTRC", //id modulo
      subModuleId: "FCTRS", //id submodulo
      taskId: "T_FCTRCTCUUEVUO_237", //id formulario
      taskVersion: "1.0.0",
      viewContainerId: "VC_BUSCARPRAD_501237" //id de la vista
      
    }
		 
	nav.openModalWindow("VC_BUSCARPRAD_501237", null);
};