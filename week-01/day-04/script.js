/*
============================================
JavaScript Software Engineering Mentorship

week : 1
day  : 4

Project : 
Smart Student Result System

student :
Samuel owora Chukwu
============================================
*/


//Student Information
const name = "Daniel Prosper";
const level = "SSS 2";

let grade;
let result;


//Five Subject Scores
const englishScore = 70;
const mathScore = 90;
const physicsScore = 66;
const chemistryScore = 82;
const biologyScore = 48;

const totalSubject = 5;
const totalScore = englishScore + mathScore + physicsScore + chemistryScore + biologyScore;
const averageScore = totalScore / totalSubject;


const attendance = 80;

if (averageScore  >= 90 && averageScore  <= 100) {
    grade = "A";
} else if (averageScore  >= 80 && averageScore  <= 89) {
    grade = "B";
} else if (averageScore  >= 70 && averageScore  <= 79) {
     grade = "C"
} else if (averageScore  >= 60 && averageScore  <= 69) {
    grade = "D";
} else if (averageScore  >= 50 && averageScore  <= 59) {
        grade = "E";
} else {
    grade = "F";
}

if (averageScore >= 50 && attendance >= 75){
    result = "Pass";   
} else {
    result = "Fail";
}


console.log(`
    ============================================
            STUDENT RESULT REPORT
    ============================================

    Student :    ${name}
    Class   :    ${level}

    --------------------------------------------
    English     :    ${englishScore}
    Mathematics :    ${mathScore}
    Physics     :    ${physicsScore}
    Chemistry   :    ${chemistryScore}
    Biology     :    ${biologyScore}
    
    -------------------------------------------
    Total       :    ${totalScore}
    Average     :    ${averageScore}
    Grade       :    ${grade}
    Attendance  :    ${attendance}

    Result      :    ${result}
    
    `);
