const {retornarUsuarios, adicionarNovoUsuario} = require('../src/gerenciarUsuarios');
const {expect} = require('chai');

describe('Testar as funções de Gestão de Usuarios', function() {
    it ('Validar que posso adicionar um nome de usuario na lista', function(){
        //1.Adicionar um novo nome na lista de Usuários
        adicionarNovoUsuario ('Maria');

        // 2. Retornar a Lista de Usuarios na caixa Lista de Usuários
        const listaDeUsuarios = retornarUsuarios ();

        //  3. Comparar se o novo nome esta no fim da lista de Usuários
        expect(listaDeUsuarios.at(-1)).to.equal('Maria');

    });
});