class Person {
    constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  } 
    showFullName(){
        return this.name + " "+this.surname;
    }
    
}

const stud1 = new Person("Avi","Man");
console.log(stud1.showFullName());




class Student extends Person {
    constructor(name, surname,year) {
    super(name, surname);
    this.year= year;
  } 
    
  showFullName(midleName) {
    console.log(`${this.name} ${this.surname} ${midleName} ${this.year}`);
  }
    showCourse(){
        let newDate = new Date();
        let year = newDate.getFullYear();
        let course =  year - this.year;
        console.log("Current course: ",course);
    }
}

let stud2 = new Student("Rubi","Sma",2020);

console.log(stud2.name); 
stud2.showFullName("11111");
stud2.showCourse();


