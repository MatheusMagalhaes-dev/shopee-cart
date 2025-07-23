// quais ações meu carrinho pode fazer

// cassos de uso
// -> adc item
async function addItem(userCart, item) {
    userCart.push(item);
}

// -> calcula o total
async function calculeTotal(userCart) {
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0)
    console.log(`\n Total: ${result}`);
}
// -> excluir item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}
// -> remover um item
async function removeItem(userCart, item) {
    // encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //caso nao encontre o item
    if (indexFound == -1){
        console.log("item não encontrad");
        return;
    }

    //item > 1 subtrair um item, item = 1 deletar o item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return
    }

    if (userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
    }
    }

// -> mostrar o carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index ) =>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}X | Subtotal ${item.subtotal()}`)
    })
}


export {
    addItem,
    calculeTotal,
    deleteItem,
    removeItem,
    displayCart
}


