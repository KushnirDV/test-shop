const engine = require('store/src/store-engine');
const storages = [
	require('store/storages/localStorage'),
	require('store/storages/memoryStorage')
]

const store = engine.createStore( storages );

function storageService() {

    const has = key => !!store.get(key);

    const set = (key, data) => store.set( key, data );    

    const get = key => store.get(key);
    
    const destroy = key => store.remove(key);

    return {
        has,
        get,
        set,
        destroy,
    }
}

const pruductStorage = storageService();

export default pruductStorage;