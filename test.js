// Class representing an intern (attachee)
class Attachee {
    constructor(name, division) {
        this.name = name;
         this.division = division;
        this.tasks = [];  // List of assigned tasks
        this.feedback = []; // Supervisor feedback
        this.score = 0; // Performance score
    }

    // Method to add a task
    addTask(task) {
        this.tasks.push(task);
    }

    // Method to record feedback
    giveFeedback(feedback) {
        this.feedback.push(feedback);
    }

    // Method to update score, ensuring it's within valid range (0-100)
    updateScore(score) {
        if (score >= 0 && score <= 100) {
            this.score = score;
        } else {
            console.log("Score must be between 0 and 100.");
        }
    }
}

// Class representing a division
class Division {
    constructor(name) {
        this.name = name;
        this.attachees = [];  // List of interns in the division
    }

    // Method to add attachee to the division
    addAttachee(attachee) {
        this.attachees.push(attachee);
    }

    // Method to display attachees and their scores
    listAttachees() {
        console.log(`\nAttachees in ${this.name} Division:`);
        this.attachees.forEach(attachee => {
            console.log(`- ${attachee.name} (Score: ${attachee.score})`);
        });
    }
}

// Class responsible for managing tasks and feedback
class TaskManager {
    constructor() {
        this.tasks = {};  // Dictionary of assigned tasks
    }

    // Method to assign a task
    assignTask(attachee, task) {
        attachee.addTask(task);
        this.tasks[attachee.name] = task; // Track assigned tasks
        console.log(`Task '${task}' assigned to ${attachee.name}.`);
    }

    // Method to collect feedback
    collectFeedback(attachee, feedback) {
        attachee.giveFeedback(feedback);
        console.log(`Feedback recorded for ${attachee.name}.`);
    }
}

// Example usage:

// Creating divisions
const engineering = new Division("Engineering");
const techPrograms = new Division("Tech Programs");

// Creating attachees (interns)
const john = new Attachee("John Doe", "Engineering");
const mary = new Attachee("Mary Jane", "Tech Programs");

// Adding attachees to their respective divisions
engineering.addAttachee(john);
techPrograms.addAttachee(mary);

// Creating a task manager to handle assignments and feedback
const taskManager = new TaskManager();

// Assigning tasks to attachees
taskManager.assignTask(john, "Build API");
taskManager.assignTask(mary, "Conduct Training");

// Updating attachee scores based on performance
john.updateScore(85);  // John's performance score
mary.updateScore(90);  // Mary's performance score

// Displaying attachees and their scores within their divisions
engineering.listAttachees();
techPrograms.listAttachees();