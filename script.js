//Boas vindas ao cliente
alert(`Bem vindo ao sistema de Login!`);

//Recebendo nome do cliente
var nome;
if(nome = prompt(`Informe seu nome:`)){
    alert(`Faça cadastro!`)
}

while(nome == ""){
    alert(`Você ainda não informou seu nome!`);
    if(nome = prompt(`Informe seu nome para continuar:`)){
    alert(`Faça cadastro!`)
    break;
    }
}

//Cadastro

var usuario = {nomeUsuario: prompt(`Crie seu nome de usuário:`),
               senhaUsuario: prompt(`Crie sua senha:`)};

while(usuario.nomeUsuario == ""){
    alert(`${nome} parece que você esqueceu de criar seu nome de usuário!`);
    if(usuario.nomeUsuario = prompt(`Crie seu nome de usuário para continuar!`)){
    break;
    }
}

while(usuario.senhaUsuario == ""){
    alert(`${nome}, você ainda não criou sua senha!`);
    if(usuario.senhaUsuario = prompt(`Crie sua senha para continuar:`)){
    break;
    }
}

alert(`Você já pode fazer Login!`);

//Login
var loginUsuario = {nomeLogin: prompt(`Nome de usuário:`),
                    senhaLogin: prompt(`Senha:`)};
if(loginUsuario.nomeLogin == usuario.nomeUsuario){
}

else{
    while(loginUsuario.nomeLogin != usuario.nomeUsuario || loginUsuario.nomeLogin == ""){
    alert(`Nome de usuário incorreto, ou não informado!`);
    loginUsuario.nomeLogin = prompt(`Digite seu nome de usuário para continuar:`);
    if(loginUsuario.nomeLogin == usuario.nomeUsuario){
    break;
    }
    }
}

console.log(`Nome de usuário Ok`);

if(loginUsuario.senhaLogin == usuario.senhaUsuario){
    console.log(`Senha Ok`);
    alert(`Bem vindo ${nome}`);
}

else{
    while(loginUsuario.senhaLogin != usuario.senhaUsuario || loginUsuario.senhaLogin == ""){
          alert(`Senha incorreta ou não informada!`);
          loginUsuario.senhaLogin = prompt(`Senha para continuar:`);
          if(loginUsuario.senhaLogin == usuario.senhaUsuario){
          console.log(`Tudo funcionando!`);
          alert(`Bem vindo ${nome}`);
          break;
          }
    }
}