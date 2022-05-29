let fs = require('fs');
let allNames = fs.readFileSync('./employees.txt','utf8').split('\r\n');
allNames.length = 10;
// console.log(allNames);
let BazaPodataka = {
    BANKS:[],
    PEOPLE:[],
    addPeople(person){
        this.PEOPLE.push(person);
    },
    addBank(bank){
        this.BANKS.push(bank);
    }
}
function createBank(ID,name,location) {
    return{
        ID,
        name,
        location,
        accounts : [],
        transactions:[],
        NEXTACCID:1,
        createAccount(person){
            let account = Account(this.NEXTACCID,person.firstName+' '+person.lastName,this.name);//OVDJE SAM STAO
            this.accounts.push(account);
            this.NEXTACCID++;
        },
        deleteAccount(ID){
           for (let i = 0; i < this.accounts.length; i++) {
               if(ID == this.accounts[i].ID){
                   this.accounts.splice(i,1);
               }
           }
        },
        executeTransaction(transaction){
            switch (transaction.type) {
                case 'DEPOSIT':
                    for (let i = 0; i < this.accounts.length; i++) {
                       if(this.accounts[i].ID===transaction.account.ID){
                           this.accounts[i].deposit(transaction.amount)
                        //    console.log(transaction);
                           this.transactions.push(transaction);
                           return this.accounts[i] 
                       }
                    }
                    break;
                    case 'WITHDRAW':
                        for (let i = 0; i < this.accounts.length; i++) {
                            if(this.accounts[i].ID===transaction.account.ID){
                                this.accounts[i].withdraw(transaction.amount)
                                this.transactions.push(transaction);
                                return this.accounts[i] 
                            }
                         }
                    break;
                case 'BALANCE_CHECK':
                    for (let i = 0; i < this.accounts.length; i++) {
                        if(this.accounts[i].ID===transaction.account.ID){
                            this.accounts[i].checkBalance(transaction.amount)
                            this.transactions.push(transaction); 
                            return this.accounts[i]
                        }
                     }
                    break;
            
                default:
                    return 'Greska. Pogresan tip'
                    break;
            }
        }
        // deposit:function(){},
        // withdraw:function(){},
        // checkBalance:function(){},
    }
}

function createPerson(ID,firstName,lastName,JMBG) {
    return {
        ID,
        firstName,
        lastName,
        JMBG,
    }
}

function Account(ID,owner,bank) {
    return{
        ID,
        owner,
        bank,
        balance : 0,
        deposit(Input){
            this.balance+=Input;
        },
        withdraw(Input){
            if (this.balance - Input >= 0) {
                this.balance -= Input;
                console.log(`Uspjesno ste podigli ${Input}`);        
            }else{
                console.log(`Nemate dovoljno sredstava na racunu`);
            }
        },
        checkBalance(){
            console.log(`Iznos na vasem racunu je ${this.balance}`);
        }
    }
}

function createTransaction(ID,account,person,amount = 0,typeA) {
    return{
        ID,
        account,
        person,
        amount,
        type: checkType(typeA),
        }
}    


function checkType(typeInput){
    // console.log(typeInput);
    switch (typeInput) {
        case 'DEPOSIT':
            return 'DEPOSIT'
            break;
            case 'WITHDRAW':
                return 'WITHDRAW'
            break;
        case 'BALANCE_CHECK':
            return 'BALANCE_CHECK'
            break;
    
        default:
            return 'Greska. Pogresan tip'
            break;
    }
}

function generateJMBG() {
    let JMBG = '';
        for (let j = 0; j < 13; j++) {
            JMBG+=Math.floor(Math.random()*10);
        }
        return JMBG;
}
//Kreiranje ljudi i dodavanje u Bazu Podataka
skip:
for (let i = 0; i < allNames.length; i++) {
    const element = allNames[i].split(' ');
    let person = createPerson(i+1,element[0],element[1],generateJMBG());       
        for (let i = 0; i < BazaPodataka.PEOPLE.length; i++) {
            if (person.JMBG === BazaPodataka.PEOPLE[i].JMBG) {
                i--;
                continue skip;
            }
        }
        BazaPodataka.addPeople(person);    
    
}
function randomAccCreator(bank,people,numOfAcc) {
    let i = 0;
    while(i!=numOfAcc){
            let random = Math.floor(Math.random()*BazaPodataka.PEOPLE.length);
            // console.log(random);
            bank.createAccount(people[random]);
            i++;
        }
}

// console.log(BazaPodataka.PEOPLE);
let bankOFAmerica = createBank(1,'BankOfAmerica','America');
randomAccCreator(bankOFAmerica,BazaPodataka.PEOPLE,Math.floor(BazaPodataka.PEOPLE.length*0.4));

// let transaction = createTransaction(1,'DEPOSIT',1,1,123);
// console.table(bankOFAmerica.accounts)
let transaction = createTransaction(1,bankOFAmerica.accounts[1],bankOFAmerica.accounts[1].owner,1233,'DEPOSIT');
let transaction2 = createTransaction(1,bankOFAmerica.accounts[0],bankOFAmerica.accounts[0].owner,1233,'BALANCE_CHECK');

bankOFAmerica.executeTransaction(transaction)
bankOFAmerica.executeTransaction(transaction2)
console.table(bankOFAmerica.transactions[1].person)
console.table(bankOFAmerica.transactions[0].person)//Ovdje sam stao sad transakcije naguro u banku da prati u transakcije array

// console.log(transaction)
