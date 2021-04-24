
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: FormularioProductosGrupoA
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    
    if(onCloseModalEventArgs.closedViewContainerId == 'VC_PRODUCTORG_818447'){
        onCloseModalEventArgs.commons.api.grid.refresh('QV_BE53_PGM34');
    }

};