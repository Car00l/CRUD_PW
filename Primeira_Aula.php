<?php

$NOME = $_REQUEST['NOME'];
$EMAIL = $_REQUEST['EMAIL'];
$CELULAR = $_REQUEST['CELULAR'];
$SEXO = $_REQUEST['SEXO'];

// escolha de opções com IF TERNARIO = so analiza se é falso ou verdadeiro
$SEXO = $SEXO == 'M' ? 'Masculino' : 'Feminino';

$MENSAGEM = 'Seja Bem Vindo(a), ' .$NOME. ' !';

// tem que criar um array para tranformar os dados em json, e poder enviar varios paramentos
$DADOS = array (
    'NOME' => $NOME,
    'EMAIL' => $EMAIL,
    'CELULAR' => $CELULAR,
    'SEXO' => $SEXO,
    'MENSAGEM' => $MENSAGEM
);

echo json_encode($DADOS);

