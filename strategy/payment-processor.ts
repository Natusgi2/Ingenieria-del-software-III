// payment-processor.ts

import { TarjetaStrategy } from './strategies/tarjeta_strategy';
import { PayPalStrategy } from './strategies/paypal_strategy';
import { MercadoPagoStrategy } from './strategies/mercadopago_strategy';
// NO MODIFICAR ESTE ENUM
enum MetodoDePago {
    TARJETA = 'tarjeta',
    PAYPAL = 'paypal',
    MERCADOPAGO = 'mercadopago',
}

interface EstrategiaDePago {
    procesar(monto: number): void;
}

// payment-processor.ts


class ProcesadorDePagos {
    private monto: number;
    private estrategia: EstrategiaDePago;

    // Asociamos cada método con su estrategia correspondiente
    private readonly estrategias: Record<MetodoDePago, EstrategiaDePago> = {
        [MetodoDePago.TARJETA]: new TarjetaStrategy(),
        [MetodoDePago.PAYPAL]: new PayPalStrategy(),
        [MetodoDePago.MERCADOPAGO]: new MercadoPagoStrategy(),
    };

    constructor(monto: number) {
        this.monto = monto;
        // Por defecto, usamos tarjeta
        this.estrategia = this.estrategias[MetodoDePago.TARJETA];
        console.log(`Método de pago inicial: ${MetodoDePago.TARJETA}`);
    }

    public setMetodoDePago(metodo: MetodoDePago): void {
        const estrategia = this.estrategias[metodo];
        if (!estrategia) {
            throw new Error(`Estrategia no encontrada para el método: ${metodo}`);
        }
        this.estrategia = estrategia;
        console.log(`Método de pago cambiado a: ${metodo}`);
    }

    public procesarPago(): void {
        console.log(`Iniciando procesamiento de pago por $${this.monto}...`);
        this.estrategia.procesar(this.monto);
        console.log("--------------------------------\n");
    }
}

// ----- Simulación de la ejecución en la tienda online -----
console.log("Cliente realiza una compra de $150.\n");
const procesador = new ProcesadorDePagos(150);

// Pago con método por defecto (Tarjeta)
procesador.procesarPago();

// Cambiar a PayPal
procesador.setMetodoDePago(MetodoDePago.PAYPAL);
procesador.procesarPago();

// Cambiar a MercadoPago
procesador.setMetodoDePago(MetodoDePago.MERCADOPAGO);
procesador.procesarPago();

export {};

export {EstrategiaDePago};
