export const assessmentQuestions = [
    {
        category: 'Tutorials',
        questions: [
            {
                text: 'How many programming tutorials have you started in the last month?',
                options: ['0-2', '3-5', '6-10', '11+'],
                scores: [0, 1, 2, 3]
            },
            {
                text: 'What percentage of the tutorials you start do you actually complete?',
                options: ['75-100%', '50-74%', '25-49%', '0-24%'],
                scores: [0, 1, 2, 3]
            }
        ]
    },
    {
        category: 'Planning',
        questions: [
            {
                text: 'How much time do you spend planning new projects versus coding them?',
                options: ['More coding', 'Roughly equal', 'More planning', 'Almost all planning'],
                scores: [0, 1, 2, 3]
            }
        ]
    }
]; 