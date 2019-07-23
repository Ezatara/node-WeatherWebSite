const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/59fbf12f4b075be9aa0e0dcc37df44ba/'+ latitude + ',' + longitude + '?units=si'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error){
            callback('Unable to find weather.', undefined)
        } else{
            callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' temperature')
        }
    })
}



module.exports = forecast