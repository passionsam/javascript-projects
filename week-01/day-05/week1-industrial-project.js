/*
============================================
JavaScript Software Engineering Mentorship

week : 1
day  : 5

Project : 
Student Academic Management System

student :
Samuel owora Chukwu
============================================
*/


// Student Information 
const studentName = "Excel Chukwu";
const level = "SSS 2";

let totalScore;
let averageScore;
let grade;
let result;

// Five Subject Scores
const englishScore = 70;
const mathematicsScore = 90;
const physicsScore = 66;
const chemistryScore = 82;
const biologyScore = 48;


function calculateTotal(englishScore,mathematicsScore,physicsScore,chemistryScore,biologyScore){
    return englishScore + mathematicsScore + physicsScore + chemistryScore + biologyScore;
}

function calculateAverage(totalScore , numberOfSubjects) {
    return totalScore / numberOfSubjects;
    
}

function calculateGrade(averageScore){
    if(averageScore >= 90) {
        return "A";
    } else if(averageScore >= 80) {
        return "B";
    } else if(averageScore >= 70) {
        return "C"
    } else if(averageScore >= 60) {
        return "D";
    } else if(averageScore >= 50) {
        return "E";
    } else if(averageScore >= 0) {
        return "F";
    } else {
        return "Invalide Score"
    }
}
 
function determineResult(averageScore, attendance){
    if(averageScore >= 50 && attendance >= 75){
        return "Pass";
    } else {
        return "Fail"
    } 
}

function generateReport(){
    console.log(`
        Student's Name :  ${studentName}
        Level          :  ${level}
        Total          :  ${totalScore}
        Average        :  ${averageScore}
        Grade          :  ${grade}
        Result         :  ${result}
        `);
}



totalScore = calculateTotal(englishScore,mathematicsScore,physicsScore,chemistryScore,biologyScore);
averageScore = calculateAverage(totalScore,5);
grade = calculateGrade(averageScore);
result = determineResult(averageScore,75);
generateReport();