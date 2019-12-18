
const getAll = async () => {
    return 'Get All From Data Sourece';
}

const getById = async () => {
    return 'Get By ID From Data Sourece';
}


const create = async () => {
    return 'Create From Data Sourece';
}

const update = async () => {
    return 'update From From Data Sourece';
}

const remove = async () => {
    return 'Remove All From Data Sourece';
}


const userRepository = {
    getAll,
    getById,
    create,
    update,
    remove
}

module.exports = userRepository;