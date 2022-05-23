function grow(x){
    let array = x[0]
    for (let i= 1; i < x.length; i++){
        array = array * x[i]
    }
    return array
}