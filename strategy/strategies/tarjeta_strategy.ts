import {EstrategiaDePago} from '../payment-processor.js';

export class TarjetaStrategy implements EstrategiaDePago {
    procesar(monto: number): void {
        console.log("Validando informacion de la tarjeta...");
        console.log("contactando al banco emisor...");
        console.log(`¡Pago con TARJETA de $${monto} procesado exitosamente!`);
    }

}