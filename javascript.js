function Integer(array, B){
    
    let c = array.length 
   
    for (let i =0; i<c; i++){
        
        for(let j=0; j<c; j++){
            if(array[i] + array[i+j] === B){
                console.log(`(${array[i]}, ${array[j]})`)
            }
        }
    }
    
}


let Target = 9

let array = [2 , 3 , 5 ,7 ,9];
Integer(array, Target)
