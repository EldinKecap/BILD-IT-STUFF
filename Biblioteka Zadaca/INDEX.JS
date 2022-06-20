class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Book {
    constructor(writer,name){
        this.writer = writer;
        this.beingRented = false;
        this.name = name;
    }
    rentBook(userName){
        this.beingRented = true;
        this.userThatRented = userName ;
    }
    bookReturned(userName){    
            if(this.userThatRented===userName&&this.beingRented===true){
                this.beingRented = false;
                this.userThatRented = '';
            }else{
                console.log('Not the user that rented the book');
            }   
    }    
}
class Writer extends Person{
    numberOfBooks;
    constructor(firstName,lastName,numberOfBooks){
        super(firstName,lastName);
        this.numberOfBooks = numberOfBooks;
    }
}
class User extends Person{
    static numberOfUsers = 1;
    ID;
    #password;
    constructor(firstName,lastName,password){
        super(firstName,lastName);
        this.ID = User.numberOfUsers ;
        User.numberOfUsers++;
        this.setPassword(password)
    }
    setPassword(password){
        if(!/\s/g.test(password)&&password.length > 3){
            this.#password = password;
        }else {
            console.log('Password too short or contains spaces');
        }
    }
    getPassword(){
        return this.#password;
    }
    getUsername(){
        return 'ID:'+this.ID+' Name:'+this.firstName
    }
}
const BAZAPODATAKA = {
    KORISNICI:[],
    KNJIGE:[],
    findBookAndRentIt(bookName,userName){
        for (let i = 0; i < this.KNJIGE.length; i++) {
            const book = this.KNJIGE[i];
            if (book.name === bookName) {
                book.rentBook(userName);
                return;
            }
        }
        console.log('Book Not Found')
    },
    returnBook(bookName,userName){
            for (let i = 0; i < this.KNJIGE.length; i++) {
                const book = this.KNJIGE[i];
                if (book.name === bookName && book.userThatRented === userName) {
                    book.bookReturned(userName);
                    return;
                }
            }
            console.log('Book Not Found')
    },
    checkPassword(UserID,password){
       for (let i = 0; i < BAZAPODATAKA.KORISNICI.length; i++) {
        const {ID} = BAZAPODATAKA.KORISNICI[i];
        if (ID === UserID && password === BAZAPODATAKA.KORISNICI[i].getPassword()) {
            console.log('User identity confirmed');
            return true
        }
       }
       return false
    }
};

let korisnik = new User('Chris','Nolan','12323');
BAZAPODATAKA.KORISNICI.push(korisnik);

let pisac = new Writer('Branko','Copic',123);
let knjiga = new Book(pisac,'Bulke pored pruge');
BAZAPODATAKA.KNJIGE.push(knjiga);

BAZAPODATAKA.findBookAndRentIt('Bulke pored pruge',BAZAPODATAKA.KORISNICI[0].getUsername());
BAZAPODATAKA.returnBook('Bulke pored pruge',BAZAPODATAKA.KORISNICI[0].getUsername())
// BAZAPODATAKA.checkPassword(1,'12323');
console.log(knjiga);