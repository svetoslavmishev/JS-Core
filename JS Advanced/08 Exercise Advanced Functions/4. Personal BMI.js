function personalBmi(name, age, weight, height) {
    let patient = {
        name: name,
        personalInfo: {age: age, weight: weight, height: height},
        BMI: Math.round(weight / Math.pow(height / 100, 2)),
    };

    let bmi = patient.BMI;

    if (bmi < 18.5) {
        patient.status = 'underweight';
    } else if (bmi < 25) {
        patient.status = 'normal';
    } else if (bmi < 30) {
        patient.status = 'overweight';
    } else if (bmi >= 30) {
        patient.status = 'obese';
    }

    if (patient.status === 'obese') {
        patient['recommendation'] = 'admission required';
    }

    return patient;
}

console.log(personalBmi('Honey Boo Boo', 9, 57, 137));
