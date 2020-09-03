const engine = require('store/src/store-engine');
const storages = [
	require('store/storages/sessionStorage'),
	require('store/storages/memoryStorage')
]

const store = engine.createStore( storages );

function cacheService() {

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

const pageCache = cacheService();

export default pageCache;