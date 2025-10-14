// class MathUtils {

//     static sum(...numbers){
//         // debugger;
//         if(numbers.length === 0){
//             throw new Error("angka tidak boleh kuarng dari satu atau harus lebuh dari 0")
//         }


//         let total = 0
//         for(const number of numbers){
//             total += number
//         }
//         return total
//     }
// }



// try{
//     console.log(MathUtils.sum())
//     console.log("umay")
// }catch(error){
//     console.error(`terjadi error ${error.message}`)
// } finally{
//     console.log("program selesai")
// }

// console.log("kocak")

class Counter {


    #counter = 1

    next(){
        try{
            return this.#counter
        } finally{
            this.#counter++
        }
    }
}

const Counters = new Counter()
console.log(Counters.next())
console.log(Counters.next())
console.log(Counters.next())
console.log(Counters.next())



