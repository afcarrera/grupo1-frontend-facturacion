
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: FormularioFacturacionGrupoA
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    
    if(onCloseModalEventArgs.closedViewContainerId=='VC_FACTURACIU_624588'){
        entities.EntidadClienteGrupoA.cedula = onCloseModalEventArgs.result.cliente.cedula;
        entities.EntidadClienteGrupoA.nombre = onCloseModalEventArgs.result.cliente.nombre;
        entities.EntidadClienteGrupoA.apellido = onCloseModalEventArgs.result.cliente.apellido;
        entities.EntidadClienteGrupoA.direccion = onCloseModalEventArgs.result.cliente.direccion;
        entities.EntidadClienteGrupoA.telefono = onCloseModalEventArgs.result.cliente.telefono;
       }

};