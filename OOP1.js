class Student {
  constructor(name, surname, direction) {
    this.name = name;
    this.surname = surname;
    this.direction = direction;
  }
    showFullName(name, surname){
        console.log(this.name," ",this.surname);
    }
    setterDir(direction){
        this.direction = direction;
    }
    getterDir(){
        console.log(this.direction);
    }
    nameIncludes(name){
        if(this.name === name){
            console.log(true);
        }else{
            console.log(false);
        }
    }
    static studentBuilder() {
     let stud5 = new Student("Igor","Kogut","qc");
    return stud5;
  }
}


 


const stud1  = new Student('Ivan', 'Petrenko', 'web');
const stud2  = new Student("Sergiy", "Koval","python");
const stud3  = new Student("Igor","Kogut","qc");



stud3.showFullName();
stud3.getterDir();
stud3.setterDir("IT");
stud3.getterDir();
stud3.nameIncludes("Igor");
stud3.nameIncludes("Ivan");
