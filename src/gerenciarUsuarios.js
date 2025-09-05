const usuarios= ['matheus', 'marcos', 'marcos', 'lucas', 'joão'];

function retornarUsuarios(){
    return usuarios;
}

function adicionarNovoUsuario(nome) {
    usuarios.push(nome);

}

module.exports ={
    retornarUsuarios,
    adicionarNovoUsuario
}