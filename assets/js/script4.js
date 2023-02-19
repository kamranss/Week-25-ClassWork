class Calculation {
    
    // constructor(m){
    //   plus(m,10).minus(m,21).multiple(m,2).divide(m,2)
    // }
    
    // constructor(m,n){
    //     return this.num1
    // }

    plus(m,n){
       let num1 =  m+n;
       return this.num1;
    }
    minus(m, n){
        let num1 =  m-n;
        return this.num1;
    }
    multiple(m, n){
        let num1 =  m*n;
        return this.num1;
    }
    divide(m, n){
        let num1 =  m/n;
        return this.num1;
    }
}



let num = 50;
// num = new Calculation(num)
num = new Calculation(num).plus(num,10).minus(num,21).multiple(num,2).divide(num,2)
// num = new Calculation().minus(num,21)
// num = new Calculation().multiple(num,2)
// num = new Calculation().divide(num,2)

console.log(num);