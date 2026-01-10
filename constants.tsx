
import { Frame } from './types';

export const CLINIC_INFO = {
  name: 'BV BAIA Óptica',
  whatsapp: '932964637',
  email: 'empresabvbaia@gmail.com',
  address: 'Luanda, Angola',
  slogan: 'Lentes que revelam, armações que impressionam',
  metrics: {
    patients: 5000,
    years: 3,
    followers: 1200
  },
  locations: [
    { city: 'Luanda', area: 'Benfica - Zona Verde, Juntos à Padaria da Secomex (Patri Luanda)' },
    { city: 'Uíge', area: 'Rua da Viação e Trânsito, Juntos do Ninho' }
  ],
  pricing: {
    framesBase: 5000,
    lensesWhite: 10000,
    lensesFotogray: 10500
  }
};

export const MOCK_FRAMES: Frame[] = [
  {
    id: 'bv-001',
    name: 'Cartier Rimless Gold Panther',
    brand: 'Cartier',
    material: 'Titânio',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=500&q=80',
    category: 'Masculino',
    stock: 3,
    faceShape: ['Oval', 'Quadrado']
  },
  {
    id: 'bv-002',
    name: 'Dior Cat-Eye Pink Crystal',
    brand: 'Dior',
    material: 'Acetato',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&q=80',
    category: 'Feminino',
    stock: 5,
    faceShape: ['Coração', 'Diamante']
  },
  {
    id: 'bv-003',
    name: 'LV Millionaire Rimless Monogram',
    brand: 'Louis Vuitton',
    material: 'Titânio',
    price: 110000,
    image: 'https://images.unsplash.com/photo-1511499767390-a7335958bbe7?w=500&q=80',
    category: 'Unissexo',
    stock: 2,
    faceShape: ['Redondo', 'Oval']
  },
  {
    id: 'bv-004',
    name: 'Gucci Black Cat-Eye Gold Temple',
    brand: 'Gucci',
    material: 'Acetato',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1509100104048-6373f65cd551?w=500&q=80',
    category: 'Feminino',
    stock: 4,
    faceShape: ['Redondo', 'Oval']
  },
  {
    id: 'bv-005',
    name: 'Dita Mach-One Executive',
    brand: 'Dita',
    material: 'Metal',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
    category: 'Masculino',
    stock: 1,
    faceShape: ['Quadrado']
  },
  {
    id: 'bv-006',
    name: 'Fendi Rose Geometric',
    brand: 'Fendi',
    material: 'Metal',
    price: 78000,
    image: 'https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?w=500&q=80',
    category: 'Feminino',
    stock: 3,
    faceShape: ['Coração']
  },
  {
    id: 'bv-007',
    name: 'Lacoste Sport Blue Matte',
    brand: 'Lacoste',
    material: 'Injetado',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1511499767390-a7335958bbe7?w=400&q=60',
    category: 'Masculino',
    stock: 10,
    faceShape: ['Quadrado', 'Oval']
  },
  {
    id: 'bv-008',
    name: 'Junior Sparkle Pink',
    brand: 'BV BAIA Kids',
    material: 'Injetado',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&q=80',
    category: 'Infantil',
    stock: 15,
    faceShape: ['Pequeno']
  },
  {
    id: 'bv-009',
    name: 'BV Basic Essential Black',
    brand: 'BV BAIA',
    material: 'Acetato',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1511499767390-a7335958bbe7?w=500&q=80',
    category: 'Unissexo',
    stock: 100,
    faceShape: ['Todos']
  },
  {
    id: 'bv-010',
    name: 'Cartier C-Dècor Wood Temple',
    brand: 'Cartier',
    material: 'Titânio',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=500&q=80',
    category: 'Masculino',
    stock: 2,
    faceShape: ['Quadrado', 'Oval']
  }
];
