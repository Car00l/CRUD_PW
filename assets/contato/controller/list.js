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
                        <td class="text-center">${result.ID}</td>
                        <td class="text-center">${result.NOME}</td>
                        <td class="text-center">${result.TELEFONE}</td>
                        <td class="text-center">${result.CELULAR}</td>
                        <td class="text-center">${result.EMAIL}</td>
                        <td class="text-center">
                            <button id="${result.ID}" class="btn btn-info btn-edit">Editar</button>
                            <button id="${result.ID}" class="btn btn-danger btn-delete">Excluir</button>
                        </td>
                    </tr>
                `)
            }
            $('body').append(`<script src="assets/contato/controller/view.js"></scrip>`)
            $('body').append(`<script src="assets/contato/controller/delete.js"></scrip>`)
        }
    })
})