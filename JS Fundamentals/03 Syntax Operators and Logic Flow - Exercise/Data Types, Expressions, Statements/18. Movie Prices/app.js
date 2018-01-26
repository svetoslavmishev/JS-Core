function moviePrice(input) {

    let movie = input[0].toLowerCase();
    let dayOfWeek = input[1].toLowerCase();

    if (movie == "the godfather") {
        switch (dayOfWeek) {
            case "monday": return 12;
            case "tuesday": return 10;
            case "wednesday":
            case "friday": return 15;
            case "thursday": return 12.50;
            case "saturday": return 25;
            case "sunday": return 30;
            default: return "error";
        }
    } else if (movie == "schindler's list") {
        switch (dayOfWeek) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday": return 8.50;
            case "saturday": return 15;
            case "sunday": return 15;
            default: return "error";
        }
    } else if (movie == "casablanca") {
        switch (dayOfWeek) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday": return 8;
            case "saturday":
            case "sunday": return 10;
            default: return "error";
        }
    } else if (movie == "the wizard of oz") {
        switch (dayOfWeek) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday": return 10;
            case "saturday":
            case "sunday": return 15;
            default: return "error";
        }
    } else {
        return "error";
    }
}
console.log(moviePrice(["The Godfather", "Friday"]));
console.log(moviePrice(["casablanca", "sunday"]));
console.log(moviePrice(["Schindler's LIST", "Friday"]));
console.log(moviePrice(["SoftUni", "Nineday"]));
console.log(moviePrice(["Batman", "Sunday"]));
console.log(moviePrice(["casablanca", "Nineday"]));