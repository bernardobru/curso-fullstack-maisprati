//constrói um objeto
//this é referencia a classe
class Item {
    constructor (date, item, quantity, description, value) {
        this.date = date;
        this.item = item;
        this.quantity = quantity;
        this.description = description;
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
    constructor(){
        const id = localStorage.getItem('id');
        if (id === undefined || id === null) {
            localStorage.setItem('id', 0);
        }
    }
    createItem(item) {
        const id = getNextId();
        localStorage.setItem(id, JSON.stringify(item));
        localStorage.setItem("id", id);
    }
} 
/* Front-end */
const database = new Database();
function getNextId() {
    const nextId = localStorage.getItem('id');
    return parseInt(nextId) + 1;
}
function registerItem() {
    const data = document.getElementById('data').value;
    const itemEstoque = document.getElementById('item').value;
    const quantidade = document.getElementById('qtd-item').value;
    const descricao = document.getElementById('descricao').value;
    const valor = document.getElementById('valor').value;
    const itemNovo = new Item(data, itemEstoque, quantidade, descricao, valor);
    if (itemNovo.validateData()) {
        database.createItem(itemNovo);
    }
} 