import React, { useState, useEffect } from 'react';
import './Card.css';
import Card from './Card';

const Cards = ({ filtro, subcategoria, searchTerm, limit, paginated }) => {
  const produtosData = [
    { id: 1, image: '/images/ração-1.png', title: 'Ração Seca Para Gatos Adultos Carne', category: 'Rações para Gatos', subcategory: 'Seca', size: 'Tamanho: 2,7kg', price: 'R$42,42' },
    { id: 2, image: '/images/pipicat.png', title: 'Areia Higiênica Pipicat Classic Para Gatos', category: 'Higiene', subcategory: 'Areia Higiênica', size: 'Tamanho: 4kg', price: 'R$12,25' },
    { id: 3, image: '/images/mochila-cat.png', title: 'Transporte Mochila Pet Gatos E Cães', category: 'Transporte', subcategory: 'Bolsas', size: 'Tamanho: Único', price: 'R$347,99' },
    { id: 4, image: '/images/bola-cravo.png', title: 'Brinquedo Bola Vinil com Cravo para Cães', category: 'Brinquedos', subcategory: 'Bolas', size: 'Tamanho: P', price: 'R$14,49' },
    { id: 5, image: '/images/brinquedo-ventosa.png', title: 'Brinquedo Corda Ventosa Morder Pet Cachorro Azul', category: 'Brinquedos', subcategory: 'Mordedores', size: 'Tamanho: Único', price: 'R$19,30' },
    { id: 6, image: '/images/comedouro.png', title: 'Comedouro E Brinquedo Petball Mini Pet Games', category: 'Brinquedos', subcategory: 'Bolas', size: 'Tamanho: P', price: 'R$36,46' },
    { id: 7, image: '/images/shampoo-neutro.png', title: 'Shampoo Pet Clean Neutro para Cães e Gatos', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 700ml', price: 'R$17,90' },
    { id: 8, image: '/images/frango-galinha.png', title: 'Frango Galinha Borracha Morder Brinquedo Pet', category: 'Brinquedos', subcategory: 'Mordedores', size: 'Tamanho: Único', price: 'R$19,60' },

    { id: 9, image: '/images/ração-2.png', title: 'Ração Golden Frango e Carne Gatos castrados', category: 'Rações para Gatos', subcategory: 'Seca', size: 'Tamanho: 10,1kg', price: 'R$141,21' },
    { id: 10, image: '/images/ração-3.png', title: 'Ração Special Cat Premium Para Gatos Adultos Castrados', category: 'Rações para Gatos', subcategory: 'Sênior', size: 'Tamanho: 1kg', price: 'R$24,90' },
    { id: 11, image: '/images/ração-4.png', title: 'Gran Plus Ração Gatos Filhotes Frango e Arroz', category: 'Rações para Gatos', subcategory: 'Filhotes', size: 'Tamanho: 1kg', price: 'R$27,90' },
    { id: 12, image: '/images/ração-5.png', title: 'Ração para gatos Filhotes  Frango Leite Cenoura', category: 'Rações para Gatos', subcategory: 'Filhotes', size: 'Tamanho: 1kg', price: 'R$29,90' },
    { id: 13, image: '/images/ração-6.png', title: 'Ração Spert Cat Premium para Gatos Frango e Salmão', category: 'Rações para Gatos', subcategory: 'Seca', size: 'Tamanho: 10,1kg', price: 'R$149,84' },
    { id: 14, image: '/images/ração-7.png', title: 'Ração Golden Gatos Castrados Frango com Abóbora', category: 'Rações para Gatos', subcategory: 'Seca', size: 'Tamanho: 3kg', price: 'R$73,90' },
    { id: 15, image: '/images/ração-8.png', title: 'Ração Golden Gatos Castrados Salmão Premium', category: 'Rações para Gatos', subcategory: 'Seca', size: 'Tamanho: 10,1kg', price: 'R$167,10' },
    { id: 16, image: '/images/ração-9.png', title: 'Mandala Blend Gatos Adultos Carne e Frango', category: 'Rações para Gatos', subcategory: 'Sênior', size: 'Tamanho: 10,1kg', price: 'R$109,90' },
    { id: 17, image: '/images/ração-10.png', title: 'Ração Gatos Castrados Salmão e Batata doce', category: 'Rações para Gatos', subcategory: 'Seca', size: 'Tamanho: 10,1kg', price: 'R$184,89' },
    { id: 18, image: '/images/ração-11.png', title: 'Ração Premier Gatos Adultos Castrados Frango ', category: 'Rações para Gatos', subcategory: 'Seca', size: 'Tamanho: 1,5kg', price: 'R$68,57' },
    { id: 19, image: '/images/ração-12.png', title: 'Ração Gatos Castrados Super Premium Pet Gold ', category: 'Rações para Gatos', subcategory: 'Seca', size: 'Tamanho: 10,1kg', price: 'R$124,29' },
    { id: 20, image: '/images/ração-13.png', title: 'Ração Magnus Mix Partículas Recheadas para Gatos Adultos ', category: 'Rações para Gatos', subcategory: 'Seca', size: 'Tamanho: 25kg', price: 'R$259,66' },
    { id: 21, image: '/images/ração-14.png', title: 'Ração Magnus Cat Premium Gatos Filhotes Mix de Sabores', category: 'Rações para Gatos', subcategory: 'Filhotes', size: 'Tamanho: 15kg', price: 'R$162,14' },
    { id: 22, image: '/images/ração-15.png', title: 'Ração Special Cat Gatos Adultos Carne', category: 'Rações para Gatos', subcategory: 'Sênior', size: 'Tamanho: 20kg', price: 'R$238,90' },
    { id: 23, image: '/images/ração-16.png', title: 'Magnus Cat Premium Gatos Filhotes Carne E Frango', category: 'Rações para Gatos', subcategory: 'Filhotes', size: 'Tamanho: 10kg', price: 'R$162,12' },

    { id: 24, image: '/images/higiene-1.png', title: 'Kit Higiene Pocket Pet Clean para Cães e Gatos', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: Único', price: 'R$59,90' },
    { id: 25, image: '/images/higiene-2.png', title: 'Fluído Desembaraçador Premium Cães', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 500ml', price: 'R$41,21' },
    { id: 26, image: '/images/higiene-3.png', title: 'Shampoo E Condicionador Pet Clean 5 Em 1 Para Cães', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 700ml', price: 'R$17,89' },
    { id: 27, image: '/images/higiene-4.png', title: 'Shampoo Cães Gatos Brilho Intenso Pelos Escuros', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 500ml', price: 'R$58,80' },
    { id: 28, image: '/images/higiene-5.png', title: 'Shampoo Limpeza Suave Pet Neutro Filhotes', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 500ml', price: 'R$57,40' },
    { id: 29, image: '/images/higiene-6.png', title: 'Fluido Desembaraçador Cães Gatos Pelos Longos', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 200ml', price: 'R$43,60' },
    { id: 30, image: '/images/higiene-7.png', title: 'Granado Shampoo Pet Neutro Todos os Tipos de Pelos', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 500ml', price: 'R$57,40' },
    { id: 31, image: '/images/higiene-8.png', title: 'Shampoo Pet Desembaraçador Pelos Longos', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 500ml', price: 'R$57,40' },
    { id: 32, image: '/images/higiene-9.png', title: 'Shampoo Pet Azul Pelos Claros Granado', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 500ml', price: 'R$55,90' },
    { id: 33, image: '/images/higiene-10.png', title: 'Shampoo e Condicionador 2 em 1 Genial Pet', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 500ml', price: 'R$22,90' },
    { id: 34, image: '/images/higiene-11.png', title: 'Shampoo K Dog Coco e Menta para Cães e Gatos', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 250ml', price: 'R$18,50' },
    { id: 35, image: '/images/higiene-12.png', title: 'Condicionador Beeps Hidratante Manteiga de Karité', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 480ml', price: 'R$41,61' },
    { id: 36, image: '/images/higiene-13.png', title: 'Condicionador Au.Migos Pets Todos os tipos de pelos', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 400ml', price: 'R$49,90' },
    { id: 37, image: '/images/higiene-14.png', title: 'Shampoo para Pet Au.Migos Pets 5 em 1', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 400ml', price: 'R$49,90' },
    { id: 38, image: '/images/higiene-15.png', title: 'Desembaraçador De Pelos Cachorro E Gatos Pet Clean', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 500ml', price: 'R$17,76' },
    { id: 39, image: '/images/higiene-16.png', title: 'Fluido Desembaraçador Pet Hydra Fluído', category: 'Higiene', subcategory: 'Shampoo e Condicionador', size: 'Tamanho: 240ml', price: 'R$63,65' },

    { id: 40, image: '/images/transporte-1.png', title: 'Caixa Transporte Alvorada N.2 - p/ Cães e Gatos', category: 'Transporte', subcategory: 'Caixas de transporte', size: 'Tamanho: M', price: 'R$48,99' },
    { id: 41, image: '/images/transporte-2.png', title: 'Bolsa Transporte Pet Luxo Com Rodinhas Dupla Cães Gatos', category: 'Transporte', subcategory: 'Bolsas', size: 'Tamanho: M', price: 'R$541,40' },
    { id: 42, image: '/images/transporte-3.png', title: '6 Seis Caixas Pets Transporte Animais Pequeno', category: 'Transporte', subcategory: 'Caixas de transporte', size: 'Tamanho: P', price: 'R$344,95' },
    { id: 43, image: '/images/transporte-4.png', title: 'Kit Bolsa de transporte para cães e gatos zíper com Pelucia', category: 'Transporte', subcategory: 'Bolsas', size: 'Tamanho: P', price: 'R$147,11' },
    { id: 44, image: '/images/transporte-5.png', title: 'Bolsa Transporte Sanremo Cachorro Gato Bordo Campania', category: 'Transporte', subcategory: 'Bolsas', size: 'Tamanho: P', price: 'R$197,35' },
    { id: 45, image: '/images/transporte-6.png', title: 'Mochila Para Transporte De Gatos E Cães Reforçada ', category: 'Transporte', subcategory: 'Bolsas', size: 'Tamanho: P', price: 'R$247,52' },
    { id: 46, image: '/images/transporte-7.png', title: 'Bolsa De Transporte Pet Avião Para Cães E Gatos', category: 'Transporte', subcategory: 'Bolsas', size: 'Tamanho: M', price: 'R$199,90' },
    { id: 47, image: '/images/transporte-8.png', title: 'Kit Cachorro Gato Cama Caminha Transporte Sanitário', category: 'Transporte', subcategory: 'Caixas de transporte', size: 'Tamanho: G', price: 'R$57,40' },
    { id: 48, image: '/images/transporte-9.png', title: 'Caixa Transporte ATLAS 20 Trendy Plus Ferplast', category: 'Transporte', subcategory: 'Caixas de transporte', size: 'Tamanho: M', price: 'R$155,90' },
    { id: 49, image: '/images/transporte-10.png', title: 'Kit Cama Cachorro Gato Iglu Transporte Sanitário Educador ', category: 'Transporte', subcategory: 'Caixas de transporte', size: 'Tamanho: M', price: 'R$138,29' },

    { id: 50, image: '/images/fantasia-1.png', title: 'Fantasia Pet Morcego Batman para Gatos e Cachorros', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: M', price: 'R$94,00' },
    { id: 51, image: '/images/fantasia-2.png', title: 'Fantasia de Pet Vampiro Drácula', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: P', price: 'R$75,60' },
    { id: 52, image: '/images/fantasia-3.png', title: 'Fantasia Pet Robin do Batman para Cães', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: G', price: 'R$69,90' },
    { id: 53, image: '/images/fantasia-4.png', title: 'Fantasia Pet Flash para Cães Grandes', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: G', price: 'R$74,90' },
    { id: 54, image: '/images/fantasia-5.png', title: 'Fantasia Pet Thor para Cães Pequenos', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: M', price: 'R$79,90' },
    { id: 55, image: '/images/fantasia-6.png', title: 'Fantasia Pet Lagosta para Gatos Adultos', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: P', price: 'R$89,90' },
    { id: 56, image: '/images/fantasia-7.png', title: 'Fantasia Pet Gato de Botas Adulto', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: P', price: 'R$94,90' },
    { id: 57, image: '/images/fantasia-8.png', title: 'Fantasia Pet Elvis Presley para Cachorros Médios', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: M', price: 'R$99,90' },
    { id: 58, image: '/images/fantasia-9.png', title: 'Fantasia Pet Capa Lufa-Lufa HP para Cachorros', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: M', price: 'R$110,00' },
    { id: 59, image: '/images/fantasia-10.png', title: 'Fantasia Pet Pijama Sulley para Cachorro', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: M', price: 'R$79,90' },
    { id: 60, image: '/images/fantasia-11.png', title: 'Fantasia Pet de Bruxa para Cachorro', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: M', price: 'R$69,90' },
    { id: 61, image: '/images/fantasia-12.png', title: 'Fantasia Pet de Bombeiro para Cachorro', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: M', price: 'R$79,90' },
    { id: 62, image: '/images/fantasia-13.png', title: 'Fantasia Pet Pijama para Cachorro Médio', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: M', price: 'R$74,90' },
    { id: 63, image: '/images/fantasia-14.png', title: 'Fantasia Pet Woody Toy Story Chapéu e Lenço ', category: 'Fantasias', subcategory: 'Temáticas', size: 'Tamanho: M', price: 'R$75,99' },

    { id: 64, image: '/images/ração-dogs-1.png', title: 'Ração Golden para Cães Adultos de Pequeno Carne', category: 'Rações para Cães', subcategory: 'Secas', animal: 'Cães', size: 'Tamanho: 3kg', price: 'R$22,40' },
    { id: 65, image: '/images/ração-dogs-2.png', title: 'Ração Golden Seleção Natural Cães Adultos', category: 'Rações para Cães', subcategory: 'Natural', size: 'Tamanho: 3kg', price: 'R$59,90' },
    { id: 66, image: '/images/ração-dogs-3.png', title: 'Ração para Cachorro Purina  Carne Frango Cereais Vegetais ', category: 'Rações para Cães', subcategory: 'Secas', size: 'Tamanho: 1kg', price: 'R$69,90' },
    { id: 67, image: '/images/ração-dogs-4.png', title: 'Ração Pedigree Filhote até 18 Meses com Cálcio', category: 'Rações para Cães', subcategory: 'Secas', size: 'Tamanho: 3kg', price: 'R$89,90' },
    { id: 68, image: '/images/ração-dogs-5.png', title: 'Ração Flock para Cães Adultos Sabor Carne', category: 'Rações para Cães', subcategory: 'Secas', size: 'Tamanho: 15kg', price: 'R$190,99' },
    { id: 69, image: '/images/ração-dogs-6.png', title: 'Ração GranPlus Choice Cães Grandes Frango e Arroz', category: 'Rações para Cães', subcategory: 'Secas', size: 'Tamanho: 15kg', price: 'R$134,90' },
    { id: 70, image: '/images/ração-dogs-7.png', title: 'Ração Cachorro Supreme Light Adulto Quatree Frango', category: 'Rações para Cães', subcategory: 'Secas', size: 'Tamanho: 20kg', price: 'R$121,96' },
    { id: 71, image: '/images/ração-dogs-8.png', title: 'Ração Para Cachorro Quatree Supreme Adulto Pequenos', category: 'Rações para Cães', subcategory: 'Secas', size: 'Tamanho: 15kg', price: 'R$109,90' },
    { id: 72, image: '/images/ração-dogs-9.png', title: 'Ração Seca Quatree Supreme Frango e Batata Doce Filhotes', category: 'Rações para Cães', subcategory: 'Secas', size: 'Tamanho: 15kg', price: 'R$199,89' },
    { id: 73, image: '/images/ração-dogs-10.png', title: 'Ração Seca Special Dog Cães Adulto sabor Carne', category: 'Rações para Cães', subcategory: 'Secas', size: 'Tamanho: 1kg', price: 'R$106,90' },
    { id: 74, image: '/images/ração-dogs-11.png', title: 'Ração Special Dog Vegetais Special Dog', category: 'Rações para Cães', subcategory: 'Secas', size: 'Tamanho: 3kg', price: 'R$104,90' },
    { id: 75, image: '/images/ração-dogs-12.png', title: 'Billy Dog Ossinho Cães Adultos Carne', category: 'Rações para Cães', subcategory: 'Secas', size: 'Tamanho: 15kg', price: 'R$106,99' },

    { id: 76, image: '/images/racao-umida-1.png', title: 'Pedigree Sachê Carne ao Molho para Cães Adultos', category: 'Rações para Cães', subcategory: 'Úmida', size: 'Tamanho: 100g', price: 'R$3,99' },
    { id: 77, image: '/images/racao-umida-2.png', title: 'Golden Gourmet Sachê Frango com Arroz', category: 'Rações para Cães', subcategory: 'Úmida', size: 'Tamanho: 100g', price: 'R$4,99' },
    { id: 78, image: '/images/racao-umida-3.png', title: 'Premier Pet Sachê Carne com Legumes', category: 'Rações para Cães', subcategory: 'Úmida', size: 'Tamanho: 100g', price: 'R$5,49' },
    { id: 79, image: '/images/racao-umida-4.png', title: 'Purina Dog Chow Ração Úmida Frango e Carne', category: 'Rações para Cães', subcategory: 'Úmida', size: 'Tamanho: 100g', price: 'R$4,29' },
    { id: 80, image: '/images/racao-umida-5.png', title: 'Special Dog Sachê Cordeiro com Arroz', category: 'Rações para Cães', subcategory: 'Úmida', size: 'Tamanho: 100g', price: 'R$3,49' },
    { id: 81, image: '/images/racao-umida-6.png', title: 'Fórmula Natural FreshMeat Ração Úmida Adultos', category: 'Rações para Cães', subcategory: 'Úmida', size: 'Tamanho: 100g', price: 'R$6,59' },

    { id: 82, image: '/images/racao-natural-1.png', title: 'Fórmula Natural FreshMeat Frango e Batata Doce', category: 'Rações para Cães', subcategory: 'Natural', size: 'Tamanho: 10,1kg', price: 'R$289,99' },
    { id: 83, image: '/images/racao-natural-2.png', title: 'Biofresh Cães Adultos Raças Médias e Grandes', category: 'Rações para Cães', subcategory: 'Natural', size: 'Tamanho: 12kg', price: 'R$319,90' },
    { id: 84, image: '/images/racao-natural-3.png', title: 'Nats Ração Natural para Cães Filhotes', category: 'Rações para Cães', subcategory: 'Natural', size: 'Tamanho: 7kg', price: 'R$179,00' },
    { id: 85, image: '/images/racao-natural-4.png', title: 'Guabi Natural Adultos Frango e Arroz Integral', category: 'Rações para Cães', subcategory: 'Natural', size: 'Tamanho: 10,1kg', price: 'R$269,90' },
    { id: 86, image: '/images/racao-natural-5.png', title: 'Fórmula Natural FreshMeat Cordeiro', category: 'Rações para Cães', subcategory: 'Natural', size: 'Tamanho: 7kg', price: 'R$199,90' },
    { id: 87, image: '/images/racao-natural-6.png', title: 'Magnus Todo Dia Natural com Carne', category: 'Rações para Cães', subcategory: 'Natural', size: 'Tamanho: 15kg', price: 'R$149,90' },

    { id: 88, image: '/images/racao-medicamentosa-1.png', title: 'Royal Canin Veterinary Gastro Intestinal', category: 'Rações para Cães', subcategory: 'Medicamentosa', size: 'Tamanho: 10,1kg', price: 'R$399,00' },
    { id: 89, image: '/images/racao-medicamentosa-2.png', title: 'Hills Prescription Diet Cães com Problemas Renais', category: 'Rações para Cães', subcategory: 'Medicamentosa', size: 'Tamanho: 12kg', price: 'R$419,90' },
    { id: 90, image: '/images/racao-medicamentosa-3.png', title: 'Premier Nutrição Clínica Obesidade Cães Adultos', category: 'Rações para Cães', subcategory: 'Medicamentosa', size: 'Tamanho: 5kg', price: 'R$189,00' },
    { id: 91, image: '/images/racao-medicamentosa-4.png', title: 'Royal Canin Veterinary Urinary S/O', category: 'Rações para Cães', subcategory: 'Medicamentosa', size: 'Tamanho: 7,5kg', price: 'R$349,90' },
    { id: 92, image: '/images/racao-medicamentosa-5.png', title: 'Vet Life Hepatic Ração Medicamentosa', category: 'Rações para Cães', subcategory: 'Medicamentosa', size: 'Tamanho: 10kg', price: 'R$379,90' },
    { id: 93, image: '/images/racao-medicamentosa-6.png', title: 'Hills Prescription Diet Cães Digestão Sensível', category: 'Rações para Cães', subcategory: 'Medicamentosa', size: 'Tamanho: 7,5kg', price: 'R$299,90' },

  ];

  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {
    setPaginaAtual(1);
  }, [filtro, searchTerm]);

  const produtosFiltrados = produtosData.filter(produto => {
    const matchesCategory = filtro && filtro !== "Filtre por:" ? produto.category === filtro : true;
    const matchesSubcategory = subcategoria && subcategoria !== "Filtre por:" ? produto.subcategory === subcategoria : true;
    const matchesSearchTerm = searchTerm ? produto.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;

    return matchesCategory && matchesSubcategory && matchesSearchTerm;
  });

  const produtosPaginados = paginated
    ? produtosFiltrados.slice(0, limit || produtosFiltrados.length)
    : produtosFiltrados;

  let produtosExibidos = produtosFiltrados;
  if (limit) {
    produtosExibidos = produtosFiltrados.slice(0, limit);
  }

  const itensPorPagina = 12;
  const totalPaginas = Math.ceil(produtosFiltrados.length / itensPorPagina);

  if (paginated) {
    produtosExibidos = produtosFiltrados.slice(
      (paginaAtual - 1) * itensPorPagina,
      paginaAtual * itensPorPagina
    );
  }

  useEffect(() => {
    if (paginaAtual > totalPaginas) {
      setPaginaAtual(1);
    }
  }, [totalPaginas, paginaAtual]);

  return (
    <>
      <div className="produtos-container">
        {produtosExibidos.length === 0 ? (
          <p className="mensagem-vazia">Nenhum produto encontrado.</p>
        ) : (
          produtosExibidos.map((produto, index) => (
            <Card
              key={produto.id}
              id={produto.id}
              image={produto.image}
              title={produto.title}
              category={produto.category}
              size={produto.size}
              price={produto.price}
            />

          ))
        )}
      </div>
      {paginated && totalPaginas > 1 && (
        <div className="pagination">
          <button onClick={() => setPaginaAtual(prev => Math.max(prev - 1, 1))} disabled={paginaAtual === 1}>
            Anterior
          </button>
          <span>Página <strong>{paginaAtual}</strong> de {totalPaginas}</span>
          <button onClick={() => setPaginaAtual(prev => Math.min(prev + 1, totalPaginas))} disabled={paginaAtual === totalPaginas}>
            Próxima
          </button>
        </div>
      )}



    </>
  );
};

export default Cards;
