# Hackathon API
Esse código refere-se ao backend do projeto proposto no Hackathon INPI 2021.

## Componentes
Esse projeto foi desenvolvido utilizando o `express` para o estabelecimento das rotas, o `typeorm` como ORM e `postgres` como banco de dados.

## Como rodar
Para começar o desenvolvimento do backend, instale todas as dependências com `yarn install` ou `npm install`. Após isso, copie tudo que está no arquivo `.env.template` e cole em um arquivo `.env`, preenchendo todos os campos.

Para desenvolvimento, utilize `yarn dev` para iniciar.

## Rotas
As rotas foram separadas entre as três principais entidades deste projeto, que são: usuário, protocolo GRU e os pedidos de registro.

### Usuário
[POST]`/auth/user`: autenticar o usuário.
```
{
  "email": <EMAIL_DO_USUARIO>,
  "senha": <SENHA_DO_USUARIO>
}
```

[POST]`/user`: criar novo usuário.
```
{
  "name": <NOME_DO_USUARIO>,
  "email": <EMAIL_DO_USUARIO>,
  "senha": <SENHA_DO_USUARIO>
}
```

### Registro de pedido
[POST]`/demand`: criar novo pedido.
```
{
  "name": <NOME_DO_PEDIDO>,
  "type": <TIPO_DO_PEDIDO>,
  "idGRU": <ID_DA_GRU_DO_PEDIDO>
  "idUser": <ID_DO_DONO_DO_PEDIDO>
}
```

[GET]`/demand`: Retornar todos os pedidos do usuário.
```
{
  "idUser": <ID_DO_DONO_DO_PEDIDO>
}
```


[GET]`/demand/:id`: Retornar o pedido por ID.
```
{
  "idUser": <ID_DO_DONO_DO_PEDIDO>
}
```

### Protocolo GRU
[POST]`/protocolgru`: criar nova GRU.
```
{
  "idUser": <ID_DO_DONO_DA_GRU>
}
```

[PUT]`/protocolgru`: paga uma GRU.
```
{
  "id": <ID_DA_GRU>,
  "idUser": <ID_DO_DONO_DA_GRU>
}
```

[GET]`/protocolgru`: Retornar todas as GRUs do usuário.
```
{
  "idUser": <ID_DO_DONO_DO_PEDIDO>
}
```


[GET]`/protocolgru/:id`: Retornar a GRU por ID.
```
{
  "idUser": <ID_DO_DONO_DO_PEDIDO>
}
```
