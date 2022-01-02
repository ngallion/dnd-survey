// Modern theme
import 'survey-react/modern.min.css';
// Default theme
// import 'survey-react/survey.min.css';
import {Model, StylesManager, Survey} from 'survey-react';

StylesManager.applyTheme("modern");

function sendDataToServer(survey) {
    survey.sendResult('59a84bca-4555-4dbf-ba34-c792e43c5a05');
}

const surveyJson = {
    title: "Campaign Expectations",
    pages: [
        {
            elements: [{
                name: "reasonForPlaying",
                title: "Rank your excitement for the various aspects of playing Dungeons and Dragons, from most to least excited",
                isRequired: true,
                type: "ranking",
                choices: [
                    "Combat",
                    "Role Playing",
                    "Exploration",
                    "Story",
                    "Real Life Social Interactions",
                ]
            }]
        },
        {
            elements: [{
                name: "howLongCampaign",
                title: "How long (in months or years) can you reasonably commit to playing the campaign?",
                isRequired: true,
                type: "text"
            }, {
                name: "howOften",
                title: "How often would you like to play?",
                isRequired: true,
                type: "text"
            }, {
                name: "howLongSession",
                title: "How long (in hours) would you like a typical session to last?",
                isRequired: true,
                type: "text"
            },]
        },
        {
            elements: [{
                name: "waitTime",
                title: "How long (in minutes or hours) should we wait for someone if they are late?",
                isRequired: true,
                type: "text"
            }, {
                name: "sessionCancellation",
                title: "How many players should be missing before we cancel a session?",
                isRequired: true,
                type: "text"
            }]
        },
        {
            elements: [{
                name: "ruleTime",
                title: "How long (in minutes or seconds) should we spend reviewing a ruling?",
                isRequired: true,
                type: "text"
            }, {
                name: "pvp",
                title: "Should player-versus-player combat be allowed?",
                isRequired: true,
                type: "boolean"
            }, {
                name: "gameRating",
                title: "If the gameplay were rated for the public, what rating would you be comfortable with?",
                type: "dropdown",
                choices: [
                    "R",
                    "X",
                ]
            }]
        },
        {
            elements: [{
                name: "forbiddenTopics",
                title: "Are there any topics or themes that would make you uncomfortable, or trigger unwanted emotions? For example, sexual assault, discrimination, animal cruelty, drug use, etc",
                type: "text"
            }]
        },
        {
            elements: [{
                name: "punishment",
                title: "What should be the punishment for a player breaking the rules established by the group?",
                type: "text"
            }]
        },
    ]

};

function App() {
    const survey = new Model(surveyJson);

    return <Survey model={survey} showProgressBar="bottom" showCompletedPages onComplete={sendDataToServer}/>;
}

export default App;
