// Prompt the user to enter a day of the week
let day = prompt("Please enter a day of the week (e.g., 'Monday', 'Tuesday'):");

// Convert the input to lowercase for easier matching
day = day ? day.toLowerCase() : "";

// Use a switch statement to map each day to a specific task
switch (day) {
    case "monday":
        console.log("Task for today: Start the week with a team meeting.");
        break;
    case "tuesday":
        console.log("Task for today: Focus on project development.");
        break;
    case "wednesday":
        console.log("Task for today: Mid-week review and adjustments.");
        break;
    case "thursday":
        console.log("Task for today: Prepare for the upcoming presentation.");
        break;
    case "friday":
        console.log("Task for today: Wrap up tasks and plan for next week.");
        break;
    case "saturday":
        console.log("Task for today: Catch up on any personal projects.");
        break;
    case "sunday":
        console.log("Task for today: Relax and recharge for the week ahead.");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}
