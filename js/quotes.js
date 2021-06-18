const quotes = [
    {
        qoute: "When you go through hardships and decide not to surrender, that is strength.",
        author: "-Arnold Schwarzenegger-"
    },
    {
        qoute: "It is kind of fun to do the impossible.",
        author: "-Walt Disney-"
    },
    {
        qoute: "There are better starters than me but I’m a strong finisher.",
        author: "-Usain Bolt-"
    },
    {
        qoute: "Tough times never last, but tough people do.",
        author: "-Robert H. Schuller-"
    },
    {
        qoute: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "-Michael Jordan-"
    },
    {
        qoute: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author: "-Angelina Jolie-"
    },
    {
        qoute: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "-Martin Luther King, Jr-"
    },
    {
        qoute: "Grind Hard, Shine Hard.",
        author: "-Dwayne Johnson-"
    },
    {
        qoute: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
        author: "-Estée Lauder-"
    },
    {
        qoute: "Do not try to be original, just try to be good.",
        author: "-Paul Rand-"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQoute.qoute;
author.innerText = todaysQoute.author;