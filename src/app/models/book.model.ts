//Model that represents the data
class Book {
    _id: string;
    title: string;
    author: string;
       
//this creates a blank to do
    constructor(){
        this.title = ""
        this.author = ""
    }
}

export default Book;