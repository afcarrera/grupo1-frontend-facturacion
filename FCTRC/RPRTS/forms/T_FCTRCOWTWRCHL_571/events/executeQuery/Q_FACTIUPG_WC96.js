
//EntidadFacturacionGrupoAFechasQuery Entity: EntidadFacturacionGrupoA
task.executeQuery.Q_FACTIUPG_WC96 = function(executeQueryEventArgs){
    var desde=executeQueryEventArgs.commons.api.vc.model.FechasBusquedaGrupoA.fechaInicio;
	var hasta=executeQueryEventArgs.commons.api.vc.model.FechasBusquedaGrupoA.fechaFin;
	var fecha_d=null;
	var hora_d=null;
	var fecha_h=null;
	var hora_h=null;
	if(desde!=null){
		fecha_d=desde.toLocaleDateString();
		hora_d=desde.toLocaleTimeString();
	};	
	if(fecha_d!=null && hora_d!=null){	
		executeQueryEventArgs.parameters.fechaDesde=fecha_d+" "+hora_d;
	}else{
		executeQueryEventArgs.parameters.fechaDesde=null;	
	};
	if(hasta!=null){
		fecha_h=hasta.toLocaleDateString();
		hora_h=hasta.toLocaleTimeString();
	};	
	if(fecha_d!=null && hora_d!=null){	
		executeQueryEventArgs.parameters.fechaHasta=fecha_h+" "+hora_h;
	}else{
		executeQueryEventArgs.parameters.fechaHasta=null;	
	};
	executeQueryEventArgs.parameters.reporteFecha="OK";
    executeQueryEventArgs.commons.execServer = true;
	console.log(executeQueryEventArgs.parameters.fechaDesde);
	console.log(executeQueryEventArgs.parameters.fechaHasta);
	console.log(executeQueryEventArgs.parameters.reporteFecha);
    //executeQueryEventArgs.commons.serverParameters.EntidadFacturacionGrupoA = true;
};