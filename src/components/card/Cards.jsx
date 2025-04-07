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

    { id: 64, image: '/images/ração-dogs-1.png', title: 'Ração Golden para Cães Adultos de Pequeno Carne', category: 'Rações para Cães', subcategory: 'Seca', animal: 'Cães', size: 'Tamanho: 3kg', price: 'R$22,40' },
    { id: 65, image: '/images/ração-dogs-2.png', title: 'Ração Golden Seleção Natural Cães Adultos', category: 'Rações para Cães', subcategory: 'Natural', size: 'Tamanho: 3kg', price: 'R$59,90' },
    { id: 66, image: '/images/ração-dogs-3.png', title: 'Ração para Cachorro Purina  Carne Frango Cereais Vegetais ', category: 'Rações para Cães', subcategory: 'Seca', size: 'Tamanho: 1kg', price: 'R$69,90' },
    { id: 67, image: '/images/ração-dogs-4.png', title: 'Ração Pedigree Filhote até 18 Meses com Cálcio', category: 'Rações para Cães', subcategory: 'Seca', size: 'Tamanho: 3kg', price: 'R$89,90' },
    { id: 68, image: '/images/ração-dogs-5.png', title: 'Ração Flock para Cães Adultos Sabor Carne', category: 'Rações para Cães', subcategory: 'Seca', size: 'Tamanho: 15kg', price: 'R$190,99' },
    { id: 69, image: '/images/ração-dogs-6.png', title: 'Ração GranPlus Choice Cães Grandes Frango e Arroz', category: 'Rações para Cães', subcategory: 'Seca', size: 'Tamanho: 15kg', price: 'R$134,90' },
    { id: 70, image: '/images/ração-dogs-7.png', title: 'Ração Cachorro Supreme Light Adulto Quatree Frango', category: 'Rações para Cães', subcategory: 'Seca', size: 'Tamanho: 20kg', price: 'R$121,96' },
    { id: 71, image: '/images/ração-dogs-8.png', title: 'Ração Para Cachorro Quatree Supreme Adulto Pequenos', category: 'Rações para Cães', subcategory: 'Seca', size: 'Tamanho: 15kg', price: 'R$109,90' },
    { id: 72, image: '/images/ração-dogs-9.png', title: 'Ração Seca Quatree Supreme Frango e Batata Doce Filhotes', category: 'Rações para Cães', subcategory: 'Seca', size: 'Tamanho: 15kg', price: 'R$199,89' },
    { id: 73, image: '/images/ração-dogs-10.png', title: 'Ração Seca Special Dog Cães Adulto sabor Carne', category: 'Rações para Cães', subcategory: 'Seca', size: 'Tamanho: 1kg', price: 'R$106,90' },
    { id: 74, image: '/images/ração-dogs-11.png', title: 'Ração Special Dog Vegetais Special Dog', category: 'Rações para Cães', subcategory: 'Seca', size: 'Tamanho: 3kg', price: 'R$104,90' },
    { id: 75, image: '/images/ração-dogs-12.png', title: 'Billy Dog Ossinho Cães Adultos Carne', category: 'Rações para Cães', subcategory: 'Seca', size: 'Tamanho: 15kg', price: 'R$106,99' },
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

    { id: 94, image: '/images/perfume-1.png', title: 'Perfume Pet Lavanda Suave', category: 'Higiene', subcategory: 'Perfumes', size: 'Tamanho: 120ml', price: 'R$22,90' },
    { id: 95, image: '/images/perfume-2.png', title: 'Perfume Pet Cheirinho de Talco', category: 'Higiene', subcategory: 'Perfumes', size: 'Tamanho: 100ml', price: 'R$19,90' },
    { id: 96, image: '/images/perfume-3.png', title: 'Perfume Pet Floral Encantado', category: 'Higiene', subcategory: 'Perfumes', size: 'Tamanho: 120ml', price: 'R$24,50' },
    { id: 97, image: '/images/perfume-4.png', title: 'Perfume Pet Citrus Fresh', category: 'Higiene', subcategory: 'Perfumes', size: 'Tamanho: 100ml', price: 'R$21,90' },
    { id: 98, image: '/images/perfume-5.png', title: 'Perfume Pet Musk Suave', category: 'Higiene', subcategory: 'Perfumes', size: 'Tamanho: 120ml', price: 'R$25,90' },
    { id: 99, image: '/images/perfume-6.png', title: 'Perfume Pet Coco e Baunilha', category: 'Higiene', subcategory: 'Perfumes', size: 'Tamanho: 120ml', price: 'R$23,90' },
    { id: 100, image: '/images/escova-1.png', title: 'Escova Dental Dupla para Pets', category: 'Higiene', subcategory: 'Escova de dentes', size: 'Tamanho: Único', price: 'R$12,90' },
    { id: 101, image: '/images/escova-2.png', title: 'Escova de Dente Pet com Dedeira', category: 'Higiene', subcategory: 'Escova de dentes', size: 'Tamanho: Kit com 2', price: 'R$10,50' },
    { id: 102, image: '/images/escova-3.png', title: 'Kit Escova e Creme Dental Pet', category: 'Higiene', subcategory: 'Escova de dentes', size: 'Tamanho: 85g + Escova', price: 'R$19,90' },
    { id: 103, image: '/images/escova-4.png', title: 'Escova Dental Pet Macia Extra Longa', category: 'Higiene', subcategory: 'Escova de dentes', size: 'Tamanho: Único', price: 'R$14,90' },
    { id: 104, image: '/images/escova-5.png', title: 'Escova de Dente Pet Compacta', category: 'Higiene', subcategory: 'Escova de dentes', size: 'Tamanho: Pequeno Porte', price: 'R$11,90' },
    { id: 105, image: '/images/escova-6.png', title: 'Escova Pet com Cabo Anatômico', category: 'Higiene', subcategory: 'Escova de dentes', size: 'Tamanho: Médio Porte', price: 'R$13,90' },
    { id: 106, image: '/images/tapete-1.png', title: 'Tapete Higiênico SuperSec PetMais', category: 'Higiene', subcategory: 'Tapetes higiênicos', size: 'Tamanho: 80x60cm (30un)', price: 'R$59,90' },
    { id: 107, image: '/images/tapete-2.png', title: 'Tapete Higiênico Lavável EcoPet', category: 'Higiene', subcategory: 'Tapetes higiênicos', size: 'Tamanho: 90x60cm (1un)', price: 'R$44,99' },
    { id: 108, image: '/images/tapete-3.png', title: 'Tapete Higiênico Atrativo PetSoft', category: 'Higiene', subcategory: 'Tapetes higiênicos', size: 'Tamanho: 60x60cm (20un)', price: 'R$36,90' },
    { id: 109, image: '/images/tapete-4.png', title: 'Tapete Higiênico Mega Absorvente UltraPet', category: 'Higiene', subcategory: 'Tapetes higiênicos', size: 'Tamanho: 80x90cm (10un)', price: 'R$42,50' },
    { id: 110, image: '/images/tapete-5.png', title: 'Tapete Higiênico Econômico PetClean', category: 'Higiene', subcategory: 'Tapetes higiênicos', size: 'Tamanho: 60x50cm (50un)', price: 'R$49,90' },
    { id: 111, image: '/images/tapete-6.png', title: 'Tapete Higiênico com Carvão Ativado PetFresh', category: 'Higiene', subcategory: 'Tapetes higiênicos', size: 'Tamanho: 80x60cm (30un)', price: 'R$64,90' },

    { id: 112, image: '/images/coleira-1.png', title: 'Coleira Nylon Ajustável Azul', category: 'Cinto, coleiras e guias', subcategory: 'Coleiras comuns', size: 'Tamanho: M', price: 'R$19,90' },
    { id: 113, image: '/images/coleira-2.png', title: 'Coleira Estampada Patinhas Rosa', category: 'Cinto, coleiras e guias', subcategory: 'Coleiras comuns', size: 'Tamanho: P', price: 'R$17,50' },
    { id: 114, image: '/images/coleira-3.png', title: 'Coleira Refletiva com Fivela Metálica', category: 'Cinto, coleiras e guias', subcategory: 'Coleiras comuns', size: 'Tamanho: G', price: 'R$24,90' },
    { id: 115, image: '/images/coleira-4.png', title: 'Coleira Simples Verde Musgo', category: 'Cinto, coleiras e guias', subcategory: 'Coleiras comuns', size: 'Tamanho: M', price: 'R$15,00' },
    { id: 116, image: '/images/coleira-5.png', title: 'Coleira de Couro Marrom Reforçada', category: 'Cinto, coleiras e guias', subcategory: 'Coleiras comuns', size: 'Tamanho: G', price: 'R$29,90' },
    { id: 117, image: '/images/coleira-6.png', title: 'Coleira Fashion com Lacinho', category: 'Cinto, coleiras e guias', subcategory: 'Coleiras comuns', size: 'Tamanho: P', price: 'R$21,99' },
    { id: 118, image: '/images/peitoral-1.png', title: 'Peitoral Confort Rosa Bebê', category: 'Cinto, coleiras e guias', subcategory: 'Peitorais', size: 'Tamanho: P', price: 'R$34,90' },
    { id: 119, image: '/images/peitoral-2.png', title: 'Peitoral Mesh Azul com Alça', category: 'Cinto, coleiras e guias', subcategory: 'Peitorais', size: 'Tamanho: M', price: 'R$39,90' },
    { id: 120, image: '/images/peitoral-3.png', title: 'Peitoral Esportivo Resistente Preto', category: 'Cinto, coleiras e guias', subcategory: 'Peitorais', size: 'Tamanho: G', price: 'R$45,00' },
    { id: 121, image: '/images/peitoral-4.png', title: 'Peitoral Xadrez Vermelho', category: 'Cinto, coleiras e guias', subcategory: 'Peitorais', size: 'Tamanho: M', price: 'R$37,90' },
    { id: 122, image: '/images/peitoral-5.png', title: 'Peitoral Jeans Estiloso', category: 'Cinto, coleiras e guias', subcategory: 'Peitorais', size: 'Tamanho: P', price: 'R$42,90' },
    { id: 123, image: '/images/peitoral-6.png', title: 'Peitoral Almofadado Cinza', category: 'Cinto, coleiras e guias', subcategory: 'Peitorais', size: 'Tamanho: G', price: 'R$44,50' },
    { id: 124, image: '/images/guia-retratil-1.png', title: 'Guia Retrátil 3m Preta', category: 'Cinto, coleiras e guias', subcategory: 'Guias retráteis', size: 'Tamanho: 3 metros', price: 'R$59,90' },
    { id: 125, image: '/images/guia-retratil-2.png', title: 'Guia Retrátil Azul 5m', category: 'Cinto, coleiras e guias', subcategory: 'Guias retráteis', size: 'Tamanho: 5 metros', price: 'R$64,90' },
    { id: 126, image: '/images/guia-retratil-3.png', title: 'Guia Retrátil Rosa com Detalhes', category: 'Cinto, coleiras e guias', subcategory: 'Guias retráteis', size: 'Tamanho: 3 metros', price: 'R$62,00' },
    { id: 127, image: '/images/guia-retratil-4.png', title: 'Guia Retrátil Resistente 8m', category: 'Cinto, coleiras e guias', subcategory: 'Guias retráteis', size: 'Tamanho: 8 metros', price: 'R$79,90' },
    { id: 128, image: '/images/guia-retratil-5.png', title: 'Guia Retrátil Verde Fluorescente', category: 'Cinto, coleiras e guias', subcategory: 'Guias retráteis', size: 'Tamanho: 5 metros', price: 'R$69,90' },
    { id: 129, image: '/images/guia-retratil-6.png', title: 'Guia Retrátil Básica Laranja', category: 'Cinto, coleiras e guias', subcategory: 'Guias retráteis', size: 'Tamanho: 3 metros', price: 'R$58,00' },
    { id: 130, image: '/images/cinto-seguranca-1.png', title: 'Cinto de Segurança Ajustável Preto', category: 'Cinto, coleiras e guias', subcategory: 'Cintos de segurança', size: 'Tamanho: Único', price: 'R$29,90' },
    { id: 131, image: '/images/cinto-seguranca-2.png', title: 'Cinto para Carro com Mosquetão', category: 'Cinto, coleiras e guias', subcategory: 'Cintos de segurança', size: 'Tamanho: Único', price: 'R$32,90' },
    { id: 132, image: '/images/cinto-seguranca-3.png', title: 'Cinto Pet Colorido Universal', category: 'Cinto, coleiras e guias', subcategory: 'Cintos de segurança', size: 'Tamanho: Único', price: 'R$34,50' },
    { id: 133, image: '/images/cinto-seguranca-4.png', title: 'Cinto de Segurança Rosa Antipuxão', category: 'Cinto, coleiras e guias', subcategory: 'Cintos de segurança', size: 'Tamanho: Único', price: 'R$36,00' },
    { id: 134, image: '/images/cinto-seguranca-5.png', title: 'Cinto com Engate Universal Reforçado', category: 'Cinto, coleiras e guias', subcategory: 'Cintos de segurança', size: 'Tamanho: Único', price: 'R$39,90' },
    { id: 135, image: '/images/cinto-seguranca-6.png', title: 'Cinto Pet Estampado Pata Feliz', category: 'Cinto, coleiras e guias', subcategory: 'Cintos de segurança', size: 'Tamanho: Único', price: 'R$33,00' },

    { id: 136, image: '/images/racao-umida-gatos-1.png', title: 'Ração Úmida Patê de Frango para Gatos Adultos', category: 'Rações para Gatos', subcategory: 'Úmida', size: 'Peso: 100g', price: 'R$5,99' },
    { id: 137, image: '/images/racao-umida-gatos-2.png', title: 'Ração Úmida Sabor Carne ao Molho para Filhotes', category: 'Rações para Gatos', subcategory: 'Úmida', size: 'Peso: 85g', price: 'R$6,49' },
    { id: 138, image: '/images/racao-umida-gatos-3.png', title: 'Ração Úmida Sachê Gato Adulto Sabor Peixe', category: 'Rações para Gatos', subcategory: 'Úmida', size: 'Peso: 85g', price: 'R$4,99' },
    { id: 139, image: '/images/racao-umida-gatos-4.png', title: 'Ração Úmida Gourmet Cordeiro com Arroz', category: 'Rações para Gatos', subcategory: 'Úmida', size: 'Peso: 100g', price: 'R$7,90' },
    { id: 140, image: '/images/racao-umida-gatos-5.png', title: 'Ração Úmida Gatos Castrados Frango e Fígado', category: 'Rações para Gatos', subcategory: 'Úmida', size: 'Peso: 85g', price: 'R$5,49' },
    { id: 141, image: '/images/racao-umida-gatos-6.png', title: 'Ração Úmida Carne e Legumes Natural Premium', category: 'Rações para Gatos', subcategory: 'Úmida', size: 'Peso: 100g', price: 'R$6,99' },
    { id: 142, image: '/images/caixa-areia-tampa-1.png', title: 'Caixa de Areia com Tampa Azul', category: 'Caixas de areia', subcategory: 'Com tampa', size: 'Tamanho: 50x40x40cm', price: 'R$89,90' },
    { id: 143, image: '/images/caixa-areia-tampa-2.png', title: 'Caixa de Areia com Tampa e Filtro', category: 'Caixas de areia', subcategory: 'Com tampa', size: 'Tamanho: 52x41x42cm', price: 'R$99,90' },
    { id: 144, image: '/images/caixa-areia-tampa-3.png', title: 'Caixa de Areia com Tampa Rosa e Alça', category: 'Caixas de areia', subcategory: 'Com tampa', size: 'Tamanho: 48x38x38cm', price: 'R$94,50' },
    { id: 145, image: '/images/caixa-areia-sem-tampa-1.png', title: 'Caixa de Areia Sem Tampa Verde', category: 'Caixas de areia', subcategory: 'Sem tampa', size: 'Tamanho: 45x35x15cm', price: 'R$49,90' },
    { id: 146, image: '/images/caixa-areia-sem-tampa-2.png', title: 'Caixa de Areia Plástica Básica Azul', category: 'Caixas de areia', subcategory: 'Sem tampa', size: 'Tamanho: 50x40x18cm', price: 'R$54,90' },
    { id: 147, image: '/images/caixa-areia-sem-tampa-3.png', title: 'Caixa de Areia Retangular Vermelha', category: 'Caixas de areia', subcategory: 'Sem tampa', size: 'Tamanho: 48x38x16cm', price: 'R$51,90' },
    { id: 148, image: '/images/caixa-areia-auto-1.png', title: 'Caixa de Areia Autolimpante Branca', category: 'Caixas de areia', subcategory: 'Autolimpantes', size: 'Tamanho: 55x45x40cm', price: 'R$199,90' },
    { id: 149, image: '/images/caixa-areia-auto-2.png', title: 'Caixa Autolimpante com Peneira Cinza', category: 'Caixas de areia', subcategory: 'Autolimpantes', size: 'Tamanho: 50x42x38cm', price: 'R$219,90' },
    { id: 150, image: '/images/caixa-areia-auto-3.png', title: 'Caixa de Areia Automática com Sensor', category: 'Caixas de areia', subcategory: 'Autolimpantes', size: 'Tamanho: 60x45x45cm', price: 'R$499,90' },

    { id: 151, image: '/images/areia-higienica-1.png', title: 'Areia Higiênica Super Absorvente Neutra', category: 'Higiene', subcategory: 'Areia Higiênica', size: 'Peso: 4kg', price: 'R$22,90' },
    { id: 152, image: '/images/areia-higienica-2.png', title: 'Areia Higiênica com Perfume Floral', category: 'Higiene', subcategory: 'Areia Higiênica', size: 'Peso: 5kg', price: 'R$25,50' },
    { id: 153, image: '/images/areia-higienica-3.png', title: 'Areia Higiênica de Sílica Cristal Premium', category: 'Higiene', subcategory: 'Areia Higiênica', size: 'Peso: 1,6kg', price: 'R$29,90' },
    { id: 154, image: '/images/shampoo-seco-1.png', title: 'Shampoo Seco Spray para Cães e Gatos', category: 'Higiene', subcategory: 'Shampoo seco', size: 'Volume: 200ml', price: 'R$18,90' },
    { id: 155, image: '/images/shampoo-seco-2.png', title: 'Shampoo Seco Natural com Aloe Vera', category: 'Higiene', subcategory: 'Shampoo seco', size: 'Volume: 150ml', price: 'R$21,50' },
    { id: 156, image: '/images/shampoo-seco-3.png', title: 'Shampoo Seco Refrescante Lavanda', category: 'Higiene', subcategory: 'Shampoo seco', size: 'Volume: 180ml', price: 'R$20,00' },
    { id: 157, image: '/images/escova-pente-1.png', title: 'Escova Dupla Face para Pelos', category: 'Higiene', subcategory: 'Escovas e pente', size: 'Tamanho: Único', price: 'R$24,90' },
    { id: 158, image: '/images/escova-pente-2.png', title: 'Pente Desembaraçador de Aço Inox', category: 'Higiene', subcategory: 'Escovas e pente', size: 'Tamanho: Médio', price: 'R$19,90' },
    { id: 159, image: '/images/escova-pente-3.png', title: 'Escova Autolimpante para Gatos e Cães', category: 'Higiene', subcategory: 'Escovas e pente', size: 'Tamanho: Grande', price: 'R$29,50' },

    { id: 160, image: '/images/arranhador-pequeno-1.png', title: 'Arranhador Compacto de Sisal', category: 'Arranhadores', subcategory: 'Pequenos', size: 'Altura: 30cm', price: 'R$49,90' },
    { id: 161, image: '/images/arranhador-pequeno-2.png', title: 'Arranhador em Forma de Cacto', category: 'Arranhadores', subcategory: 'Pequenos', size: 'Altura: 35cm', price: 'R$59,90' },
    { id: 162, image: '/images/arranhador-pequeno-3.png', title: 'Arranhador de Canto 2 em 1', category: 'Arranhadores', subcategory: 'Pequenos', size: 'Tamanho: 40x25cm', price: 'R$39,90' },
    { id: 163, image: '/images/arranhador-medio-1.png', title: 'Arranhador com Plataforma Elevada', category: 'Arranhadores', subcategory: 'Médios', size: 'Altura: 65cm', price: 'R$89,90' },
    { id: 164, image: '/images/arranhador-medio-2.png', title: 'Arranhador com Brinquedo Suspenso', category: 'Arranhadores', subcategory: 'Médios', size: 'Altura: 60cm', price: 'R$95,00' },
    { id: 165, image: '/images/arranhador-medio-3.png', title: 'Arranhador com Casinha Embutida', category: 'Arranhadores', subcategory: 'Médios', size: 'Altura: 70cm', price: 'R$119,90' },
    { id: 166, image: '/images/arranhador-torre-1.png', title: 'Torre Arranhador com Plataformas', category: 'Arranhadores', subcategory: 'Estilo torre', size: 'Altura: 1,20m', price: 'R$199,90' },
    { id: 167, image: '/images/arranhador-torre-2.png', title: 'Torre de Atividades para Gatos', category: 'Arranhadores', subcategory: 'Estilo torre', size: 'Altura: 1,40m', price: 'R$249,90' },
    { id: 168, image: '/images/arranhador-torre-3.png', title: 'Torre Deluxe com Camas e Tunel', category: 'Arranhadores', subcategory: 'Estilo torre', size: 'Altura: 1,50m', price: 'R$289,90' },
    { id: 169, image: '/images/arranhador-interativo-1.png', title: 'Arranhador Interativo com Bolinhas', category: 'Arranhadores', subcategory: 'Interativos', size: 'Altura: 50cm', price: 'R$79,90' },
    { id: 170, image: '/images/arranhador-interativo-2.png', title: 'Arranhador com Laser Automático', category: 'Arranhadores', subcategory: 'Interativos', size: 'Altura: 55cm', price: 'R$139,90' },
    { id: 171, image: '/images/arranhador-interativo-3.png', title: 'Arranhador com Bolinha e Catnip', category: 'Arranhadores', subcategory: 'Interativos', size: 'Altura: 45cm', price: 'R$89,50' },

    { id: 172, image: '/images/brinquedo-bola-1.png', title: 'Bola Interativa com Luz LED', category: 'Brinquedos', subcategory: 'Bolas', size: 'Tamanho: 6cm', price: 'R$19,90' },
    { id: 173, image: '/images/brinquedo-bola-2.png', title: 'Kit com 3 Bolinhas Texturizadas', category: 'Brinquedos', subcategory: 'Bolas', size: 'Tamanho: 5cm cada', price: 'R$14,50' },
    { id: 174, image: '/images/brinquedo-bola-3.png', title: 'Bola com Catnip para Gatos', category: 'Brinquedos', subcategory: 'Bolas', size: 'Tamanho: 4cm', price: 'R$12,90' },
    { id: 175, image: '/images/mordedor-1.png', title: 'Mordedor em Forma de Osso', category: 'Brinquedos', subcategory: 'Mordedores', size: 'Tamanho: 10cm', price: 'R$16,90' },
    { id: 176, image: '/images/mordedor-2.png', title: 'Mordedor de Borracha com Textura', category: 'Brinquedos', subcategory: 'Mordedores', size: 'Tamanho: 12cm', price: 'R$18,50' },
    { id: 177, image: '/images/mordedor-3.png', title: 'Anel Mordedor Resistente', category: 'Brinquedos', subcategory: 'Mordedores', size: 'Tamanho: 9cm', price: 'R$15,00' },
    { id: 178, image: '/images/pelucia-1.png', title: 'Brinquedo de Pelúcia Patinha', category: 'Brinquedos', subcategory: 'De pelúcia', size: 'Tamanho: 15cm', price: 'R$22,90' },
    { id: 179, image: '/images/pelucia-2.png', title: 'Pelúcia com Apito para Cães', category: 'Brinquedos', subcategory: 'De pelúcia', size: 'Tamanho: 20cm', price: 'R$25,00' },
    { id: 180, image: '/images/pelucia-3.png', title: 'Bicho de Pelúcia para Gatos com Catnip', category: 'Brinquedos', subcategory: 'De pelúcia', size: 'Tamanho: 12cm', price: 'R$19,90' },
    { id: 181, image: '/images/cama-espuma-1.png', title: 'Caminha de Espuma Aconchegante', category: 'Camas', subcategory: 'Espuma', size: 'Tamanho: M', price: 'R$89,90' },
    { id: 182, image: '/images/cama-espuma-2.png', title: 'Colchonete de Espuma Ortopédico', category: 'Camas', subcategory: 'Espuma', size: 'Tamanho: G', price: 'R$109,90' },
    { id: 183, image: '/images/cama-espuma-3.png', title: 'Cama Macia de Espuma com Zíper', category: 'Camas', subcategory: 'Espuma', size: 'Tamanho: P', price: 'R$75,00' },
    { id: 184, image: '/images/casinha-1.png', title: 'Casinha de Pelúcia Fechada', category: 'Camas', subcategory: 'Casinha', size: 'Tamanho: Único', price: 'R$129,90' },
    { id: 185, image: '/images/casinha-2.png', title: 'Casinha Dobrável com Almofada', category: 'Camas', subcategory: 'Casinha', size: 'Tamanho: M', price: 'R$139,90' },
    { id: 186, image: '/images/casinha-3.png', title: 'Casinha Estilo Cabana com Forro Térmico', category: 'Camas', subcategory: 'Casinha', size: 'Tamanho: G', price: 'R$159,90' },
    { id: 187, image: '/images/tunel-1.png', title: 'Túnel Macio com Entrada Dupla', category: 'Camas', subcategory: 'Túnel', size: 'Comprimento: 90cm', price: 'R$69,90' },
    { id: 188, image: '/images/tunel-2.png', title: 'Cama Túnel com Enchimento Fofo', category: 'Camas', subcategory: 'Túnel', size: 'Comprimento: 1m', price: 'R$79,90' },
    { id: 189, image: '/images/tunel-3.png', title: 'Túnel de Brincar e Dormir 2 em 1', category: 'Camas', subcategory: 'Túnel', size: 'Comprimento: 80cm', price: 'R$74,50' },

    { id: 190, image: '/images/pijama-1.png', title: 'Pijama Estampado Algodão Pet', category: 'Roupas e acessórios', subcategory: 'Pijamas', size: 'Tamanho: P', price: 'R$39,90' },
    { id: 191, image: '/images/pijama-2.png', title: 'Pijama Inverno com Capuz', category: 'Roupas e acessórios', subcategory: 'Pijamas', size: 'Tamanho: M', price: 'R$44,90' },
    { id: 192, image: '/images/pijama-3.png', title: 'Pijama Xadrez Pet Style', category: 'Roupas e acessórios', subcategory: 'Pijamas', size: 'Tamanho: G', price: 'R$49,90' },
    { id: 193, image: '/images/coleira-decorada-1.png', title: 'Coleira com Estampa de Frutas', category: 'Roupas e acessórios', subcategory: 'Coleiras decoradas', size: 'Tamanho: Ajustável', price: 'R$29,90' },
    { id: 194, image: '/images/coleira-decorada-2.png', title: 'Coleira com Laço de Cetim', category: 'Roupas e acessórios', subcategory: 'Coleiras decoradas', size: 'Tamanho: P', price: 'R$27,50' },
    { id: 195, image: '/images/coleira-decorada-3.png', title: 'Coleira Colorida com Pingente', category: 'Roupas e acessórios', subcategory: 'Coleiras decoradas', size: 'Tamanho: M', price: 'R$32,90' },
    { id: 196, image: '/images/gravata-1.png', title: 'Gravatinha Clássica Pet', category: 'Roupas e acessórios', subcategory: 'Gravatinhas', size: 'Tamanho: Único', price: 'R$14,90' },
    { id: 197, image: '/images/gravata-2.png', title: 'Gravata Borboleta Estampada', category: 'Roupas e acessórios', subcategory: 'Gravatinhas', size: 'Tamanho: Ajustável', price: 'R$16,90' },
    { id: 198, image: '/images/gravata-3.png', title: 'Gravatinha com Listras e Elástico', category: 'Roupas e acessórios', subcategory: 'Gravatinhas', size: 'Tamanho: P', price: 'R$13,90' },
    { id: 199, image: '/images/carrinho-1.png', title: 'Carrinho Reforçado com Cinto Interno', category: 'Transporte', subcategory: 'Carrinhos', size: 'Capacidade: até 10kg', price: 'R$399,90' },
    { id: 200, image: '/images/carrinho-2.png', title: 'Carrinho com Tela Respirável', category: 'Transporte', subcategory: 'Carrinhos', size: 'Capacidade: até 12kg', price: 'R$429,90' },
    { id: 201, image: '/images/carrinho-3.png', title: 'Carrinho Pet Dobrável Luxo', category: 'Transporte', subcategory: 'Carrinhos', size: 'Capacidade: até 15kg', price: 'R$459,90' },
    { id: 202, image: '/images/cortador-1.png', title: 'Cortador de Unha com Trava de Segurança', category: 'Cuidados', subcategory: 'Cortadores de unha', size: 'Tamanho: Padrão', price: 'R$24,90' },
    { id: 203, image: '/images/cortador-2.png', title: 'Cortador Inox Profissional Pet', category: 'Cuidados', subcategory: 'Cortadores de unha', size: 'Tamanho: Médio', price: 'R$29,90' },
    { id: 204, image: '/images/cortador-3.png', title: 'Cortador com Lixa Embutida', category: 'Cuidados', subcategory: 'Cortadores de unha', size: 'Tamanho: Grande', price: 'R$34,90' },
    { id: 205, image: '/images/escova-cuidados-1.png', title: 'Escova de Cerdas Macias', category: 'Cuidados', subcategory: 'Escovas', size: 'Tamanho: Pequeno', price: 'R$22,90' },
    { id: 206, image: '/images/escova-cuidados-2.png', title: 'Escova Massageadora de Silicone', category: 'Cuidados', subcategory: 'Escovas', size: 'Tamanho: Médio', price: 'R$27,90' },
    { id: 207, image: '/images/escova-cuidados-3.png', title: 'Escova com Pente 2 em 1', category: 'Cuidados', subcategory: 'Escovas', size: 'Tamanho: Grande', price: 'R$31,90' },
    { id: 208, image: '/images/lencos-1.png', title: 'Lenços Umedecidos Neutros PetClean', category: 'Cuidados', subcategory: 'Lenços umedecidos', size: 'Contém: 50 unidades', price: 'R$18,90' },
    { id: 209, image: '/images/lencos-2.png', title: 'Lenços com Aloe Vera Calmante', category: 'Cuidados', subcategory: 'Lenços umedecidos', size: 'Contém: 75 unidades', price: 'R$23,90' },
    { id: 210, image: '/images/lencos-3.png', title: 'Lenços Antissépticos Pós-Passeio', category: 'Cuidados', subcategory: 'Lenços umedecidos', size: 'Contém: 100 unidades', price: 'R$27,90' },

    { id: 211, image: '/images/racao-hamster-1.png', title: 'Mix Nutritivo para Hamsters Jovens', category: 'Rações para Roedores', subcategory: 'Para hamsters', size: 'Peso: 400g', price: 'R$24,90' },
    { id: 212, image: '/images/racao-hamster-2.png', title: 'Ração Natural com Grãos e Frutas Secas', category: 'Rações para Roedores', subcategory: 'Para hamsters', size: 'Peso: 500g', price: 'R$26,50' },
    { id: 213, image: '/images/racao-hamster-3.png', title: 'Ração Orgânica para Hamsters Adultos', category: 'Rações para Roedores', subcategory: 'Para hamsters', size: 'Peso: 350g', price: 'R$28,90' },
    { id: 214, image: '/images/racao-hamster-4.png', title: 'Alimento Balanceado para Hamsters Ativos', category: 'Rações para Roedores', subcategory: 'Para hamsters', size: 'Peso: 450g', price: 'R$22,90' },
    { id: 215, image: '/images/racao-hamster-5.png', title: 'Ração Fortificada com Ômega 3 e 6', category: 'Rações para Roedores', subcategory: 'Para hamsters', size: 'Peso: 300g', price: 'R$25,90' },
    { id: 216, image: '/images/racao-hamster-6.png', title: 'Ração Premium para Hamsters - Maçã e Mel', category: 'Rações para Roedores', subcategory: 'Para hamsters', size: 'Peso: 300g', price: 'R$19,90' },
    { id: 217, image: '/images/racao-porquinho-1.png', title: 'Ração Especial para Porquinhos-da-índia Cenoura', category: 'Rações para Roedores', subcategory: 'Para porquinhos-da-índia', size: 'Peso: 1kg', price: 'R$34,90' },
    { id: 218, image: '/images/racao-porquinho-2.png', title: 'Ração Natural com Ervas Aromáticas', category: 'Rações para Roedores', subcategory: 'Para porquinhos-da-índia', size: 'Peso: 800g', price: 'R$29,90' },
    { id: 219, image: '/images/racao-porquinho-3.png', title: 'Alimento Completo Rico em Vitamina C', category: 'Rações para Roedores', subcategory: 'Para porquinhos-da-índia', size: 'Peso: 1,2kg', price: 'R$38,90' },
    { id: 220, image: '/images/racao-porquinho-4.png', title: 'Mix Nutricional com Feno de Alfafa', category: 'Rações para Roedores', subcategory: 'Para porquinhos-da-índia', size: 'Peso: 900g', price: 'R$32,90' },
    { id: 221, image: '/images/racao-porquinho-5.png', title: 'Ração Veggie com Legumes Desidratados', category: 'Rações para Roedores', subcategory: 'Para porquinhos-da-índia', size: 'Peso: 850g', price: 'R$30,50' },
    { id: 222, image: '/images/racao-porquinho-6.png', title: 'Ração Premium para Pelagem Brilhante', category: 'Rações para Roedores', subcategory: 'Para porquinhos-da-índia', size: 'Peso: 1kg', price: 'R$36,90' },
    { id: 223, image: '/images/racao-coelho-1.png', title: 'Ração Premium para Coelhos Adultos Feno', category: 'Rações para Roedores', subcategory: 'Para coelhos', size: 'Peso: 1kg', price: 'R$33,90' },
    { id: 224, image: '/images/racao-coelho-2.png', title: 'Ração Natural com Alfafa e Camomila', category: 'Rações para Roedores', subcategory: 'Para coelhos', size: 'Peso: 900g', price: 'R$31,90' },
    { id: 225, image: '/images/racao-coelho-3.png', title: 'Mix de Grãos com Ervas Naturais', category: 'Rações para Roedores', subcategory: 'Para coelhos', size: 'Peso: 800g', price: 'R$29,50' },
    { id: 226, image: '/images/racao-coelho-4.png', title: 'Ração Fortificada para Crescimento Saudável', category: 'Rações para Roedores', subcategory: 'Para coelhos', size: 'Peso: 1,2kg', price: 'R$37,90' },
    { id: 227, image: '/images/racao-coelho-5.png', title: 'Ração para Coelhos Filhotes com Prebióticos', category: 'Rações para Roedores', subcategory: 'Para coelhos', size: 'Peso: 750g', price: 'R$28,90' },
    { id: 228, image: '/images/racao-coelho-6.png', title: 'Alimento Integral com Cenoura e Maçã', category: 'Rações para Roedores', subcategory: 'Para coelhos', size: 'Peso: 1kg', price: 'R$34,50' },

    { id: 229, image: '/images/gaiola-tunel-1.png', title: 'Gaiola com Túnel Aventura', category: 'Gaiolas', subcategory: 'Com túnel', size: 'Tamanho: 60x40x45cm', price: 'R$189,90' },
    { id: 230, image: '/images/gaiola-tunel-2.png', title: 'Gaiola com Túnel Divertido', category: 'Gaiolas', subcategory: 'Com túnel', size: 'Tamanho: 55x35x40cm', price: 'R$175,00' },
    { id: 231, image: '/images/gaiola-tunel-3.png', title: 'Gaiola com Túnel Transparente', category: 'Gaiolas', subcategory: 'Com túnel', size: 'Tamanho: 58x38x42cm', price: 'R$199,90' },
    { id: 232, image: '/images/gaiola-multiplano-1.png', title: 'Gaiola Multiplano Premium', category: 'Gaiolas', subcategory: 'Multiplano', size: 'Tamanho: 70x50x60cm', price: 'R$249,90' },
    { id: 233, image: '/images/gaiola-multiplano-2.png', title: 'Gaiola Multiplano Compacta', category: 'Gaiolas', subcategory: 'Multiplano', size: 'Tamanho: 65x45x55cm', price: 'R$229,00' },
    { id: 234, image: '/images/gaiola-multiplano-3.png', title: 'Gaiola Multiplano com Escadas', category: 'Gaiolas', subcategory: 'Multiplano', size: 'Tamanho: 72x48x58cm', price: 'R$259,90' },
    { id: 235, image: '/images/rodinha-1.png', title: 'Rodinha Divertida Antiestresse', category: 'Brinquedos', subcategory: 'Rodinhas', size: 'Tamanho: 20cm de diâmetro', price: 'R$49,90' },
    { id: 236, image: '/images/rodinha-2.png', title: 'Rodinha Silenciosa Noturna', category: 'Brinquedos', subcategory: 'Rodinhas', size: 'Tamanho: 18cm de diâmetro', price: 'R$59,90' },
    { id: 237, image: '/images/rodinha-3.png', title: 'Rodinha com Suporte Antiderrapante', category: 'Brinquedos', subcategory: 'Rodinhas', size: 'Tamanho: 22cm de diâmetro', price: 'R$64,90' },
    { id: 238, image: '/images/escadinha-1.png', title: 'Escadinha de Madeira Natural', category: 'Brinquedos', subcategory: 'Escadinhas', size: 'Tamanho: 30cm', price: 'R$32,90' },
    { id: 239, image: '/images/escadinha-2.png', title: 'Escadinha Colorida Flexível', category: 'Brinquedos', subcategory: 'Escadinhas', size: 'Tamanho: 35cm', price: 'R$29,90' },
    { id: 240, image: '/images/escadinha-3.png', title: 'Escadinha com Argolas de Apoio', category: 'Brinquedos', subcategory: 'Escadinhas', size: 'Tamanho: 33cm', price: 'R$34,50' },
    { id: 241, image: '/images/vitamina-1.png', title: 'Vitamina Fortificante para Roedores', category: 'Cuidado com a saúde', subcategory: 'Vitaminas', size: 'Volume: 30ml', price: 'R$24,90' },
    { id: 242, image: '/images/vitamina-2.png', title: 'Suplemento Nutricional Gotas', category: 'Cuidado com a saúde', subcategory: 'Vitaminas', size: 'Volume: 50ml', price: 'R$29,90' },
    { id: 243, image: '/images/vitamina-3.png', title: 'Complexo Vitamínico para Energia', category: 'Cuidado com a saúde', subcategory: 'Vitaminas', size: 'Volume: 40ml', price: 'R$27,90' },
    { id: 244, image: '/images/dentes-1.png', title: 'Petisco para Dentes Saudáveis', category: 'Cuidado com a saúde', subcategory: 'Itens para dentes', size: 'Peso: 100g', price: 'R$19,90' },
    { id: 245, image: '/images/dentes-2.png', title: 'Bloco Mineral para Roer', category: 'Cuidado com a saúde', subcategory: 'Itens para dentes', size: 'Peso: 80g', price: 'R$14,90' },
    { id: 246, image: '/images/dentes-3.png', title: 'Bastão de Madeira Natural', category: 'Cuidado com a saúde', subcategory: 'Itens para dentes', size: 'Tamanho: 15cm', price: 'R$17,90' },

    { id: 247, image: "/images/racao-calopsita-1.png", title: "Ração Premium para Calopsitas", category: "Rações para Aves", subcategory: "Para calopsitas", size: "Peso: 1kg", price: "R$26,90" },
    { id: 248, image: "/images/racao-calopsita-2.png", title: "Mistura de Sementes com Frutas", category: "Rações para Aves", subcategory: "Para calopsitas", size: "Peso: 800g", price: "R$22,50" },
    { id: 249, image: "/images/racao-calopsita-3.png", title: "Alimento Balanceado com Vitaminas", category: "Rações para Aves", subcategory: "Para calopsitas", size: "Peso: 900g", price: "R$24,90" },
    { id: 250, image: "/images/racao-canario-1.png", title: "Ração Específica para Canários", category: "Rações para Aves", subcategory: "Para canários", size: "Peso: 500g", price: "R$18,90" },
    { id: 251, image: "/images/racao-canario-2.png", title: "Mistura Natural com Mel e Alpiste", category: "Rações para Aves", subcategory: "Para canários", size: "Peso: 600g", price: "R$20,50" },
    { id: 252, image: "/images/racao-canario-3.png", title: "Alimento Nutritivo para Plumagem", category: "Rações para Aves", subcategory: "Para canários", size: "Peso: 550g", price: "R$19,90" },
    { id: 253, image: "/images/racao-papagaio-1.png", title: "Ração Extrusada para Papagaios", category: "Rações para Aves", subcategory: "Para papagaios", size: "Peso: 1,2kg", price: "R$39,90" },
    { id: 254, image: "/images/racao-papagaio-2.png", title: "Mistura Natural com Castanhas", category: "Rações para Aves", subcategory: "Para papagaios", size: "Peso: 1kg", price: "R$36,50" },
    { id: 255, image: "/images/racao-papagaio-3.png", title: "Alimento Completo com Vitaminas", category: "Rações para Aves", subcategory: "Para papagaios", size: "Peso: 1,1kg", price: "R$38,90" },
    { id: 256, image: "/images/gaiola-pequena-1.png", title: "Gaiola Pequena com Bandeja Removível", category: "Gaiolas", subcategory: "Pequenas", size: "Tamanho: 30x25x35cm", price: "R$79,90" },
    { id: 257, image: "/images/gaiola-pequena-2.png", title: "Gaiola Compacta com Poleiro", category: "Gaiolas", subcategory: "Pequenas", size: "Tamanho: 28x22x30cm", price: "R$72,50" },
    { id: 258, image: "/images/gaiola-pequena-3.png", title: "Mini Gaiola Decorativa para Canários", category: "Gaiolas", subcategory: "Pequenas", size: "Tamanho: 26x20x28cm", price: "R$68,90" },
    { id: 259, image: "/images/gaiola-grande-1.png", title: "Gaiola Grande com Rodinhas", category: "Gaiolas", subcategory: "Grandes", size: "Tamanho: 60x40x70cm", price: "R$149,90" },
    { id: 260, image: "/images/gaiola-grande-2.png", title: "Gaiola Ampla com Comedouros Externos", category: "Gaiolas", subcategory: "Grandes", size: "Tamanho: 65x45x75cm", price: "R$159,90" },
    { id: 261, image: "/images/gaiola-grande-3.png", title: "Gaiola de Luxo com Diversos Acessórios", category: "Gaiolas", subcategory: "Grandes", size: "Tamanho: 70x50x80cm", price: "R$179,90" },
    { id: 262, image: "/images/balancinho-1.png", title: "Balancinho de Madeira com Corda", category: "Brinquedos", subcategory: "Balancinhos", size: "Tamanho: 15x10cm", price: "R$18,90" },
    { id: 263, image: "/images/balancinho-2.png", title: "Balanço Colorido com Sinos", category: "Brinquedos", subcategory: "Balancinhos", size: "Tamanho: 20x15cm", price: "R$22,50" },
    { id: 264, image: "/images/balancinho-3.png", title: "Balanço Suspenso com Argolas", category: "Brinquedos", subcategory: "Balancinhos", size: "Tamanho: 18x12cm", price: "R$21,90" },
    { id: 265, image: "/images/espelho-1.png", title: "Espelho Pequeno com Moldura", category: "Brinquedos", subcategory: "Espelhos", size: "Tamanho: 8x6cm", price: "R$12,90" },
    { id: 266, image: "/images/espelho-2.png", title: "Espelho com Sinos Pendentes", category: "Brinquedos", subcategory: "Espelhos", size: "Tamanho: 10x8cm", price: "R$15,90" },
    { id: 267, image: "/images/espelho-3.png", title: "Espelho Duplo com Moldura Colorida", category: "Brinquedos", subcategory: "Espelhos", size: "Tamanho: 12x10cm", price: "R$17,90" },
    { id: 268, image: "/images/poleiro-1.png", title: "Poleiro de Madeira Natural", category: "Acessórios", subcategory: "Poleiros", size: "Tamanho: 25cm", price: "R$14,90" },
    { id: 269, image: "/images/poleiro-2.png", title: "Poleiro Texturizado com Fixador", category: "Acessórios", subcategory: "Poleiros", size: "Tamanho: 20cm", price: "R$16,50" },
    { id: 270, image: "/images/poleiro-3.png", title: "Poleiro Colorido com Saliências", category: "Acessórios", subcategory: "Poleiros", size: "Tamanho: 22cm", price: "R$15,90" },
    { id: 271, image: "/images/comedouro-1.png", title: "Comedouro Transparente com Suporte", category: "Acessórios", subcategory: "Comedouros", size: "Capacidade: 150ml", price: "R$11,90" },
    { id: 272, image: "/images/comedouro-2.png", title: "Comedouro Duplo Antidesperdício", category: "Acessórios", subcategory: "Comedouros", size: "Capacidade: 2x100ml", price: "R$14,50" },
    { id: 273, image: "/images/comedouro-3.png", title: "Comedouro Colorido com Tampa", category: "Acessórios", subcategory: "Comedouros", size: "Capacidade: 200ml", price: "R$13,90" },
    { id: 274, image: "/images/bebedouro-1.png", title: "Bebedouro Automático de Plástico", category: "Acessórios", subcategory: "Bebedouros", size: "Capacidade: 300ml", price: "R$12,50" },
    { id: 275, image: "/images/bebedouro-2.png", title: "Bebedouro Vertical com Bico", category: "Acessórios", subcategory: "Bebedouros", size: "Capacidade: 250ml", price: "R$13,50" },
    { id: 276, image: "/images/bebedouro-3.png", title: "Bebedouro Suspenso para Gaiolas", category: "Acessórios", subcategory: "Bebedouros", size: "Capacidade: 200ml", price: "R$11,90" },

    { id: 277, image: "/images/racao-peixes-1.png", title: "Ração Colorida para Peixes Ornamentais", category: "Rações para Peixes", subcategory: "Para peixes ornamentais", size: "Peso: 100g", price: "R$14,90" },
    { id: 278, image: "/images/racao-peixes-2.png", title: "Ração Premium para Peixes Tropicais", category: "Rações para Peixes", subcategory: "Para peixes ornamentais", size: "Peso: 200g", price: "R$22,90" },
    { id: 279, image: "/images/racao-peixes-3.png", title: "Ração Nutritiva para Peixes Ornamentais", category: "Rações para Peixes", subcategory: "Para peixes ornamentais", size: "Peso: 150g", price: "R$18,90" },
    { id: 280, image: "/images/racao-fundo-1.png", title: "Ração para Peixes de Fundo em Tabletes", category: "Rações para Peixes", subcategory: "Para peixes de fundo", size: "Peso: 100g", price: "R$16,90" },
    { id: 281, image: "/images/racao-fundo-2.png", title: "Ração Afundante para Cascudos", category: "Rações para Peixes", subcategory: "Para peixes de fundo", size: "Peso: 120g", price: "R$19,90" },
    { id: 282, image: "/images/racao-fundo-3.png", title: "Ração Natural para Peixes de Fundo", category: "Rações para Peixes", subcategory: "Para peixes de fundo", size: "Peso: 150g", price: "R$21,90" },
    { id: 283, image: "/images/racao-flocos-1.png", title: "Ração em Flocos para Peixes Tropicais", category: "Rações para Peixes", subcategory: "Em flocos / granulada", size: "Peso: 50g", price: "R$9,90" },
    { id: 284, image: "/images/racao-flocos-2.png", title: "Ração Granulada para Aquário Comunitário", category: "Rações para Peixes", subcategory: "Em flocos / granulada", size: "Peso: 100g", price: "R$14,90" },
    { id: 285, image: "/images/racao-flocos-3.png", title: "Ração Balanceada em Flocos", category: "Rações para Peixes", subcategory: "Em flocos / granulada", size: "Peso: 80g", price: "R$12,90" },
    { id: 286, image: "/images/aquario-pequeno-1.png", title: "Aquário Pequeno de Vidro 10L", category: "Aquários", subcategory: "Pequenos", size: "Capacidade: 10L", price: "R$89,90" },
    { id: 287, image: "/images/aquario-pequeno-2.png", title: "Aquário Mini com Tampa", category: "Aquários", subcategory: "Pequenos", size: "Capacidade: 12L", price: "R$109,90" },
    { id: 288, image: "/images/aquario-pequeno-3.png", title: "Aquário Compacto em Acrílico", category: "Aquários", subcategory: "Pequenos", size: "Capacidade: 8L", price: "R$79,90" },
    { id: 289, image: "/images/aquario-medio-1.png", title: "Aquário Médio de Vidro 30L", category: "Aquários", subcategory: "Médios", size: "Capacidade: 30L", price: "R$179,90" },
    { id: 290, image: "/images/aquario-medio-2.png", title: "Aquário de Vidro com Filtro", category: "Aquários", subcategory: "Médios", size: "Capacidade: 35L", price: "R$199,90" },
    { id: 291, image: "/images/aquario-medio-3.png", title: "Aquário Médio Retangular", category: "Aquários", subcategory: "Médios", size: "Capacidade: 28L", price: "R$169,90" },
    { id: 292, image: "/images/aquario-led-1.png", title: "Aquário com Iluminação LED Azul", category: "Aquários", subcategory: "Com LED", size: "Capacidade: 25L", price: "R$229,90" },
    { id: 293, image: "/images/aquario-led-2.png", title: "Aquário LED com Termostato", category: "Aquários", subcategory: "Com LED", size: "Capacidade: 30L", price: "R$249,90" },
    { id: 294, image: "/images/aquario-led-3.png", title: "Aquário LED Decorativo", category: "Aquários", subcategory: "Com LED", size: "Capacidade: 20L", price: "R$199,90" },
    { id: 295, image: "/images/filtro-interno-1.png", title: "Filtro Interno Submerso", category: "Filtros e acessórios", subcategory: "Filtros internos", size: "Potência: 300L/h", price: "R$69,90" },
    { id: 296, image: "/images/filtro-interno-2.png", title: "Filtro Interno com Ventosa", category: "Filtros e acessórios", subcategory: "Filtros internos", size: "Potência: 250L/h", price: "R$59,90" },
    { id: 297, image: "/images/filtro-interno-3.png", title: "Filtro Interno Compacto", category: "Filtros e acessórios", subcategory: "Filtros internos", size: "Potência: 200L/h", price: "R$49,90" },
    { id: 298, image: "/images/termostato-1.png", title: "Termostato Regulável para Aquário", category: "Filtros e acessórios", subcategory: "Termostatos", size: "Potência: 50W", price: "R$54,90" },
    { id: 299, image: "/images/termostato-2.png", title: "Termostato Submersível com Visor", category: "Filtros e acessórios", subcategory: "Termostatos", size: "Potência: 100W", price: "R$64,90" },
    { id: 300, image: "/images/termostato-3.png", title: "Aquecedor com Termostato Integrado", category: "Filtros e acessórios", subcategory: "Termostatos", size: "Potência: 75W", price: "R$59,90" },
    { id: 301, image: "/images/pedra-difusora-1.png", title: "Pedra Difusora Redonda", category: "Filtros e acessórios", subcategory: "Pedras difusoras", size: "Diâmetro: 3cm", price: "R$6,90" },
    { id: 302, image: "/images/pedra-difusora-2.png", title: "Pedra Difusora Longa", category: "Filtros e acessórios", subcategory: "Pedras difusoras", size: "Comprimento: 10cm", price: "R$8,90" },
    { id: 303, image: "/images/pedra-difusora-3.png", title: "Pedra Difusora Alta Eficiência", category: "Filtros e acessórios", subcategory: "Pedras difusoras", size: "Diâmetro: 4cm", price: "R$7,90" },
    { id: 304, image: "/images/limpeza-1.png", title: "Kit de Limpeza para Aquário", category: "Produtos para manutenção", subcategory: "Limpeza de aquário", size: "Contém: 3 itens", price: "R$29,90" },
    { id: 305, image: "/images/limpeza-2.png", title: "Limpador Magnético para Aquário", category: "Produtos para manutenção", subcategory: "Limpeza de aquário", size: "Tamanho: Médio", price: "R$34,90" },
    { id: 306, image: "/images/limpeza-3.png", title: "Sifão para Limpeza de Fundo", category: "Produtos para manutenção", subcategory: "Limpeza de aquário", size: "Comprimento: 1,5m", price: "R$24,90" },
    { id: 307, image: "/images/teste-agua-1.png", title: "Kit de Teste de pH para Aquário", category: "Produtos para manutenção", subcategory: "Testes de água", size: "Contém: 1 frasco", price: "R$19,90" },
    { id: 308, image: "/images/teste-agua-2.png", title: "Teste de Amônia para Aquários", category: "Produtos para manutenção", subcategory: "Testes de água", size: "Contém: 25 tiras", price: "R$22,90" },
    { id: 309, image: "/images/teste-agua-3.png", title: "Kit Completo de Testes Químicos", category: "Produtos para manutenção", subcategory: "Testes de água", size: "Contém: 4 testes", price: "R$39,90" },
    { id: 310, image: "/images/condicionador-1.png", title: "Condicionador de Água para Aquário", category: "Produtos para manutenção", subcategory: "Condicionadores", size: "Volume: 100ml", price: "R$18,90" },
    { id: 311, image: "/images/condicionador-2.png", title: "Condicionador Anti-Cloro", category: "Produtos para manutenção", subcategory: "Condicionadores", size: "Volume: 120ml", price: "R$21,90" },
    { id: 312, image: "/images/condicionador-3.png", title: "Condicionador com Vitaminas", category: "Produtos para manutenção", subcategory: "Condicionadores", size: "Volume: 150ml", price: "R$24,90" },
    
    { id: 313, image: "/images/vitamina-cao-1.png", title: "Vitamina A para Cães", category: "Vitaminas", subcategory: "Para cães", size: "Embalagem: 60 cápsulas", price: "R$39,90" },
    { id: 314, image: "/images/vitamina-cao-2.png", title: "Complexo B para Cães", category: "Vitaminas", subcategory: "Para cães", size: "Embalagem: 30 comprimidos", price: "R$45,90" },
    { id: 315, image: "/images/vitamina-cao-3.png", title: "Vitamina C Reforço Imunológico para Cães", category: "Vitaminas", subcategory: "Para cães", size: "Embalagem: 100g em pó", price: "R$52,90" },
    { id: 316, image: "/images/vitamina-gato-1.png", title: "Taurina para Gatos", category: "Vitaminas", subcategory: "Para gatos", size: "Embalagem: 60 cápsulas", price: "R$42,90" },
    { id: 317, image: "/images/vitamina-gato-2.png", title: "Ômega 3 e 6 para Gatos", category: "Vitaminas", subcategory: "Para gatos", size: "Frasco: 30ml", price: "R$58,90" },
    { id: 318, image: "/images/vitamina-gato-3.png", title: "Vitaminas Essenciais para Gatos Filhotes", category: "Vitaminas", subcategory: "Para gatos", size: "Embalagem: 45g em pasta", price: "R$49,90" },
    { id: 319, image: "/images/multivitaminico-1.png", title: "Multivitamínico Completo para Cães", category: "Vitaminas", subcategory: "Multivitamínicos", size: "Embalagem: 60 tabletes mastigáveis", price: "R$69,90" },
    { id: 320, image: "/images/multivitaminico-2.png", title: "Multivitamínico para Gatos com Taurina", category: "Vitaminas", subcategory: "Multivitamínicos", size: "Embalagem: 30 cápsulas", price: "R$55,90" },
    { id: 321, image: "/images/multivitaminico-3.png", title: "Multivitamínico Líquido para Cães e Gatos", category: "Vitaminas", subcategory: "Multivitamínicos", size: "Frasco: 120ml", price: "R$75,90" },
    { id: 322, image: "/images/suplemento-articular-1.png", title: "Suplemento Articular para Cães com Condroitina e Glicosamina", category: "Suplementos", subcategory: "Articulares", size: "Embalagem: 60 tabletes", price: "R$89,90" },
    { id: 323, image: "/images/suplemento-articular-2.png", title: "Suplemento Articular para Gatos com Ômega 3", category: "Suplementos", subcategory: "Articulares", size: "Frasco: 60ml", price: "R$78,90" },
    { id: 324, image: "/images/suplemento-articular-3.png", title: "Colágeno para Cães e Gatos", category: "Suplementos", subcategory: "Articulares", size: "Embalagem: 150g em pó", price: "R$95,90" },
    { id: 325, image: "/images/suplemento-pelagem-1.png", title: "Suplemento para Pelagem Brilhante de Cães", category: "Suplementos", subcategory: "Para pelagem", size: "Embalagem: 90 cápsulas", price: "R$62,90" },
    { id: 326, image: "/images/suplemento-pelagem-2.png", title: "Óleo de Linhaça para Pelagem de Gatos", category: "Suplementos", subcategory: "Para pelagem", size: "Frasco: 100ml", price: "R$55,90" },
    { id: 327, image: "/images/suplemento-pelagem-3.png", title: "Suplemento com Biotina para Cães e Gatos", category: "Suplementos", subcategory: "Para pelagem", size: "Embalagem: 45 tabletes", price: "R$59,90" },
    { id: 328, image: "/images/antipulgas-topico-1.png", title: "Antipulgas Tópico para Cães Pequenos", category: "Antipulgas", subcategory: "Tópicos", size: "Embalagem: 1 pipeta", price: "R$42,90" },
    { id: 329, image: "/images/antipulgas-topico-2.png", title: "Antipulgas Tópico para Gatos", category: "Antipulgas", subcategory: "Tópicos", size: "Embalagem: 1 pipeta", price: "R$38,90" },
    { id: 330, image: "/images/antipulgas-topico-3.png", title: "Antipulgas e Carrapatos Tópico para Cães Médios", category: "Antipulgas", subcategory: "Tópicos", size: "Embalagem: 1 pipeta", price: "R$55,90" },
    { id: 331, image: "/images/antipulgas-comprimido-1.png", title: "Antipulgas Oral para Cães", category: "Antipulgas", subcategory: "Comprimidos", size: "Embalagem: 3 comprimidos", price: "R$79,90" },
    { id: 332, image: "/images/antipulgas-comprimido-2.png", title: "Antipulgas e Carrapatos Oral para Cães", category: "Antipulgas", subcategory: "Comprimidos", size: "Embalagem: 1 comprimido", price: "R$65,90" },
    { id: 333, image: "/images/antipulgas-comprimido-3.png", title: "Antipulgas Oral para Gatos", category: "Antipulgas", subcategory: "Comprimidos", size: "Embalagem: 6 comprimidos", price: "R$52,90" },
    { id: 334, image: "/images/antipulgas-coleira-1.png", title: "Coleira Antipulgas para Cães Pequenos", category: "Antipulgas", subcategory: "Coleiras", size: "Tamanho: Pequeno", price: "R$85,90" },
    { id: 335, image: "/images/antipulgas-coleira-2.png", title: "Coleira Antipulgas para Gatos", category: "Antipulgas", subcategory: "Coleiras", size: "Tamanho: Único", price: "R$78,90" },
    { id: 336, image: "/images/antipulgas-coleira-3.png", title: "Coleira Antipulgas para Cães Grandes", category: "Antipulgas", subcategory: "Coleiras", size: "Tamanho: Grande", price: "R$92,90" },
    { id: 337, image: "/images/vermifugo-liquido-1.png", title: "Vermífugo Líquido para Cães Filhotes", category: "Vermífugos", subcategory: "Líquido", size: "Frasco: 20ml", price: "R$35,90" },
    { id: 338, image: "/images/vermifugo-liquido-2.png", title: "Vermífugo Líquido para Gatos", category: "Vermífugos", subcategory: "Líquido", size: "Frasco: 15ml", price: "R$32,90" },
    { id: 339, image: "/images/vermifugo-liquido-3.png", title: "Vermífugo Líquido de Amplo Espectro para Cães", category: "Vermífugos", subcategory: "Líquido", size: "Frasco: 30ml", price: "R$48,90" },
    { id: 340, image: "/images/vermifugo-comprimido-1.png", title: "Vermífugo Comprimido para Cães Pequenos", category: "Vermífugos", subcategory: "Comprimido", size: "Embalagem: 4 comprimidos", price: "R$39,90" },
    { id: 341, image: "/images/vermifugo-comprimido-2.png", title: "Vermífugo Comprimido para Gatos", category: "Vermífugos", subcategory: "Comprimido", size: "Embalagem: 2 comprimidos", price: "R$36,90" },
    { id: 342, image: "/images/vermifugo-comprimido-3.png", title: "Vermífugo Comprimido para Cães Grandes", category: "Vermífugos", subcategory: "Comprimido", size: "Embalagem: 1 comprimido", price: "R$52,90" },
    { id: 343, image: "/images/vermifugo-especifico-1.png", title: "Vermífugo Específico para Filhotes de Cães", category: "Vermífugos", subcategory: "Específico por animal", size: "Embalagem: 1 frasco", price: "R$41,90" },
    { id: 344, image: "/images/vermifugo-especifico-2.png", title: "Vermífugo Específico para Gatos Adultos", category: "Vermífugos", subcategory: "Específico por animal", size: "Embalagem: 2 comprimidos", price: "R$38,90" },
    { id: 345, image: "/images/vermifugo-especifico-3.png", title: "Vermífugo Específico para Cães Sensíveis", category: "Vermífugos", subcategory: "Específico por animal", size: "Embalagem: 3 comprimidos", price: "R$45,90" },
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
