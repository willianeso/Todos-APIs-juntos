const axios =  require('axios');
const urlGet = "https://jsonplaceholder.typicode.com/todos/1"
const urlPost = "https://jsonplaceholder.typicode.com/posts"
const urlPutDelete = "https://jsonplaceholder.typicode.com/posts/1"

// GET
axios.get(urlGet)
    .then(response =>{
        console.log("Dados recebidos da API: ")
        console.log(response.data)
    })    
    .catch(error => {
        console.log(`Erro ao acessar a API: ${error}`)                                                                                                                                                                                                                          
    })


// POST
const novoPost = {
    title: "Williane Oliveira",
    body: "Aprendendo integração de API",
    userId: 1
}
axios.post(urlPutDelete, novoPost)
    .then(response => {
        console.log("Recurso criado com sucesso: ")
        console.log(response.data)
    })
    .catch(error =>{
        console.error(`Erro ao tentar criar o recurso: ${error}`)
    })    


// PUT    
const dadosAtualizados = {
    title: "Título atualizado com PUT",
    body: "Exemplo de uma requisição put",
    userId: 1
}    
axios.put(urlPut, dadosAtualizados)
    .then(response => {
        console.log("recurso atualizado com sucesso");
        console.log(response.data)
    })

    .catch(error => {
        console.error(`erro ao tentar atualizar o recurso: ${error}`)
    })    


// DELETE
axios.delete(urlPutDelete)
    .then(response => {
        console.log("Recurso deletado com sucesso")
        console.log(`Status da resposta: ${response.status}`)
    })
    .catch(error =>{
        console.error(`Erro ao tentar deletar o recurso: ${error}`)
    })    
