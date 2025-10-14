class MathUtils {

    static sum(...numbers){
        let total = 0
        for(const number of numbers){
            total += number
        }
        return total
    }
}

const result = MathUtils.sum(1,1,1,1,1,)
console.log(result)

