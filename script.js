class MyArray {
    lengthArray = 0;
    currentObj = {};
    push(...data){
        let args = data.flat(1);
        for (let i=0; i<args.length; i++) {
            this.currentObj[this.lengthArray] = args[i]
            this.lengthArray++
        }
    };
    getByIndex(index){
        return this.currentObj[index];
    };
    forEach(callback) {
        let res = [];
        let values = Object.values(this.currentObj)
        for (let i=0; i<values.length; i++) {
            res.push(callback(values[i]))
        }
        return res;
    }
    deleteByIndex(index){
        for (let i=index; i<this.lengthArray; i++) {
            this.currentObj[i] = this.currentObj[i+1]
        }
        this.lengthArray--
        delete this.currentObj[this.lengthArray-1];
        return;
    };
    filter (callback) {
        let res = [];
        let values = Object.values(this.currentObj)
        for (let i=0; i<values.length; i++) {
            if(callback(values[i])) {
                res.push(values[i])
            }
        }
        return res
    }
    pop(){
        if(this.lengthArray>0) {
            this.lengthArray--
            return delete this.currentObj[this.lengthArray];
        } else {return undefined;}
    };
}



function shortWord(word) {
    let a = toString(word)
    if (a.length <=5) {
        return false;
    }
    if (a.length >=6) {
        return true;
    }
}  

const array = new MyArray ()
array.push('shot', 'suck', 'long word', 'very long word', 'gg', 1)
console.log(array.filter(shortWord))
console.log(array.forEach(shortWord))