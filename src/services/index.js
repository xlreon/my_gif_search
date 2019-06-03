import axios from 'axios'

const createClient = (baseUrl) => {
    return axios.create({
        baseURL: baseUrl,
    })
}

const ApiKey = '2VfSumXH0e5ZETPZ2asCDsYPsEQgBD9D'

const GiphyEndPoint = createClient('https://api.giphy.com')

const getGifs = (searchTerm) => 
    GiphyEndPoint
    .get(`/v1/gifs/search?api_key=${ApiKey}&&q=${searchTerm}&&limit=14`)
    .then(response => response.data.data)

export {
    getGifs
}