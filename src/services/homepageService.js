require('dotenv').config();


let handleGetStartedButton = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Welcome to the CTK new Chatbot!",
                        "image_url": "https://petersfancybrownhats.com/company_image.png",
                        "subtitle": "(saving data to google sheet)",
                        "default_action": {
                            "type": "web_url",
                            "url": "",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": `${process.env.URL_WEB_VIEW_SURVEY}`,
                                "webview_height_ratio": "tall",
                                "title": "Start survey",
                                "messenger_extensions": true //false: open the webview in new tab
                            },
                            {
                                "type": "web_url",
                                "url": "",
                                "title": "Watch more!"
                            },
                        ]
                    }
                ]
            }
        }
    };
    return response;

}

let getButtonMessageTemplate = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "What do you want to do next?",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://docs.google.com/spreadsheets/d/1xI6gppm13aAPATpbC1AIx6Ahj_cqIQrEHF25uU1Ye6k/edit?usp=sharing",
                        "title": "View Data 😁"
                    },
                    {
                        "type": "web_url",
                        "url": `${process.env.URL_WEB_VIEW_SURVEY}`,
                        "webview_height_ratio": "tall",
                        "title": "Try again!",
                        "messenger_extensions": true //false: open the webview in new tab
                    },

                ]
            }
        }
    }

    return response;
}
module.exports = {
    handleGetStartedButton: handleGetStartedButton,
    getButtonMessageTemplate: getButtonMessageTemplate
};