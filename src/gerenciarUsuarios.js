const usuarios= [
    {
        nome:'Matheus',
        email:'matheus@gmail.com'
    },

    {
        nome:'Marcos',
        email:'marcos11@gmail.com'
    },
     
    {
        nome:'Lucas',
        email:'lucasv@hotmail.com'
     } ,
     
     {
        nome:'João',
        email:'joaot@gmail.com'
    }
];

function retornarUsuarios(){
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);

}

module.exports ={
    retornarUsuarios,
    adicionarNovoUsuario
}