import express from 'express';

const app = express();


function getTest(req, res) {
    console.log('Hello world');
};

getTest();