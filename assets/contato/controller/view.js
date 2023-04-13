$(document).ready(function(){

    $('.btn-edit').click(function(e){
        e.preventDefault()

        let dados = 'ID=' + $(this).attr('id');

    $.ajax({
        dataType: "JSON",
        type: "POST",
        assync: true,
        data: dados,
        url: 'API/contato/model/view.php',
        success: function(dados){
            for(const result of dados){
                $('#content').empty();
                $('#content').load('assets/contato/view/form.html', function(){
                    $('#NOME').val(result.NOME)
                    $('#TELEFONE').val(result.TELEFONE)
                    $('#CELULAR').val(result.CELULAR)
                    $('#EMAIL').val(result.EMAIL)
                    $('#ID').val(result.ID)

                    $('.btn-secondary').hide()
                    $('.btn-success').empty()
                    $('.btn-success').append('Atualizar')
                    $('.btn-success').removeClass('btn-save')
                    $('.btn-success').addClass('btn-update')
                })
            }
            $('body').append(`<script src="assets/contato/controller/update.js"></scrip>`)
            }
        })
    })
})