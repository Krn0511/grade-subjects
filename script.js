function calculateAverage() {
    const grades = [
        parseFloat(document.getElementById('subject1').value),
        parseFloat(document.getElementById('subject2').value),
        parseFloat(document.getElementById('subject3').value),
        parseFloat(document.getElementById('subject4').value),
        parseFloat(document.getElementById('subject5').value)
    ];

    if (grades.some(isNaN)) {
        document.getElementById('result').textContent = 'Please enter valid grades for all subjects.';
        return;
    }

    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grades.length;

    const letterGrade = getLetterGrade(average);

    document.getElementById('result').textContent = 
        `Average Grade: ${average.toFixed(2)} (${letterGrade})`;
}

function getLetterGrade(grade) {
    if (grade >= 90) return 'A';
    if (grade >= 80) return 'B';
    if (grade >= 70) return 'C';
    if (grade >= 60) return 'D';
    return 'F';
}
