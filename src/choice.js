function choice(arr){
   let randIx = Math.floor(Math.random() * arr.length)
   return arr[randIx]
}
export default choice
