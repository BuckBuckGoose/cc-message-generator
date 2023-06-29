const colors = [
  "red",
  "blue",
  "yellow",
  "green",
  "orange",
  "purple",
  "brown",
  "turquoise",
  "navy",
  "light green",
  "forest green",
  "pink",
  "scarlet",
  "gray",
  "black",
  "violet",
];

const inspirationalQuotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
];

const getLuckyNumber = () => Math.floor(Math.random() * 101);

const messagesGenerator = {
  currentDateMessage() {
    let currentDate = new Date();
    console.log(`Today is: ${currentDate.toDateString()}`);
  },
  getColorMessage() {
    console.log(
      `Today's lucky color is: ${
        colors[Math.floor(Math.random() * colors.length)]
      }`
    );
  },
  getLuckyNumberMessage() {
    console.log(`Today's lucky number is: ${getLuckyNumber()}`);
  },
  getInspirationalQuote() {
    console.log(`Today's inspirational quote: \n
        ${
          inspirationalQuotes[
            Math.floor(Math.random() * inspirationalQuotes.length)
          ]
        }`);
  },
  generateFinalMessage() {
    this.currentDateMessage();
    this.getColorMessage();
    this.getLuckyNumberMessage();
    this.getInspirationalQuote();
  },
};

messagesGenerator.generateFinalMessage();
