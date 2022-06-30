import { Customer } from "../customers/customer";

export interface Invoices {
      id:number | null;
      customer:number | Customer;
      customerData:Customer | null;
      prodotti:any[];
      scadenza:Number | Date | string;
      data_emissione:Number | Date;
}
