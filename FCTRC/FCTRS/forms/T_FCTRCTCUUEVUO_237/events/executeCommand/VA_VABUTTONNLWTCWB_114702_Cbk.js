
//Start signature to Callback event to VA_VABUTTONNLWTCWB_114702
task.executeCommandCallback.VA_VABUTTONNLWTCWB_114702 = function(entities, executeCommandCallbackEventArgs) {
     //here your code    
    var nav = executeCommandCallbackEventArgs.commons.api.navigation; 
    nav.closeModal({});
};
