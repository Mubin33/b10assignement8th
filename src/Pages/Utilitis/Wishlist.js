const searchWishItem=()=>{
    let have = localStorage.getItem('wish')
    if(have){
        return JSON.parse(have)
    }else{
        return []
    }
}

const addedToWish=(id)=>{
    let have = searchWishItem()
    if(have.includes(id)){
        alert("already added")
    }else{
        have.push(id)
        localStorage.setItem('wish', JSON.stringify(have))
    }
}

const removeWishItem=(id)=>{
    let have = searchWishItem() 
    let filtering = have.filter(item =>   item.product_id !== id.product_id)
    localStorage.setItem('wish', JSON.stringify(filtering))
}

export {searchWishItem, addedToWish,removeWishItem}