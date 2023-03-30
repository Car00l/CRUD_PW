$(document).ready(function(){

    $.ajax({
        dataType: "JSON",
        type: "POST",
        assync: true,
        url: 'API/contato/model/list.php',
        success: function(dados){
            for(const resultado of dados){
                $('tbody').append(`
                    <tr>
                        <td class="texte-center">${resultado.ID}</td>
                        <td class="texte-center">${resultado.NOME}</td>
                        <td class="texte-center">${resultado.TELEFONE}</td>
                        <td class="texte-center">${resultado.CELULAR}</td>
                        <td class="texte-center">${resultado.EMAIL}</td>
                    </tr>
                `)
            }
        }
    })
})