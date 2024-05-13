/*var loggger = function(output)  {
    console.log(output)
}*/

//Arrow function illustration

/*const logger = (output) => { //youre not going to redefine logger
    console.log(output)
}

export const appName = "ES6 Primer";

export const dummyFunction function () =>   { //youre not going to redefine dummy function
    return "I am a dummy function";
}*/

export const genericFunction = () => { 
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements 
    let [firstLang, secondLang] = languages; //assign first element in languages array to firstLang and second element to secondLang. 
    return `First language is ${firstLang} and the second is ${secondLang}` 
   }

   export default logger;

   export const genericFunction2 = () => { 
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements 
    let [firstLang, secondLang, ...otherLanguages] = languages; //otherLanguages will be equal to ['Java', 'C#', 'C++'] 
    return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLanguages}` 
   } 

   export const genericFunction3 = () => { 
    //declare an object literal 
    let personalInformation = {
        firstName : 'Pius', 
        lastName : 'Onobhayedo', 
        gender : 'Male', 
        religion : 'Christianity (Catholic)', 
        fathersName : 'John', 
        mothersName : 'Patricia' 
        } 
        //deconstruct into new variables firstName, last name and otherPersonalInfo 
        let {firstName, lastName, ...otherPersonalInfo} = personalInformation; 
        
        return `The first name is ${firstName} and the lastName is ${lastName}. Others are: gender = $ {otherPersonalInfo.gender}; religion = ${otherPersonalInfo.religion}; etc.`; 
       }

       export const multiplier = () => {
        return a * blur;
       }