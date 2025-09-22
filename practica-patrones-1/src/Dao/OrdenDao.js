class OrderDao{
    /** 
    *@param {Object} order
    *@returns {Promise<void>}
    */

    async save(order){
        throw new error ("metodo 'save' no implemntado");

    }
    /**
   * Devuelve todas las órdenes
   * @returns {Promise<Object[]>}
   */
    async findAll(){
        throw new Error("Metodo 'findAll' no implementado");
    }

    async findById(id) {
        throw new Error("Metodo 'findById' no implementado");

    }

}

MediaSourceHandle.exports = OrderDao;
