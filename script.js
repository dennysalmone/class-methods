class MyArray {
    arrLength = 0;
    object = {};
    push(...data){
        let args = data.flat(1);
        for (let i=0; i<args.length; i++) {
            this.object[this.arrLength] = args[i]
            this.arrLength++
        }
    };
    getByIndex(index){
        return this.object[index];
    };
    forEach(callback) {
        for (let i=0; i < this.object.length; i++) {
            callback(this.object[i], i, this)
        }
    }
    deleteByIndex(index){
        for (let i=index; i<this.arrLength; i++) {
            this.object[i] = this.object[i+1]
        }
        this.arrLength--
        delete this.object[this.arrLength-1];
    };
    filter (callback) {
        let result = new MyArray();
        for (let i=0; i<this.object.length; i++) {
            if(callback(this.object[i], i, this)) {
                result.object.push(callback(this.object[i], i, this))
                result.arrLength++                
            }
        }
        return result;
    }
    map (callback) {
        let result = new MyArray();
        for (let i=0; i<this.object.length; i++) {
            result.object.push(callback(this.object[i], i, this))
            result.arrLength++
        }
        return result;
    }
    pop(){
        if(this.arrLength>0) {
            this.arrLength--
            return delete this.object[this.arrLength];
        }
    };
}

const array = new MyArray ()
array.push('shot', 'who', 'long word', 'very long word', 'Putin')

