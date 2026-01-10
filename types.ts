
export enum ViewType {
  HOME = 'HOME',
  CATALOG = 'CATALOG',
  VIRTUAL_TRY_ON = 'VIRTUAL_TRY_ON',
  BOOKING = 'BOOKING',
  ADMIN_DASHBOARD = 'ADMIN_DASHBOARD',
  CHECKOUT = 'CHECKOUT'
}

export interface Frame {
  id: string;
  name: string;
  brand: string;
  material: 'Acetato' | 'Metal' | 'Titânio' | 'Injetado';
  price: number;
  image: string;
  category: 'Feminino' | 'Masculino' | 'Infantil' | 'Unissexo';
  stock: number;
  faceShape: string[];
}

export interface Appointment {
  id: string;
  clientName: string;
  phone: string;
  type: 'Exame de Vista' | 'Estilismo Visual';
  date: string;
  time: string;
}

export interface Sale {
  id: string;
  frameId: string;
  amount: number;
  date: string;
  paymentMethod: 'Multicaixa Express' | 'VISA' | 'Referência';
}
