import { ref } from 'vue'
const data = ref()
const api = 'https://fakestoreapi.com/products';
function getData(){
    fetch(api)
        .then(res=>res.json())
        .then(json=>{
            data.value = json; 
            return  data.value
        })
        console.log(data.value);
        
}
export default getData