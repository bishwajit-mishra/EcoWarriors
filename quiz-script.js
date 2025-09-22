document.addEventListener('DOMContentLoaded', () => {
    // Define the quiz questions and answers for each topic
    const quizzes = {
        'climate-change': {
            title: 'Climate Change Quiz',
            questions: [
                {
                    question: 'What is the main cause of human-induced climate change?',
                    options: ['Volcanic eruptions', 'Burning of fossil fuels', 'Sun flares', 'Deforestation'],
                    correctAnswer: 'Burning of fossil fuels'
                },
                {
                    question: 'Which of the following is a greenhouse gas?',
                    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
                    correctAnswer: 'Carbon Dioxide'
                },
                {
                    question: "Which of the following kinds of data do scientists uses to understand how the climate is changing?",
                    options: ['Weather and climate measurements' , 'Ocean temperatures', 'Snow and ice records', 'All of the above'],
                    correctAnswer: 'All of the above'
                },
                {
                    question: 'How much have global average temperatures increased in the last century?',
                    options: ['2.1 degrees Fahrenheit','0.6 degrees Fahrenheit','4.3 degrees Fahrenheit','1.4 degrees Fahrenheit'],
                    correctAnswer: '2.1 degrees Fahrenheit'
                },
            ]
        },
        'waste-management': {
            title: 'Waste Management Quiz',
            questions: [
                {
                    question: 'What does the "3 R\'s" stand for?',
                    options: ['Recycle, Reuse, Reduce', 'Reduce, Reuse, Recycle', 'Repair, Reuse, Reduce', 'Reduce, Restore, Revive'],
                    correctAnswer: 'Reduce, Reuse, Recycle'
                },
                {
                    question: 'What is a biodegradable material?',
                    options: ['Plastic', 'Glass', 'Paper', 'Metal'],
                    correctAnswer: 'Paper'
                },
                {
                    question: 'Which color bin is generally used for biodegradable waste in India?',
                    options: ['Blue', 'Green','Red','Black'],
                    correctAnswer: 'Green'
                },
                {
                    question:'Plastic waste management rule (2016) in India promotes:',
                    options: ['Single-use plastic','Extended Producer Responsibility (EPR)','More landfills','Burning of plastics' ],
                    correctAnswer: 'Extended Producer Responsibility (EPR)'
                }
            ]
        },
        'biodiversity': {
            title: 'Biodiversity Quiz',
            questions: [
                {
                    question: 'Biodiversity refers to the variety of life in what?',
                    options: ['A single species', 'A habitat or ecosystem', 'A specific city', 'The ocean floor'],
                    correctAnswer: 'A habitat or ecosystem'
                },
                {
                    question: 'What is the main threat to biodiversity?',
                    options: ['Extreme weather', 'Overpopulation', 'Habitat loss', 'Pollution'],
                    correctAnswer: 'Habitat loss'
                },
                {
                    question: 'Which type of biodiversity refers to genetic variation within species?',
                    options: ['Species diversity', 'Genetic Diversity', 'Ecosystem Diversity', 'Functional Diversity'],
                    correctAnswer: 'Genetic Diversity'
                },
                {
                    question: 'Which is the largest biodiversity hotspot in India?',
                    options: ['Himalaya', 'Indo-Burma', 'Sundarbans','Western Ghats'],
                    correctAnswer: 'Indo-Burma'
                }
            ]
        },
        'water-conservation': {
            title: 'Water Conservation Quiz',
            questions: [
                {
                    question: 'Which of these is an example of water conservation?',
                    options: ['Leaving the tap running while brushing your teeth', 'Taking a long bath', 'Fixing a leaky faucet', 'Watering your lawn in the afternoon'],
                    correctAnswer: 'Fixing a leaky faucet'
                },
                {
                    question: 'About how much of the Earth\'s water is freshwater?',
                    options: ['50%', '20%', '3%', '75%'],
                    correctAnswer: '3%'
                },
                {
                    question:'What is the main goal of water conservation?',
                    options: ['To increase rainfall','To reduce water pollution',' To use water efficiently and sustainably',' To build more dams'],
                    correctAnswer:'To use water efficiently and sustainably'
                },
                {
                    question:"Which of the following techniques reduces water wastage in farming?",
                    options: ['Flood irrigation','Drip irrigation','Sprinkler irrigation',' Overhead irrigation'],
                    correctAnswer: 'Drip irrigation'
                }
            ]
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');

    const quizTitle = document.getElementById('quiz-title');
    const quizQuestionsContainer = document.getElementById('quiz-questions');
    const submitBtn = document.getElementById('submit-quiz-btn');
    const resultsDiv = document.getElementById('quiz-results');

    let currentQuiz = quizzes[topic];

    if (currentQuiz) {
        quizTitle.textContent = currentQuiz.title;
        renderQuiz(currentQuiz.questions);
        submitBtn.addEventListener('click', () => checkAnswers(currentQuiz.questions));
    } else {
        quizTitle.textContent = 'Quiz Not Found';
        quizQuestionsContainer.innerHTML = '<p>Please select a valid quiz topic from the lessons page.</p>';
        submitBtn.style.display = 'none';
    }

    function renderQuiz(questions) {
        questions.forEach((q, index) => {
            const questionCard = document.createElement('div');
            questionCard.classList.add('question-card');
            
            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${q.question}`;
            questionCard.appendChild(questionText);

            const optionsGroup = document.createElement('div');
            optionsGroup.classList.add('options-group');

            q.options.forEach(option => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question-${index}`;
                input.value = option;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(option));
                optionsGroup.appendChild(label);
            });
            questionCard.appendChild(optionsGroup);
            quizQuestionsContainer.appendChild(questionCard);
        });
    }

    function checkAnswers(questions) {
        let score = 0;
        let totalQuestions = questions.length;

        questions.forEach((q, index) => {
            const radios = document.getElementsByName(`question-${index}`);
            let selectedOption = null;
            for (const radio of radios) {
                if (radio.checked) {
                    selectedOption = radio.value;
                    break;
                }
            }

            if (selectedOption === q.correctAnswer) {
                score++;
            }
        });

        resultsDiv.innerHTML = `You scored ${score} out of ${totalQuestions}.`;
        
        // Add logic to update eco-points here
        // For example:
        // const pointsEarned = score * 50;
        // alert(`You earned ${pointsEarned} eco-points!`);
    }
});