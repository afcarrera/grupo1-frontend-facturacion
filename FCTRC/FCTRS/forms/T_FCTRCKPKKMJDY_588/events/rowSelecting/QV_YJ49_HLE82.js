
//gridRowSelecting QueryView: QV_YJ49_HLE82
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_YJ49_HLE82 = function (entities,gridRowSelectingEventArgs) {

    gridRowSelectingEventArgs.commons.execServer = false;
    
    let nav = gridRowSelectingEventArgs.commons.api.navigation; 
    nav.closeModal({cliente: gridRowSelectingEventArgs.rowData});
    
    console.log(gridRowSelectingEventArgs.rowData.cedula);
    

};




