const correctAnswers = ['B', 'A', 'B', 'A', 'C'];
const form = document.querySelector('form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {

    // Prevent default form submit event
    e.preventDefault();

    // Initialise score
    let score = 0;

    // Grab answers
    const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    // Check answers
    answers.forEach((answer, index) => {
        // If correct then increment score
        if(answer === correctAnswers[index]) {
            score++;
        }
    })

    // Turn score into a percentage
    score = 100/correctAnswers.length * score;
    
    // Log the score
    console.log(score + '%');
    
    // Scroll to result
    window.scrollTo(0, 0);

    // Animate the score
    let tempScore = 0;
    result.classList.remove('d-none');
    
    const timer = setInterval(() => {
        result.querySelector('span').innerText = `${tempScore}%`;
        if(tempScore === score) {
            clearInterval(timer);
        }
        tempScore++;
    }, 10)

})