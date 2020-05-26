import express from 'express';
import fs from 'fs';
import path from 'path';
import debug from 'debug';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if(err){
            debug(err);
            return res.status(400).send('some error occurred!')
        }
        res.send(data.replace('<div id="root"></div>', 
                    `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
                ))
    })
})

// app.use(express.static(path.resolve(__dirname, '..', 'build')));


app.listen(PORT, () => {
    console.log(`app launched on port ${PORT}`)
})