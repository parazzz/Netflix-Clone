// JavaScript to handle FAQ section's show/hide functionality
document.addEventListener("DOMContentLoaded", function() {
    // Get all FAQ questions
    const questions = document.querySelectorAll(".Question");

    questions.forEach((question, index) => {
        question.addEventListener("click", () => {
            // Toggle the visibility of the corresponding answer
            const answer = question.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
