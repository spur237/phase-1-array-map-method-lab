const tutorials = [
	'what does the this keyword mean?',
	'What is the Constructor OO pattern?',
	'implementing Blockchain Web API',
	'The Test Driven Development Workflow',
	'What is NaN and how Can we Check for it',
	'What is the difference between stopPropagation and preventDefault?',
	'Immutable State and Pure Functions',
	'what is the difference between == and ===?',
	'what is the difference between event capturing and bubbling?',
	'what is JSONP?'
];
const titleCased = () => {
	return tutorials.map(tutorial => {
		const word = tutorial.split(' ');
		const uppercasingword = word.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // Converts first letters (charAt(0)) to uppercase
		const titleCasedTutorial = uppercasingword.join(' '); // Joins  the split title cased words into once sentence
		return titleCasedTutorial;
	})
}
