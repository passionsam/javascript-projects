const englishScore = 70;
const mathScore = 90;
const physicsScore = 66;
const chemistryScore = 82;
const biologyScore = 48;

const totalScore = englishScore + mathScore + physicsScore + chemistryScore + biologyScore ;
const averageScore = totalScore / 5;

if(averageScore >= 50){
    console.log(`Student passed`);
}

console.log(`
    English score is     ${englishScore}
    Mathematics score is ${mathScore}
    Physics score is     ${physicsScore}
    Chemistry score is   ${chemistryScore}
    Biology score is     ${biologyScore}

    Total score of the five subject is ${totalScore}
    The average score is ${averageScore}
    `);