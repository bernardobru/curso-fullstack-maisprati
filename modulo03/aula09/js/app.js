//constrói um objeto
//this é referencia a classe
class Item {
    constructor (date, item, quantity,value) {
        this.date = date;
        this.item = item;
        this.quantity = quantity;
        this.value = value;
    }
    validateData() {//O this é a representação do objeto construido pela classe
        for (let i in this) {        
            if (this[i] === undefined || this[i] === '') {
                return false;
            }
        }        
        return true;
    }
}
/* Back-end */
class Database {  //JSON é uma string que transmite dados de objetos entre aplicações
    constructor(){//Cria um id automaticamente caso não tenha
        const id = localStorage.getItem('id');
        if (id === undefined || id === null) {
            localStorage.setItem('id', 0);
        }
    }
    createItem(item) {
        const id = getNextId();
        localStorage.setItem(id, JSON.stringify(item));
        localStorage.setItem("id", id);//Serve como se fosse um contador
    }
    getItems() {
        const items = [];
        const id = localStorage.getItem('id');//Pega o 'id'
        for (let i = 1; i <= id; i++) {
            const item = JSON.parse(localStorage.getItem(i));//Transforma em objeto
            if (item === null) {//Se o objeto item for nulo, o loop continua
                continue
            }
            item.id = i; //cria um id para o objeto
            items.push(item);//adiciona o item ao array de itens
        }
        return items
    }
    deleteItem(id) {
        localStorage.removeItem(id);
    }
    searchItems(items) {
        let filteredItems = [];
        filteredItems = this.getItems();
        if (items.date !== '') {
            filteredItems = filteredItems.filter((item) => {//Filtra os itens que sejam iguais às propriedades do objeto
                item.date === items.date;
            });
        }
        if (items.item !== '') {
            filteredItems = filteredItems.filter((item) => {
                item.item === items.item;
            });
        }
        if (items.quantity !== '') {
            filteredItems = filteredItems.filter((item) => {
                item.quantity === items.quantity;
            });
        }
        if (items.value !== '') {
            filteredItems = filteredItems.filter((item) => {
                item.value === items.value;
            });
        }
        return filteredItems;
    }
} 
/* Front-end */
const database = new Database();
function getId() {
    const id = localStorage.getItem('id')
    return id;
}
function getNextId() {
    const nextId = localStorage.getItem('id');//Pega a chave 'id'
    return parseInt(nextId) + 1;
}
function registerItem() {
    const data = document.getElementById('data').value;
    const itemEstoque = document.getElementById('item').value;
    const quantidade = document.getElementById('qtd-item').value;
    const valor = document.getElementById('valor').value;
    const itemNovo = new Item(data, itemEstoque, quantidade,valor);
    if (itemNovo.validateData()) {
        database.createItem(itemNovo);
    }
}
function loadItems(array) {
     if(array === undefined) {//Se for igual a zero, nao está sendo feito pesquisas, então carrega todas as informações
        array = database.getItems()
    } 
    const items = database.getItems();
    const listItems = document.getElementById('listItems');
    listItems.innerHTML = '';
    items.forEach((items) => {
        const row = listItems.insertRow();//Adiciona uma linha da tabela
        row.insertCell(0).innerHTML = items.date;//insere um valor na célula da tabela
        row.insertCell(1).innerHTML  = items.item;
        row.insertCell(2).innerHTML = items.quantity;
        row.insertCell(3).innerHTML = items.value;
        const button = document.createElement('button');//Cria um botão
        button.id = items.id;//O id do botão é igual o id dos objetos do array
        button.innerHTML = 'Excluir item do estoque';//Escreve 'delete' no botão
        button.onclick = () => {//Quando o botão é clicado:
            const id = items.id;//Armazena-se o id do objeto
            database.deleteItem(id);//O item é removido
            window.location.reload();//A janela da um refresh
        }
        row.insertCell(4).append(button);//Adiciona o botão à página; append cria um novo nó no DOM
    });
} 
function searchItems() {
    const date = document.getElementById('data').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('qtd-item').value;
    const value = document.getElementById('valor').value;
    const itemSearch = new Item(date, item, quantity, value);
    const items = database.searchItems(itemSearch);
    loadItems(items);
}
document.addEventListener('DOMContentLoaded', () => {//Acessa o DOM e espera um evento acontecer, se o evento de carregar a página acontecer, executa a função callback
    if(document.body.contains(document.getElementById('listItems'))){
        loadItems();
    }
});
