let resposta = {};
const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(false) {
            resposta = {
                codigo: 404,
                erro: 'Not Found'
            }
            reject(resposta)
        }
        resposta = {
            0: {id: 1, nome: 'fulano'},
            1: {id: 1, nome: 'cicrano'},
            2: {id: 1, nome: 'beltrano'}
        }
        resolve(resposta); 
    }, 3000);
}).then(() => {
    let promessa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            let resposta = {};
            if(false) {
                resposta = {
                    codigo: 69,
                    erro: 'PC explodiu'
                }
                reject(resposta);
            }
            resposta = {
                0: {id: 1, nome: 'jose'},
                1: {id: 1, nome: 'joao'},
                2: {id: 1, nome: 'mateus'}
            };
            resolve(resposta);//Esse resolve passa seus valores como parâmetro para o próximo then
        }, 4000);
    }).then((dados) => {//esse aqui
        console.log(dados);
    }).catch(erro => {
        console.log(erro);
    });;
}).then(() => {
    console.log("then 2");
    return resposta;
}).then(param => {
    console.log(param);
}).catch((erro => {
    console.log("erro enviado na promise reject");
}));
console.log(promessa);
 