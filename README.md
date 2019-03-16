# JS Functions
One-page locally hosted site to practice various function actions in Javascript.

### Under the hood
- commented out, we've created functions then console logged them
- commented out, next we've built the `namePrinter` function that console logs the input we've passed through the function, then called the function
- with the `nuggetizer` and `dogBreed` functions we're passing an input then returning a template string that includes the input we've passed.  then we tested the function with `console.log()`
- commented out, we've tested individual ways to print elements to the DOM
- the `printToDom` function assigns our selected text to our selected DOM element
- commented out, we've tested the previous `nuggetizer` and `dogBreed` functions
- last, we've created the `addBand` function to loop through the bands we've added when calling the function and printing a `bandNumber` then the `bandName` to the DOM. 

### Results
- the result of our `addBand` function, in which I've called 3 separate times with different band names

## Screenshots
![image of javascript functions website](https://raw.githubusercontent.com/bobbybaxter/js-functions/master/img/js-functions-screenshot.png)

## Getting Started
Clone the repo:
```
$git clone https://github.com/bobbybaxter/js-functions
```

### Prerequisites
Download HTTP Server, to be able to serve the site locally in your browser:
```
$npm install -g http-server
```

## Running
Browse to the js-functions/ directory and run HTTP Server by typing the following command into the terminal:
```
$ hs -p 5000
```

In your web browser, copy and paste this:

 `localhost:5000`