function constructionCrew(worker) {
    let required = 0.1;
    let experience = worker.experience;
    let weight = worker.weight;

    if (worker.handsShaking === true) {
        worker.bloodAlcoholLevel += required * experience * weight;
        worker.handsShaking = false;
    }

    return worker;
}

constructionCrew(
    {
        weight: 120,
        experience: 20,
        bloodAlcoholLevel: 200,
        handsShaking: true
    }
);
