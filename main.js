class Worker{
    constructor(name, surname, hourRate, hours){
        this._name = name;
        this._surname = surname;
        this._hourRate = hourRate;
        this._hours = hours;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    getHourRate() {
        return this._hourRate;
    }

    getHours() {
        return this._hours;
    }

    getSalary() {
        this.salary = this._hourRate * this._hours;
        return this.salary;
    }

    getHighestSalary() {
        this.workers = [worker, worker2, worker3];
        this.workers.forEach(employee => {
            if (employee.getSalary() === Math.max(worker.getSalary(), worker2.getSalary(), worker3.getSalary())) {
                this.data = {'name': employee.getName(), 'salary': employee.getSalary()}
            }
        })
        this.result = 'Name: ' + this.data.name + '\n' + '\nSalary: ' + this.data.salary
        return this.result
    }

    increaseHourRate(newHourRate) {
        this._hourRate += newHourRate
        return this._hourRate
    }

    setTax(percent) {
        this.percent = percent
        return this.percent
    }

    getSalaryNetto() {
        this.getSalary()
        this.salary -= this.salary * (this.percent / 100)
        return this.salary

    }

    getCompleteData() {
        this.workers = [worker, worker2, worker3];
        this.workers.forEach(worker => {
            console.log(worker.getName())
            console.log(worker.getSurname())
            console.log(worker.getHourRate())
            console.log(worker.getHours())
            console.log(worker.getSalaryNetto())
            console.log('\n')
        })
    }

}
const worker = new Worker('Ion', 'Creangă', 10, 176);
const worker2 = new Worker('Eugen', 'Ciobanu', 14, 72);
const worker3 = new Worker('Andrei', 'Ursu', 18, 120);

console.log(worker.getHighestSalary())
worker.increaseHourRate(2); //mărește hourRate cu 2
worker.setTax(18); //setează impozitul pe salariu la 18%
worker2.setTax(20);
worker3.setTax(15);
worker.getSalaryNetto(); //afișează 2112 – 18% = 1731.84
worker.getCompleteData()