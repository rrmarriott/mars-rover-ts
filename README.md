# React / Typescript Mars Rover Kata

[![Build Status](https://travis-ci.org/rrmarriott/mars-rover-ts.svg?branch=master)](https://travis-ci.org/rrmarriott/mars-rover-ts)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It uses
* [esp-js](https://github.com/esp/esp-js)
* [esp-js-react](https://github.com/esp/esp-js-react)

## Description

Develop an api that moves a rover around on a grid.

* You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
* The rover receives a character array of commands.
* Implement commands that move the rover forward/backward (f,b).
* Implement commands that turn the rover left/right (l,r).
* Implement wrapping from one edge of the grid to another. (planets are spheres after all)
* [Incomplete]Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle.

### Run
`yarn start`

### Test
`yarn test`

### Coverage
`yarn coverage`

### Notes
* It looks like the code coverage is a bit patchy on the HTML output display of covered / uncovered areas of code.
* Using Jest for testing - standard unit tests + trying some snapshot testing.
