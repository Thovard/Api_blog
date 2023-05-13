 <!-- INICIANDO O PROJETO -->
    Crie o .env copiando o .env.exmple
        cp .env.example .env
    cadastre no env a porta local que sera usada.
    insira o acesso ao do banco.

<!--  DB INFO -->
    nesse projeto foi usado o banco de dados da plataforma
       SITE: mongodb.com
    para a criação do banco basta criar sua conta e seguir o passo a passo.
    com o banco feito, insira o link de acesso do banco em seu .env lembrando de alterar <passworld> para a sua senha de acesso do seu banco.

 <!-- INFORMAÇÕES DE USO -->
# auth
    HOST/auth/register
        Descrição: cadastra o usuario
        Params:
            Method:POST
            type: JSON
            body:{
            "username": "",
            "email": "",
            "password": ""
            }

    HOST/auth/login
        desc: Authentica o usuario.
        Params:
            Method:POST
            type: JSON
            body:{
            "username": "",
            "email": "",
            "password": ""
            }
# blog/posts
    HOST/blog/posts
        Descrição: Cadastra uma postagem.
        Requer authenticação.
        Params:
            Method:POST
            type: JSON
            body:{
            "title": "",
            "desc": "",
            "photo": "",
            "categories": [],
            "posts": []
            }

    HOST/blog/posts/{id}
        Descrição: Retorna uma postagem específica.
        Requer authenticação.
        Params:
            Method:GET
            id = "id da postagem"

    HOST/blog/posts/{id}
        Descrição: Atualiza uma postagem específico.
        Requer authenticação.
        Params:
            Method:PUT
            id = "id da postagem"
            body:{
                "title": "",
                "desc": "",
                "photo": "",
                "categories": []
            }

    HOST/blog/posts
        Descrição: Busca todas as postagens do usuario auth.
        Requer authenticação.
        Params:
            Method:GET
            Query Params (opcional): pode ser ordenado de forma decrecendo passando o paramentro na url ("?sort: true")

    HOST/blog/posts/{id}
        Descrição: Deleta uma postagem especifica.
        Params:
            Method:DELETE
# profile
    HOST/user/find/{id}
        Descrição: Busca dados de um usuario.
        Params:
            Method:GET

    HOST/user/findall
        Descrição: Busca dados de um usuario.
        Params:
            Method:GET

    HOST/user/updateUser/{id}
        Descrição: Atualiza os dados da sua conta.
        Requer authenticação.
        Params:
            Method:PUT
            id = "id do seu usuaro authenticado"
                body:{
                    "username": "",
                    "email": "",
                    "password": ""
                }
    
    HOST/user/deleteUser/{id}
        Descrição: Deleta A conta do usuario.
        Requer authenticação.
        Params:
            Method:DELETE
            id = "id do seu usuaro authenticado"


