$(document).ready(function(){

    $('.btn-delete').click(function(e){
        e.preventDefault()

        let dados = `ID=${$(this).attr('id')}`

        $.ajax({
            dataType: "JSON",
            type: "POST",
            assync: true,
            data: dados, 
            url: 'API/contato/model/delete.php',
            success: function(dados){

                if(dados.type == 'success'){
                    alert(dados.mensagem)
                    $('#content').empty()
                    $('#content').load('assets/contato/view/list.html')
                }else{
                    alert(dados.mensagem)
                }
            }
        })
    })
})