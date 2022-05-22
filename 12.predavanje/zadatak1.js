
let allNames = `Rosa Rose
Sage Turner
Terrence Blackwell
Gisselle Bauer
Enzo Mcdaniel
Gloria Jones
Kennedy Shields
Bradyn Larsen
India Rush`;
allNames = allNames.split('\n');
// console.log(allNames);

function createCompany(ID,name,location,numberOfEmployees,employees){
    this.ID = ID;
    this.name = name;
    this.location = location;
    this.numberOfEmployees = numberOfEmployees;
    this.employees = employees;
    this.hireEmployee = function (unemployedArr,numOfPeople){
        for (let i = 0; i < numOfPeople; i++) {
            let random = Math.floor(Math.random()*(unemployedArr.length-1)+1)
            this.employees.push(unemployedArr[random]); 
            this.employees[i].isEmployed=true;
            this.employees[i].salary = 100*Math.floor(Math.random()*(30-10)+10) ;//NAPRAVI KASNIJE PLATU
            this.employees[i].companyID = this.ID;
            // console.log('lol',this.employees[i].salary,random);
            unemployedArr.splice(random,1);   
            // console.log('lol',unemployedArr)        
        }
    } ;
    this.fireEmployee = function(employeeID){
        for (let i = 0; i < this.employees.length; i++) {
            if(employeeID === this.employees[i].ID){
                this.employees.splice(i,1);
            }            
        }
    };
}
function createPerson(ID,firstName,lastName,isEmployed,salary,companyID){
    this.ID = ID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isEmployed = isEmployed;
    this.salary = salary;
    this.companyID = companyID;
}
function fillPeople(arr,names) {

    for (let i = 0; i < names.length; i++) {
        let fullName = names[i].split(' ');
        // console.log(fullName);
        let person1 = new createPerson(i+1,fullName[0],fullName[1],false,null,null);
        arr.push(person1);
    }
}


let COMPANIES = [];
let PEOPLE = [];

let anarchyCorp = new createCompany(1,'Anarchy Corp','Tuzla',0,[]);
let evilCorp = new createCompany(2,'Evil Corp','London',0,[]);
let umbrellaCorp = new createCompany(3,'Umbrella Corp','Racoon City',0,[]);

fillPeople(PEOPLE,allNames);
// console.log(PEOPLE);
// console.log('ostali',PEOPLE.length);
let numberOfPeopleCapableOfWork = PEOPLE.length;

anarchyCorp.hireEmployee(PEOPLE,Math.floor(PEOPLE.length*0.4));
// console.log(anarchyCorp.employees);
// console.log('ostali',PEOPLE.length);

evilCorp.hireEmployee(PEOPLE,Math.floor(PEOPLE.length*0.33));
// console.log(evilCorp.employees)
// console.log('ostali',PEOPLE.length);
umbrellaCorp.hireEmployee(PEOPLE,Math.floor(PEOPLE.length*0.5));
// console.log('ostali',PEOPLE.length);
// let unemployedProcentage = numberOfPeopleCapableOfWork*(100/PEOPLE.length);
console.log(`Procenat nezaposlenih je ${unemployedProcentage} od ${numberOfPeopleCapableOfWork}`);
// person = new createPerson(11,'sdfsd','sdfadf',true,false,'company');
// console.log(allNames);