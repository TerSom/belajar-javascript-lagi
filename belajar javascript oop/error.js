class MathUtils {

    static sum(...numbers){
        // debugger;
        if(numbers.length === 0){
            throw new Error("angka tidak boleh kuarng dari satu atau harus lebuh dari 0")
        }


        let total = 0
        for(const number of numbers){
            total += number
        }
        return total
    }
}

console.log(MathUtils.sum())
console.log("umay")

const result = MathUtils.sum(1,1,1,1,1,)
console.log(result)

