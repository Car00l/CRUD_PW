$(document).ready(function(){

    $.ajax({
        dataType: "JSON",
        type: "POST",
        assync: true,
        url: 'API/contato/model/list.php',
        success: function(dados){
            for(const result of dados){
                $('tbody').append(`
                    <tr>
                        <td class="texte-center">${result.ID}</td>
                        <td class="texte-center">${result.NOME}</td>
                        <td class="texte-center">${result.TELEFONE}</td>
                        <td class="texte-center">${result.CELULAR}</td>
                        <td class="texte-center">${result.EMAIL}</td>
                    </tr>
                `)
            }
        }
    })
})