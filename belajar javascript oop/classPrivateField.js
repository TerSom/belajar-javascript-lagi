class Counter {

    #counter = 0;

    increment(){
        this.#counter++
    }

    decrement(){
        this.#counter--
    }

    get(){
        return this.#counter
    }
}

const counter = new Counter()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()

counter.decrement()
counter.decrement()

console.log(counter.get())
counter.counter = 100
console.log(counter)