function myage(age) {
    return age>=18? true:false
}
runAgain = true
while (runAgain) {
    age = prompt('Enter your age')
    myage(age)
        if (age<0){
            console.error('Enter a valid age')
        }
        if (myage(age)){
            document.write('You can Drive')
        } 
        else{
            document.write('You can not Drive')
        }
        runAgain = confirm('Do you wanna run again?')
  }
  
  