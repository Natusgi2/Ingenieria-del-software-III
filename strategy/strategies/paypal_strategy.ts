// strategies/paypal.strategy.ts
import { EstrategiaDePago } from '../payment-processor';

export class PayPalStrategy implements EstrategiaDePago {
    procesar(monto: number): void {
        const emailUsuario = "usuario@ejemplo.com";
        console.log(`Redirigiendo al usuario a PayPal para autenticación...`);
        console.log(`Procesando pago para la cuenta de PayPal: ${emailUsuario}`);
        console.log(`¡Pago con PAYPAL de $${monto} procesado exitosamente!`);
    }
}