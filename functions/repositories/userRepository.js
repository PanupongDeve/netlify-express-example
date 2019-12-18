const firebaseSDK = require('../services/firebaseSDK');
const DB_TYPE = require('../constant/DB_TYPE');


const SELECT_DB_TYPE = DB_TYPE.REALTIME_FIREBASE;

const getAll = async () => {
    if (DB_TYPE.REALTIME_FIREBASE === SELECT_DB_TYPE) {
        const { users } = firebaseSDK.firebaseDatabase;
        const response = await users.getAll();
        return response;
    }

    
}

const getById = async (id) => {
    if (DB_TYPE.REALTIME_FIREBASE === SELECT_DB_TYPE) {
        const { users } = firebaseSDK.firebaseDatabase;
        const response = await users.getById(id);
        return response;
    }
    
}


const create = async (data) => {
    if (DB_TYPE.REALTIME_FIREBASE === SELECT_DB_TYPE) {
        const { users } = firebaseSDK.firebaseDatabase;
        const response = await users.create(data);
        return response;
    }
    
}

const update = async (id, data) => {
    if (DB_TYPE.REALTIME_FIREBASE === SELECT_DB_TYPE) {
        const { users } = firebaseSDK.firebaseDatabase;
        const response = await users.update(id, data);
        return response;
    }
    
}

const softRemove  = async (id) => {
    if (DB_TYPE.REALTIME_FIREBASE === SELECT_DB_TYPE) {
        const { users } = firebaseSDK.firebaseDatabase;
        const response = await users.softRemove(id);
        return response;
    }
    
}

const reStore  = async (id) => {
    if (DB_TYPE.REALTIME_FIREBASE === SELECT_DB_TYPE) {
        const { users } = firebaseSDK.firebaseDatabase;
        const response = await users.reStore(id);
        return response;
    }
   
}

const remove = async (id) => {
    if (DB_TYPE.REALTIME_FIREBASE === SELECT_DB_TYPE) {
        const { users } = firebaseSDK.firebaseDatabase;
        const response = await users.remove(id);
        return response;
    }
}


const userRepository = {
    getAll,
    getById,
    create,
    update,
    remove,
    softRemove,
    reStore
}

module.exports = userRepository;