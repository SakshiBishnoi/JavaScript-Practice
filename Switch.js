let grade = "e";

switch  (grade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
    case "C":
        console.log("Average Performace");
        break;
    case "D":
        console.log("Poor Performance");
        break;
    case "F":
        console.log("Fail!");
        break;
    default:
        console.log("No Particiption")
}


let value = 9;

switch (value % 2 === 0) {
    case true:  // Even case
        console.log(value + " is even");
        break;
    case false:  // Odd case
        console.log(value + " is odd");
        break;
    default:  // Handle other cases (string, NaN, undefined, null)
        if (typeof value === 'string') {
            console.log(value + " is a string");
        } else {
            console.log("Invalid Input");
        }
}
