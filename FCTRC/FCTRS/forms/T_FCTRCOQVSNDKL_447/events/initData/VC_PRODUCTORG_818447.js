
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: FormularioProductoGrupoA
task.initData.VC_PRODUCTORG_818447 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    
    if(entities.EntidadProductoGrupoA.codigo == null || entities.EntidadProductoGrupoA.codigo == ""){
        // Guardar
        initDataEventArgs.commons.api.viewState.show("VA_VABUTTONXQIQBYN_646579");
        initDataEventArgs.commons.api.viewState.hide("VA_VABUTTONJLEBPEL_592579");
    } else {
        // Actualizar
        initDataEventArgs.commons.api.viewState.show("VA_VABUTTONJLEBPEL_592579");
        initDataEventArgs.commons.api.viewState.hide("VA_VABUTTONXQIQBYN_646579");
        initDataEventArgs.commons.api.viewState.readOnly('VA_CODIGOMVCSWRZVQ_127579', true);
    }

};