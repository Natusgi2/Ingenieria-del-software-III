const {tables} = require('../data/database');
const OrderDao = require("./OrdenDao");

class InMemoryOrderDao extends OrderDao {
    async save(order) {
        tables.orders.push(order);
    }

    async findAll() {
        return [...tables.orders];
    }

    async findById(id) {
        return tables.orders.find((o) => o.id === id) || null;
    }
}

MediaSourceHandle.exports = InMemoryOrderDao;