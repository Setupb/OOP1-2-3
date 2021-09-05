class Worker {
    constructor(fullName, dayRate,workingDays) {
    this.workingDays = workingDays;
    this.dayRate = dayRate;
    this.fullName = fullName;
  } 
    showSalary(){
        var salary = this.dayRate * this.workingDays;
        console.log(salary);
        return salary;
    }
    setExperience(exp){
        this.exp = exp;
    }
    getExperience(){
        console.log(this.exp);
    }
    showNewSalary(){
        return this.exp * (this.dayRate*this.workingDays);
    }
    
   
}
let a = new Worker("Radjesh Cutrapalle", 200, 20);
//a.showSalary();
//a.setExperience(1.5);
//a.getExperience();

//console.log(a.getExperience());
//console.log(a.showNewSalary());
let worker1 = new Worker("Leo Hofstader",400,21);
let worker2 = new Worker("Hovard Volovitz",300,21);
let worker3 = new Worker("Sheldon Cuper",400,21);

worker1.setExperience(1.5);
worker2.setExperience(1.2);
worker3.setExperience(1.1);
console.log(worker1.showNewSalary());
console.log(worker2.showNewSalary());
console.log(worker3.showNewSalary());


let listOfSalary={};

listOfSalary[worker1.fullName] = worker1.showNewSalary();
listOfSalary[worker2.fullName] = worker2.showNewSalary();
listOfSalary[worker3.fullName] = worker3.showNewSalary();
console.log(listOfSalary);


var sortSalary= {};
let sortable = [];
for (var i in listOfSalary) {
    sortable.push([i, listOfSalary[i]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});
console.log(sortable);
sortable.forEach(function(i){
    sortSalary[i[0]] = i[1];
});
console.log(sortSalary);
for(var i in sortSalary){
    console.log(i,"salary:",sortSalary[i]);
}
console.log(worker1.showNewSalary());
console.log(worker3.showNewSalary());










