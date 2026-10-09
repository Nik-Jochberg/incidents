sap.ui.define([], function () {
    "use strict";

    return {
        /**
         * Navigates from the Object Page back to the Incidents list.
         * Called with the Object Page ExtensionAPI as `this`.
         */
        onPress: function () {
            this.routing.navigateToRoute("IncidentsList");
        }
    };
});
