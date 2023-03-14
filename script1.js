
let arrPosit= ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];


// отримуємо імена для співробітників

function getStaffNames() {
    let arrNames=[];
    for (let i = 0; i < arrPosit.length; i++) {
        arrNames[i]=prompt('Insert employee name:');
           if(!arrNames[i]) 
              {alert('empty record!');
                break;
              }
        }
    
      return arrNames;
}
let staffNames=getStaffNames(); 

// створюємо команду

function createTeam() {

    console.log(`Names of the staff are:`);
   console.log(staffNames);
   console.log(`Positions names are:`)
   console.log(arrPosit);
 
     let team ={};

     for(let i=0; i<staffNames.length; i++){

     team[`number${i+1}`]={};
     team[`number${i+1}`].name=staffNames[i];
     team[`number${i+1}`].position=arrPosit[i];

     }
     console.log(`My staff object is:`);
     console.log(team);
     
     return team;
}
    
createTeam();
    
  //встановлюємо зарплатню
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  

 function setSalary() {
    let a= {};
    let lowered=[];
 for(let i=0; i<staffNames.length; i++){
     lowered[i]=arrPosit[i].toLowerCase();
      
     a[`number${i+1}`]={};
     a[`number${i+1}`].name=staffNames[i];
     a[`number${i+1}`].position=arrPosit[i];

  if (lowered[i].indexOf('junior')===0)
 {a[`number${i+1}`].salary=getRandomInt(500,1000);}
 else if (lowered[i].indexOf('middle')===0)
 {a[`number${i+1}`].salary=getRandomInt(1500,2000);}
 else if (lowered[i].indexOf('senior')===0)
 {a[`number${i+1}`].salary=getRandomInt(2500,3000);}
 else {a[`number${i+1}`].salary=getRandomInt(4000,4500);}
 }
 
 console.log(`My staff object with salaries is:`)
 console.log(a);

 return(a);
 
}

//інформація про кожного користувача

function tellAboutYou() {
 
    let team3=setSalary();

 
console.log(`Telling about each worker:`)
  for(let i=0; i<staffNames.length; i++){
  team3[`number${i+1}`].tellAboutYourSelf=function(){console.log(`My name is ${team3[`number${i+1}`].name} and I am-${team3[`number${i+1}`].position}.I earn ${team3[`number${i+1}`].salary}\$`)};
  team3[`number${i+1}`].tellAboutYourSelf();
 }
 
return(team3);
}



function showAll(){

let team1=tellAboutYou();


team1.showTeam = function() {
    console.log(`All information about staff:`)
  for(let i=0; i<staffNames.length; i++){
    console.log(`${team1[`number${i+1}`].name}-${team1[`number${i+1}`].position}.Salary ${team1[`number${i+1}`].salary}\$`)}
   }
   team1.showTeam();  
  
}

 showAll();


 