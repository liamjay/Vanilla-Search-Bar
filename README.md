# Vanilla JavaScript Search Bar

A search bar written in vanilla javascript. With Webpack compiling the code and Docker to set up a apache server.

## Prerequisites

You will need the following software installed:

* [Docker](https://www.docker.com/)
* [NodeJS](https://nodejs.org/en/)

## Instructions

1. Download and install Docker and NodeJS if not already installed
2. Download and copy the repository to your local machine using the following
```bash
$ git clone https://github.com/liamjay/Vanilla-Search-Bar.git
```
3. Make sure you are in the root directory and run the following to set up the apache server using docker
```bash
$ docker-compose up
```
4. Install NodeJS dependencies using the following
```bash
$ cd app
$ npm install
```
5. Because I used Webpack run the following to compile the JavaScript
```bash
$ npm run compile
```