const pessoa = [
    {
     "nome": "Eduarda",
     "idade": 19,
     "cidade": "São Leopoldo",
     "hobbies": ["Jogar", "Programar", "Treinar", "Ler"],
     "detalhes_profissao":
      {
        "profissao": "Consultora",
        "empresa": "GVDASA"
      }
    
    }, 
    {
        "nome": "Arthur",
        "idade": 20,
        "cidade": "São Leopoldo",
        "hobbies": ["Atletismo",  "Jogar", "Correr"],
        "detalhes_profissao":
         {
           "profissao": null,
           "empresa": null
         }
       
       }
]

// TRANSFORMANDO OBJETO EM JSON 
const jsonData= JSON.stringify(pessoa);
//console.log(jsonData);

// TRANSFORMANDO JSON EM OBJETO

const objData = JSON.parse(jsonData);
//console.log(objData);

// MANIPULANDO DADOS OBJETO

objData.map((indice) => {
    console.log(indice.nome); // imprime cada nome do array de objeto
})