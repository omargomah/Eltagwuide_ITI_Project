function markAsDone(button) {
    button.classList.add("done");
    button.innerText = "✓ تم الانتهاء";
  }
  document.querySelectorAll(".done-button").forEach(btn => {
    btn.addEventListener("click", function () {
      markAsDone(this);
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
  const quizForms = document.querySelectorAll('.quiz-form');

  quizForms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let correctAnswers = 0;
      let totalQuestions = 0;
      const resultDiv = form.querySelector('.result');
      
      const questionBlocks = form.querySelectorAll('.question-block');
      totalQuestions = questionBlocks.length;

      questionBlocks.forEach(block => {
        const correctValue = block.getAttribute('data-correct');
        const selectedOption = block.querySelector(`input[name="${block.querySelector('input').name}"]:checked`);
        
        if (selectedOption && selectedOption.value === correctValue) {
          correctAnswers++;
        }
      });

      const scorePercentage = (correctAnswers / totalQuestions) * 100;
      resultDiv.textContent = `النتيجة: ${scorePercentage.toFixed(2)}% (${correctAnswers} من ${totalQuestions})`;
    });
  });
});

let date = new Date();
let footerYear = document.querySelector('footer p span');
footerYear.innerText = `${date.getFullYear()}`