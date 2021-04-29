
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: FormularioBuscarProdGrupoA
task.initData.VC_BUSCARPRAD_501237 = function (entities, initDataEventArgs){
    initDataEventArgs.commons.api.vc.model.EntidadDetalleFactura.codigoFactura=entities.EntidadIdFactura.codigoFactura;
    console.log(initDataEventArgs.commons.api.vc.model.EntidadDetalleFactura.codigoFactura);
    initDataEventArgs.commons.execServer = false;

};