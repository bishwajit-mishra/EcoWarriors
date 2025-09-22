document.addEventListener('DOMContentLoaded', () => {
    const topicData = {
        'climate-change': {
            title: 'Understanding Climate Change',
            youtubeId: 'dcBXmj1nMTQ', // Example YouTube ID for Climate Change (replace with actual relevant video)
            problem: 'The Earth\'s climate is changing rapidly due to human activities, primarily the burning of fossil fuels, which releases greenhouse gases like carbon dioxide. This leads to global warming, rising sea levels, extreme weather events, and disruptions to ecosystems. Without urgent action, these impacts will worsen, threatening human societies and natural environments.',
            solution: 'Solutions include transitioning to renewable energy sources (solar, wind), improving energy efficiency, promoting sustainable agriculture, protecting and restoring forests (afforestation and reforestation), and developing carbon capture technologies. Individual actions like reducing energy consumption, choosing sustainable transportation, and supporting eco-friendly policies also contribute significantly.'
        },
        'waste-management': {
            title: 'Effective Waste Management',
            youtubeId: 'K6ppCC3lboU', // Example YouTube ID for Waste Management
            problem: 'Rapid urbanization and population growth have led to an enormous increase in waste generation. Improper waste disposal, such as open dumping and incineration without pollution controls, pollutes land, air, and water, harms public health, and contributes to greenhouse gas emissions. Lack of segregation at source makes recycling inefficient.',
            solution: 'Effective solutions involve the "Reduce, Reuse, Recycle" hierarchy. This includes minimizing consumption, repairing items, and segregating waste at source for proper recycling and composting. Implementing advanced waste-to-energy technologies, promoting circular economy principles, and educating communities on responsible waste disposal are crucial steps.'
        },
        'biodiversity': {
            title: 'The Importance of Biodiversity',
            youtubeId: '', // Example YouTube ID for Biodiversity
            problem: 'Biodiversity, the variety of life on Earth, is declining at an unprecedented rate, primarily due to habitat destruction, pollution, climate change, overexploitation of resources, and invasive species. This loss weakens ecosystems, reduces their ability to provide essential services like clean water and pollination, and threatens the stability of our planet.',
            solution: 'Conservation efforts include establishing protected areas, restoring degraded habitats, combating poaching and illegal wildlife trade, controlling invasive species, and mitigating climate change. Promoting sustainable land use, supporting local communities in conservation, and raising public awareness are vital for protecting biodiversity.'
        },
        'water-conservation': {
            title: 'Water Conservation Strategies',
            youtubeId: '9nJb-I_1-q0', // Example YouTube ID for Water Conservation
            problem: 'Freshwater resources are finite and under immense pressure from increasing demand due to population growth, agriculture, and industry. Water pollution further diminishes usable supplies. Water scarcity leads to conflicts, food shortages, and impacts public health and economic development, especially in drought-prone regions.',
            solution: 'Solutions involve adopting water-efficient technologies in agriculture and industry, fixing leaky infrastructure, promoting rainwater harvesting, and encouraging conscious water use in households. Implementing water-saving appliances, practicing xeriscaping, and educating the public on water-saving habits are key to sustainable water management.'
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const topicKey = urlParams.get('topic');

    const pageTitle = document.getElementById('page-title');
    const topicHeading = document.getElementById('topic-heading');
    const youtubeVideo = document.getElementById('youtube-video');
    const problemDescription = document.getElementById('problem-description');
    const solutionDescription = document.getElementById('solution-description');
    const takeQuizLink = document.getElementById('take-quiz-link');

    if (topicKey && topicData[topicKey]) {
        const data = topicData[topicKey];
        pageTitle.textContent = data.title + ' - Eco-Warriors';
        topicHeading.textContent = data.title;
        youtubeVideo.src = `https://www.youtube.com/embed/${data.youtubeId}`;
        problemDescription.textContent = data.problem;
        solutionDescription.textContent = data.solution;
        takeQuizLink.href = `quiz.html?topic=${topicKey}`; // Link to the specific quiz
    } else {
        pageTitle.textContent = 'Topic Not Found - Eco-Warriors';
        topicHeading.textContent = 'Topic Not Found';
        youtubeVideo.style.display = 'none'; // Hide video player
        problemDescription.textContent = 'The requested topic could not be found. Please go back to the lessons page to select a valid topic.';
        solutionDescription.style.display = 'none';
        takeQuizLink.style.display = 'none';
    }
});