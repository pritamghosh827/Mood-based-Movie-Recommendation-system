// Function to handle redirection based on mood and language selection
function redirectUser() {
    // Get the selected mood
    let mood = event.target.id.replace('Button', '');
    // Get the selected language
    let language = document.getElementById('language').value;

    // Convert mood and language to IMDb search query parameters
    let searchQuery = convertMoodToSearchQuery(mood);
    let languageQueryParam = convertLanguageToQueryParam(language);

    // Redirect to IMDb search page with mood and language parameters
    window.location.href = `https://www.imdb.com/search/title/?genres=${searchQuery}&languages=${languageQueryParam}`;
}

// Function to convert mood selection to IMDb search query parameter
function convertMoodToSearchQuery(mood) {
    switch (mood) {
        case 'happy':
            return "comedy";
        case 'sad':
            return "drama";
        case 'angry':
            return "action";
        case 'fear':
            return "horror";
        case 'surprise':
            return "mystery";
        case 'disgust':
            return "crime";
        case 'motivate':
            return "biography";
        case 'irritated':
            return "family";
        default:
            console.log("Invalid mood. Please enter a valid mood.");
            return "";
    }
}

// Function to convert language selection to IMDb language query parameter
function convertLanguageToQueryParam(language) {
    const languageMap = {
        'en': 'en',
        'hi': 'hi',
        'bn': 'bn',
        'ta': 'ta',
        'te': 'te',
        'pa': 'pa',
        'kn': 'kn'
    };

    return languageMap[language] || 'en'; // Default to English if language is not mapped
}

// Add event listeners to mood buttons
document.querySelectorAll('.mood-buttons button').forEach(button => {
    button.addEventListener('click', redirectUser);
});
