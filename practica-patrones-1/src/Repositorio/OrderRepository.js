let nextIdCounter = 1;

class OrderRepository {
    constructor(dao) {
        if (!dao) throw new Error ("OrderRepository Requiere un DAO");
        this.dao = dao;
    }

    /**
   * Guarda una orden tras asignarle un ID
   * @param {Object} orderData
   * @returns {Promise<Object>} orden creada
   */

    async store(orderData) {
        const id = this.getNextId();
        const order = {...orderData, id};
        await this.dao.save(order);
        return order;
    }
    /**
   * Obtiene todas las órdenes
   * @returns {Promise<Object[]>}
   */
  async getAll(){
    return await this.dao.findAll();

  }
  /**
   * Busca una orden por ID
   * @param {string} id
   * @returns {Promise<Object|null>}
   */

  async findById(id) {
    return await this.dao.findById(id);
  }

  /**
   * Genera el próximo ID (ej: 'o1', 'o2', ...)
   * @returns {string}
   */

  getNextId(){
    return "o" + nextIdCounter++;
  }




}

MediaSourceHandle.exports = OrderRepository;