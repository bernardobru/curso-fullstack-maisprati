//constrói um objeto
//this é referencia a classe
class Item {
    constructor (date, item, quantity, value) {
        this.date = date;
        this.item = item;
        this.quantity = quantity;
        this.valor = value;
    }
    validateData() {
        for (let i in this) {        
            if (this[i] === undefined || this[i] === '') {
                return false;
            }
        }        
        return true;
    }
}
/* Back-end */
class Database { 
    constructor() {
        const id = localStorage.getItem('id');
        if (id === null) {
            localStorage.setItem('id', 0);
        }
    }
    createItem(item) {
        const id = getNextId();
        localStorage.setItem(id, JSON.stringify(item));
        localStorage.setItem("id", id);
    }
    getItems() {
        const items = [];
        const id = localStorage.getItem('id');
        for (let i = 1; i <= id; i++) {
            const item = JSON.parse(localStorage.getItem(i));
            if (item === null) {
                continue;
            }
            item.id = i;
            items.push(item);
        }
        return items;
    }
    deleteItem(id) {
        localStorage.removeItem(id);
    }
    searchItems(items) {    
        let filteredItems = new Array();
        filteredItems = this.getItems();
        if(items.date !== '') {
            filteredItems = filteredItems.filter(i => i.date === items.date);
        }
        if(items.item !== '') {
            filteredItems = filteredItems.filter(i => i.item === items.item);
        }
        if(items.quantity !== '') {
            filteredItems = filteredItems.filter(i => i.quantity === items.quantity);
        }
        if(items.valor !== '') {
            filteredItems = filteredItems.filter(i => i.valor === items.valor);
        }
        return filteredItems;
    }
} 
/* Front-end */
const database = new Database();
function getNextId() {
    //Pega a chave 'id'
    const nextId = localStorage.getItem('id');
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
    onclick = window.location.reload();
}
function loadItems(items) {
     if(items === undefined) {
        items = database.getItems()
    } 
    const listItems = document.getElementById('listItems');
    listItems.innerHTML = '';
    items.forEach((items) => {
        const row = listItems.insertRow();
        row.insertCell(0).innerHTML = items.date;
        row.insertCell(1).innerHTML  = items.item;
        row.insertCell(2).innerHTML = items.quantity;
        row.insertCell(3).innerHTML = `R$ ${items.valor}`;
        const button = document.createElement('button');
        button.id = items.id;
        button.innerHTML = 'Excluir item do estoque';
        button.onclick = () => {
            const id = items.id;
            database.deleteItem(id);
            window.location.reload();
        }
        row.insertCell(4).append(button);
    });
} 
function searchItems() {
    const date = document.getElementById('data-pesq').value;
    const item = document.getElementById('item-pesq').value;
    const quantity = document.getElementById('qtd-item-pesq').value;
    const value = document.getElementById('valor-pesq').value;
    const itemSearch = new Item(date, item, quantity, value);
    const items = database.searchItems(itemSearch);
    loadItems(items);
}
//Acessa o DOM e espera um evento acontecer, se o evento de carregar a página acontecer, executa a função callback
document.addEventListener('DOMContentLoaded', () => {
    if(document.body.contains(document.getElementById('listItems'))){
        loadItems();
    }
});
