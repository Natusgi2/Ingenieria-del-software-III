// strategies/mercadopago.strategy.ts
import { EstrategiaDePago } from '../payment-processor';

export class MercadoPagoStrategy implements EstrategiaDePago {
    procesar(monto: number): void {
        const idDePago = Math.floor(Math.random() * 100000);
        console.log(`Generando link de pago de MercadoPago...`);
        console.log(`ID de Transacción: ${idDePago}`);
        console.log(`¡Pago con MERCADOPAGO de $${monto} procesado exitosamente!`);
    }
}