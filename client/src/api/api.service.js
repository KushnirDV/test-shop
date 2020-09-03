import axios from 'axios';
import { URL } from '../constants/constants';
import pageCache from './cache.service';

    /*  Actual source */
let source = axios.CancelToken.source();

const updateSource = () => {
    if(source)
        source.cancel('Loading data is not actual yet');
    source = axios.CancelToken.source();
    return source.token;
}
    /** -- */

const sourceCancel = () => {
    if(source)
        source.cancel('Loading data is not actual yet')
}

const prepareData = (resp, key) => {
    const {status, data} = resp;
    if(status !== 200)
        throw 'Loading data is not actual yet';
    if(key)
        pageCache.set(key, data);
    return data || [];
}

const handleErr = err => {
    console.log(err);
};

async function request([key, url], method='GET', data=null){
    let params;
    if(data){
        params = JSON.stringify(data);
    }
    const props = {
        method,
        headers: { 'Content-Type': 'application/json' },
        params
    };
    if(method === 'GET')
        props.cancelToken = updateSource();

    let entities = pageCache.get(key);
    if(!entities){
        let resp = null;
        try{
            resp = await axios( url, props ).catch(handleErr);
        }catch(e){
            console.warn('Error: ', e.message);
        }
        entities = prepareData(resp?resp:{}, key );
    }

    return entities;
}

const getProducts = () => request(URL.PRODUCTS);
const sendOrder = (data) => request(URL.ORDER, 'POST', data);


const API = {
    getProducts,
    sendOrder,
    sourceCancel
}

export default API;














// const axios = require('axios');

// const getURL = () => `${process.env.API_URL}/api`;

// const handleResponse = (response) => {
//     return new Promise((resolve, reject) => {
//       const { data } = response;
//       if (response.status !== 200) {
//         const error = (data && data.message) || response.statusText;
//         return reject(error);
//       }
//       return resolve(data);
//     });
// };

// function getProducts() {
//   const requestOptions = {
//     method: 'GET',
//     withCredentials: true,
//   };
//   return axios(`https://fakestoreapi.com/products`, requestOptions).then(
//     handleResponse
//   );
// }

// export const API = {
//     getProducts
// };