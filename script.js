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
        let result = new MyArray();
        let values = Object.values(this.currentObj)
        for (let i=0; i<values.length; i++) {
            result.push(callback(values[i]))
        }
        this.currentObj = result.currentObj;
        return undefined;
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
        let result = new MyArray();
        let values = Object.values(this.currentObj)
        for (let i=0; i<values.length; i++) {
            if(callback(values[i])) {
                result.push(values[i])
            }
        }
        return result.currentObj;
    }
    map (callback) {
        let result = new MyArray();
        let values = Object.values(this.currentObj)
        for (let i=0; i<values.length; i++) {
            result.push(callback(values[i]))
        }
        return result.currentObj;
    }
    pop(){
        if(this.lengthArray>0) {
            this.lengthArray--
            return delete this.currentObj[this.lengthArray];
        } else {return undefined;}
    };
}



function shortWord(word) {
    let curWord;
    if (typeof word !== 'string') {
        curWord = toString(word);
    } else {
        curWord = word;
    }
    if (curWord.length <=5) {
        return false;
    }
    if (curWord.length >=6) {
        return true;
    }
}  

function makeUpperCase(string) {
    let text;
    if (typeof string !== 'string') {
        text = toString(string);
    } else {
        text = string;
    }

    return text.toUpperCase();
}

const array = new MyArray ()
array.push('shot', 'suck', 'long word', 'very long word', 'gg', 1222222)
console.log(array.filter(shortWord))
console.log(array.forEach(shortWord))
console.log(array.map(makeUpperCase));

