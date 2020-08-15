//  thing is that function er vitore kisu declare korle shetake function er vitor thekei console korte hobe baire theke korle error dibe
// abar kno variable jodi function er baire declare kori shetake function er vitor baire 2 jayga thekei access kora jabe it is called global variable



const name = "kuddos"


function add(num1 , num2){
    const result = num1 + num2;
    console.log("name inside", name);
    function double(num){
        return num * 2;
    }
    const total = double(result);
    return result;
}

console.log("name outside", name);
const sum = add(13, 15);
console.log(sum);
