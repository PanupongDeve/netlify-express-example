const admin = require("firebase-admin");

const _getLastKey = async (url) => {
    const db = admin.database();
    let key = -1;
    await db.ref(url).orderByKey().limitToLast(1).once('value', (snapshort) => {
        snapshort.forEach(e => { key = e.key; });
    });
    return Number(key);
}

const getAll = async (url) => {
    try {
        const db = admin.database();
        const ref = await db.ref(url);
        let response; 
        await ref.once("value", async (snapshot) => {
            response = await snapshot.val();
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getById = async (url, id) => {
    try {
        const db = admin.database();
        const ref = await db.ref(`${url}/${id}`);
        let response; 
        await ref.once("value", async (snapshot) => {
            response = await snapshot.val();
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}


const create = async (url, data) => {
    try {
        const lastkey = await _getLastKey(url);
        const generatedKey = lastkey + 1;
        const defaultData = {
            id: generatedKey,
            softRemove: false
        }
        const db = admin.database();
        const requestData = Object.assign(defaultData, data);
        await db.ref(`${url}/${generatedKey}`).set(requestData);
        const response = await getById(url,generatedKey);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const update = async (url, id, data) => {
    try {
        const db = admin.database();
        const defaultData = await getById(url, id);
        const requestData = Object.assign(defaultData, data);
        await db.ref(`${url}/${id}`).set(requestData);
        const response = await getById(url, id);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const remove = async (url, id) => {
    try {
        const db = admin.database();
        await db.ref(`${url}/${id}`).remove();
        return 'removed!';
    } catch (error) {
        console.log(error);
    }
}

const softRemove = async (url, id) => {
    try {
        const db = admin.database();
        const updatedData = {
            softRemove: true
        }
        const data = await getById(url, id);
        const requestData = Object.assign(data, updatedData);
        await db.ref(`${url}/${id}`).set(requestData);
        const response = await getById(url, id);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const reStore = async (url, id) => {
    try {
        const db = admin.database();
        const updatedData = {
            softRemove: false
        }
        const data = await getById(url, id);
        const requestData = Object.assign(data, updatedData);
        await db.ref(`${url}/${id}`).set(requestData);
        const response = await getById(url, id);
        return response;
    } catch (error) {
        console.log(error);
    }
}


const base = {
    getAll,
    getById,
    create,
    update,
    remove,
    softRemove,
    reStore
}

module.exports = base;