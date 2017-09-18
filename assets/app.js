$(document).ready(function(){
    $('.collapsible').collapsible({
        // accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        onOpen: function(el) { 
            $('.collapsible').collapsible('open', 0);
            
        }, // Callback for Collapsible open
        onClose: function(el) { 
                          // Close
                          $('.collapsible').collapsible('close', 0);
        },

    }),
});


//////////////////////////////////////////////////////////////////////////////////



