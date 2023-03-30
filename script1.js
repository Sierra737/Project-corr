
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

     let team ={};

     for(let i=0; i<staffNames.length; i++){

        team[i]={};
        team[i].name=staffNames[i];
        team[i].position=arrPosit[i];

     }
     
     return team;
}
    

    
  //встановлюємо зарплатню
function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
}
  

function setSalary() {
    
    let lowered=[];
    let myTeam=createTeam();

 for(let i=0; i<staffNames.length; i++){
     lowered[i]=arrPosit[i].toLowerCase();
         

    if (lowered[i].indexOf('junior')===0)
       {myTeam[i].salary=getRandomInt(500,1000);}
         else if (lowered[i].indexOf('middle')===0)
                 {myTeam[i].salary=getRandomInt(1500,2000);}
                 else if (lowered[i].indexOf('senior')===0)
                         {myTeam[i].salary=getRandomInt(2500,3000);}
                         else {myTeam[i].salary=getRandomInt(4000,4500);}
  }
 
 console.log(`My whole staff object is:`)
 console.log(myTeam);

 return(myTeam);
 
}

//інформація про кожного користувача

function tellAboutYou() {
 
    let team=setSalary();

 
    console.log(`Telling about each worker:`)
    for(let i=0; i<staffNames.length; i++){
      team[i].tellAboutYourSelf=function(){console.log(`My name is ${team[i].name} and I am-${team[i].position}.I earn ${team[i].salary}\$`)};
      team[i].tellAboutYourSelf();
    }
    
    return(team);
}



function showAll(){

let team=tellAboutYou();

team.showTeam = function() {
    console.log(`All information about staff:`)
    for(let i=0; i<staffNames.length; i++){
        console.log(`${team[i].name}-${team[i].position}.Salary ${team[i].salary}\$`)}
    }

team.showTeam();  
  
}

 showAll();


 