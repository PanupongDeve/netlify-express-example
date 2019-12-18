const base = require('./base');

const url = '/private/users'

const getAll = async () => {
    return await base.getAll(url);
}

const getById = async (id) => {
    return await base.getById(url, id);
}


const create = async (data) => {
    return await base.create(url, data);
}

const update = async (id, data) => {
    return await base.update(url, id, data);
}

const remove = async (id) => {
    return await base.remove(url, id);
}

const softRemove = async (id) => {
    return await base.softRemove(url, id);
}

const reStore = async (id) => {
    return await base.reStore(url, id);
}

const users = {
    getAll,
    getById,
    create,
    update,
    remove,
    softRemove,
    reStore
}

module.exports = users;