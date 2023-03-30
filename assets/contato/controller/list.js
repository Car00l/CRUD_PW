$(document).ready(function(){

    $.ajax({
        dataType: "JSON",
        type: "POST",
        assync: true,
        url: 'api/contato/model/list.php',
        success: function(dados){
            
        }
    })
})