$(document).ready(function(){

    $('.btn-save').click(function(e){
        e.preventDefault()

        let dados = $('#form_contato').serialize()

        $.ajax({
            dataType: "JSON",
            type: "POST",
            assync: true,
            data: dados, 
            url: 'API/contato/model/save.php',
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