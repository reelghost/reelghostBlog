+++
title = 'Simple JavaScript Program to Calculate Sum, Difference, and Multiplication'
date = 2024-08-30T10:05:09+03:00
draft = false
description = "This is the introduction"
image = "/images/tooBlessed.jpeg"
imageBig = ""
categories = ["general"]
authors = ["iha"]
avatar = "/images/avatar.png"
+++
Below is a simple JavaScript code that calculates the sum, difference, and multiplication of two numbers and demonstrates launching Puppeteer in an asynchronous function.

```javascript
const puppeteer = require('puppeteer'); // Import Puppeteer

// Define two numbers
let number1 = 10;
let number2 = 5;

// Calculate the sum
let sum = number1 + number2;
console.log("Sum: " + sum); // Output: 15

// Calculate the difference
let difference = number1 - number2;
console.log("Difference: " + difference); // Output: 5

// Calculate the multiplication
let product = number1 * number2;
console.log("Multiplication: " + product); // Output: 50

// Asynchronous function to launch Puppeteer
async function openPuppeteer() {
    try {
        const browser = await puppeteer.launch(); // Launch a headless browser
        const page = await browser.newPage();     // Open a new page
        await page.goto('https://example.com');   // Navigate to a website
        console.log('Puppeteer launched and navigated to example.com');

        // Perform any other operations with Puppeteer here...

        await browser.close(); // Close the browser
    } catch (error) {
        console.error('Error launching Puppeteer:', error);
    }
}

// Call the async function to launch Puppeteer
openPuppeteer();

