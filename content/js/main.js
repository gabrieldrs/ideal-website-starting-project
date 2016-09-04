$ = jQuery = require('jQuery');
window.$ = $;
require('bootstrap-sass');

$(document).ready(function(){
    alert((typeof $().modal == 'function'));
});