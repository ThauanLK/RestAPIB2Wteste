# RestAPIB2Wteste

Repositório destinado a uma REST Api em Node feita com as especificações solicitadas para o teste da empresa B2W.

Funcionalidades Implementadas:

Listagem: Listar todos os planetas armazenados nesta api, a rota para o teste dessa api é feed/planets.

Adição de um planeta: Adicionando um novo objeto de Planeta na rota feed/planets/post_planet, será capaz de adicionar um planeta. Basta inserir seu nome, 
sua descrição e a quantidade de vezes que o planeta apareceu durante as sagas de Star Wars.

Remoção de um Planeta: Será capaz de excluir um planeta, basta colocar na rota feed/planets/:idDoPlaneta.

Busca por ID: Será capaz de encontrar um planeta com o id especifico registrado na api, para isto a rota feed/planets/resultByID?:idDoPlaneta deverá ser utilizada,

Busca por Nome: Assim como a pesquisa por id, está funcionalidade será utilizada na rota feed/planets/result?:nomeDoPlaneta ao acessar esta rota deverá ser capaz de pesquisar 
por nome um dos planetas registrados nesta api.

Estrutura de Pastas:

Controllers (-> feed.js)
Local em que conterá as funcionalidades do projetos, onde terá as funções utilizadas para realizar as especificações pedidas.

Models(-> planets.js)
Local onde se encontra o Schema utilizado para ser o objeto que compõe a API.

Routes (-> feed.js)
Local onde se foi definido as rotas e qual funcionalidade cada rota iria contemplar.

app.js
Inicialização do projeto.
