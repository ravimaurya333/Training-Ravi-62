//question-1

let student1={
    name : "Ravi",
    age : 20
}

student2=student1

student2.name="surya"

console.log(student1)    //{ name: 'surya', age: 20 }
console.log(student2)   //{ name: 'surya', age: 20 }

//when we change student 2 's name it also change student 1 's name because student 2 object directly pointing to student1 's address;


//question 2

let emp={
    name:"alex",
    dept:"marketing"
}

let emp2={...emp}

emp2.dept="sales";

console.log(emp)    //{ name: 'alex', dept: 'marketing' }
console.log(emp2)   //{ name: 'alex', dept: 'sales' }


//because of shallow copy ... when we create new object emp2 it copies all data from emp




//Question 3

let person={
    name:"ravi",
    address :{
        city:"vadodara",
        pincode : 391243
    }
};

let person1={...person}

person1.address.city="jaipur"
console.log(person.address.city)
console.log(person1.address.city)

// when we use spread operator on it will make only outer copy so if we change nested copy so it point to address so it will change



// Question4
let person2=structuredClone(person)

person2.address.city="ahmedabad"
console.log(person2.address.city)  //ahmedabad

//when we use deepcopy then it makes copy of every object so changes in copy objects will not change the main object




//Question 5

let acc={
    name:"ravi",
    balance:432,
    amount:50,
    deposit:function(){
            this.balance=(this.balance+this.amount)
            console.log("After transaction"+this.balance)
    },
    withdraw:function(){
        this.balance=(this.balance-this.amount)
        console.log("After withdrawal "+this.balance)
    }
}

acc.deposit()
acc.withdraw()


