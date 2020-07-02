const route = require('express').Router();
const axios = require('axios');

const apiURL = 'https://api.github.com';
const token = '192d8338dd1c4bf55137b192ca7524c395fcec0f';




route.get('/', async (req, res) => {
    let since = req.query.since;
    try {
        console.log('started ');
        let r =  await axios.get(apiURL+'/users?since='+since);
        
        let proximo = r.headers.link.split(";")[0].split('=')[1];
        proximo = proximo.substring(0, proximo.length-1);

        res.set({'proximo': proximo});
        res.send(r.data) ;
    } catch (error) {
        let r = {error: error};
        res.send(r);
    }
});

route.get('/:username/detail', async (req, res) => {
    let username = req.params.username;
    let url = apiURL+'/users/'+username;
    console.log('user name is '+username);

    var headers = {
        'Authorization': 'Token '+token
    }

    console.log(headers);
    try {
        let r =  await axios.get(url, headers);
        res.send(r.data) ;
    } catch (error) {
        let r = {error: error};
        res.send(r);
    }
    
});

route.get('/:username/repos', async (req, res) => {
    var headers = {
        'Authorization': 'Token '+token
    }
    let username = req.params.username;
    
    let url = apiURL+'/users/'+username+'/repos';
    console.log(url);
    try {
        let r =  await axios.get(url, headers);
        res.send(r.data) ;
    } catch (error) {
        console.log('error');
        let r = {error: error};
        res.send(r);
    }
    
});

// https://api.github.com/users/janilsorg/repos



module.exports = route;