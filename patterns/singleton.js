
'use strict';

var instance = null;
class Database {
    // constructor(){
    //     if (!instance) {
    //         instance = this;
    //     }
    //     return instance;
    // }

    static getInstance(){
        if(!instance){
            instance = new Object();
        }
        return instance;
    }
}

let db = Database.getInstance();
console.log(db);