const searchCartItem=()=>{
    let have = localStorage.getItem('cart')
    if(have){
        return JSON.parse(have)
    }else{
        return []
    }
}

const addedToCart=(id)=>{
    let have = searchCartItem()
    if(have.includes(id)){
        alert("already added")
    }else{
        have.push(id)
        localStorage.setItem('cart', JSON.stringify(have))
    }
}

const removeCartItem=(id)=>{
    let have = searchCartItem() 
    let filtering = have.filter(item =>   item.product_id !== id.product_id)
    localStorage.setItem('cart', JSON.stringify(filtering))
}


const allRemove=()=>{
    localStorage.removeItem('cart')
}

export {addedToCart, searchCartItem,removeCartItem, allRemove}