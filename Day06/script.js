let Marks=75;

if(Marks>80){
    console.log('grade a');
}
else if(Marks>60){
    console.log('grade b');
}
else {
    console.log('grade c');
}


let day=3;
switch(day){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('thursday');
        break;
    case 4:
        console.log('wednsday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('satursday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('invalid day');
}


let number=8;
for(let i=1;i<=10;i++){ 
    console.log("number X",i,"=",i*number);
}

let student="mrudula";
let id=2500040252;
let department="ECE";
let yearofStudy=1;
let college="KLU";

console.log("Name:",student);
console.log("ID:",id);
console.log("Department:",department);
console.log("Year of Study:",yearofStudy);
console.log("College:",college);

function checking(){
    for(let i=0;i<=10;i++){
        if(i%2==0){
            console.log("Even");
        }
        else{
            console.log("Odd");
        }
    }

}
checking();


