<?php

include('../../conexao/conn.php');

$sql = 'SELECT * FROM CONTATO WHERE ID = '.$_REQUEST['ID'].'';

$resultado = $pdo->query($sql);

if($resultado){
    while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
        $dados[] = array_map(null, $row);
    }
}else{
    $dados = array(
        'mensagem' => 'Nenhum registro encontrado.'
    );
}

echo json_encode($dados);

?>