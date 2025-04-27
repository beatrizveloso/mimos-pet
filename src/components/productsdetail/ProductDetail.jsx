import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import "./ProductDetail.css";

const produtosData = [
  {
    "id": 1,
    "image": "/images/ração-1.png",
    "title": "Ração Seca Para Gatos Adultos Carne",
    "category": "Rações para Gatos",
    "size": "2,7kg",
    "subcategory": "Seca",
    "price": "R$42,42",
    "descricao": [
      "Indicada para gatos adultos a partir de 1 ano de idade.",
      "Ração premium 100% completa e balanceada.",
      "Nuggets crocantes com recheio macio e saboroso.",
      "Com prebióticos que contribuem para digestão saudável.",
      "Desenvolvida nutricionalmente em conjunto com veterinários.",
      "Com múltiplas fibras para promover a saúde gastrointestinal.",
      "Controle de minerais para manter o trato urinário saudável.",
      "Vitaminas e antioxidantes que ajudam o sistema imunológico.",
      "Ômega 6 e zinco para manter a pele e pelo saudáveis.",
      "Disponível em embalagens de 500 g, 900 g, 2,7 kg, 10,1 kg, leve 10,1kg e pague 9kg."
    ],
    "composicao": "Farinha de carne e ossos bovinos, farinha de vísceras de aves, milho integral moído, farelo de glúten de milho, proteína isolada de soja, arroz quebrado, gordura de frango, gordura bovina, hidrolisado de fígado de aves e suínos, óleo de peixe, cloreto de sódio (sal), cloreto de potássio, polpa de beterraba, levedura seca de cervejaria, taurina, vitaminas (A, D3, E, K3, B1, B2, B6, B12, C, niacina, ácido pantotênico, ácido fólico, biotina, colina), minerais (cálcio, fósforo, zinco, manganês, cobre, iodo, selênio), antioxidantes."
  },
  {
    "id": 2,
    "image": "/images/pipicat.png",
    "title": "Areia Higiênica Pipicat Classic Para Gatos",
    "category": "Higiene",
    "subcategory": "Areia Higiênica",
    "size": "4kg",
    "price": "R$12,25",
    "descricao": [
      "A Areia Higiênica Pipicat Classic é uma excelente escolha para quem busca praticidade e eficiência na higiene do seu gato. Desenvolvida com argila 100% natural, possui alto poder de absorção, formando torrões firmes e secos que facilitam a remoção das necessidades do animal. Com sua composição de qualidade, controla odores desagradáveis, mantendo o ambiente mais fresco e agradável por muito mais tempo.",
      <br />,
      "Outro grande benefício da Pipicat Classic é que ela não levanta poeira ao ser manipulada, proporcionando mais conforto para o tutor e evitando possíveis alergias respiratórias nos felinos. Além disso, sua fórmula é atóxica e livre de produtos químicos agressivos, garantindo total segurança para o seu pet. Ideal para gatos de todas as idades, essa areia higiênica é uma solução econômica e eficiente para o dia a dia.",
      <br />,
      "Com grãos de tamanho ideal para as patinhas dos gatos, proporciona uma experiência mais confortável ao seu animal de estimação, incentivando-o a utilizar a bandeja sanitária de forma natural. Para obter melhores resultados, recomenda-se manter uma camada de aproximadamente 5 cm na bandeja e remover os torrões diariamente. Dessa forma, a higiene do ambiente será mantida e seu pet terá sempre um local limpo e agradável."
    ],
    "composicao": "Argila 100% natural de alta qualidade, selecionada e processada para oferecer máxima absorção e eficiência na formação de torrões firmes e secos, facilitando a remoção e manutenção da bandeja sanitária. Sua composição livre de fragrâncias artificiais e produtos químicos agressivos a torna uma opção segura para gatos de todas as idades, especialmente aqueles com maior sensibilidade a odores e substâncias sintéticas. Além de sua excelente capacidade de absorção de líquidos, essa areia higiênica age no controle eficaz de odores, neutralizando os cheiros desagradáveis sem a necessidade de aditivos artificiais. Por ser atóxica e biodegradável, contribui para a preservação do meio ambiente e proporciona um ambiente mais saudável tanto para os pets quanto para os tutores. Sua textura foi cuidadosamente desenvolvida para proporcionar conforto às patinhas dos gatos, incentivando o uso regular da caixa de areia e garantindo uma experiência agradável ao animal. Além disso, a baixa emissão de poeira minimiza riscos de alergias respiratórias, tornando-se uma excelente escolha para lares com múltiplos gatos. Ideal para quem busca praticidade, eficiência e um produto natural que respeita a saúde e o bem-estar dos animais de estimação."
  },
  {
    "id": 3,
    "image": "/images/mochila-cat.png",
    "title": "Mochila Transporte Pet Para Gatos e Cães",
    "category": "Transporte",
    "subcategory": "Mochilas",
    "size": "Único",
    "price": "R$347,99",
    "descricao": [
      "A Mochila de Transporte Pet para Gatos e Cães foi projetada para garantir o máximo de conforto e segurança durante passeios e viagens. Com um design moderno e funcional, conta com uma estrutura resistente feita de policarbonato reforçado e tecido oxford respirável, proporcionando durabilidade e ventilação adequada. Seu formato ergonômico distribui o peso de maneira equilibrada, reduzindo o impacto no ombro e nas costas do tutor, permitindo longos passeios com mais conforto.",
      <br />,
      "Além de seu design ergonômico, a mochila possui uma janela transparente em formato de bolha, o que permite ao seu pet observar o ambiente externo, tornando a viagem mais interessante e menos estressante. A bolha proporciona uma visão panorâmica, enquanto as múltiplas aberturas laterais e superiores garantem a circulação de ar, evitando o superaquecimento e mantendo o conforto do seu pet durante o trajeto.",
      <br />,
      "O interior da mochila é espaçoso, com um fundo reforçado e uma almofada removível para maior estabilidade, permitindo que o pet se acomode de maneira confortável. As alças ajustáveis e acolchoadas proporcionam um transporte ergonômico para o tutor, enquanto o zíper reforçado impede aberturas acidentais, garantindo a segurança do animal durante o deslocamento. Este modelo foi desenvolvido para viagens curtas ou longas, passeios ao ar livre e até mesmo visitas ao veterinário, sendo uma solução prática e segura para o transporte do seu pet."
    ],
    "composicao": "A mochila é estruturada com policarbonato de alta resistência, oferecendo durabilidade e proteção contra impactos. Seu revestimento em tecido oxford respirável permite uma ventilação adequada, mantendo o conforto térmico para o pet, especialmente em viagens mais longas. As janelas de ventilação em tela de malha promovem a circulação de ar, evitando o superaquecimento e garantindo que o ambiente dentro da mochila permaneça fresco e confortável para o animal. O zíper reforçado de alta qualidade foi projetado para evitar aberturas acidentais, proporcionando total segurança durante o transporte. A almofada interna removível é feita de material macio e estável, ideal para proporcionar um descanso confortável ao pet, e pode ser facilmente removida e lavada para manter a higiene. O design ergonômico das alças ajustáveis e acolchoadas oferece um transporte mais prático e confortável para o tutor, distribuindo o peso de maneira equilibrada e reduzindo o impacto nas costas e ombros. Esta mochila foi desenvolvida com a combinação perfeita de funcionalidade, resistência e conforto, oferecendo uma experiência de transporte excepcional para ambos, tutor e pet."
  },
  {
    "id": 4,
    "image": "/images/bola-cravo.png",
    "title": "Brinquedo Bola Vinil com Cravo para Cães",
    "category": "Brinquedos",
    "subcategory": "Bolas",
    "size": "Tamanho: P",
    "price": "R$14,49",
    "descricao": [
      "O Brinquedo Bola Vinil com Cravo para Cães é ideal para os cães que adoram brincar e morder. Feito de vinil de alta qualidade, esse brinquedo é durável e resistente, sendo perfeito para o uso diário e interações ativas. Seu design em forma de bola, com cravos em relevo, proporciona uma experiência divertida e ao mesmo tempo auxilia na higiene dental do seu pet.",
      <br />,
      "O formato de bola torna o brinquedo fácil de pegar e morder, enquanto os cravos em relevo ajudam na remoção de sujeiras e resíduos dentais, proporcionando um benefício extra para a saúde oral do seu cão. Além disso, a textura ajuda a massagear as gengivas e a reduzir o acúmulo de placa bacteriana, contribuindo para dentes mais saudáveis e fortes.",
      <br />,
      "Ideal para cães de todas as idades, esse brinquedo é seguro e pode ser usado tanto dentro quanto fora de casa. A resistência do material garante que ele se mantenha intacto durante as brincadeiras mais intensas. Além disso, o brinquedo é fácil de limpar, bastando lavar com água e sabão para mantê-lo sempre em boas condições."
    ],
    "composicao": "Fabricado em vinil de alta resistência, o brinquedo é totalmente seguro para o seu pet, livre de produtos químicos nocivos. O material é flexível, o que permite que a bola seja pressionada e mordida sem risco de quebra, mas ao mesmo tempo mantém a durabilidade, mesmo com o uso constante. A textura de cravos foi projetada para proporcionar um efeito de limpeza dental eficaz, ajudando na manutenção da saúde oral do animal. Além disso, o brinquedo é leve e fácil de manusear, permitindo que seu pet brinque por horas sem se cansar."
  },
  {
    "id": 5,
    "image": "/images/brinquedo-ventosa.png",
    "title": "Brinquedo Corda Ventosa Morder Pet Cachorro Azul",
    "category": "Brinquedos",
    "subcategory": "Mordedores",
    "size": "Tamanho: Único",
    "price": "R$19,30",
    "descricao": [
      "O Brinquedo Corda Ventosa Morder Pet Cachorro Azul é uma opção divertida e interativa para o seu cão. Ele combina a diversão de morder e puxar com a vantagem da ventosa, que permite que o brinquedo seja fixado em superfícies lisas, proporcionando uma diversão contínua. O design com corda é ideal para cães que adoram brincar de puxar, estimulando tanto o físico quanto a mente do seu pet.",
      <br />,
      "Além de ser um brinquedo para morder e puxar, ele também oferece benefícios na saúde dental do cão, ajudando a limpar os dentes e massagear as gengivas. A ventosa é feita de material resistente e é fácil de prender em superfícies como pisos de cerâmica ou vidro, o que possibilita ao seu pet brincar sozinho ou com a ajuda do tutor.",
      <br />,
      "Esse brinquedo é ideal para cães de porte pequeno e médio e oferece uma excelente alternativa para liberar a energia do seu pet, ao mesmo tempo em que promove a interação entre o animal e o tutor, aumentando os laços de afeto."
    ],
    "composicao": "A ventosa é feita de borracha resistente e de alta qualidade, oferecendo forte aderência a superfícies lisas. A corda é fabricada em poliéster, o que a torna durável e resistente a mordidas. O material utilizado é não tóxico e seguro para o animal, garantindo que o brinquedo possa ser usado com total segurança. Sua estrutura foi projetada para suportar brincadeiras intensas e durar por mais tempo, mesmo em cães que gostam de morder objetos com força."
  },
  {
    "id": 6,
    "image": "/images/comedouro.png",
    "title": "Comedouro E Brinquedo Petball Mini Pet Games",
    "category": "Brinquedos",
    "subcategory": "Bolas",
    "size": "Tamanho: P",
    "price": "R$36,46",
    "descricao": [
      "O Comedouro e Brinquedo Petball Mini Pet Games é um acessório inovador que combina a alimentação e o lazer do seu pet em um único item. Desenvolvido para estimular a mente do seu pet durante as refeições, este comedouro interativo permite que seu animal de estimação se divirta enquanto se alimenta, ajudando a evitar a alimentação rápida e promovendo uma digestão mais saudável.",
      <br />,
      "Com um design divertido em formato de bola, o Petball pode ser usado tanto para oferecer ração quanto para petiscos, ajudando a prolongar a refeição e incentivando o seu pet a brincar. Esse brinquedo comedouro é ideal para cães de porte pequeno a médio e pode ser usado para aliviar o estresse, evitando o tédio e promovendo mais atividade física.",
      <br />,
      "O material utilizado é seguro e fácil de limpar, permitindo que o acessório seja reutilizado com frequência sem comprometer a higiene. Perfeito para cães ativos, o Petball Mini Pet Games é uma excelente opção para promover saúde e bem-estar para o seu amigo de quatro patas."
    ],
    "composicao": "Feito de plástico resistente e seguro para o pet, o Petball é livre de substâncias tóxicas, garantindo a saúde do seu animal durante o uso. Sua estrutura é robusta, mas flexível o suficiente para não se quebrar facilmente durante o uso. A superfície é lisa, facilitando a limpeza, e o design da bola foi projetado para que os alimentos ou petiscos saiam de forma gradual, estimulando o seu pet a continuar brincando enquanto se alimenta. Ideal para cães que precisam de uma forma de entretenimento interativo durante as refeições."
  },
  {
    "id": 7,
    "image": "/images/shampoo-neutro.png",
    "title": "Shampoo Pet Clean Neutro para Cães e Gatos",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 700ml",
    "price": "R$17,90",
    "descricao": [
      "O Shampoo Pet Clean Neutro para Cães e Gatos é ideal para higienizar e cuidar da pele e pelos do seu pet, sem causar irritações. Sua fórmula neutra foi especialmente desenvolvida para ser suave e eficaz, proporcionando limpeza profunda e hidratação dos pelos e da pele. Com pH balanceado, esse shampoo é seguro para o uso em animais de todas as idades e pelagens.",
      <br />,
      "Enriquecido com ingredientes naturais que ajudam a manter o pelo brilhante e saudável, o Shampoo Pet Clean Neutro também auxilia na prevenção de ressecamento e coceiras, deixando a pele do seu pet mais suave e macia. Seu uso frequente ajuda a manter a higiene e o frescor, controlando odores indesejados e proporcionando uma sensação de bem-estar ao seu animal de estimação.",
      <br />,
      "Esse shampoo é ideal para cães e gatos com pelagens sensíveis, pois é livre de corantes e fragrâncias artificiais, garantindo o máximo de cuidado com a saúde do seu pet."
    ],
    "composicao": "A fórmula do Shampoo Pet Clean Neutro é enriquecida com ativos naturais como aloe vera e camomila, conhecidos por suas propriedades calmantes e hidratantes. O pH balanceado assegura que o shampoo seja gentil para a pele do pet, enquanto os agentes de limpeza de origem vegetal ajudam a remover sujeiras e impurezas sem agredir a pele ou os pelos. Livre de corantes e fragrâncias artificiais, o shampoo é seguro para pets de pelagem sensível e pode ser usado frequentemente sem causar ressecamento ou irritações."
  },
  {
    "id": 8,
    "image": "/images/frango-galinha.png",
    "title": "Frango Galinha Borracha Morder Brinquedo Pet",
    "category": "Brinquedos",
    "subcategory": "Mordedores",
    "size": "Tamanho: Único",
    "price": "R$19,60",
    "descricao": [
      "O Brinquedo de Borracha Frango Galinha é perfeito para cães que adoram morder e brincar por horas. Feito de borracha de alta qualidade, ele é resistente e durável, sendo ideal para cães de todos os portes. Seu formato em frango galinha proporciona uma experiência divertida e única para o seu pet, estimulando-o a morder e brincar com o brinquedo.",
      <br />,
      "A borracha flexível ajuda a aliviar o estresse, ao mesmo tempo em que promove a saúde dental do seu cão, ajudando a manter os dentes limpos e as gengivas saudáveis. Seu material é não tóxico e seguro para o pet, garantindo que ele possa brincar sem preocupações. Este brinquedo também pode ser usado em sessões de treino ou interação entre tutor e pet, tornando as brincadeiras ainda mais prazerosas.",
      <br />,
      "Ideal para cães que adoram brincar de morder, o brinquedo também é fácil de limpar, podendo ser lavado para garantir a manutenção da higiene do produto. Perfeito para o entretenimento do seu pet!"
    ],
    "composicao": "Feito de borracha resistente e flexível, o Brinquedo Frango Galinha é seguro para o pet, livre de substâncias tóxicas. A borracha é projetada para suportar mordidas intensas, garantindo a durabilidade do brinquedo mesmo durante brincadeiras mais ativas. Além disso, o material utilizado é fácil de limpar, podendo ser lavado frequentemente sem comprometer a qualidade do brinquedo."
  },


  {
    "id": 9,
    "image": "/images/ração-2.png",
    "title": "Ração Golden Frango e Carne Gatos Castrados",
    "category": "Rações para Gatos",
    "subcategory": "Seca",
    "size": "Tamanho: 10,1kg",
    "price": "R$141,21",
    "descricao": [
      "A Ração Golden Frango e Carne para Gatos Castrados foi desenvolvida especialmente para atender às necessidades nutricionais de gatos castrados. Com uma combinação de frango e carne, oferece uma refeição saborosa e balanceada, rica em proteínas de alta qualidade para a manutenção da saúde do seu pet. Essa fórmula é enriquecida com vitaminas e minerais, essenciais para fortalecer o sistema imunológico e promover a vitalidade do gato castrado.",
      <br />,
      "Sua composição favorece o controle do peso, uma vez que a castração pode levar a mudanças no metabolismo do animal. A adição de fibras e o controle da quantidade de calorias ajudam a manter o peso ideal, prevenindo a obesidade. Além disso, a ração contém nutrientes que ajudam na saúde das vias urinárias e promovem um pelo macio e brilhante."
    ],
    "composicao": "Frango, carne, arroz, milho, glúten de milho, gordura animal, fibra vegetal, óleo de peixe, vitaminas, minerais, taurina, antioxidantes. Fórmula livre de corantes artificiais, ideal para gatos castrados."
  },
  {
    "id": 10,
    "image": "/images/ração-3.png",
    "title": "Ração Special Cat Premium Para Gatos Adultos Castrados",
    "category": "Rações para Gatos",
    "subcategory": "Sênior",
    "size": "Tamanho: 1kg",
    "price": "R$24,90",
    "descricao": [
      "A Ração Special Cat Premium foi elaborada para atender as necessidades específicas dos gatos adultos castrados. Sua fórmula é rica em proteínas de alta qualidade, além de ser enriquecida com nutrientes essenciais para o bom funcionamento do organismo do seu pet.",
      <br />,
      "Com sabor irresistível, ela oferece uma alimentação equilibrada e completa, com ingredientes que ajudam na manutenção de um peso saudável e na saúde das vias urinárias, frequentemente mais delicadas em gatos castrados. Sua composição também contribui para a saúde da pele e pelos, deixando-os mais brilhantes e macios."
    ],
    "composicao": "Frango, arroz, milho, gordura animal, óleo de peixe, minerais, fibras vegetais, vitaminas, taurina. Livre de corantes artificiais."
  },
  {
    "id": 11,
    "image": "/images/ração-4.png",
    "title": "Gran Plus Ração Gatos Filhotes Frango e Arroz",
    "category": "Rações para Gatos",
    "subcategory": "Filhotes",
    "size": "Tamanho: 1kg",
    "price": "R$27,90",
    "descricao": [
      "A Ração Gran Plus Frango e Arroz é formulada para atender as necessidades de nutrição dos filhotes de gatos. Com ingredientes de alta qualidade, como frango e arroz, essa ração oferece proteínas essenciais para o desenvolvimento muscular e energético dos felinos em fase de crescimento.",
      <br />,
      "Além disso, a composição contém nutrientes que ajudam a fortalecer o sistema imunológico do filhote, promovendo uma saúde robusta. Seu formato crocante e sabor delicioso também é ideal para estimular o apetite dos pequenos felinos. O arroz é uma excelente fonte de carboidratos de fácil digestão, proporcionando uma refeição leve e nutritiva."
    ],
    "composicao": "Frango, arroz, milho, gordura animal, fibras vegetais, óleo de peixe, vitaminas, minerais, taurina. Livre de corantes artificiais."
  },
  {
    "id": 12,
    "image": "/images/ração-5.png",
    "title": "Ração para Gatos Filhotes Frango Leite Cenoura",
    "category": "Rações para Gatos",
    "subcategory": "Filhotes",
    "size": "Tamanho: 1kg",
    "price": "R$29,90",
    "descricao": [
      "Esta ração para gatos filhotes é uma combinação perfeita de frango, leite e cenoura, oferecendo uma refeição balanceada e saborosa para os filhotes. Ela foi especialmente formulada para promover um crescimento saudável, com alta concentração de proteínas e vitaminas essenciais para o desenvolvimento dos ossos e músculos do seu pet.",
      <br />,
      "Com nutrientes que auxiliam no fortalecimento do sistema imunológico e na saúde intestinal, esta ração também contém fibras vegetais para garantir uma digestão mais eficiente. O sabor delicado da cenoura e o leite proporcionam um equilíbrio nutricional que agrada até os felinos mais exigentes."
    ],
    "composicao": "Frango, leite, cenoura, arroz, milho, gordura animal, fibras vegetais, vitaminas, minerais, taurina."
  },
  {
    "id": 13,
    "image": "/images/ração-6.png",
    "title": "Ração Spert Cat Premium para Gatos Frango e Salmão",
    "category": "Rações para Gatos",
    "subcategory": "Filhotes",
    "size": "Tamanho: 10,1kg",
    "price": "R$149,84",
    "descricao": [
      "A Ração Spert Cat Premium Frango e Salmão é ideal para gatos adultos, oferecendo uma alimentação rica e balanceada para manter a saúde e o bem-estar do seu pet. Com uma combinação exclusiva de frango e salmão, essa ração oferece proteínas de alta qualidade e ácidos graxos essenciais para a saúde do coração e da pele do gato.",
      <br />,
      "Além disso, a fórmula contém ácidos graxos ômega-3 e ômega-6, que ajudam a manter a pele saudável e os pelos brilhosos. A adição de taurina contribui para a saúde ocular e cardíaca do seu felino. A ração também auxilia na saúde das vias urinárias e no controle do peso, sendo ideal para gatos que precisam de uma dieta equilibrada e nutritiva."
    ],
    "composicao": "Frango, salmão, arroz, milho, gordura animal, óleo de peixe, taurina, fibras vegetais, vitaminas, minerais."
  },
  {
    "id": 14,
    "image": "/images/ração-7.png",
    "title": "Ração Golden Gatos Castrados Frango com Abóbora",
    "category": "Rações para Gatos",
    "subcategory": "Seca",
    "size": "Tamanho: 3kg",
    "price": "R$73,90",
    "descricao": [
      "A Ração Golden Gatos Castrados Frango com Abóbora foi especialmente desenvolvida para gatos castrados, que exigem uma dieta equilibrada para controle de peso e manutenção da saúde. A adição de abóbora proporciona um benefício extra para o sistema digestivo do seu gato, favorecendo a digestão e a absorção de nutrientes.",
      <br />,
      "Com proteínas de alta qualidade, essa ração ajuda a manter a musculatura e o sistema imunológico do felino em dia. Além disso, a fórmula é enriquecida com fibras que auxiliam no controle do peso, prevenindo a obesidade, condição comum em gatos castrados. A ração também é enriquecida com vitaminas e minerais para fortalecer o organismo e promover uma pele saudável e pelos brilhantes."
    ],
    "composicao": "Frango, abóbora, arroz, milho, gordura animal, fibra vegetal, óleo de peixe, vitaminas, minerais, taurina."
  },
  {
    "id": 15,
    "image": "/images/ração-8.png",
    "title": "Ração Golden Gatos Castrados Salmão Premium",
    "category": "Rações para Gatos",
    "subcategory": "Seca",
    "size": "Tamanho: 10,1kg",
    "price": "R$167,10",
    "descricao": [
      "A Ração Golden Gatos Castrados Salmão Premium oferece uma dieta equilibrada para gatos castrados, com foco no controle do peso e na manutenção da saúde das vias urinárias. Com um alto teor de salmão, essa ração proporciona ácidos graxos essenciais, como o ômega-3, para a saúde da pele e dos pelos do seu pet.",
      <br />,
      "A fórmula também contém fibras e proteínas de alta qualidade, que auxiliam no controle do peso e no fortalecimento da musculatura do gato. Além disso, a adição de taurina é fundamental para a saúde ocular e cardíaca, promovendo uma vida mais saudável e ativa para seu gato castrado."
    ],
    "composicao": "Salmão, arroz, milho, gordura animal, óleo de peixe, fibras vegetais, taurina, vitaminas, minerais."
  },
  {
    "id": 16,
    "image": "/images/ração-9.png",
    "title": "Mandala Blend Gatos Adultos Carne e Frango",
    "category": "Rações para Gatos",
    "subcategory": "Sênior",
    "size": "Tamanho: 10,1kg",
    "price": "R$109,90",
    "descricao": [
      "A Ração Mandala Blend Gatos Adultos Carne e Frango foi especialmente desenvolvida para gatos adultos que buscam uma alimentação completa e balanceada. Com uma combinação de carne e frango, oferece proteínas de alta qualidade que ajudam na manutenção da musculatura e do sistema imunológico.",
      <br />,
      "Além disso, a fórmula contém ácidos graxos essenciais, como ômega-3 e ômega-6, que auxiliam na saúde da pele e pelos do seu pet. É uma ração com ingredientes naturais que também favorece a digestão e o bem-estar do gato, além de promover um equilíbrio nutricional completo para o seu animal de estimação."
    ],
    "composicao": "Carne, frango, arroz, milho, gordura animal, óleo de peixe, taurina, fibras vegetais, vitaminas, minerais."
  },
  {
    "id": 17,
    "image": "/images/ração-10.png",
    "title": "Ração Gatos Castrados Salmão e Batata Doce",
    "category": "Rações para Gatos",
    "subcategory": "Seca",
    "size": "Tamanho: 10,1kg",
    "price": "R$184,89",
    "descricao": [
      "A Ração Gatos Castrados Salmão e Batata Doce foi formulada especialmente para gatos castrados, com a combinação perfeita de salmão e batata doce para ajudar na manutenção do peso e na saúde das vias urinárias.",
      <br />,
      "O salmão é uma excelente fonte de ácidos graxos essenciais, enquanto a batata doce contribui para a digestão saudável e é rica em fibras. Essa ração ajuda a manter o seu gato saudável e ativo, promovendo também uma pele saudável e pelos brilhosos."
    ],
    "composicao": "Salmão, batata doce, arroz, milho, gordura animal, fibras vegetais, óleo de peixe, taurina, vitaminas, minerais."
  },
  {
    "id": 18,
    "image": "/images/ração-11.png",
    "title": "Ração Premier Gatos Adultos Castrados Frango",
    "category": "Rações para Gatos",
    "subcategory": "Seca",
    "size": "Tamanho: 1,5kg",
    "price": "R$68,57",
    "descricao": [
      "A Ração Premier Gatos Adultos Castrados Frango foi desenvolvida para gatos castrados, com uma formulação balanceada que favorece o controle do peso e mantém a saúde das vias urinárias. Com frango de alta qualidade como fonte principal de proteína, ela ajuda a manter o seu gato saudável e ativo.",
      <br />,
      "Enriquecida com vitaminas, minerais e ácidos graxos, essa ração também auxilia na saúde da pele e dos pelos, mantendo o pelo do seu pet macio e brilhante. É a escolha ideal para gatos castrados que precisam de uma dieta especial para se manterem saudáveis."
    ],
    "composicao": "Frango, arroz, milho, gordura animal, óleo de peixe, fibras vegetais, taurina, vitaminas, minerais."
  },
  {
    "id": 19,
    "image": "/images/ração-12.png",
    "title": "Ração Gatos Castrados Super Premium Pet Gold",
    "category": "Rações para Gatos",
    "subcategory": "Seca",
    "size": "Tamanho: 10,1kg",
    "price": "R$124,29",
    "descricao": [
      "A Ração Gatos Castrados Super Premium Pet Gold é uma ração completa e equilibrada, ideal para gatos castrados. Sua fórmula contém ingredientes de alta qualidade, como carne e arroz, que ajudam a controlar o peso e a promover a saúde do sistema urinário.",
      <br />,
      "A presença de ácidos graxos essenciais, como o ômega-3 e ômega-6, auxilia na manutenção de uma pele saudável e pelos brilhantes. Esta ração também é rica em fibras, que ajudam a regular a digestão e favorecem o bem-estar do gato castrado."
    ],
    "composicao": "Carne, arroz, milho, gordura animal, óleo de peixe, taurina, fibras vegetais, vitaminas, minerais."
  },
  {
    "id": 20,
    "image": "/images/ração-13.png",
    "title": "Ração Magnus Mix Partículas Recheadas para Gatos Adultos",
    "category": "Rações para Gatos",
    "subcategory": "Seca",
    "size": "Tamanho: 25kg",
    "price": "R$259,66",
    "descricao": [
      "A Ração Magnus Mix Partículas Recheadas para Gatos Adultos é uma opção de alimentação premium, feita com uma combinação de ingredientes de alta qualidade, como carne e arroz, que ajudam na manutenção da saúde do seu gato. Seu formato de partículas recheadas proporciona uma refeição saborosa e nutritiva.",
      <br />,
      "Essa ração contém fibras que auxiliam na digestão e são ideais para gatos adultos. Além disso, a adição de vitaminas e minerais promove um sistema imunológico forte e uma pelagem saudável."
    ],
    "composicao": "Carne, arroz, milho, gordura animal, óleo de peixe, taurina, fibras vegetais, vitaminas, minerais."
  },
  {
    "id": 21,
    "image": "/images/ração-14.png",
    "title": "Ração Magnus Cat Premium Gatos Filhotes Mix de Sabores",
    "category": "Rações para Gatos",
    "subcategory": "Filhotes",
    "size": "Tamanho: 15kg",
    "price": "R$162,14",
    "descricao": [
      "A Ração Magnus Cat Premium Gatos Filhotes Mix de Sabores é uma ração desenvolvida especialmente para atender às necessidades nutricionais dos filhotes. Com uma mistura de sabores, como carne e frango, ela oferece as proteínas e nutrientes essenciais para o crescimento saudável do seu gato.",
      <br />,
      "Com ingredientes de alta qualidade, essa ração também ajuda no fortalecimento do sistema imunológico e promove o desenvolvimento ósseo e muscular. Sua fórmula balanceada é perfeita para garantir que seu filhote tenha uma dieta completa e nutritiva."
    ],
    "composicao": "Carne, frango, arroz, milho, gordura animal, fibras vegetais, óleo de peixe, taurina, vitaminas, minerais."
  },
  {
    "id": 22,
    "image": "/images/ração-15.png",
    "title": "Ração Special Cat Gatos Adultos Carne",
    "category": "Rações para Gatos",
    "subcategory": "Sênior",
    "size": "Tamanho: 20kg",
    "price": "R$238,90",
    "descricao": [
      "A Ração Special Cat Gatos Adultos Carne é uma excelente opção de alimentação para gatos adultos. Com uma rica composição de carne de alta qualidade, ela oferece as proteínas necessárias para a manutenção da saúde muscular e do sistema imunológico do seu pet.",
      <br />,
      "Além disso, essa ração é enriquecida com vitaminas e minerais essenciais para garantir a saúde geral do seu gato. Com um sabor irresistível, ela proporciona uma refeição deliciosa e nutritiva, ideal para manter seu gato saudável e feliz."
    ],
    "composicao": "Carne, arroz, milho, gordura animal, óleo de peixe, taurina, fibras vegetais, vitaminas, minerais."
  },
  {
    "id": 23,
    "image": "/images/ração-16.png",
    "category": "Rações para Gatos",
    "subcategory": "Filhotes",
    "size": "Tamanho: 10kg",
    "price": "R$162,12",
    "descricao": [
      "A Ração Magnus Cat Premium Gatos Filhotes Carne e Frango é formulada especialmente para filhotes, oferecendo uma alimentação equilibrada e rica em proteínas essenciais para o crescimento saudável.",
      <br />,
      "Com carne e frango como fontes de proteína, ela fornece todos os nutrientes necessários para o desenvolvimento ósseo, muscular e imunológico do seu filhote. A ração também contém ácidos graxos essenciais e vitaminas que contribuem para a saúde da pele e pelos."
    ],
    "composicao": "Carne, frango, arroz, milho, gordura animal, óleo de peixe, taurina, fibras vegetais, vitaminas, minerais."
  },

  {
    "id": 24,
    "image": "/images/higiene-1.png",
    "title": "Kit Higiene Pocket Pet Clean para Cães e Gatos",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: Único",
    "price": "R$59,90",
    "descricao": [
      "O Kit Higiene Pocket Pet Clean para Cães e Gatos é a solução perfeita para manter seu pet sempre limpo e bem cuidado. Este kit contém produtos essenciais para a higiene do seu animal, como toalhas umedecidas e outros itens que ajudam a limpar sem agredir a pele do seu pet.",
      <br />,
      "Ideal para pets com pelagem sensível, o kit é prático e pode ser levado para passeios, viagens ou usados no dia a dia para manter seu cão ou gato sempre limpo."
    ],
    "composicao": "Toalhas umedecidas, produto de limpeza suave, embalagem prática."
  },
  {
    "id": 25,
    "image": "/images/higiene-2.png",
    "title": "Fluído Desembaraçador Premium Cães",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 500ml",
    "price": "R$41,21",
    "descricao": [
      "O Fluído Desembaraçador Premium para Cães é ideal para deixar o pelo do seu pet macio e livre de nós. Com fórmula especialmente desenvolvida para cães, esse fluído ajuda a desembaraçar os pelos sem causar danos, tornando o processo de escovação mais rápido e eficaz.",
      <br />,
      "Além disso, ele proporciona brilho e suavidade aos pelos, garantindo um acabamento perfeito após o uso. Seu cheiro suave mantém o pet perfumado por mais tempo."
    ],
    "composicao": "Água, agentes desembaraçantes, fragrância suave, fórmula não irritante."
  },
  {
    "id": 26,
    "image": "/images/higiene-3.png",
    "title": "Shampoo E Condicionador Pet Clean 5 Em 1 Para Cães",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 700ml",
    "price": "R$17,89",
    "descricao": [
      "O Shampoo e Condicionador Pet Clean 5 Em 1 para Cães é um produto completo, formulado para limpar, hidratar e condicionar o pelo do seu pet em uma única aplicação. Ideal para cães de todos os portes e pelagens, ele deixa o pelo macio, brilhante e sem nós.",
      <br />,
      "Com ação 5 em 1, esse shampoo também oferece proteção contra odores, promovendo uma sensação de frescor durante todo o dia. Seu uso contínuo ajuda a manter a saúde do pelo e da pele do seu pet."
    ],
    "composicao": "Água, detergente suave, agentes hidratantes, fragrância, pH balanceado."
  },
  {
    "id": 27,
    "image": "/images/higiene-4.png",
    "title": "Shampoo Cães Gatos Brilho Intenso Pelos Escuros",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 500ml",
    "price": "R$58,80",
    "descricao": [
      "O Shampoo para Cães e Gatos Brilho Intenso Pelos Escuros foi desenvolvido para realçar o brilho e a cor dos pelos escuros, proporcionando uma limpeza profunda sem agredir a pele do pet. Sua fórmula especial traz um efeito luminoso nos pelos, deixando-os mais saudáveis e com aparência intensa.",
      <br />,
      "Ideal para pets com pelagem preta ou escura, este shampoo é perfeito para quem busca intensificar a cor e o brilho dos pelos do seu animal."
    ],
    "composicao": "Água, extrato de ervas, agentes de brilho, pH balanceado, fragrância suave."
  },
  {
    "id": 28,
    "image": "/images/higiene-5.png",
    "title": "Shampoo Limpeza Suave Pet Neutro Filhotes",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 500ml",
    "price": "R$57,40",
    "descricao": [
      "O Shampoo Limpeza Suave Pet Neutro para Filhotes foi formulado especialmente para a pele sensível dos filhotes. Com pH neutro e ingredientes suaves, ele limpa sem agredir, mantendo a proteção natural da pele do seu pet.",
      <br />,
      "Esse shampoo é ideal para filhotes de cães e gatos, proporcionando uma limpeza eficaz, sem causar irritações ou desconforto."
    ],
    "composicao": "Água, agentes de limpeza suave, pH neutro, sem corantes e parabenos."
  },
  {
    "id": 29,
    "image": "/images/higiene-6.png",
    "title": "Fluido Desembaraçador Cães Gatos Pelos Longos",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 200ml",
    "price": "R$43,60",
    "descricao": [
      "O Fluído Desembaraçador para Cães e Gatos com Pelos Longos é a solução ideal para manter os pelos do seu pet sempre sedosos e sem nós. Com fórmula leve e eficaz, ele facilita a escovação, removendo os nós e deixando o pelo do pet mais fácil de cuidar.",
      <br />,
      "Além disso, ele hidrata a pele e os pelos, proporcionando maciez e brilho, além de um perfume suave e agradável."
    ],
    "composicao": "Água, agentes desembaraçantes, hidratantes, fragrância suave."
  },
  {
    "id": 30,
    "image": "/images/higiene-7.png",
    "title": "Granado Shampoo Pet Neutro Todos os Tipos de Pelos",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 500ml",
    "price": "R$57,40",
    "descricao": [
      "O Granado Shampoo Pet Neutro para Todos os Tipos de Pelos é uma fórmula neutra, ideal para pets de todos os tipos de pelagem. Seu pH balanceado limpa delicadamente o pelo e a pele do seu pet, sem ressecar ou irritar.",
      <br />,
      "A suavidade desse shampoo garante que a higiene do seu pet seja eficaz e segura, mantendo a saúde da pele e o brilho dos pelos."
    ],
    "composicao": "Água, detergente suave, pH neutro, fragrância agradável."
  },
  {
    "id": 31,
    "image": "/images/higiene-8.png",
    "title": "Shampoo Pet Desembaraçador Pelos Longos",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 500ml",
    "price": "R$57,40",
    "descricao": [
      "O Shampoo Pet Desembaraçador para Pelos Longos foi desenvolvido para cães e gatos com pelagem longa. Sua fórmula desembaraçante facilita a escovação e reduz os nós, além de proporcionar brilho e maciez aos pelos.",
      <br />,
      "Ideal para pets com pelos longos ou propensos a embaraçar, este shampoo hidrata e mantém a pelagem do seu pet sempre bonita."
    ],
    "composicao": "Água, agentes desembaraçantes, hidratantes, fragrância suave."
  },
  {
    "id": 32,
    "image": "/images/higiene-9.png",
    "title": "Shampoo Pet Azul Pelos Claros Granado",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 500ml",
    "price": "R$55,90",
    "descricao": [
      "O Shampoo Pet Azul Granado é ideal para cães e gatos com pelagem clara. Sua fórmula foi desenvolvida para realçar o brilho dos pelos claros, proporcionando uma limpeza eficaz sem agredir a pele.",
      <br />,
      "Com extratos naturais, este shampoo deixa os pelos mais brilhantes e saudáveis, promovendo um efeito luminoso nos pelos claros do seu pet."
    ],
    "composicao": "Água, extrato de ervas, agentes de brilho, fragrância suave."
  },
  {
    "id": 33,
    "image": "/images/higiene-10.png",
    "title": "Shampoo e Condicionador 2 em 1 Genial Pet",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 500ml",
    "price": "R$22,90",
    "descricao": [
      "O Shampoo e Condicionador 2 em 1 Genial Pet é a solução prática para manter seu pet limpo e bem cuidado. Sua fórmula combina as funções de shampoo e condicionador, proporcionando limpeza e hidratação simultaneamente.",
      <br />,
      "Ideal para pets de pelagem normal, este produto deixa os pelos macios, brilhantes e fáceis de escovar, garantindo que o seu animal fique sempre com aspecto saudável."
    ],
    "composicao": "Água, detergente suave, agentes hidratantes, pH balanceado."
  },
  {
    "id": 34,
    "image": "/images/higiene-11.png",
    "title": "Shampoo K Dog Coco e Menta para Cães e Gatos",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 250ml",
    "price": "R$18,50",
    "descricao": [
      "O Shampoo K Dog Coco e Menta é um produto refrescante para cães e gatos, com a ação combinada do coco e da menta. A fórmula ajuda a manter a pelagem limpa e cheirosa, proporcionando frescor duradouro.",
      <br />,
      "Além disso, esse shampoo deixa os pelos do seu pet hidratados, macios e brilhantes, com um perfume suave e agradável."
    ],
    "composicao": "Água, extrato de coco, menta, fragrância suave, pH balanceado."
  },
  {
    "id": 35,
    "image": "/images/higiene-12.png",
    "title": "Condicionador Beeps Hidratante Manteiga de Karité",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 480ml",
    "price": "R$41,61",
    "descricao": [
      "O Condicionador Beeps Hidratante Manteiga de Karité é ideal para hidratar profundamente o pelo do seu pet. Com manteiga de karité, ele proporciona nutrição e brilho aos pelos, deixando-os sedosos e macios.",
      <br />,
      "Este condicionador também ajuda a prevenir o ressecamento da pele, mantendo o equilíbrio necessário para uma pelagem saudável e bonita."
    ],
    "composicao": "Água, manteiga de karité, agentes hidratantes, fragrância suave."
  },
  {
    "id": 36,
    "image": "/images/higiene-13.png",
    "title": "Condicionador Au.Migos Pets Todos os tipos de pelos",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 400ml",
    "price": "R$49,90",
    "descricao": [
      "O Condicionador Au.Migos Pets foi desenvolvido para atender às necessidades de todos os tipos de pelagem, proporcionando maciez e brilho. Sua fórmula hidrata e nutre os pelos, tornando-os mais fáceis de desembaraçar.",
      <br />,
      "Além disso, ele ajuda a melhorar a textura do pelo e promove um acabamento suave e sedoso, ideal para manter seu pet sempre bem cuidado."
    ],
    "composicao": "Água, extratos vegetais, agentes hidratantes, fragrância suave."
  },
  {
    "id": 37,
    "image": "/images/higiene-14.png",
    "title": "Shampoo para Pet Au.Migos Pets 5 em 1",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 400ml",
    "price": "R$49,90",
    "descricao": [
      "O Shampoo Au.Migos Pets 5 em 1 foi desenvolvido para proporcionar uma limpeza completa e eficaz em seu pet. Ele combina as funções de shampoo, condicionador, hidratante, desembaraçante e proteção contra odores.",
      <br />,
      "Ideal para cães e gatos, esse shampoo deixa a pelagem limpa, macia e cheirosa, sem ressecar a pele. É a escolha perfeita para pets de todos os tipos de pelagem e portes."
    ],
    "composicao": "Água, agentes de limpeza e hidratação, fragrância, pH balanceado."
  },
  {
    "id": 38,
    "image": "/images/higiene-15.png",
    "title": "Desembaraçador De Pelos Cachorro E Gatos Pet Clean",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 500ml",
    "price": "R$17,76",
    "descricao": [
      "O Desembaraçador de Pelos Pet Clean é ideal para facilitar a escovação de cães e gatos com pelagem longa. Sua fórmula desembaraçante remove os nós e ajuda a manter o pelo macio e sedoso.",
      <br />,
      "Além disso, esse produto hidrata a pele e dá brilho aos pelos, proporcionando uma sensação de frescor e bem-estar ao seu pet."
    ],
    "composicao": "Água, agentes desembaraçantes, hidratação, fragrância suave."
  },
  {
    "id": 39,
    "image": "/images/higiene-16.png",
    "title": "Fluido Desembaraçador Pet Hydra Fluído",
    "category": "Higiene",
    "subcategory": "Shampoo e Condicionador",
    "size": "Tamanho: 240ml",
    "price": "R$63,65",
    "descricao": [
      "O Fluído Desembaraçador Pet Hydra Fluído foi desenvolvido para cães e gatos com pelos longos ou propensos a embaraçar. Sua fórmula avançada desembaraça rapidamente os nós e hidrata a pelagem.",
      <br />,
      "Ideal para pelagens finas e longas, ele ajuda a manter os pelos sedosos, brilhantes e fáceis de escovar, além de deixar um perfume suave e agradável."
    ],
    "composicao": "Água, agentes desembaraçantes, hidratantes, fragrância suave."
  },

  {
    "id": 40,
    "image": "/images/transporte-1.png",
    "title": "Caixa Transporte Alvorada N.2 - p/ Cães e Gatos",
    "category": "Transporte",
    "size": "Tamanho: M",
    "price": "R$48,99",
    "descricao": [
      "A Caixa de Transporte Alvorada N.2 é ideal para garantir segurança e conforto no transporte de cães e gatos de pequeno e médio porte. Com design funcional, possui ótima ventilação nas laterais, alça superior para facilitar o transporte e trava segura que impede a abertura acidental. Sua estrutura rígida protege o animal durante viagens de carro, visitas ao veterinário ou deslocamentos urbanos. É fácil de montar, desmontar e higienizar, sendo uma excelente opção para quem busca praticidade e bem-estar para o pet."
    ],
    "composicao": "Fabricada em plástico polipropileno resistente, com grade metálica na porta frontal. As laterais possuem aberturas que garantem ventilação constante. A alça é também em plástico reforçado, pensada para suportar o peso de animais de até 10kg, proporcionando durabilidade e segurança ao tutor."
  },
  {
    "id": 41,
    "image": "/images/transporte-2.png",
    "title": "Bolsa Transporte Pet Luxo Com Rodinhas Dupla Cães Gatos",
    "category": "Transporte",
    "size": "Tamanho: M",
    "price": "R$541,40",
    "descricao": [
      "A Bolsa Transporte Pet Luxo com Rodinhas é perfeita para tutores que prezam por conforto e praticidade. Conta com alça retrátil tipo carrinho, rodinhas que giram 360º e compartimentos com ventilação total, garantindo segurança e boa circulação de ar para o pet. Seu design elegante e funcional a torna ideal para viagens de longa duração, inclusive em aeroportos. O espaço interno é acolchoado, o que proporciona uma viagem mais tranquila para cães e gatos de pequeno a médio porte."
    ],
    "composicao": "Estrutura feita com tecido poliéster reforçado de alta densidade, base rígida interna removível para higienização, telas respiráveis de nylon nas laterais e frente, rodinhas de PVC com rolamento suave, zíperes duplos de metal e alça retrátil com encaixe ergonômico."
  },
  {
    "id": 42,
    "image": "/images/transporte-3.png",
    "title": "6 Seis Caixas Pets Transporte Animais Pequeno",
    "category": "Transporte",
    "size": "Tamanho: P",
    "price": "R$344,95",
    "descricao": [
      "Este kit contém 6 caixas de transporte ideais para criadores, abrigos ou pet shops que precisam acomodar vários animais pequenos com segurança. Com design leve e resistente, cada caixa oferece ventilação lateral para manter o ar sempre fresco e portas frontais com sistema de travamento seguro. São empilháveis, fáceis de armazenar e transportar, além de permitirem uma higienização rápida, sendo ideais para ambientes com alta rotatividade de animais."
    ],
    "composicao": "Fabricadas em plástico de alta resistência com acabamento liso que facilita a limpeza, essas caixas possuem grades frontais de plástico rígido com fechos traváveis. As aberturas nas laterais proporcionam ventilação constante, enquanto os encaixes das partes são fixados com travas resistentes à pressão."
  },
  {
    "id": 43,
    "image": "/images/transporte-4.png",
    "title": "Kit Bolsa de transporte para cães e gatos zíper com Pelucia",
    "category": "Transporte",
    "size": "Tamanho: P",
    "price": "R$147,11",
    "descricao": [
      "Bolsa moderna e charmosa com acabamento em pelúcia sintética macia, ideal para passeios curtos com cães e gatos pequenos. O zíper reforçado garante segurança durante o transporte, enquanto o interior acolchoado proporciona conforto térmico. Leve e compacta, é perfeita para levar o pet ao shopping, ao parque ou em visitas rápidas. Seu visual delicado agrada tutores que querem unir estilo e praticidade no dia a dia com o pet."
    ],
    "composicao": "Exterior em poliéster com revestimento sintético de pelúcia antialérgica, interior acolchoado com espuma macia e base firme de polietileno. Zíper metálico resistente e alça de ombro reforçada com costura dupla. Toda a estrutura é pensada para suportar até 6kg de maneira segura e confortável."
  },
  {
    "id": 44,
    "image": "/images/transporte-5.png",
    "title": "Bolsa Transporte Sanremo Cachorro Gato Bordo Campania",
    "category": "Transporte",
    "size": "Tamanho: P",
    "price": "R$197,35",
    "descricao": [
      "A Bolsa de Transporte Sanremo modelo Campania combina elegância e funcionalidade. Ideal para cães e gatos pequenos, ela possui estrutura firme que mantém a forma mesmo com o uso prolongado. Sua ventilação lateral garante o conforto térmico do animal, enquanto as alças acolchoadas proporcionam ergonomia ao tutor. Um produto pensado para quem preza por qualidade e quer transportar o pet com segurança e estilo em qualquer ocasião."
    ],
    "composicao": "Tecido poliéster resistente com tratamento impermeável, base rígida de polietileno para estabilidade, alças de ombro acolchoadas com costura reforçada e painéis laterais em tela de nylon para ventilação. Fechamento com zíper duplo de metal resistente à tração e ferragens de liga leve."
  },
  {
    "id": 45,
    "image": "/images/transporte-6.png",
    "title": "Mochila Para Transporte De Gatos E Cães Reforçada",
    "category": "Transporte",
    "size": "Tamanho: P",
    "price": "R$247,52",
    "descricao": [
      "Com design moderno e resistente, esta mochila é ideal para carregar seu pet com segurança durante passeios urbanos, trilhas ou viagens. Permite ao tutor ter as mãos livres enquanto o animal é mantido confortável. Possui ampla ventilação por telas de malha e aberturas práticas com zíper para acesso rápido. Seu interior espaçoso e forro acolchoado tornam o transporte agradável mesmo por longos períodos."
    ],
    "composicao": "Tecido em nylon de alta durabilidade, malha de poliéster para ventilação nas laterais e frente, zíperes resistentes com puxadores de metal, alças ajustáveis com enchimento de espuma EVA e fecho peitoral para estabilidade. Base acolchoada interna removível para fácil limpeza."
  },
  {
    "id": 46,
    "image": "/images/transporte-7.png",
    "title": "Bolsa De Transporte Pet Avião Para Cães E Gatos",
    "category": "Transporte",
    "size": "Tamanho: M",
    "price": "R$199,90",
    "descricao": [
      "Desenvolvida para atender às exigências de transporte em companhias aéreas, esta bolsa oferece segurança, ventilação e conforto em viagens. Com dimensões que respeitam as normas de cabine, ela conta com alça de ombro ajustável e base interna firme. É perfeita para tutores que viajam com frequência e querem garantir bem-estar ao pet durante o voo, com entradas de ar nos quatro lados e estrutura semi-rígida que garante estabilidade."
    ],
    "composicao": "Tecido impermeável com camada interna em PVC, zíper reforçado de metal com trava de segurança, painéis laterais em tela respirável, alça removível ajustável e base acolchoada com espuma de polietileno expandido. Ideal para pets de até 8kg."
  },
  {
    "id": 47,
    "image": "/images/transporte-8.png",
    "title": "Kit Cachorro Gato Cama Caminha Transporte Sanitário",
    "category": "Transporte",
    "size": "Tamanho: G",
    "price": "R$57,40",
    "descricao": [
      "Este kit multifuncional é ideal para quem está começando a cuidar de um pet, unindo praticidade e economia. Inclui caminha macia, caixa de transporte leve e bandeja sanitária prática. A caminha possui revestimento aconchegante que garante conforto durante o sono, enquanto a caixa é segura e arejada para deslocamentos. Já o sanitário possui bordas altas para evitar respingos e manter o ambiente limpo. Tudo isso em um conjunto harmonioso e funcional."
    ],
    "composicao": "Caminha feita em tecido poliéster com enchimento em fibra siliconada, caixa de transporte em plástico rígido e ventilado, bandeja sanitária em plástico com acabamento brilhante fácil de limpar. Ideal para animais de até 12kg."
  },
  {
    "id": 48,
    "image": "/images/transporte-9.png",
    "title": "Caixa Transporte ATLAS 20 Trendy Plus Ferplast",
    "category": "Transporte",
    "size": "Tamanho: M",
    "price": "R$155,90",
    "descricao": [
      "A Caixa ATLAS 20 Trendy Plus da Ferplast é referência em segurança, conforto e durabilidade. Com design moderno e funcional, ela é perfeita para viagens de carro ou avião, com excelente ventilação nas laterais e porta frontal com trava de segurança. A alça superior facilita o transporte e a estrutura robusta protege o pet em qualquer deslocamento. É fácil de limpar e desmontar, ideal para cães e gatos de pequeno e médio porte."
    ],
    "composicao": "Fabricada em plástico injetado resistente a impactos, com portas de metal galvanizado anticorrosão. Laterais com aberturas amplas para ventilação, alça superior de transporte em plástico reforçado, presilhas de segurança e sistema de encaixe rápido entre a tampa e a base."
  },
  {
    "id": 49,
    "image": "/images/transporte-10.png",
    "title": "Kit Cama Cachorro Gato Iglu Transporte Sanitário Educador",
    "category": "Transporte",
    "size": "Tamanho: M",
    "price": "R$138,29",
    "descricao": [
      "O kit inclui uma caminha iglu acolchoada, caixa de transporte compacta e itens de higiene como educador sanitário e tapete higiênico. Ideal para quem acabou de adotar um pet ou busca um conjunto completo. O iglu oferece abrigo confortável e térmico, enquanto a caixa facilita os deslocamentos e o sanitário auxilia no treinamento e limpeza. Uma solução prática e charmosa para os cuidados com seu melhor amigo."
    ],
    "composicao": "Caminha iglu feita em poliéster e espuma de alta densidade, caixa de transporte em plástico ventilado com tampa removível, tapete higiênico com camada absorvente e educador sanitário líquido com fórmula atóxica e aroma suave. Todos os materiais são laváveis e duráveis."
  },









  {
    "id": 50,
    "image": "/images/fantasia-1.png",
    "title": "Fantasia Pet Morcego Batman para Gatos e Cachorros",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: M",
    "price": "R$94,00",
    "descricao": [
      "Transforme seu pet em um verdadeiro herói com a Fantasia de Morcego inspirada no Batman. Com asas de morcego acopladas e detalhes temáticos, ela é ideal para festas, Halloween ou sessões de fotos. Leve e confortável, não atrapalha os movimentos do animal e é de fácil colocação. Perfeita para gatos e cachorros pequenos que adoram atenção e estilo. O tecido é respirável e o acabamento é feito para durar mesmo com o uso contínuo."
    ],
    "composicao": "Tecido poliéster leve e durável, fechamento com velcro de alta fixação, malha elástica nas extremidades para ajuste confortável e asas em material sintético flexível. Costura reforçada para evitar rasgos, mesmo com o movimento ativo dos pets."
  },
  {
    "id": 51,
    "image": "/images/fantasia-2.png",
    "title": "Fantasia de Pet Vampiro Drácula",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: P",
    "price": "R$75,60",
    "descricao": [
      "Transforme seu pet em um charmoso vampiro com esta fantasia temática de Drácula. Com uma capa preta fluida, gola alta dramática e acabamento elegante, esta peça é perfeita para eventos de Halloween, festas à fantasia ou sessões de fotos cheias de estilo. O visual clássico de vampiro garante olhares e elogios por onde seu pet passar. Feita com atenção aos detalhes para garantir conforto, liberdade de movimento e um toque especial de charme sombrio."
    ],
    "composicao": "Tecido sintético leve e confortável, algodão de toque macio para não irritar a pele do pet, e fecho em velcro para fácil ajuste. Ideal para pets de pequeno porte que adoram se destacar com estilo."
  },
  {
    "id": 52,
    "image": "/images/fantasia-3.png",
    "title": "Fantasia Pet Robin do Batman para Cães",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: G",
    "price": "R$69,90",
    "descricao": [
      "Leve seu pet para aventuras heróicas com a fantasia do Robin, fiel escudeiro do Batman. Com estampa colorida, capa vermelha removível e fechos em velcro, o traje é fácil de vestir e ajustar. A peça garante conforto para o animal e muito estilo para qualquer evento. Ideal para passeios temáticos, festas geek ou momentos criativos com a família. Deixe seu cão brilhar como o parceiro perfeito na luta contra o tédio!"
    ],
    "composicao": "Feita com algodão respirável, poliéster resistente e elástico maleável, garantindo conforto durante o uso prolongado. Fecho em velcro facilita vestir e retirar a fantasia com praticidade."
  },
  {
    "id": 53,
    "image": "/images/fantasia-4.png",
    "title": "Fantasia Pet Flash para Cães Grandes",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: G",
    "price": "R$74,90",
    "descricao": [
      "Para cães rápidos e cheios de energia, essa fantasia do super-herói Flash é a escolha perfeita! Com estampa vibrante na parte frontal e máscara inclusa, o traje oferece um visual completo. Confortável e ajustável, ela foi feita especialmente para cães de porte grande que adoram chamar atenção. Ideal para encontros temáticos, fotos divertidas e comemorações especiais. Deixe seu pet correr com estilo e super velocidade!"
    ],
    "composicao": "Tecido em poliéster de alta qualidade, com elastano para maior flexibilidade e ajuste ao corpo do animal. Proporciona conforto, mobilidade e facilidade na hora de vestir."
  },
  {
    "id": 54,
    "image": "/images/fantasia-5.png",
    "title": "Fantasia Pet Thor para Cães Pequenos",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: M",
    "price": "R$79,90",
    "descricao": [
      "Seu pet vai se sentir digno do martelo com esta fantasia inspirada em Thor! Com capa inclusa, estampas detalhadas e ajuste ideal para cães de porte pequeno, o traje traz diversão e estilo na medida certa. A peça é perfeita para sessões de fotos criativas, festas temáticas e até para dar uma voltinha com um toque heróico. Super confortável, ela permite liberdade de movimento enquanto destaca o carisma do seu companheiro."
    ],
    "composicao": "Poliéster leve e durável, algodão para conforto térmico e malha flexível que se adapta ao corpo do pet. Capa em tecido macio e resistente."
  },
  {
    "id": 55,
    "image": "/images/fantasia-6.png",
    "title": "Fantasia Pet Lagosta para Gatos Adultos",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: P",
    "price": "R$89,90",
    "descricao": [
      "Transforme seu gato adulto em uma lagosta adorável com essa fantasia divertida e criativa! Com detalhes em 3D como patas e olhos em pelúcia, o traje oferece um visual cômico e encantador. Ideal para sessões de fotos, eventos especiais ou simplesmente para arrancar risadas dos humanos da casa. O tecido é macio, fácil de vestir e pensado para respeitar o conforto e a personalidade dos felinos."
    ],
    "composicao": "Feita com pelúcia macia e acolhedora, poliéster resistente e espuma leve para dar estrutura aos detalhes 3D. Não limita os movimentos do gato e é segura para uso supervisionado."
  },
  {
    "id": 56,
    "image": "/images/fantasia-7.png",
    "title": "Fantasia Pet Gato de Botas Adulto",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: P",
    "price": "R$94,90",
    "descricao": [
      "Seu pet vai conquistar corações com a fantasia do icônico Gato de Botas! Com capa esvoaçante, chapéu estilizado e design encantador, essa peça traz charme, aventura e muito carisma. Ideal para pets de porte pequeno que gostam de desfilar com elegância e humor. Perfeita para sessões fotográficas temáticas ou eventos especiais onde o seu bichinho será o centro das atenções."
    ],
    "composicao": "Tecido em poliéster leve, feltro modelado para o chapéu e elástico confortável que mantém tudo no lugar sem apertar. Durável e pensado para total conforto do pet."
  },
  {
    "id": 57,
    "image": "/images/fantasia-8.png",
    "title": "Fantasia Pet Elvis Presley para Cachorros Médios",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: M",
    "price": "R$99,90",
    "descricao": [
      "Seu cão vai arrasar como o rei do rock com essa fantasia incrível inspirada em Elvis Presley! O traje tem gola levantada, detalhes brilhantes e corte estilizado, ideal para festas, fotos temáticas ou qualquer ocasião onde estilo e atitude sejam necessários. Além de linda, a peça é confortável e fácil de vestir, feita para pets de porte médio com muito carisma e energia!"
    ],
    "composicao": "Poliéster brilhoso, malha flexível e velcro reforçado garantem conforto, mobilidade e segurança. Ideal para manter o estilo mesmo durante brincadeiras."
  },
  {
    "id": 58,
    "image": "/images/fantasia-9.png",
    "title": "Fantasia Pet Capa Lufa-Lufa HP para Cachorros",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: M",
    "price": "R$110,00",
    "descricao": [
      "Para os pets mais leais e amigáveis, essa capa inspirada na casa Lufa-Lufa é um verdadeiro charme! Com gola removível e gravata amarela inclusa, ela recria o estilo dos alunos de Hogwarts com detalhes mágicos. Ideal para os fãs de Harry Potter que querem incluir seus pets nas comemorações. A capa é leve, prática e muito fofa, perfeita para fotos temáticas e festas geeks."
    ],
    "composicao": "Tecido em algodão suave, poliéster resistente e botão de pressão para fácil fechamento. Acabamento reforçado para longa durabilidade e conforto total."
  },
  {
    "id": 59,
    "image": "/images/fantasia-10.png",
    "title": "Fantasia Pet Pijama Sulley para Cachorro",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: M",
    "price": "R$79,90",
    "descricao": [
      "Traga o universo de Monstros S.A. para os momentos de descanso do seu pet com esse pijama fofo do personagem Sulley! A peça é macia, quentinha e ideal para os dias mais frios. Com estampa colorida e design divertido, o pijama é ótimo para usar em casa, tirar fotos ou até dormir juntinho com muito estilo. Confortável e seguro, é perfeito para pets que amam carinho e aconchego."
    ],
    "composicao": "Feito em fleece térmico de alta qualidade, algodão macio e botão plástico que garante firmeza sem incomodar. Protege do frio com leveza e suavidade."
  },
  {
    "id": 60,
    "image": "/images/fantasia-11.png",
    "title": "Fantasia Pet de Bruxa para Cachorro",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: M",
    "price": "R$69,90",
    "descricao": [
      "Essa fantasia de bruxa vai encantar todos ao redor! Com saia rodada, tule delicado e chapéu pontudo incluso, seu pet estará pronto para lançar feitiços de fofura. Ideal para festas de Halloween, sessões fotográficas e eventos temáticos, ela traz um toque mágico e divertido. Fácil de vestir e super confortável, permite liberdade de movimento e garante muitos elogios por onde seu pet passar."
    ],
    "composicao": "Tecido sintético leve, saia em tule delicado com volume ideal e fechos em velcro que garantem praticidade. Materiais pensados para segurança e conforto durante o uso."
  },
  {
    "id": 61,
    "image": "/images/fantasia-12.png",
    "title": "Fantasia Pet de Bombeiro para Cachorro",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: M",
    "price": "R$79,90",
    "descricao": [
      "Fantasia temática de bombeiro para cães, com detalhes refletivos no uniforme e um charmoso chapéu de tecido incluso. Ideal para eventos, festas temáticas ou sessões de fotos divertidas. Feita com materiais confortáveis e respiráveis, permite liberdade de movimento ao pet. Fácil de vestir com fechamento prático e ajustável, garante um ótimo encaixe no corpo do animal sem apertar ou incomodar. Seu cão vai roubar a cena com estilo e muito charme!"
    ],
    "composicao": "Confeccionada com poliéster resistente e algodão macio para maior conforto. O uniforme possui faixas refletivas para segurança noturna. O chapéu é feito em tecido leve e maleável. Contém elásticos reforçados para melhor fixação e ajuste ao corpo do pet. Todos os materiais utilizados são atóxicos e seguros para uso animal, garantindo durabilidade e conforto prolongado."
  },
  {
    "id": 62,
    "image": "/images/fantasia-13.png",
    "title": "Fantasia Pet Pijama para Cachorro Médio",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: M",
    "price": "R$74,90",
    "descricao": [
      "Pijama listrado super macio, ideal para cães de médio porte. Proporciona aquecimento em noites frias e conforto no dia a dia. Possui gola reforçada, abertura para as patas e acabamento em costura dupla, que garante maior durabilidade. A estampa clássica de listras traz um charme adicional, tornando seu pet ainda mais fofo. Além de funcional, é uma peça leve que não atrapalha os movimentos do seu companheiro."
    ],
    "composicao": "Feito em algodão de alta qualidade combinado com malha soft para toque extra suave. Os botões são plásticos e resistentes, ideais para uso contínuo. Tecido respirável que mantém o corpo do animal aquecido sem causar superaquecer. Costuras reforçadas garantem maior durabilidade, mesmo após várias lavagens. Composição segura e confortável para o uso prolongado durante o sono ou em ambientes climatizados."
  },
  {
    "id": 63,
    "image": "/images/fantasia-14.png",
    "title": "Fantasia Pet Woody Toy Story Chapéu e Lenço",
    "category": "Fantasias",
    "subcategory": "Temáticas",
    "size": "Tamanho: M",
    "price": "R$75,99",
    "descricao": [
      "Fantasia completa do personagem Woody do filme Toy Story, composta por camisa xadrez estilizada, lenço vermelho e chapéu marrom em tecido. Um traje encantador para cães de médio porte que adoram se destacar. Ideal para festas, eventos ou ensaios fotográficos. Leve, confortável e de fácil colocação, proporciona uma experiência divertida e segura ao pet. Uma fantasia perfeita para os fãs da Disney e Pixar."
    ],
    "composicao": "A camisa é confeccionada em poliéster e algodão com toque macio e acabamento impecável. O lenço é em tecido leve, fácil de amarrar e não irrita a pele do animal. O chapéu é feito em feltro resistente com elástico ajustável para melhor fixação. Todos os itens são costurados com atenção aos detalhes para garantir conforto e durabilidade. Produto seguro, lavável e indicado para uso em ocasiões especiais."
  },
  {
    "id": 64,
    "image": "/images/ração-dogs-1.png",
    "title": "Ração Golden para Cães Adultos de Pequeno Carne",
    "category": "Rações para Cães",
    "subcategory": "Seca",
    "size": "Tamanho: 3kg",
    "price": "R$22,40",
    "descricao": [
      "Ração premium formulada especialmente para cães adultos de pequeno porte com paladar exigente. Sabor carne irresistível que agrada até os pets mais seletivos. Auxilia na manutenção da saúde bucal com crocantes que ajudam na limpeza dos dentes. Enriquecida com nutrientes que favorecem o sistema digestivo e contribuem para o bem-estar geral do animal. Com ingredientes selecionados e alta palatabilidade."
    ],
    "composicao": "Milho integral moído, farinha de carne e ossos de alta qualidade, óleo de frango como fonte de energia, minerais essenciais para a saúde óssea, vitaminas do complexo B, além de fibras naturais que auxiliam na digestão. Receita balanceada, sem corantes artificiais. Indicada para consumo diário, com perfil nutricional completo e adequado para cães de pequeno porte."
  },
  {
    "id": 65,
    "image": "/images/ração-dogs-2.png",
    "title": "Ração Golden Seleção Natural Cães Adultos",
    "category": "Rações para Cães",
    "subcategory": "Natural",
    "size": "Tamanho: 3kg",
    "price": "R$59,90",
    "descricao": [
      "Ração de alta qualidade, desenvolvida para cães adultos que necessitam de uma dieta balanceada e saudável. Possui proteínas de alta digestibilidade que facilitam a absorção dos nutrientes. Livre de corantes e aromatizantes artificiais. Ajuda a manter a pele saudável, pelagem brilhante e oferece suporte à saúde intestinal. Ideal para garantir energia e vitalidade no dia a dia do seu pet."
    ],
    "composicao": "Contém frango como fonte principal de proteína, arroz como carboidrato de fácil digestão, polpa de beterraba que contribui com fibras prebióticas, e ômegas 3 e 6 que auxiliam na saúde da pele e pelagem. Inclui antioxidantes naturais e minerais quelatados. Fórmula segura e nutritiva que promove uma alimentação completa e equilibrada para cães adultos."
  },
  {
    "id": 66,
    "image": "/images/ração-dogs-3.png",
    "title": "Ração para Cachorro Purina Carne Frango Cereais Vegetais",
    "category": "Rações para Cães",
    "subcategory": "Seca",
    "size": "Tamanho: 1kg",
    "price": "R$69,90",
    "descricao": [
      "Ração saborosa com fórmula nutritiva composta por carnes selecionadas, cereais integrais e vegetais desidratados. Ideal para cães adultos que precisam de uma alimentação balanceada e apetitosa. Contribui para o funcionamento saudável do sistema digestivo, além de fornecer energia e disposição. Textura crocante que ajuda na limpeza dos dentes e proporciona prazer ao mastigar."
    ],
    "composicao": "Farinha de carne bovina e de frango, arroz integral, milho, extrato de yucca para reduzir o odor das fezes, minerais e vitaminas essenciais, além de vegetais desidratados. Receita rica em fibras, sem corantes artificiais. Composição pensada para o equilíbrio nutricional completo, respeitando as necessidades diárias dos cães adultos."
  },
  {
    "id": 67,
    "image": "/images/ração-dogs-4.png",
    "title": "Ração Pedigree Filhote até 18 Meses com Cálcio",
    "category": "Rações para Cães",
    "subcategory": "Seca",
    "size": "Tamanho: 3kg",
    "price": "R$89,90",
    "descricao": [
      "Especialmente desenvolvida para atender as necessidades dos filhotes até 18 meses de idade. Possui todos os nutrientes essenciais para garantir um crescimento saudável. Enriquecida com cálcio, importante para a formação de ossos e dentes fortes. Textura adequada para a mastigação dos filhotes e sabor que agrada. Proporciona energia, saúde e bem-estar desde os primeiros meses de vida."
    ],
    "composicao": "Farinha de vísceras de frango, óleo vegetal, milho integral moído, vitaminas A, D e E, minerais como cálcio e fósforo, proteínas de alta digestibilidade. Adição de antioxidantes naturais para preservação dos ingredientes. Fórmula balanceada que favorece o desenvolvimento saudável do sistema imunológico, muscular e ósseo."
  },
  {
    "id": 68,
    "image": "/images/ração-dogs-5.png",
    "title": "Ração Flock para Cães Adultos Sabor Carne",
    "category": "Rações para Cães",
    "subcategory": "Seca",
    "size": "Tamanho: 15kg",
    "price": "R$190,99",
    "descricao": [
      "Ração econômica e nutritiva para cães adultos. Sabor carne que agrada ao paladar dos pets, ideal para alimentação diária. Fornece energia, proteínas e fibras na medida certa. Possui crocantes que ajudam na higiene bucal e promovem saciedade. É uma excelente opção para quem busca qualidade com preço acessível, sem abrir mão dos nutrientes essenciais para o pet."
    ],
    "composicao": "Farinha de carne bovina, milho moído, farelo de soja como fonte de proteína vegetal, antioxidantes naturais para conservação, vitaminas A, B, D e E, além de minerais. Receita balanceada que garante nutrição diária com segurança e economia."
  },
  {
    "id": 69,
    "image": "/images/ração-dogs-6.png",
    "title": "Ração GranPlus Choice Cães Grandes Frango e Arroz",
    "category": "Rações para Cães",
    "size": "Tamanho: 15kg",
    "price": "R$134,90",
    "descricao": [
      "Fórmula pensada especialmente para cães de grande porte. Contém proteínas nobres que auxiliam na manutenção da massa muscular. Ingredientes selecionados que promovem digestibilidade e saúde intestinal. Proporciona crocantes maiores, ideais para o porte do animal. Ajuda na vitalidade e na saúde das articulações, promovendo um estilo de vida ativo e equilibrado para o seu pet."
    ],
    "composicao": "Frango desidratado, arroz quebrado, gordura de frango, polpa de beterraba como fonte de fibra natural, vitaminas e minerais quelatados, antioxidantes naturais. Possui glucosamina e condroitina para suporte articular. Indicado para cães adultos de grande porte com necessidades específicas."
  },
  {
    "id": 70,
    "image": "/images/ração-dogs-7.png",
    "title": "Ração Cachorro Supreme Light Adulto Quatree Frango",
    "category": "Rações para Cães",
    "subcategory": "Seca",
    "size": "Tamanho: 20kg",
    "price": "R$121,96",
    "descricao": [
      "Ração com fórmula light especialmente desenvolvida para cães adultos com tendência ao sobrepeso. Possui menor teor calórico e ingredientes funcionais que ajudam no controle de peso sem perder o sabor. Rica em fibras naturais, contribui para a saciedade do pet. Sabor de frango atrativo e nutritivo. Ideal para manter seu cão saudável, ativo e com peso adequado."
    ],
    "composicao": "Carne de frango desidratada, milho integral, óleo de peixe rico em ômega 3, fibras naturais para saciedade, vitaminas e minerais. Receita balanceada e segura. Com adição de prebióticos e antioxidantes naturais que promovem saúde digestiva e fortalecimento do sistema imunológico."
  },
  {
    "id": 71,
    "image": "/images/ração-dogs-8.png",
    "title": "Ração Para Cachorro Quatree Supreme Adulto Pequenos",
    "category": "Rações para Cães",
    "subcategory": "Seca",
    "size": "Tamanho: 15kg",
    "price": "R$109,90",
    "descricao": [
      "Ração indicada para cães adultos de pequeno porte. Possui croquetes com tamanho ideal para facilitar a mastigação e digestão. Rica em nutrientes que promovem uma vida saudável e ativa. Contém ômegas e vitaminas essenciais para o brilho da pelagem e saúde da pele. Fórmula de alta palatabilidade que agrada até os cães mais exigentes."
    ],
    "composicao": "Farinha de frango, milho integral moído, óleo de peixe, fibras prebióticas que promovem equilíbrio da flora intestinal, antioxidantes naturais, vitaminas e minerais. Fórmula rica em nutrientes essenciais para o dia a dia do seu pet."
  },
  {
    "id": 72,
    "image": "/images/ração-dogs-9.png",
    "title": "Ração Seca Quatree Supreme Frango e Batata Doce Filhotes",
    "category": "Rações para Cães",
    "subcategory": "Seca",
    "size": "Tamanho: 15kg",
    "price": "R$199,89",
    "descricao": [
      "Ração premium formulada para filhotes, com proteína de frango e batata doce como fontes energéticas. Proporciona nutrição completa durante a fase de crescimento. Favorece o desenvolvimento saudável do sistema digestivo e imunológico. Crocantes adaptados ao tamanho dos filhotes, com sabor que agrada e textura ideal. Com vitaminas e minerais para um crescimento forte e equilibrado."
    ],
    "composicao": "Frango desidratado, batata doce, arroz, óleo de peixe, fibras prebióticas, vitaminas A, C, D e E, minerais quelatados, antioxidantes naturais. Ingredientes nobres selecionados para nutrição adequada dos filhotes."
  },
  {
    "id": 73,
    "image": "/images/ração-dogs-10.png",
    "title": "Ração Seca Special Dog Cães Adulto sabor Carne",
    "category": "Rações para Cães",
    "subcategory": "Seca",
    "size": "Tamanho: 1kg",
    "price": "R$106,90",
    "descricao": [
      "Ração com ótimo custo-benefício para cães adultos. Sabor carne que agrada facilmente. Ajuda na saúde da pele e dos pelos com a adição de ácidos graxos. Crocantes balanceados auxiliam na mastigação e higiene bucal. Ideal para quem busca uma opção acessível sem abrir mão da qualidade nutricional e segurança alimentar do seu pet."
    ],
    "composicao": "Farinha de carne bovina, milho integral moído, farelo de soja, antioxidantes naturais, vitaminas e minerais. Fórmula balanceada com nutrientes essenciais para a manutenção da saúde dos cães adultos."
  },
  {
    "id": 74,
    "image": "/images/ração-dogs-11.png",
    "title": "Ração Special Dog Vegetais Special Dog",
    "category": "Rações para Cães",
    "subcategory": "Seca",
    "size": "Tamanho: 3kg",
    "price": "R$104,90",
    "descricao": [
      "Ração enriquecida com vegetais que auxiliam na digestão e proporcionam vitalidade. Ingredientes selecionados com sabor agradável. Fórmula equilibrada que garante saúde e bem-estar ao pet. Perfeita para cães que precisam de uma dieta leve, saborosa e rica em fibras."
    ],
    "composicao": "Vegetais desidratados como cenoura e espinafre, milho, farelo de trigo, vitaminas A, C, D e E, minerais como zinco e ferro. Receita rica em fibras e nutrientes naturais, sem adição de corantes artificiais."
  },
  {
    "id": 75,
    "image": "/images/ração-dogs-12.png",
    "title": "Billy Dog Ossinho Cães Adultos Carne",
    "category": "Rações para Cães",
    "subcategory": "Seca",
    "size": "Tamanho: 15kg",
    "price": "R$106,99",
    "descricao": [
      "Ração com croquetes em formato de ossinhos e delicioso sabor carne. Ideal para cães adultos que apreciam textura crocante. Contribui para a saúde bucal e oferece todos os nutrientes necessários para uma alimentação equilibrada. Perfeita para ser oferecida diariamente, com excelente aceitação pelos pets."
    ],
    "composicao": "Farinha de carne bovina, milho integral, gordura de frango, conservantes naturais, vitaminas e minerais. Receita nutritiva, saborosa e com ingredientes selecionados para a saúde diária do seu pet."
  },
  {
    "id": 76,
    "image": "/images/racao-umida-1.png",
    "title": "Pedigree Sachê Carne ao Molho para Cães Adultos",
    "category": "Rações para Cães",
    "subcategory": "Úmida",
    "size": "Tamanho: 100g",
    "price": "R$3,99",
    "descricao": [
      "O sachê Pedigree Carne ao Molho é uma refeição completa e balanceada para cães adultos. Com pedaços suculentos de carne envoltos em um molho saboroso, proporciona uma alimentação deliciosa e rica em nutrientes. Além de ser altamente palatável, facilita a mastigação, tornando-se ideal para pets exigentes. Sua fórmula é enriquecida com vitaminas e minerais que ajudam a manter a saúde da pele, pelagem, dentes e ossos, promovendo bem-estar e vitalidade diária ao seu companheiro."
    ],
    "composicao": "Carne e derivados, miúdos de frango, farinha de trigo, óleo de soja, minerais, vitaminas A, D3, E, complexo B, taurina, espessantes naturais e aroma de carne. Receita especialmente formulada para garantir o equilíbrio nutricional e promover uma digestão saudável com alta aceitação entre os cães adultos."
  },
  {
    "id": 77,
    "image": "/images/racao-umida-2.png",
    "title": "Golden Gourmet Sachê Frango com Arroz",
    "category": "Rações para Cães",
    "subcategory": "Úmida",
    "size": "Tamanho: 100g",
    "price": "R$4,99",
    "descricao": [
      "A Ração Úmida Golden Gourmet Frango com Arroz oferece uma experiência saborosa e nutritiva para cães adultos. Com uma textura macia e suculenta, combina frango de alta qualidade com arroz cozido, proporcionando uma refeição de fácil digestão. Ideal para agradar até os paladares mais exigentes, essa ração úmida é rica em proteínas e nutrientes que colaboram para o desenvolvimento e manutenção da musculatura, além de conter ingredientes que auxiliam na saúde digestiva e na hidratação do pet."
    ],
    "composicao": "Frango, arroz, vísceras de frango, proteína de soja, óleo vegetal, minerais orgânicos e inorgânicos, vitaminas A, D3, E, K, complexo B, taurina, espessantes e palatabilizantes naturais. Formulada para fornecer uma nutrição completa e promover um estilo de vida saudável com sabor irresistível."
  },
  {
    "id": 78,
    "image": "/images/racao-umida-3.png",
    "title": "Premier Pet Sachê Carne com Legumes",
    "category": "Rações para Cães",
    "subcategory": "Úmida",
    "size": "Tamanho: 100g",
    "price": "R$5,49",
    "descricao": [
      "O sachê Premier Pet Carne com Legumes é uma refeição úmida completa desenvolvida com ingredientes de alta qualidade. Com um sabor irresistível de carne e um mix nutritivo de legumes, é ideal para cães adultos que merecem um cuidado especial. Além de garantir uma alimentação equilibrada, ajuda na digestão e hidratação diária. Sua textura facilita a mastigação e é perfeita para misturar com ração seca. Enriquecido com vitaminas e minerais, apoia a saúde do sistema imunológico, pele e pelagem."
    ],
    "composicao": "Carne bovina, cenoura, ervilha, miúdos de frango, arroz, óleo de peixe, óleo de girassol, vitaminas A, D, E, complexo B, zinco, ferro, manganês, espessantes naturais e palatabilizantes. Ideal para complementar a dieta do seu cão com sabor e qualidade nutricional."
  },
  {
    "id": 79,
    "image": "/images/racao-umida-4.png",
    "title": "Purina Dog Chow Ração Úmida Frango e Carne",
    "category": "Rações para Cães",
    "subcategory": "Úmida",
    "size": "Tamanho: 100g",
    "price": "R$4,29",
    "descricao": [
      "A ração úmida Purina Dog Chow Frango e Carne combina o sabor marcante das proteínas animais com uma textura agradável para cães adultos. Elaborada com pedaços suculentos em molho nutritivo, ajuda a manter o pet bem alimentado e hidratado. Possui uma fórmula que favorece a digestão, contribuindo para o bem-estar intestinal. Perfeita para uso diário ou como agrado especial, oferece o equilíbrio ideal entre sabor e nutrição, fortalecendo a saúde geral do seu companheiro."
    ],
    "composicao": "Carne de frango, carne bovina, fígado, arroz integral, óleo vegetal, polpa de beterraba, vitaminas A, E, D3, complexo B, minerais orgânicos e inorgânicos. Contém antioxidantes e conservantes naturais que garantem frescor e qualidade nutricional para o seu pet."
  },
  {
    "id": 80,
    "image": "/images/racao-umida-5.png",
    "title": "Special Dog Sachê Cordeiro com Arroz",
    "category": "Rações para Cães",
    "subcategory": "Úmida",
    "size": "Tamanho: 100g",
    "price": "R$3,49",
    "descricao": [
      "A Ração Úmida Special Dog Cordeiro com Arroz é uma excelente escolha para proporcionar uma refeição suculenta e nutritiva ao seu cão. Com alto teor de umidade, é ideal para hidratar o pet e estimular o apetite. Elaborada com ingredientes selecionados, oferece um sabor irresistível e promove uma digestão saudável. Indicada para cães adultos, ajuda a manter a saúde e a vitalidade do seu melhor amigo."
    ],
    "composicao": "Cordeiro, arroz, proteínas vegetais, óleo de frango, cenoura, espessantes naturais, vitaminas, minerais e antioxidantes. Livre de corantes artificiais, é formulada para garantir sabor e nutrição balanceada, mantendo o bem-estar diário e reforçando o sistema imunológico dos cães com ingredientes de qualidade."
  },
  {
    "id": 81,
    "image": "/images/racao-umida-6.png",
    "title": "Fórmula Natural FreshMeat Ração Úmida Adultos",
    "category": "Rações para Cães",
    "subcategory": "Úmida",
    "size": "Tamanho: 100g",
    "price": "R$6,59",
    "descricao": [
      "A Ração Úmida Fórmula Natural FreshMeat é uma refeição completa com alta palatabilidade, ideal para cães adultos. Produzida com carne fresca, oferece proteínas de alta digestibilidade, além de ingredientes naturais e funcionais que contribuem para a saúde do trato gastrointestinal, pele e pelagem. Um alimento saudável e saboroso que seu cão vai adorar."
    ],
    "composicao": "Carne fresca, batata-doce, óleo de peixe, cenoura, espinafre, minerais orgânicos, vitaminas, extrato de yucca, antioxidantes naturais e água. Desenvolvida com ingredientes funcionais que promovem uma digestão mais eficiente, além de fortalecer a imunidade e manter a saúde geral do cão em dia, sem adição de corantes ou conservantes artificiais."
  },
  {
    "id": 82,
    "image": "/images/racao-natural-1.png",
    "title": "Fórmula Natural FreshMeat Frango e Batata Doce",
    "category": "Rações para Cães",
    "subcategory": "Natural",
    "size": "Tamanho: 10,1kg",
    "price": "R$289,99",
    "descricao": [
      "A Fórmula Natural FreshMeat Frango e Batata Doce é uma ração super premium, feita com ingredientes nobres e carne fresca como principal fonte de proteína. Indicada para cães adultos, proporciona uma dieta equilibrada, rica em fibras e nutrientes, sem conservantes artificiais. Sua fórmula ajuda na saúde digestiva e melhora a qualidade da pelagem, além de ser extremamente saborosa e nutritiva."
    ],
    "composicao": "Carne de frango fresca, batata doce, aveia, linhaça, óleo de peixe, ervilhas, extrato de yucca, vitaminas e minerais quelatados. Desenvolvida com foco no bem-estar animal, fornece todos os nutrientes necessários para uma vida saudável, auxiliando também na manutenção do peso e da saúde intestinal, com ingredientes 100% naturais."
  },
  {
    "id": 83,
    "image": "/images/racao-natural-2.png",
    "title": "Biofresh Cães Adultos Raças Médias e Grandes",
    "category": "Rações para Cães",
    "subcategory": "Natural",
    "size": "Tamanho: 12kg",
    "price": "R$319,90",
    "descricao": [
      "Biofresh é uma ração natural com alta inclusão de carnes frescas, frutas e vegetais. Ideal para cães adultos de raças médias e grandes, sua fórmula sem conservantes artificiais promove saúde e longevidade. Com alta digestibilidade, oferece nutrição superior e é excelente para a saúde bucal, intestinal e imunológica dos cães. Sabor irresistível com ingredientes naturais selecionados."
    ],
    "composicao": "Carne de frango, arroz integral, frutas desidratadas (maçã, mamão), vegetais, linhaça, óleo de peixe, extrato de yucca, vitaminas, minerais e probióticos. Ração livre de transgênicos e corantes artificiais, que contribui para a manutenção da massa muscular, digestão eficiente e sistema imunológico fortalecido com alimentação mais próxima da natureza."
  },
  {
    "id": 84,
    "image": "/images/racao-natural-3.png",
    "title": "Nats Ração Natural para Cães Filhotes",
    "category": "Rações para Cães",
    "subcategory": "Natural",
    "size": "Tamanho: 7kg",
    "price": "R$179,00",
    "descricao": [
      "A Nats Natural Filhotes é desenvolvida com ingredientes naturais e balanceados, indicada para o crescimento saudável dos cães desde os primeiros meses de vida. Rica em proteínas, vitaminas e minerais, garante suporte ideal ao desenvolvimento ósseo, imunidade e funções cerebrais. Possui alta digestibilidade e não contém transgênicos ou corantes, promovendo bem-estar e vitalidade aos filhotes."
    ],
    "composicao": "Carne de frango, batata doce, arroz, óleo de peixe, probióticos, vegetais, vitaminas, minerais, colágeno e leveduras. Suporte nutricional completo para crescimento, saúde óssea, pelagem sedosa e sistema imune fortalecido. Produzida com ingredientes frescos e naturais, é a escolha certa para uma infância saudável e cheia de energia."
  },
  {
    "id": 85,
    "image": "/images/racao-natural-4.png",
    "title": "Guabi Natural Adultos Frango e Arroz Integral",
    "category": "Rações para Cães",
    "subcategory": "Natural",
    "size": "Tamanho: 10,1kg",
    "price": "R$269,90",
    "descricao": [
      "A Ração Guabi Natural para Cães Adultos une nutrição de alta qualidade com ingredientes naturais. Com frango e arroz integral, é livre de corantes e aromatizantes artificiais. Contém prebióticos e antioxidantes naturais que ajudam na digestão e saúde geral dos cães. Ideal para quem busca uma alimentação mais saudável, saborosa e equilibrada para o pet."
    ],
    "composicao": "Frango, arroz integral, cenoura, abóbora, linhaça, óleo de peixe, levedura, extrato de yucca, vitaminas e minerais. Sua fórmula é rica em fibras e ômegas, promovendo pelagem brilhante, fezes firmes e reforço à imunidade. Produto natural, com alto valor nutricional e digestibilidade superior."
  },
  {
    "id": 86,
    "image": "/images/racao-natural-5.png",
    "title": "Fórmula Natural FreshMeat Cordeiro",
    "category": "Rações para Cães",
    "subcategory": "Natural",
    "size": "Tamanho: 7kg",
    "price": "R$199,90",
    "descricao": [
      "A Fórmula Natural FreshMeat Cordeiro é uma ração super premium que oferece nutrição avançada com alta inclusão de carne fresca de cordeiro. Especialmente indicada para cães com paladar exigente ou sensibilidades alimentares, promove digestão fácil, saúde da pele e pelos brilhantes. Possui ingredientes naturais e funcionais para uma dieta equilibrada e deliciosa."
    ],
    "composicao": "Cordeiro fresco, arroz integral, linhaça, batata-doce, óleo de peixe, vegetais desidratados, extrato de yucca, vitaminas e minerais. Sem adição de corantes ou conservantes artificiais, promove saúde digestiva, imunológica e cutânea, com sabor irresistível que agrada até os cães mais exigentes."
  },
  {
    "id": 87,
    "image": "/images/racao-natural-6.png",
    "title": "Magnus Todo Dia Natural com Carne",
    "category": "Rações para Cães",
    "subcategory": "Natural",
    "size": "Tamanho: 15kg",
    "price": "R$149,90",
    "descricao": [
      "A Ração Magnus Todo Dia Natural com Carne é uma opção acessível e nutritiva para alimentação diária de cães adultos. Com carne como principal ingrediente, oferece proteínas de qualidade e excelente sabor. Elaborada sem corantes artificiais, contém fibras e prebióticos para digestão saudável, além de vitaminas que garantem disposição e vitalidade ao pet todos os dias."
    ],
    "composicao": "Carne de frango, arroz, milho, óleo de peixe, vegetais, levedura, minerais orgânicos, vitaminas, fibras e antioxidantes. Proporciona uma nutrição equilibrada com ótimo custo-benefício, ajudando a manter o peso saudável, a imunidade em alta e o bem-estar do pet com ingredientes simples e naturais."
  },
  {
    "id": 88,
    "image": "/images/racao-medicamentosa-1.png",
    "title": "Hills Prescription Diet i/d Digestive Care",
    "category": "Rações para Cães",
    "subcategory": "Medicamentosas",
    "size": "Tamanho: 3,85kg",
    "price": "R$279,90",
    "descricao": [
      "A Ração Hill’s Prescription Diet i/d Digestive Care é indicada para cães com distúrbios gastrointestinais. Com uma fórmula de fácil digestão, contribui para a recuperação da saúde intestinal e fornece nutrição completa. Enriquecida com fibras solúveis e prebióticos, melhora a microbiota e ajuda na absorção dos nutrientes, reduzindo vômitos e diarreias."
    ],
    "composicao": "Milho moído, farinha de frango, gordura de frango, polpa de beterraba, cevada, ovo em pó, vitaminas, minerais, taurina, beta-caroteno, antioxidantes naturais. Inclui fibras, ácidos graxos essenciais e prebióticos para uma saúde intestinal equilibrada e recuperação mais rápida em casos de distúrbios digestivos."
  },
  {
    "id": 89,
    "image": "/images/racao-medicamentosa-2.png",
    "title": "Royal Canin Veterinary Renal Support",
    "category": "Rações para Cães",
    "subcategory": "Medicamentosas",
    "size": "Tamanho: 2kg",
    "price": "R$189,90",
    "descricao": [
      "Royal Canin Renal Support é especialmente formulada para cães com insuficiência renal crônica. Com baixo teor de fósforo e proteína de alta qualidade, auxilia na função renal e ajuda a prolongar a vida do pet. Possui excelente palatabilidade para garantir a aceitação mesmo por cães com apetite reduzido."
    ],
    "composicao": "Arroz, gordura de frango, farinha de milho, hidrolisado de fígado de frango, óleo de peixe, minerais quelatados, vitaminas, antioxidantes naturais. Enriquecida com EPA/DHA e antioxidantes, promove o suporte renal eficaz e minimiza a progressão da doença renal crônica com segurança e sabor."
  },
  {
    "id": 90,
    "image": "/images/racao-medicamentosa-3.png",
    "title": "Premier Nutrição Clínica Obesidade Cães Adultos",
    "category": "Rações para Cães",
    "subcategory": "Medicamentosas",
    "size": "Tamanho: 2kg",
    "price": "R$119,90",
    "descricao": [
      "A Ração Premier Nutrição Clínica Obesidade foi desenvolvida para auxiliar na perda de peso e manutenção do peso ideal em cães adultos. Com baixo teor calórico e alta quantidade de fibras, proporciona saciedade e reduz a ingestão calórica diária. Indicada por veterinários para controle e tratamento da obesidade canina."
    ],
    "composicao": "Proteína isolada de soja, farinha de vísceras de frango, fibra de ervilha, celulose, óleo de frango, extrato de yucca, vitaminas, minerais e antioxidantes naturais. Rica em L-carnitina para queima de gordura, promove emagrecimento saudável, preservando a massa muscular do cão com segurança."
  },
  {
    "id": 91,
    "image": "/images/racao-medicamentosa-4.png",
    "title": "Hills Prescription Diet z/d Alergias Alimentares",
    "category": "Rações para Cães",
    "subcategory": "Medicamentosas",
    "size": "Tamanho: 3,1kg",
    "price": "R$299,90",
    "descricao": [
      "Hill’s z/d é uma ração hipoalergênica formulada para cães com sensibilidades e alergias alimentares. Com proteína hidrolisada e ingredientes selecionados, evita reações adversas e melhora a saúde da pele e digestão. Ideal para diagnóstico de alergias alimentares e controle dos sintomas relacionados."
    ],
    "composicao": "Amido de milho, proteína hidrolisada de frango, óleo vegetal, celulose, vitaminas, minerais, taurina, antioxidantes. Fórmula clinicamente comprovada para reduzir reações alérgicas alimentares, proporcionando mais conforto e bem-estar ao pet com pele sensível ou distúrbios digestivos."
  },
  {
    "id": 92,
    "image": "/images/racao-medicamentosa-5.png",
    "title": "Royal Canin Satiety Support",
    "category": "Rações para Cães",
    "subcategory": "Medicamentosas",
    "size": "Tamanho: 4kg",
    "price": "R$229,90",
    "descricao": [
      "Royal Canin Satiety Support é uma ração coadjuvante no tratamento da obesidade em cães adultos. Rica em fibras e com baixo teor calórico, ajuda a controlar o apetite e promove a perda de peso segura. Desenvolvida para garantir a manutenção da massa magra durante o processo de emagrecimento do animal."
    ],
    "composicao": "Farelo de trigo, farinha de glúten de milho, polpa de beterraba, casca de psyllium, óleo de peixe, proteínas hidrolisadas, minerais, vitaminas e antioxidantes. Suporta a saciedade prolongada, reduzindo a compulsão alimentar e auxiliando no emagrecimento gradual e saudável do cão."
  },
  {
    "id": 93,
    "image": "/images/racao-medicamentosa-6.png",
    "title": "Premier Nutrição Clínica Gastrointestinal",
    "category": "Rações para Cães",
    "subcategory": "Medicamentosas",
    "size": "Tamanho: 2kg",
    "price": "R$119,00",
    "descricao": [
      "Premier Gastrointestinal é indicada para cães com distúrbios digestivos agudos ou crônicos. Sua fórmula de alta digestibilidade com prebióticos e fibras solúveis auxilia na recuperação da flora intestinal e no equilíbrio do sistema digestivo. Possui alta palatabilidade e é ideal para cães com diarreia ou vômitos frequentes."
    ],
    "composicao": "Farinha de carne e ossos de frango, arroz, milho integral, óleo de frango, levedura seca, polpa de beterraba, prebióticos, vitaminas, minerais. Desenvolvida com ingredientes que favorecem a microbiota intestinal, proporciona digestão leve e eficiente para cães com sensibilidade gastrointestinal."
  },
  {
    "id": 94,
    "image": "/images/perfume-1.png",
    "title": "Colônia Pet Care Flor de Algodão",
    "category": "Higiene",
    "subcategory": "Perfumes",
    "size": "Tamanho: 120ml",
    "price": "R$29,90",
    "descricao": [
      "Fragrância suave e agradável de flor de algodão, ideal para deixar seu pet com cheirinho fresco por mais tempo. A fórmula é livre de álcool, garantindo segurança para a pele sensível dos animais. Pode ser usada após o banho ou no dia a dia, proporcionando uma sensação de limpeza e bem-estar. Seu pet vai ficar ainda mais gostoso de abraçar!"
    ],
    "composicao": "Água purificada, essência flor de algodão, polímeros fixadores, glicerina, conservantes e componentes hipoalergênicos. Livre de álcool e substâncias agressivas para a pele do animal. Desenvolvido para uso seguro e diário em cães e gatos de todas as idades e portes."
  },
  {
    "id": 95,
    "image": "/images/perfume-2.png",
    "title": "PetSmell Lavanda Relaxante",
    "category": "Higiene",
    "subcategory": "Perfumes",
    "size": "Tamanho: 100ml",
    "price": "R$27,99",
    "descricao": [
      "Colônia suave com aroma de lavanda para acalmar e perfumar o seu pet. Ideal para uso após o banho ou em momentos de relaxamento. Dermatologicamente testado e com ação prolongada, mantendo seu animal cheiroso por mais tempo. Pode ser usada semanalmente com segurança."
    ],
    "composicao": "Base aquosa, extrato natural de lavanda, fixador suave, glicerina vegetal, conservantes naturais e fragrâncias hipoalergênicas. Sem álcool ou parabenos. Produto especialmente desenvolvido para uso em pets com pele sensível."
  },
  {
    "id": 96,
    "image": "/images/perfume-3.png",
    "title": "Cheirinho Pet Baby Powder",
    "category": "Higiene",
    "subcategory": "Perfumes",
    "size": "Tamanho: 150ml",
    "price": "R$31,90",
    "descricao": [
      "Perfume com fragrância clássica de talco de bebê, proporcionando um aroma limpo e confortável. Desenvolvido especialmente para cães e gatos, com fórmula não irritante e longa duração. Excelente para quem busca praticidade e um cheirinho de banho tomado todos os dias."
    ],
    "composicao": "Água deionizada, essência de talco de bebê, fixadores naturais, conservantes suaves, componentes hipoalergênicos. Livre de produtos químicos agressivos. Indicado para uso semanal em todas as raças."
  },
  {
    "id": 97,
    "image": "/images/perfume-4.png",
    "title": "Colônia Pet Elegance Floral",
    "category": "Higiene",
    "subcategory": "Perfumes",
    "size": "Tamanho: 110ml",
    "price": "R$33,50",
    "descricao": [
      "Com aroma floral sofisticado, a Colônia Elegance Floral é perfeita para pets estilosos. A fragrância leve não incomoda o olfato sensível dos animais e deixa o pet perfumado o dia inteiro. Dermatologicamente testado e seguro para uso frequente."
    ],
    "composicao": "Essência floral leve, base aquosa, fixador vegetal, glicerina, conservantes hipoalergênicos. Sem álcool ou corantes artificiais. Ideal para cães e gatos adultos."
  },
  {
    "id": 98,
    "image": "/images/perfume-5.png",
    "title": "Pet Aromas Baunilha & Coco",
    "category": "Higiene",
    "subcategory": "Perfumes",
    "size": "Tamanho: 120ml",
    "price": "R$30,90",
    "descricao": [
      "Perfume com aroma doce e tropical de baunilha com coco, criando uma experiência sensorial agradável tanto para o pet quanto para o tutor. Indicado para uso pós-banho e ocasiões especiais. Fórmula livre de parabenos e corantes."
    ],
    "composicao": "Água purificada, fragrância de baunilha e coco, fixadores suaves, óleo de coco refinado, glicerina vegetal, conservantes naturais. Produto vegano e cruelty-free, com ação prolongada e segura para o uso contínuo."
  },
  {
    "id": 99,
    "image": "/images/perfume-6.png",
    "title": "Spray Aromático Citrus Fresh",
    "category": "Higiene",
    "subcategory": "Perfumes",
    "size": "Tamanho: 130ml",
    "price": "R$32,90",
    "descricao": [
      "Colônia leve com fragrância cítrica revigorante. Ideal para dias quentes, deixando seu pet com um cheirinho fresco e agradável. Desenvolvido com ingredientes naturais e pH balanceado, seguro para uso frequente."
    ],
    "composicao": "Água deionizada, essência cítrica (limão, laranja), fixadores naturais, glicerina, extrato de aloe vera, conservantes suaves. Produto hipoalergênico e livre de álcool, próprio para peles sensíveis."
  },
  {
    "id": 100,
    "image": "/images/escova-1.png",
    "title": "Escova Dental Dupla Face PetClean",
    "category": "Higiene",
    "subcategory": "Escova de dentes",
    "size": "Tamanho: Único",
    "price": "R$14,90",
    "descricao": [
      "Escova dental dupla face com cerdas macias, ideal para a limpeza completa dos dentes do seu pet. Desenvolvida para atingir áreas de difícil acesso, ajuda a prevenir o tártaro e o mau hálito. Indicada para cães de todos os tamanhos e raças. Uso diário ou conforme recomendação veterinária."
    ],
    "composicao": "Cabo de plástico resistente, cerdas de nylon macio, ponta angulada para melhor alcance. Material não tóxico, livre de BPA, com design ergonômico para facilitar o manuseio durante a escovação diária do seu pet."
  },
  {
    "id": 101,
    "image": "/images/escova-2.png",
    "title": "Kit Escova + Dedeira Dental Canina",
    "category": "Higiene",
    "subcategory": "Escova de dentes",
    "size": "Tamanho: Único",
    "price": "R$19,99",
    "descricao": [
      "Kit completo com escova tradicional e dedeira para higienização bucal. A dedeira oferece mais controle para quem está começando o hábito de escovar os dentes do pet. As cerdas suaves ajudam na remoção da placa sem agredir a gengiva."
    ],
    "composicao": "Escova com cabo plástico, cerdas de nylon flexível. Dedeira em silicone hipoalergênico, livre de látex, de fácil higienização e reutilizável. Indicado para cães e gatos de todos os portes."
  },
  {
    "id": 102,
    "image": "/images/escova-3.png",
    "title": "Escova Dental Massageadora PetSmile",
    "category": "Higiene",
    "subcategory": "Escova de dentes",
    "size": "Tamanho: Médio",
    "price": "R$17,50",
    "descricao": [
      "Escova com função massageadora, ideal para pets com gengivas sensíveis. As cerdas em formato especial proporcionam conforto e eficácia durante a escovação. Estimula a circulação sanguínea da gengiva, além de prevenir mau hálito e acúmulo de tártaro."
    ],
    "composicao": "Cabo emborrachado antiderrapante, cerdas de silicone macio, ponta adaptável a bocas pequenas e médias. Produto atóxico e resistente, fácil de higienizar após o uso."
  },
  {
    "id": 103,
    "image": "/images/escova-4.png",
    "title": "Escova Dental Trifásica para Cães",
    "category": "Higiene",
    "subcategory": "Escova de dentes",
    "size": "Tamanho: Grande",
    "price": "R$22,90",
    "descricao": [
      "Escova com três superfícies de cerdas que limpam simultaneamente todos os lados dos dentes. Ideal para cães grandes e com dificuldade de escovação. Remove resíduos e previne doenças periodontais com eficiência superior às escovas comuns."
    ],
    "composicao": "Cabo anatômico em plástico ABS, cerdas de nylon em três ângulos, fácil de manusear mesmo em cães agitados. Produto durável e resistente à mastigação leve."
  },
  {
    "id": 104,
    "image": "/images/escova-5.png",
    "title": "Escova Infantil Adaptada para Filhotes",
    "category": "Higiene",
    "subcategory": "Escova de dentes",
    "size": "Tamanho: Pequeno",
    "price": "R$12,50",
    "descricao": [
      "Perfeita para a introdução à escovação nos primeiros meses de vida do pet. Tamanho reduzido e cerdas ultramacias garantem uma experiência confortável e segura para o filhote. Estimula bons hábitos de higiene desde cedo."
    ],
    "composicao": "Cabo plástico leve, cerdas em nylon extra macio, livre de substâncias tóxicas. Design lúdico e colorido que facilita o manuseio pelo tutor e a aceitação pelo filhote."
  },
  {
    "id": 105,
    "image": "/images/escova-6.png",
    "title": "Escova Dental 360° PetBrush",
    "category": "Higiene",
    "subcategory": "Escova de dentes",
    "size": "Tamanho: Único",
    "price": "R$24,90",
    "descricao": [
      "Escova inovadora com cerdas em 360 graus, proporcionando limpeza completa com menos movimentos. Ideal para tutores que têm pets agitados ou impacientes. Pode ser usada com pastas específicas para cães e gatos. Resultados eficazes com escovação rápida."
    ],
    "composicao": "Cabo em silicone antiderrapante, cabeça com cerdas circulares de nylon suave, atóxico e durável. Produto higiênico, fácil de lavar, compatível com qualquer tipo de pasta dental pet."
  },
  {
    "id": 106,
    "image": "/images/tapete-1.png",
    "title": "Tapete Higiênico SuperSec PetMais",
    "category": "Higiene",
    "subcategory": "Tapetes higiênicos",
    "size": "Tamanho: 80x60cm (Pacote com 30 unidades)",
    "price": "R$59,90",
    "descricao": [
      "Tapete superabsorvente com tecnologia gel para retenção de líquidos, ideal para o dia a dia do seu pet. Neutraliza odores, possui fitas adesivas que evitam o deslizamento e bordas reforçadas para não vazar. Perfeito para treinar filhotes ou oferecer conforto em locais fechados."
    ],
    "composicao": "Celulose de alta absorção, polímero superabsorvente, plástico impermeável e fitas adesivas laterais. Produto descartável, livre de fragrâncias artificiais e seguro para o uso diário de cães de todas as idades e portes."
  },
  {
    "id": 107,
    "image": "/images/tapete-2.png",
    "title": "Tapete Higiênico Lavável EcoPet",
    "category": "Higiene",
    "subcategory": "Tapetes higiênicos",
    "size": "Tamanho: 90x60cm (1 unidade reutilizável)",
    "price": "R$44,99",
    "descricao": [
      "Tapete ecológico reutilizável, lavável até 200 vezes. Ideal para tutores sustentáveis que desejam reduzir o uso de descartáveis. Alta absorção e secagem rápida, com tecido antibacteriano e base antiderrapante. Pode ser usado em ambientes internos e externos."
    ],
    "composicao": "Tecido poliéster absorvente, camada intermediária impermeável e base antiderrapante de borracha natural. Hipoalergênico, resistente a lavagens e livre de produtos tóxicos. Ideal para cães e gatos."
  },
  {
    "id": 108,
    "image": "/images/tapete-3.png",
    "title": "Tapete Higiênico Atrativo PetSoft",
    "category": "Higiene",
    "subcategory": "Tapetes higiênicos",
    "size": "Tamanho: 60x60cm (Pacote com 20 unidades)",
    "price": "R$36,90",
    "descricao": [
      "Com atrativo canino que facilita o adestramento, este tapete é indicado para filhotes e cães adultos que ainda estão em processo de aprendizado. Oferece alta absorção e proteção contra odores, garantindo higiene e praticidade em apartamentos e casas."
    ],
    "composicao": "Polpa de celulose, camada absorvente com atrativo natural, plástico protetor e fitas adesivas. Produto descartável, dermatologicamente testado, seguro para uso contínuo e livre de perfumes fortes."
  },
  {
    "id": 109,
    "image": "/images/tapete-4.png",
    "title": "Tapete Higiênico Mega Absorvente UltraPet",
    "category": "Higiene",
    "subcategory": "Tapetes higiênicos",
    "size": "Tamanho: 80x90cm (Pacote com 10 unidades)",
    "price": "R$42,50",
    "descricao": [
      "Tapete com extra capacidade de absorção, ideal para pets que ficam muitas horas em ambientes internos. Sistema de rápida secagem, evita que o pet pise em líquido e espalhe sujeira. Contém adesivo de fixação e camadas reforçadas para máxima segurança."
    ],
    "composicao": "Fibra de celulose de alta densidade, polímero gel absorvente, plástico antivasamento e adesivos de fixação. Não contém fragrância e é indicado para uso veterinário e doméstico."
  },
  {
    "id": 110,
    "image": "/images/tapete-5.png",
    "title": "Tapete Higiênico Econômico PetClean",
    "category": "Higiene",
    "subcategory": "Tapetes higiênicos",
    "size": "Tamanho: 60x50cm (Pacote com 50 unidades)",
    "price": "R$49,90",
    "descricao": [
      "Com excelente custo-benefício, esse tapete é ideal para quem busca qualidade sem gastar muito. Absorve até 800ml de líquido, possui barreiras antivazamento e não deixa cheiro. Ótima escolha para criadores, lares com múltiplos cães ou uso intensivo."
    ],
    "composicao": "Celulose tratada, polímero absorvente, plástico protetor e cola adesiva nas bordas. Produto seguro, livre de químicos agressivos e aprovado por veterinários."
  },
  {
    "id": 111,
    "image": "/images/tapete-6.png",
    "title": "Tapete Higiênico com Carvão Ativado PetFresh",
    "category": "Higiene",
    "subcategory": "Tapetes higiênicos",
    "size": "Tamanho: 80x60cm (Pacote com 30 unidades)",
    "price": "R$64,90",
    "descricao": [
      "Tapete diferenciado com carvão ativado que neutraliza odores intensos. Ideal para pets que vivem em apartamentos. Oferece absorção rápida, superfície seca em segundos e design discreto. Recomendado para cães de médio a grande porte com uso diário."
    ],
    "composicao": "Camada de carvão ativado, polpa de celulose, plástico impermeável e fitas adesivas. Produto dermatologicamente testado, hipoalergênico e livre de fragrâncias artificiais."
  },
  {
    "id": 112,
    "image": "/images/coleira-1.png",
    "title": "Coleira Nylon Ajustável Azul",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Coleiras comuns",
    "size": "Tamanho: M",
    "price": "R$19,90",
    "descricao": [
      "A Coleira Nylon Ajustável Azul oferece segurança e conforto para o seu pet em todos os passeios. Fabricada com material resistente, é ideal para cães de porte médio, garantindo durabilidade e um ajuste confortável ao pescoço. Seu fecho prático permite colocação rápida, e o acabamento em nylon evita irritações na pele. Além de ser leve, essa coleira possui anel metálico resistente para prender a guia, proporcionando maior controle durante os passeios diários."
    ],
    "composicao": "Nylon de alta resistência, fivela plástica com trava de segurança, costuras reforçadas com linha de poliéster, anel metálico galvanizado para engate. Produto hipoalergênico, sem tingimentos agressivos, resistente à água e fácil de limpar."
  },
  {
    "id": 113,
    "image": "/images/coleira-2.png",
    "title": "Coleira Estampada Patinhas Rosa",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Coleiras comuns",
    "size": "Tamanho: P",
    "price": "R$17,50",
    "descricao": [
      "A Coleira Estampada Patinhas Rosa traz estilo e segurança para cães de pequeno porte. Seu design moderno com estampa de patinhas conquista pela fofura, enquanto seu material leve e resistente assegura um uso confortável. Ideal para passeios curtos e longos, a coleira possui regulagem prática e fecho com trava de segurança. É perfeita para deixar seu pet ainda mais charmoso, sem abrir mão da resistência e funcionalidade necessárias para o dia a dia."
    ],
    "composicao": "Fita de poliéster com estampa termotransferida, fivela plástica com trava, regulador de tamanho em polipropileno, argola de aço inoxidável para fixação de guia. Livre de metais pesados e testada dermatologicamente."
  },
  {
    "id": 114,
    "image": "/images/coleira-3.png",
    "title": "Coleira Refletiva com Fivela Metálica",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Coleiras comuns",
    "size": "Tamanho: G",
    "price": "R$24,90",
    "descricao": [
      "A Coleira Refletiva com Fivela Metálica garante máxima segurança para o seu cão durante passeios noturnos. Com fitas refletivas costuradas ao longo do nylon, ela proporciona visibilidade em ambientes escuros. O fecho metálico reforçado oferece resistência extra para cães de grande porte. Além disso, seu ajuste é simples e firme, ideal para pets agitados. O design moderno combina funcionalidade com estilo, sendo uma ótima escolha para quem busca conforto e proteção em um só produto."
    ],
    "composicao": "Nylon grosso com costura refletiva, fivela de metal cromado, argola de aço para guia, ajuste de tamanho com passadores em poliacetal. Produto não abrasivo à pele, lavável e com durabilidade superior à média."
  },
  {
    "id": 115,
    "image": "/images/coleira-4.png",
    "title": "Coleira Simples Verde Musgo",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Coleiras comuns",
    "size": "Tamanho: M",
    "price": "R$15,00",
    "descricao": [
      "A Coleira Simples Verde Musgo é uma opção básica, porém eficaz, para o controle do seu pet. Ideal para uso diário, ela combina um visual discreto com a robustez necessária para garantir a segurança do seu animal. Seu tecido leve proporciona conforto ao pet durante o uso prolongado. O fecho plástico é fácil de abrir e fechar, e a argola de metal resiste a tração. Uma excelente escolha para quem procura qualidade e economia em um só produto."
    ],
    "composicao": "Fita de poliéster, fivela de polipropileno, regulador de tamanho e argola metálica galvanizada. Produto resistente à água, livre de tintas tóxicas e com acabamento manual para garantir maior durabilidade."
  },
  {
    "id": 116,
    "image": "/images/coleira-5.png",
    "title": "Coleira de Couro Marrom Reforçada",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Coleiras comuns",
    "size": "Tamanho: G",
    "price": "R$29,90",
    "descricao": [
      "A Coleira de Couro Marrom Reforçada é ideal para cães grandes e fortes. Feita com couro legítimo, proporciona resistência incomparável, além de um toque sofisticado e clássico ao visual do pet. Seu fecho metálico reforçado garante segurança mesmo em passeios mais agitados. É a escolha ideal para donos que desejam um acessório durável e bonito. O couro é tratado para evitar odores e rachaduras, mantendo sua integridade por muito mais tempo."
    ],
    "composicao": "Couro bovino legítimo tratado, fivela de metal niquelado, costura reforçada com linha encerada. Produto impermeável, livre de agentes irritantes e com acabamento polido para evitar ferimentos."
  },
  {
    "id": 117,
    "image": "/images/coleira-6.png",
    "title": "Coleira Fashion com Lacinho",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Coleiras comuns",
    "size": "Tamanho: P",
    "price": "R$21,99",
    "descricao": [
      "A Coleira Fashion com Lacinho é perfeita para deixar sua pet ainda mais estilosa. Feita com materiais leves e confortáveis, ela possui um delicado laço decorativo, ideal para momentos especiais ou para o uso diário com charme. Seu design é pensado para oferecer conforto e beleza, sem abrir mão da segurança. Ideal para cadelas de pequeno porte, a coleira conta com regulagem prática e fecho resistente para garantir total tranquilidade durante o passeio."
    ],
    "composicao": "Fita de nylon estampada, laço de cetim, fivela de plástico resistente com trava, argola de aço inoxidável para guia. Produto não alergênico, resistente à abrasão e lavável à mão."
  },
  {
    "id": 118,
    "image": "/images/peitoral-1.png",
    "title": "Peitoral Confort Rosa Bebê",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Peitorais",
    "size": "Tamanho: P",
    "price": "R$34,90",
    "descricao": [
      "O Peitoral Confort Rosa Bebê é a escolha ideal para garantir conforto e estilo ao seu pet. Com um design acolchoado e anatômico, oferece ajuste perfeito ao corpo do animal, proporcionando liberdade de movimento e segurança durante os passeios. Seu tom delicado de rosa é perfeito para cadelinhas que adoram um visual fofo e charmoso. Indicado para cães de pequeno porte, o peitoral é fácil de colocar e possui fecho resistente com engate rápido, além de alça superior para melhor controle."
    ],
    "composicao": "Tecido acolchoado com toque macio, forro respirável, alças em nylon ajustável, fivela plástica com trava de segurança, argola metálica para guia. Produto lavável, hipoalergênico e desenvolvido com materiais resistentes à tração e desgaste."
  },
  {
    "id": 119,
    "image": "/images/peitoral-2.png",
    "title": "Peitoral Mesh Azul com Alça",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Peitorais",
    "size": "Tamanho: M",
    "price": "R$39,90",
    "descricao": [
      "O Peitoral Mesh Azul com Alça combina funcionalidade e conforto para passeios seguros com seu pet. Fabricado com malha respirável tipo mesh, ele mantém a ventilação adequada mesmo nos dias mais quentes. A alça reforçada na parte superior permite maior controle em situações de emergência ou em locais movimentados. Ideal para cães de médio porte, possui ajuste prático e design ergonômico que distribui melhor a pressão, evitando desconforto no pescoço."
    ],
    "composicao": "Malha mesh respirável, alças em nylon reforçado, costura dupla de segurança, fivela com engate rápido, alça de mão acolchoada e argola metálica para engate de guia. Produto leve, resistente e fácil de limpar."
  },
  {
    "id": 120,
    "image": "/images/peitoral-3.png",
    "title": "Peitoral Esportivo Resistente Preto",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Peitorais",
    "size": "Tamanho: G",
    "price": "R$45,00",
    "descricao": [
      "O Peitoral Esportivo Resistente Preto foi desenvolvido especialmente para pets ativos e cheios de energia. Seu design robusto proporciona segurança durante corridas, caminhadas ou trilhas. Com ajuste em múltiplos pontos e tecido resistente à abrasão, garante conforto e firmeza sem causar irritações na pele. Recomendado para cães de grande porte, o modelo possui refletores laterais para visibilidade noturna e alça superior que facilita o controle manual."
    ],
    "composicao": "Tecido poliéster reforçado, malha interna respirável, costuras reforçadas, tiras de ajuste em nylon, fivela de liberação rápida, alça ergonômica acolchoada, refletores e argola metálica ultra resistente. Produto lavável e durável."
  },
  {
    "id": 121,
    "image": "/images/peitoral-4.png",
    "title": "Peitoral Xadrez Vermelho",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Peitorais",
    "size": "Tamanho: M",
    "price": "R$37,90",
    "descricao": [
      "O Peitoral Xadrez Vermelho é a opção perfeita para deixar seu pet elegante e confortável em qualquer ocasião. Com estampa clássica e charmosa, ele é confeccionado em tecido macio e resistente, garantindo um encaixe anatômico ao corpo do animal. Indicado para cães de médio porte, este peitoral conta com regulagens simples e fecho seguro, proporcionando passeios tranquilos e com muito estilo. Ideal para cliques fotográficos e passeios urbanos."
    ],
    "composicao": "Tecido estampado de algodão e poliéster, forro em malha respirável, tiras de ajuste em nylon, fivela de segurança com trava, argola metálica de alta resistência. Produto confortável, hipoalergênico e lavável."
  },
  {
    "id": 122,
    "image": "/images/peitoral-5.png",
    "title": "Peitoral Jeans Estiloso",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Peitorais",
    "size": "Tamanho: P",
    "price": "R$42,90",
    "descricao": [
      "O Peitoral Jeans Estiloso traz um visual urbano e moderno para seu pet. Feito em tecido jeans de alta qualidade, ele oferece durabilidade, conforto e muito charme. Seu design ergonômico se ajusta perfeitamente ao corpo do pet, evitando desconfortos mesmo após longos passeios. Ideal para cães de pequeno porte com personalidade marcante, o modelo possui fechamento prático, costuras reforçadas e argola segura para prender a guia com tranquilidade."
    ],
    "composicao": "Tecido jeans resistente, forro interno acolchoado, nylon ajustável, fecho em plástico com trava, argola metálica para guia. Produto lavável à mão, não desbota e é resistente à tração."
  },
  {
    "id": 123,
    "image": "/images/peitoral-6.png",
    "title": "Peitoral Almofadado Cinza",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Peitorais",
    "size": "Tamanho: G",
    "price": "R$44,50",
    "descricao": [
      "O Peitoral Almofadado Cinza oferece conforto extra para cães de grande porte. Com estrutura macia e acolchoada, ele é ideal para pets que necessitam de suporte adicional durante passeios longos. Seu formato envolve bem o tórax, distribuindo a pressão de forma equilibrada e evitando desconfortos na região cervical. O tom neutro cinza combina com qualquer estilo, tornando este peitoral uma escolha versátil e sofisticada."
    ],
    "composicao": "Tecido sintético almofadado, revestimento interno respirável, ajustes laterais em nylon, fivelas com trava de segurança, argola em aço reforçado para guia. Produto confortável, resistente e lavável."
  },
  {
    "id": 124,
    "image": "/images/guia-retratil-1.png",
    "title": "Guia Retrátil 3m Preta",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Guias retráteis",
    "size": "Tamanho: 3 metros",
    "price": "R$59,90",
    "descricao": [
      "A Guia Retrátil 3m Preta é ideal para quem busca praticidade e liberdade nos passeios com o pet. Seu mecanismo retrátil permite que o cão explore o ambiente com segurança, mantendo o controle nas mãos do tutor. Compacta e resistente, possui botão de trava para ajustar o comprimento conforme a necessidade, oferecendo flexibilidade e segurança. Perfeita para cães de pequeno e médio porte, essa guia alia funcionalidade a um design discreto e moderno."
    ],
    "composicao": "Estrutura em plástico ABS de alta resistência, fita de nylon retrátil, mola interna de aço carbono, botão de trava e liberação em PVC, gancho giratório em liga metálica. Produto leve, ergonômico e durável."
  },
  {
    "id": 125,
    "image": "/images/guia-retratil-2.png",
    "title": "Guia Retrátil Azul 5m",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Guias retráteis",
    "size": "Tamanho: 5 metros",
    "price": "R$64,90",
    "descricao": [
      "A Guia Retrátil Azul 5m proporciona maior alcance e liberdade para o seu pet durante os passeios. Com um comprimento ideal para cães ativos, ela oferece mobilidade e controle através de seu sistema de trava eficiente. A fita de nylon resistente garante segurança mesmo para animais mais fortes. Seu design moderno e a cor vibrante tornam os passeios mais estilosos e seguros. Indicada para cães de médio porte que adoram explorar."
    ],
    "composicao": "Plástico ABS resistente, fita de nylon reforçada com costura dupla, mola retrátil em aço inoxidável, botão de controle com trava e destrava instantânea, gancho metálico com rotação 360°. Produto robusto e lavável."
  },
  {
    "id": 126,
    "image": "/images/guia-retratil-3.png",
    "title": "Guia Retrátil Rosa com Detalhes",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Guias retráteis",
    "size": "Tamanho: 3 metros",
    "price": "R$62,00",
    "descricao": [
      "A Guia Retrátil Rosa com Detalhes é perfeita para pets estilosos e tutores exigentes. Com acabamento delicado e detalhes elegantes, ela combina praticidade e charme em um só produto. Ideal para passeios urbanos, conta com sistema retrátil que permite controlar facilmente a distância do pet, mantendo-o sempre seguro. Seu tamanho é ideal para cães de pequeno porte que gostam de caminhar com mais liberdade."
    ],
    "composicao": "Carcaça em plástico rosa brilhante, fita de nylon com acabamento em costura decorativa, botão de trava com design ergonômico, mola interna reforçada e gancho metálico resistente. Produto leve, durável e fácil de higienizar."
  },
  {
    "id": 127,
    "image": "/images/guia-retratil-4.png",
    "title": "Guia Retrátil Resistente 8m",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Guias retráteis",
    "size": "Tamanho: 8 metros",
    "price": "R$79,90",
    "descricao": [
      "A Guia Retrátil Resistente 8m é ideal para cães grandes ou de alta energia que precisam de mais espaço para explorar. Seu sistema de retração suave e fita longa oferecem controle total sem limitar a liberdade do pet. O design robusto e os materiais reforçados garantem resistência durante passeios intensos. O botão de trava permite ajuste rápido e seguro do comprimento da guia conforme o ambiente e necessidade."
    ],
    "composicao": "Estrutura em ABS reforçado, fita de nylon ultra resistente, mola interna em aço de alta tensão, botão de trava reforçado, gancho metálico com trava de segurança. Produto indicado para cães de até 40kg."
  },
  {
    "id": 128,
    "image": "/images/guia-retratil-5.png",
    "title": "Guia Retrátil Verde Fluorescente",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Guias retráteis",
    "size": "Tamanho: 5 metros",
    "price": "R$69,90",
    "descricao": [
      "A Guia Retrátil Verde Fluorescente é a escolha ideal para quem busca segurança com estilo. Sua cor vibrante garante alta visibilidade em ambientes com pouca luz, aumentando a segurança dos passeios noturnos. O mecanismo retrátil proporciona conforto ao pet e praticidade ao tutor, permitindo liberdade com controle. Feita com materiais de alta qualidade, é perfeita para cães de médio porte que adoram aventuras ao ar livre."
    ],
    "composicao": "Corpo em plástico ABS fluorescente, fita de nylon reflexiva, mola de retração em aço inox, botão de trava com resposta rápida, gancho giratório metálico com fecho seguro. Produto durável e fácil de manusear."
  },
  {
    "id": 129,
    "image": "/images/guia-retratil-6.png",
    "title": "Guia Retrátil Básica Laranja",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Guias retráteis",
    "size": "Tamanho: 3 metros",
    "price": "R$58,00",
    "descricao": [
      "A Guia Retrátil Básica Laranja oferece funcionalidade essencial com um toque de cor. Ideal para quem prefere um modelo prático e eficiente, ela garante liberdade e controle durante os passeios. Seu mecanismo retrátil suave e a fita de nylon resistente proporcionam segurança para cães de pequeno porte. É compacta, leve e fácil de guardar, perfeita para o dia a dia."
    ],
    "composicao": "Estrutura plástica em ABS laranja, fita de nylon resistente, sistema de retração com mola interna em aço, botão de travamento simples, gancho de metal com rotação 360°. Produto lavável, leve e funcional."
  },
  {
    "id": 130,
    "image": "/images/cinto-seguranca-1.png",
    "title": "Cinto de Segurança Ajustável Preto",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Cintos de segurança",
    "size": "Tamanho: Único",
    "price": "R$29,90",
    "descricao": [
      "O Cinto de Segurança Ajustável Preto foi desenvolvido para garantir viagens seguras e confortáveis com seu pet. Compatível com a maioria dos cintos automotivos, ele mantém o animal preso de forma segura, evitando deslocamentos bruscos. Seu sistema ajustável permite adaptar o comprimento de acordo com o tamanho do pet e a necessidade do passeio. Ideal para cães de pequeno a médio porte, é um item indispensável para o transporte responsável."
    ],
    "composicao": "Fita de nylon resistente, fivela metálica universal para encaixe no cinto do carro, mosquetão giratório de liga metálica. Produto lavável, não alergênico e ajustável em até 70cm de comprimento."
  },
  {
    "id": 131,
    "image": "/images/cinto-seguranca-2.png",
    "title": "Cinto para Carro com Mosquetão",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Cintos de segurança",
    "size": "Tamanho: Único",
    "price": "R$32,90",
    "descricao": [
      "O Cinto para Carro com Mosquetão oferece praticidade e segurança para transportar seu pet com tranquilidade. Equipado com mosquetão resistente, ele se conecta facilmente à coleira ou peitoral, evitando que o animal se movimente livremente dentro do veículo. Seu comprimento ajustável proporciona flexibilidade para diferentes portes de cães. É a solução ideal para garantir segurança em viagens curtas ou longas."
    ],
    "composicao": "Fita de nylon durável, mosquetão em aço inoxidável com trava, engate universal para cinto de segurança veicular. Produto leve, resistente e compatível com peitorais e coleiras padrão."
  },
  {
    "id": 132,
    "image": "/images/cinto-seguranca-3.png",
    "title": "Cinto Pet Colorido Universal",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Cintos de segurança",
    "size": "Tamanho: Único",
    "price": "R$34,50",
    "descricao": [
      "O Cinto Pet Colorido Universal une segurança e estilo em um só produto. Com estampa vibrante, ele proporciona um visual alegre ao mesmo tempo que mantém o pet preso com firmeza no banco do carro. Seu sistema universal é compatível com a maioria dos veículos e a regulagem de tamanho oferece conforto extra durante os trajetos. Perfeito para tutores que priorizam segurança com um toque de personalidade."
    ],
    "composicao": "Fita de nylon estampada, engate universal em aço cromado, mosquetão de alta resistência. Regulável, lavável e indicado para cães de até 30kg. Produto não tóxico e resistente à tração."
  },
  {
    "id": 133,
    "image": "/images/cinto-seguranca-4.png",
    "title": "Cinto de Segurança Rosa Antipuxão",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Cintos de segurança",
    "size": "Tamanho: Único",
    "price": "R$36,00",
    "descricao": [
      "O Cinto de Segurança Rosa Antipuxão é ideal para pets mais agitados durante viagens. Com sistema que reduz trancos e movimentos bruscos, ele protege o animal com conforto e firmeza. Sua estética delicada com cor rosa traz charme ao passeio, e a regulagem permite ajustar a fita conforme o porte do pet. É uma opção segura e estilosa para deslocamentos em veículos."
    ],
    "composicao": "Fita em poliéster rosa, mosquetão giratório de aço inox, engate universal reforçado, regulador de comprimento e amortecedor elástico interno. Produto lavável, flexível e indicado para pets de até 35kg."
  },
  {
    "id": 134,
    "image": "/images/cinto-seguranca-5.png",
    "title": "Cinto com Engate Universal Reforçado",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Cintos de segurança",
    "size": "Tamanho: Único",
    "price": "R$39,90",
    "descricao": [
      "O Cinto com Engate Universal Reforçado foi projetado para oferecer máxima segurança em viagens de carro. Indicado para cães de médio e grande porte, ele conta com fita extra grossa e engate metálico de alta resistência, prevenindo acidentes durante freadas bruscas. Seu comprimento ajustável permite adaptação ideal ao espaço interno do veículo. Um acessório indispensável para tutores conscientes."
    ],
    "composicao": "Nylon reforçado com costura dupla, engate metálico universal, mosquetão em aço com trava de segurança. Produto resistente à tração intensa, ajustável até 90cm e lavável à mão."
  },
  {
    "id": 135,
    "image": "/images/cinto-seguranca-6.png",
    "title": "Cinto Pet Estampado Pata Feliz",
    "category": "Cinto, coleiras e guias",
    "subcategory": "Cintos de segurança",
    "size": "Tamanho: Único",
    "price": "R$33,00",
    "descricao": [
      "O Cinto Pet Estampado Pata Feliz combina segurança, conforto e fofura para os passeios de carro. Com estampa temática de patinhas, ele é ideal para tutores que amam detalhes divertidos. Compatível com peitorais e coleiras, sua fivela universal se encaixa na maioria dos cintos automotivos. É ajustável, leve e extremamente prático para o dia a dia com o pet."
    ],
    "composicao": "Fita de nylon estampada com patinhas, mosquetão metálico com rotação 360°, engate universal para cinto automotivo. Produto resistente, fácil de limpar e com regulagem de até 80cm."
  },
  {
    "id": 136,
    "image": "/images/racao-umida-gatos-1.png",
    "title": "Ração Úmida Patê de Frango para Gatos Adultos",
    "category": "Rações para Gatos",
    "subcategory": "Úmida",
    "size": "Peso: 100g",
    "price": "R$5,99",
    "descricao": [
      "A Ração Úmida Patê de Frango para Cães Adultos é uma refeição completa e saborosa que agrada até os paladares mais exigentes. Preparada com carne de frango selecionada, ela fornece proteínas de alta qualidade que ajudam na manutenção da massa muscular. Sua textura cremosa e fácil de mastigar é perfeita para cães de todas as raças. Além de ser prática, oferece hidratação adicional por ser rica em umidade, auxiliando também na saúde urinária do pet. Ideal como refeição principal ou complemento alimentar."
    ],
    "composicao": "Água, carne e subprodutos de frango, fígado de frango, minerais, vitaminas (A, D3, E, B12), glicerina, goma guar, amido modificado, taurina, cloreto de sódio, extrato de yucca, conservantes e antioxidantes naturais. Sem corantes artificiais."
  },
  {
    "id": 137,
    "image": "/images/racao-umida-gatos-2.png",
    "title": "Ração Úmida Sabor Carne ao Molho para Filhotes",
    "category": "Rações para Gatos",
    "subcategory": "Úmida",
    "size": "Peso: 85g",
    "price": "R$6,49",
    "descricao": [
      "Indicada para cães filhotes, a Ração Úmida Sabor Carne ao Molho é uma excelente opção para proporcionar nutrição balanceada e sabor irresistível. Enriquecida com vitaminas essenciais ao desenvolvimento saudável, ela contribui para um crescimento forte e vitalidade desde os primeiros meses de vida. Seu molho apetitoso melhora a palatabilidade e garante uma refeição atrativa. A embalagem prática facilita o oferecimento em porções diárias, mantendo o frescor do alimento por mais tempo."
    ],
    "composicao": "Carne bovina, fígado, coração, arroz, minerais quelatados, vitaminas A, E, D3, B1, B2, B6, B12, ácido fólico, óleo de peixe (rico em ômega 3), extrato de levedura, glicerina vegetal, espessantes naturais e antioxidantes naturais. Livre de conservantes artificiais."
  },
  {
    "id": 138,
    "image": "/images/racao-umida-gatos-3.png",
    "title": "Ração Úmida Sachê Gato Adulto Sabor Peixe",
    "category": "Rações para Gatos",
    "subcategory": "Úmida",
    "size": "Peso: 85g",
    "price": "R$4,99",
    "descricao": [
      "A Ração Úmida Sachê Sabor Peixe para Gatos Adultos é uma delícia nutritiva feita com ingredientes frescos e selecionados. Sua fórmula contém peixe como principal fonte de proteína, além de ácidos graxos que mantêm a pelagem macia e brilhante. A textura úmida e o aroma natural atraem até os gatos mais exigentes. Ideal para complementar a alimentação seca ou como única fonte de nutrição, promovendo bem-estar, hidratação e saúde renal, com baixo teor de sódio."
    ],
    "composicao": "Peixe fresco, água, fígado de frango, óleo de peixe, levedura de cerveja, taurina, vitamina A, D3, E, B12, zinco, manganês, biotina, espessantes vegetais, antioxidantes naturais. Sem adição de corantes ou conservantes artificiais."
  },
  {
    "id": 139,
    "image": "/images/racao-umida-gatos-4.png",
    "title": "Ração Úmida Gourmet Cordeiro com Arroz",
    "category": "Rações para Gatos",
    "subcategory": "Úmida",
    "size": "Peso: 100g",
    "price": "R$7,90",
    "descricao": [
      "A Ração Úmida Gourmet Cordeiro com Arroz oferece uma refeição diferenciada para cães adultos com paladar refinado. Preparada com carne de cordeiro, fonte rica em proteína e baixa em gordura, ela é ideal para pets com dietas sensíveis ou necessidades especiais. O arroz integral presente na fórmula auxilia na digestão e no equilíbrio nutricional. Seu sabor único aliado a ingredientes naturais fazem dessa ração uma escolha nutritiva, equilibrada e deliciosa para a rotina alimentar do seu pet."
    ],
    "composicao": "Carne de cordeiro, arroz integral, fígado bovino, óleo de girassol, minerais orgânicos, vitaminas (A, E, C, D3), extrato de yucca, fibra de beterraba, goma xantana, espessantes naturais, conservantes naturais. Não contém transgênicos nem corantes artificiais."
  },
  {
    "id": 140,
    "image": "/images/racao-umida-gatos-5.png",
    "title": "Ração Úmida Gatos Castrados Frango e Fígado",
    "category": "Rações para Gatos",
    "subcategory": "Úmida",
    "size": "Peso: 85g",
    "price": "R$5,49",
    "descricao": [
      "A Ração Úmida para Gatos Castrados Sabor Frango e Fígado é formulada para atender às necessidades específicas desses pets. Com níveis reduzidos de gordura e alto teor de fibras, ajuda na manutenção do peso ideal, evitando a obesidade. Seus ingredientes de alta digestibilidade promovem saúde digestiva e urinária, enquanto o sabor irresistível garante aceitação elevada. Pode ser usada sozinha ou combinada com ração seca para oferecer mais variedade ao cardápio do seu gato."
    ],
    "composicao": "Frango, fígado de ave, proteína isolada vegetal, taurina, minerais quelatados, vitaminas A, D3, E, biotina, espessantes naturais, água, óleo de peixe, L-carnitina, antioxidantes naturais. Produto livre de corantes e conservantes artificiais."
  },
  {
    "id": 141,
    "image": "/images/racao-umida-gatos-6.png",
    "title": "Ração Úmida Carne e Legumes Natural Premium",
    "category": "Rações para Gatos",
    "subcategory": "Úmida",
    "size": "Peso: 100g",
    "price": "R$6,99",
    "descricao": [
      "Com um mix nutritivo de carne e legumes, a Ração Úmida Natural Premium oferece uma alimentação completa, balanceada e saborosa para cães adultos. Livre de grãos e com ingredientes naturais, ela contribui para uma digestão saudável e maior absorção dos nutrientes. A textura macia facilita a mastigação e o aroma natural estimula o apetite até dos cães mais seletivos. Ideal para incluir na dieta diária como refeição principal ou adicional à ração seca tradicional."
    ],
    "composicao": "Carne bovina, cenoura, ervilha, batata-doce, óleo de coco, extrato de alecrim, levedura de cerveja, vitaminas A, D3, E, B12, zinco, cobre, ferro, taurina, espessantes vegetais. Sem transgênicos, corantes, aromatizantes ou conservantes artificiais."
  },
  {
    "id": 142,
    "image": "/images/caixa-areia-tampa-1.png",
    "title": "Caixa de Areia com Tampa Azul",
    "category": "Higiene para Gatos",
    "subcategory": "Com tampa",
    "size": "Tamanho: 50x40x40cm",
    "price": "R$89,90",
    "descricao": [
      "A Caixa de Areia com Tampa Azul garante mais privacidade e conforto ao seu gato, além de minimizar odores no ambiente. Com design prático, possui porta frontal basculante para facilitar a entrada e saída do pet. Seu formato fechado evita a dispersão de areia, mantendo o ambiente sempre limpo e organizado."
    ],
    "composicao": "Plástico resistente de alta densidade, dobradiças de polipropileno, filtro de carvão ativado, alça ergonômica. Material lavável, leve e durável, livre de BPA."
  },
  {
    "id": 143,
    "image": "/images/caixa-areia-tampa-2.png",
    "title": "Caixa de Areia com Tampa e Filtro",
    "category": "Higiene para Gatos",
    "subcategory": "Com tampa",
    "size": "Tamanho: 52x41x42cm",
    "price": "R$99,90",
    "descricao": [
      "A Caixa de Areia com Tampa e Filtro é ideal para quem busca praticidade e higiene. Com sistema de ventilação e filtro de carvão ativado, ajuda a controlar odores de forma eficaz. A tampa removível facilita a limpeza e a entrada possui portinhola translúcida para mais conforto do pet."
    ],
    "composicao": "Estrutura em polipropileno reforçado, filtro de carvão ativado substituível, porta em plástico translúcido, travas de segurança. Produto resistente à umidade e fácil de higienizar."
  },
  {
    "id": 144,
    "image": "/images/caixa-areia-tampa-3.png",
    "title": "Caixa de Areia com Tampa Rosa e Alça",
    "category": "Higiene para Gatos",
    "subcategory": "Com tampa",
    "size": "Tamanho: 48x38x38cm",
    "price": "R$94,50",
    "descricao": [
      "Com um design charmoso e funcional, a Caixa de Areia com Tampa Rosa é perfeita para manter a higiene do seu gato em dia. Possui alça superior para transporte e tampa com encaixe seguro. A estrutura fechada oferece mais privacidade ao pet e evita respingos de areia."
    ],
    "composicao": "Plástico rígido livre de BPA, alça de polietileno, tampa com encaixe por pressão, base antiderrapante. Leve, durável e fácil de lavar."
  },
  {
    "id": 145,
    "image": "/images/caixa-areia-sem-tampa-1.png",
    "title": "Caixa de Areia Sem Tampa Verde",
    "category": "Higiene para Gatos",
    "subcategory": "Sem tampa",
    "size": "Tamanho: 45x35x15cm",
    "price": "R$49,90",
    "descricao": [
      "Prática e econômica, a Caixa de Areia Sem Tampa Verde é ideal para gatos que preferem espaços abertos. Seu tamanho compacto facilita o posicionamento em qualquer ambiente. As bordas arredondadas proporcionam conforto e segurança para o pet durante o uso."
    ],
    "composicao": "Plástico polipropileno resistente, pigmento atóxico, superfície lisa fácil de limpar. Produto leve, lavável e reciclável."
  },
  {
    "id": 146,
    "image": "/images/caixa-areia-sem-tampa-2.png",
    "title": "Caixa de Areia Plástica Básica Azul",
    "category": "Higiene para Gatos",
    "subcategory": "Sem tampa",
    "size": "Tamanho: 50x40x18cm",
    "price": "R$54,90",
    "descricao": [
      "A Caixa de Areia Plástica Azul é uma opção prática e versátil para o dia a dia. Fabricada em material resistente, possui bordas altas que ajudam a conter a areia durante o uso. Ideal para gatos de todos os portes e fácil de lavar e transportar."
    ],
    "composicao": "Plástico PP de alta qualidade, resistente a arranhões e impactos, não tóxico. Design com cantos arredondados e superfície polida."
  },
  {
    "id": 147,
    "image": "/images/caixa-areia-sem-tampa-3.png",
    "title": "Caixa de Areia Retangular Vermelha",
    "category": "Higiene para Gatos",
    "subcategory": "Sem tampa",
    "size": "Tamanho: 48x38x16cm",
    "price": "R$51,90",
    "descricao": [
      "Com design clássico e funcional, a Caixa de Areia Retangular Vermelha é indicada para uso diário. Suas laterais altas evitam o desperdício de areia, enquanto a base antiderrapante garante estabilidade durante o uso. Leve, prática e de fácil manutenção."
    ],
    "composicao": "Polímero plástico reciclável, pigmentação não tóxica, superfície lisa de fácil limpeza. Produto lavável e durável."
  },
  {
    "id": 148,
    "image": "/images/caixa-areia-auto-1.png",
    "title": "Caixa de Areia Autolimpante Branca",
    "category": "Higiene para Gatos",
    "subcategory": "Autolimpantes",
    "size": "Tamanho: 55x45x40cm",
    "price": "R$199,90",
    "descricao": [
      "A Caixa de Areia Autolimpante Branca traz mais tecnologia e comodidade para a rotina. Com sistema automático de peneiração, separa resíduos sólidos da areia limpa, garantindo maior higiene e menos trabalho. Ideal para tutores que buscam praticidade sem abrir mão da limpeza."
    ],
    "composicao": "Plástico ABS de alta durabilidade, mecanismo interno de peneira com rotação manual, base antiderrapante. Produto elétrico não incluso. Fácil de montar e desmontar."
  },
  {
    "id": 149,
    "image": "/images/caixa-areia-auto-2.png",
    "title": "Caixa Autolimpante com Peneira Cinza",
    "category": "Higiene para Gatos",
    "subcategory": "Autolimpantes",
    "size": "Tamanho: 50x42x38cm",
    "price": "R$219,90",
    "descricao": [
      "Com sistema de peneira removível, a Caixa Autolimpante Cinza é prática, moderna e funcional. Permite a separação dos dejetos em segundos, otimizando a limpeza diária. Fabricada em plástico resistente e fácil de higienizar, garante conforto e higiene para o pet."
    ],
    "composicao": "Estrutura em polietileno reforçado, peneira de encaixe em polipropileno, alças ergonômicas. Produto reutilizável, resistente à umidade e livre de toxinas."
  },
  {
    "id": 150,
    "image": "/images/caixa-areia-auto-3.png",
    "title": "Caixa de Areia Automática com Sensor",
    "category": "Higiene para Gatos",
    "subcategory": "Autolimpantes",
    "size": "Tamanho: 60x45x45cm",
    "price": "R$499,90",
    "descricao": [
      "Tecnologia e conforto em um só produto: a Caixa de Areia Automática com Sensor realiza a limpeza automaticamente após o uso do gato. Sensores inteligentes detectam o movimento do pet e ativam o sistema de coleta sem causar ruídos incômodos. Ideal para tutores que desejam mais tempo livre e menos bagunça."
    ],
    "composicao": "Plástico ABS de engenharia, sensor infravermelho inteligente, motor silencioso de baixa voltagem, recipiente de resíduos removível. Produto bivolt, fácil de operar e seguro."
  },
  {
    "id": 151,
    "image": "/images/areia-higienica-1.png",
    "title": "Areia Higiênica Super Absorvente Neutra",
    "category": "Higiene",
    "subcategory": "Areia Higiênica",
    "size": "Peso: 4kg",
    "price": "R$22,90",
    "descricao": [
      "A Areia Higiênica Super Absorvente Neutra proporciona máxima absorção da urina, controle eficaz de odores e formação de torrões firmes, facilitando a limpeza diária. É ideal para gatos exigentes e tutores que buscam praticidade sem abrir mão da higiene."
    ],
    "composicao": "Argila bentonita natural, isenta de fragrâncias e aditivos artificiais. Produto atóxico e seguro para gatos de todas as idades."
  },
  {
    "id": 152,
    "image": "/images/areia-higienica-2.png",
    "title": "Areia Higiênica com Perfume Floral",
    "category": "Higiene",
    "subcategory": "Areia Higiênica",
    "size": "Peso: 5kg",
    "price": "R$25,50",
    "descricao": [
      "Com fragrância suave e agradável, a Areia Higiênica com Perfume Floral proporciona um ambiente limpo e perfumado. Sua fórmula especial forma torrões resistentes, facilitando a remoção e prolongando a durabilidade do produto."
    ],
    "composicao": "Argila bentonita, fragrância floral suave, agentes de controle de odor. Produto hipoalergênico e livre de poeira."
  },
  {
    "id": 153,
    "image": "/images/areia-higienica-3.png",
    "title": "Areia Higiênica de Sílica Cristal Premium",
    "category": "Higiene",
    "subcategory": "Areia Higiênica",
    "size": "Peso: 1,6kg",
    "price": "R$29,90",
    "descricao": [
      "Com altíssimo poder de absorção, a Areia de Sílica Cristal Premium neutraliza odores instantaneamente e mantém a caixa seca por mais tempo. É ideal para ambientes internos e para tutores que prezam por limpeza contínua."
    ],
    "composicao": "Cristais de sílica gel microporosos, livre de fragrâncias artificiais. Não tóxica e biodegradável."
  },
  {
    "id": 154,
    "image": "/images/shampoo-seco-1.png",
    "title": "Shampoo Seco Spray para Cães e Gatos",
    "category": "Higiene",
    "subcategory": "Shampoo seco",
    "size": "Volume: 200ml",
    "price": "R$18,90",
    "descricao": [
      "Ideal para limpezas rápidas entre os banhos, o Shampoo Seco em Spray proporciona frescor imediato aos pelos dos pets. Sua fórmula suave remove impurezas sem necessidade de enxágue, deixando o animal limpo e perfumado."
    ],
    "composicao": "Extratos naturais, álcool de cereais, fragrância suave, agentes de limpeza a seco. Livre de parabenos e corantes artificiais."
  },
  {
    "id": 155,
    "image": "/images/shampoo-seco-2.png",
    "title": "Shampoo Seco Natural com Aloe Vera",
    "category": "Higiene",
    "subcategory": "Shampoo seco",
    "size": "Volume: 150ml",
    "price": "R$21,50",
    "descricao": [
      "Com fórmula enriquecida com Aloe Vera, o Shampoo Seco Natural promove hidratação e cuidado aos pelos do pet, limpando suavemente e proporcionando sensação de frescor. Ideal para peles sensíveis e uso frequente."
    ],
    "composicao": "Extrato de Aloe Vera, óleos essenciais, base vegetal, vitamina E. Produto vegano e dermatologicamente testado."
  },
  {
    "id": 156,
    "image": "/images/shampoo-seco-3.png",
    "title": "Shampoo Seco Refrescante Lavanda",
    "category": "Higiene",
    "subcategory": "Shampoo seco",
    "size": "Volume: 180ml",
    "price": "R$20,00",
    "descricao": [
      "O Shampoo Seco com aroma de lavanda proporciona limpeza instantânea e perfume relaxante. Indicado para animais que não podem tomar banho com frequência, oferece frescor e bem-estar com praticidade."
    ],
    "composicao": "Extrato de lavanda, álcool de cereais, glicerina vegetal, fragrância hipoalergênica. Livre de sulfatos."
  },
  {
    "id": 157,
    "image": "/images/escova-pente-1.png",
    "title": "Escova Dupla Face para Pelos",
    "category": "Higiene",
    "subcategory": "Escovas e pente",
    "size": "Tamanho: Único",
    "price": "R$24,90",
    "descricao": [
      "A Escova Dupla Face é ideal para desembaraçar e dar brilho aos pelos. De um lado, cerdas macias que removem sujeiras e poeira, do outro, pinos com bolinhas para massagear a pele e ativar a circulação sanguínea do animal."
    ],
    "composicao": "Corpo em madeira tratada, cerdas naturais, pinos metálicos com pontas arredondadas. Produto leve e anatômico."
  },
  {
    "id": 158,
    "image": "/images/escova-pente-2.png",
    "title": "Pente Desembaraçador de Aço Inox",
    "category": "Higiene",
    "subcategory": "Escovas e pente",
    "size": "Tamanho: Médio",
    "price": "R$19,90",
    "descricao": [
      "Ideal para remover nós e pelos mortos, o Pente Desembaraçador de Aço Inox é indicado para raças com pelagem média a longa. Possui dentes arredondados que evitam arranhões e proporcionam conforto ao pet."
    ],
    "composicao": "Dentes de aço inoxidável, cabo ergonômico em plástico emborrachado. Resistente e de fácil manuseio."
  },
  {
    "id": 159,
    "image": "/images/escova-pente-3.png",
    "title": "Escova Autolimpante para Gatos e Cães",
    "category": "Higiene",
    "subcategory": "Escovas e pente",
    "size": "Tamanho: Grande",
    "price": "R$29,50",
    "descricao": [
      "Com sistema de autolimpeza, a Escova Autolimpante remove os pelos da escova com um simples clique. Ideal para manter o pet sempre bem cuidado, é eficiente para desembaraçar e eliminar pelos soltos sem esforço."
    ],
    "composicao": "Cerdas em aço inox, corpo em plástico ABS, botão retrátil de autolimpeza. Design moderno e confortável."
  },
  {
    "id": 160,
    "image": "/images/arranhador-pequeno-1.png",
    "title": "Arranhador Compacto de Sisal",
    "category": "Arranhadores",
    "subcategory": "Pequenos",
    "size": "Altura: 30cm",
    "price": "R$49,90",
    "descricao": [
      "Ideal para espaços pequenos, este arranhador compacto possui base estável e haste revestida com sisal natural, perfeito para o gato afiar as garras sem danificar os móveis. Ocupa pouco espaço e é indicado para gatos de pequeno porte ou filhotes."
    ],
    "composicao": "Base de MDF revestida em carpete, haste de madeira coberta com corda de sisal natural, materiais atóxicos e sustentáveis, fácil de montar."
  },
  {
    "id": 161,
    "image": "/images/arranhador-pequeno-2.png",
    "title": "Arranhador em Forma de Cacto",
    "category": "Arranhadores",
    "subcategory": "Pequenos",
    "size": "Altura: 35cm",
    "price": "R$59,90",
    "descricao": [
      "Com design criativo em formato de cacto, esse arranhador é funcional e decorativo. Possui revestimento em sisal verde, ideal para o gato gastar energia e ainda enfeitar o ambiente com charme."
    ],
    "composicao": "Plataforma em MDF, estrutura de PVC resistente, revestimento em sisal verde tingido com corantes naturais, base antiderrapante."
  },
  {
    "id": 162,
    "image": "/images/arranhador-pequeno-3.png",
    "title": "Arranhador de Canto 2 em 1",
    "category": "Arranhadores",
    "subcategory": "Pequenos",
    "size": "Tamanho: 40x25cm",
    "price": "R$39,90",
    "descricao": [
      "Perfeito para cantos de sofá ou paredes, esse arranhador 2 em 1 é compacto e eficiente, com acabamento de sisal e carpete. Ajuda a redirecionar o comportamento natural do gato de arranhar móveis."
    ],
    "composicao": "Placa de MDF, tecido de carpete resistente, superfície em sisal trançado, ganchos de fixação inclusos."
  },

  {
    "id": 163,
    "image": "/images/arranhador-medio-1.png",
    "title": "Arranhador com Plataforma Elevada",
    "category": "Arranhadores",
    "subcategory": "Médios",
    "size": "Altura: 65cm",
    "price": "R$89,90",
    "descricao": [
      "Com uma plataforma elevada para descanso e coluna de sisal para arranhadura, este arranhador médio é ideal para gatos que gostam de observar o ambiente e gastar energia."
    ],
    "composicao": "Madeira MDF, tubo central revestido com sisal natural, base e plataforma em pelúcia macia, estrutura firme e segura."
  },
  {
    "id": 164,
    "image": "/images/arranhador-medio-2.png",
    "title": "Arranhador com Brinquedo Suspenso",
    "category": "Arranhadores",
    "subcategory": "Médios",
    "size": "Altura: 60cm",
    "price": "R$95,00",
    "descricao": [
      "Esse arranhador inclui uma bola pendurada que estimula o instinto de caça do gato, além de um pilar revestido com sisal. É uma excelente opção para manter o felino ativo e entretido."
    ],
    "composicao": "Estrutura de MDF com tubo central de papelão grosso, corda de sisal natural, brinquedo com enchimento e cordão de nylon."
  },
  {
    "id": 165,
    "image": "/images/arranhador-medio-3.png",
    "title": "Arranhador com Casinha Embutida",
    "category": "Arranhadores",
    "subcategory": "Médios",
    "size": "Altura: 70cm",
    "price": "R$119,90",
    "descricao": [
      "Além da função de arranhador, esse modelo possui uma casinha confortável onde o gato pode dormir ou se esconder. Um produto 2 em 1 ideal para enriquecer o ambiente do pet."
    ],
    "composicao": "Casinha de MDF forrada com pelúcia, poste central revestido de sisal, estrutura firme com almofada interna removível."
  },

  {
    "id": 166,
    "image": "/images/arranhador-torre-1.png",
    "title": "Torre Arranhador com Plataformas",
    "category": "Arranhadores",
    "subcategory": "Estilo torre",
    "size": "Altura: 1,20m",
    "price": "R$199,90",
    "descricao": [
      "Essa torre possui várias plataformas para o gato explorar diferentes níveis, com áreas revestidas em sisal e pelúcia. Ideal para múltiplos gatos ou para quem busca um item completo para o pet."
    ],
    "composicao": "MDF de alta resistência, colunas com sisal, degraus e bases com pelúcia macia, parafusos de fixação e manual de montagem incluso."
  },
  {
    "id": 167,
    "image": "/images/arranhador-torre-2.png",
    "title": "Torre de Atividades para Gatos",
    "category": "Arranhadores",
    "subcategory": "Estilo torre",
    "size": "Altura: 1,40m",
    "price": "R$249,90",
    "descricao": [
      "Torre multifuncional com arranhadores, plataformas, tocas e brinquedos integrados. Oferece estímulo físico e mental, promovendo bem-estar e diminuindo o estresse."
    ],
    "composicao": "MDF, sisal trançado, tecido de pelúcia sintética, acessórios de nylon e metal para montagem segura, resistente até 3 gatos simultâneos."
  },
  {
    "id": 168,
    "image": "/images/arranhador-torre-3.png",
    "title": "Torre Deluxe com Camas e Tunel",
    "category": "Arranhadores",
    "subcategory": "Estilo torre",
    "size": "Altura: 1,50m",
    "price": "R$289,90",
    "descricao": [
      "Com design robusto e funcional, essa torre possui duas camas, túnel suspenso, postes com sisal e plataformas em diferentes alturas. Oferece diversão, descanso e arranhadura em um só produto."
    ],
    "composicao": "MDF de engenharia, postes com sisal reforçado, camas com espuma e revestimento de pelúcia, túnel de tecido estruturado com entrada dupla."
  },

  {
    "id": 169,
    "image": "/images/arranhador-interativo-1.png",
    "title": "Arranhador Interativo com Bolinhas",
    "category": "Arranhadores",
    "subcategory": "Interativos",
    "size": "Altura: 50cm",
    "price": "R$79,90",
    "descricao": [
      "Esse arranhador inclui uma pista circular com bolinhas que giram, mantendo o gato entretido enquanto afia suas garras. Um ótimo recurso para reduzir o tédio e incentivar o exercício."
    ],
    "composicao": "Base de MDF, trilho de plástico com esferas de PVC, poste revestido com sisal, estrutura desmontável e fácil de limpar."
  },
  {
    "id": 170,
    "image": "/images/arranhador-interativo-2.png",
    "title": "Arranhador com Laser Automático",
    "category": "Arranhadores",
    "subcategory": "Interativos",
    "size": "Altura: 55cm",
    "price": "R$139,90",
    "descricao": [
      "Além do sisal, este arranhador conta com um sistema automático de laser que estimula o gato a se movimentar e brincar. Ideal para pets que ficam muito tempo sozinhos."
    ],
    "composicao": "MDF, sisal natural, base com compartimento eletrônico de laser, funciona com pilhas AA (não inclusas), botão de ativação e timer automático."
  },
  {
    "id": 171,
    "image": "/images/arranhador-interativo-3.png",
    "title": "Arranhador com Bolinha e Catnip",
    "category": "Arranhadores",
    "subcategory": "Interativos",
    "size": "Altura: 45cm",
    "price": "R$89,50",
    "descricao": [
      "Esse arranhador possui uma bolinha presa por elástico e compartimento para catnip, estimulando o comportamento natural e garantindo horas de diversão."
    ],
    "composicao": "Poste em papelão grosso com revestimento de sisal, base antiderrapante de MDF, bolinha de pelúcia com elástico resistente, compartimento interno com catnip orgânico incluso."
  },
  {
    "id": 172,
    "image": "/images/brinquedo-bola-1.png",
    "title": "Bola Interativa com Luz LED",
    "category": "Brinquedos",
    "subcategory": "Bolas",
    "size": "Tamanho: 6cm",
    "price": "R$19,90",
    "descricao": [
      "Bola eletrônica que acende luzes coloridas ao ser movimentada, estimulando o instinto caçador de gatos e cães. Ideal para brincadeiras noturnas e ambientes internos."
    ],
    "composicao": "Plástico ABS resistente, componentes LED internos, sensor de movimento, bateria substituível. Produto não-tóxico, seguro para animais."
  },
  {
    "id": 173,
    "image": "/images/brinquedo-bola-2.png",
    "title": "Kit com 3 Bolinhas Texturizadas",
    "category": "Brinquedos",
    "subcategory": "Bolas",
    "size": "Tamanho: 5cm cada",
    "price": "R$14,50",
    "descricao": [
      "Conjunto com 3 bolinhas leves, com texturas variadas que proporcionam estímulo tátil e diversão prolongada para seu pet."
    ],
    "composicao": "Borracha termoplástica, superfície texturizada, material flexível e lavável. Livre de substâncias tóxicas."
  },
  {
    "id": 174,
    "image": "/images/brinquedo-bola-3.png",
    "title": "Bola com Catnip para Gatos",
    "category": "Brinquedos",
    "subcategory": "Bolas",
    "size": "Tamanho: 4cm",
    "price": "R$12,90",
    "descricao": [
      "Bola feita especialmente para gatos, com catnip prensado que estimula a brincadeira e reduz o estresse."
    ],
    "composicao": "Catnip natural prensado, cola vegetal atóxica, embalagem biodegradável. Produto 100% seguro para felinos."
  },
  {
    "id": 175,
    "image": "/images/mordedor-1.png",
    "title": "Mordedor em Forma de Osso",
    "category": "Brinquedos",
    "subcategory": "Mordedores",
    "size": "Tamanho: 10cm",
    "price": "R$16,90",
    "descricao": [
      "Mordedor em formato de osso com textura massageadora para manter os dentes limpos e proporcionar entretenimento saudável ao pet."
    ],
    "composicao": "Borracha natural com aroma artificial de carne, livre de BPA e materiais tóxicos. Alta durabilidade."
  },
  {
    "id": 176,
    "image": "/images/mordedor-2.png",
    "title": "Mordedor de Borracha com Textura",
    "category": "Brinquedos",
    "subcategory": "Mordedores",
    "size": "Tamanho: 12cm",
    "price": "R$18,50",
    "descricao": [
      "Texturas variadas que massageiam a gengiva durante a mastigação. Ideal para cães em fase de troca dentária."
    ],
    "composicao": "Borracha resistente atóxica, material reciclável, lavável e durável. Indicado para todos os portes."
  },
  {
    "id": 177,
    "image": "/images/mordedor-3.png",
    "title": "Anel Mordedor Resistente",
    "category": "Brinquedos",
    "subcategory": "Mordedores",
    "size": "Tamanho: 9cm",
    "price": "R$15,00",
    "descricao": [
      "Mordedor em formato de anel, ideal para brincadeiras de puxar e mastigar. Estimula os músculos da mandíbula e promove higiene bucal."
    ],
    "composicao": "Polímero resistente, material com certificação de segurança, superfície lisa e firme."
  },
  {
    "id": 178,
    "image": "/images/pelucia-1.png",
    "title": "Brinquedo de Pelúcia Patinha",
    "category": "Brinquedos",
    "subcategory": "De pelúcia",
    "size": "Tamanho: 15cm",
    "price": "R$22,90",
    "descricao": [
      "Pelúcia em formato de patinha com enchimento macio e costura reforçada. Ideal para pets de pequeno e médio porte."
    ],
    "composicao": "Tecido de pelúcia hipoalergênico, enchimento de fibra siliconada, costura dupla com linha de nylon."
  },
  {
    "id": 179,
    "image": "/images/pelucia-2.png",
    "title": "Pelúcia com Apito para Cães",
    "category": "Brinquedos",
    "subcategory": "De pelúcia",
    "size": "Tamanho: 20cm",
    "price": "R$25,00",
    "descricao": [
      "Brinquedo de pelúcia com apito interno que emite som ao ser pressionado. Estimula a curiosidade e proporciona diversão prolongada."
    ],
    "composicao": "Pelúcia sintética, apito plástico interno, enchimento de poliéster, costura reforçada."
  },
  {
    "id": 180,
    "image": "/images/pelucia-3.png",
    "title": "Bicho de Pelúcia com Catnip",
    "category": "Brinquedos",
    "subcategory": "De pelúcia",
    "size": "Tamanho: 12cm",
    "price": "R$19,90",
    "descricao": [
      "Pelúcia macia com enchimento de catnip que estimula a brincadeira e reduz o tédio dos gatos."
    ],
    "composicao": "Tecido de algodão, catnip natural, enchimento atóxico, bordado em alto relevo para maior segurança."
  },
  {
    "id": 181,
    "image": "/images/cama-espuma-1.png",
    "title": "Caminha de Espuma Aconchegante",
    "category": "Camas",
    "subcategory": "Espuma",
    "size": "Tamanho: M",
    "price": "R$89,90",
    "descricao": [
      "Caminha confortável com enchimento em espuma de alta densidade que proporciona aconchego e suporte para o pet descansar com qualidade."
    ],
    "composicao": "Tecido de microfibra, espuma ortopédica, fundo antiderrapante. Capa removível e lavável."
  },
  {
    "id": 182,
    "image": "/images/cama-espuma-2.png",
    "title": "Colchonete de Espuma Ortopédico",
    "category": "Camas",
    "subcategory": "Espuma",
    "size": "Tamanho: G",
    "price": "R$109,90",
    "descricao": [
      "Colchonete com espuma ortopédica para suporte de pets idosos ou com problemas articulares. Design reto ideal para ambientes pequenos."
    ],
    "composicao": "Espuma ortopédica revestida com tecido impermeável, base antiderrapante em PVC, acabamento com viés reforçado."
  },
  {
    "id": 183,
    "image": "/images/cama-espuma-3.png",
    "title": "Cama Macia de Espuma com Zíper",
    "category": "Camas",
    "subcategory": "Espuma",
    "size": "Tamanho: P",
    "price": "R$75,00",
    "descricao": [
      "Caminha compacta com espuma macia e zíper para fácil remoção da capa. Perfeita para pets de pequeno porte."
    ],
    "composicao": "Espuma de poliuretano, capa com zíper em tecido poliéster, base com antiderrapante emborrachado."
  },
  {
    "id": 184,
    "image": "/images/casinha-1.png",
    "title": "Casinha de Pelúcia Fechada",
    "category": "Camas",
    "subcategory": "Casinha",
    "size": "Tamanho: Único",
    "price": "R$129,90",
    "descricao": [
      "Casinha fechada e acolchoada, proporciona sensação de segurança ao pet e isolamento térmico em dias frios."
    ],
    "composicao": "Tecido de pelúcia macia, estrutura de espuma moldada, fundo com material impermeável e antiderrapante."
  },
  {
    "id": 185,
    "image": "/images/casinha-2.png",
    "title": "Casinha Dobrável com Almofada",
    "category": "Camas",
    "subcategory": "Casinha",
    "size": "Tamanho: M",
    "price": "R$139,90",
    "descricao": [
      "Modelo dobrável com almofada removível, ideal para viagens ou uso doméstico. Oferece conforto e praticidade ao tutor."
    ],
    "composicao": "Tecido Oxford impermeável, estrutura dobrável com velcro, almofada com enchimento de fibra siliconada."
  },
  {
    "id": 186,
    "image": "/images/casinha-3.png",
    "title": "Casinha Estilo Cabana com Forro Térmico",
    "category": "Camas",
    "subcategory": "Casinha",
    "size": "Tamanho: G",
    "price": "R$159,90",
    "descricao": [
      "Casinha estilo cabana com forro térmico e entrada oval. Ideal para cães e gatos que gostam de ambientes aconchegantes."
    ],
    "composicao": "Forro térmico de poliéster aluminizado, tecido plush externo, espuma interna com alta densidade, base emborrachada."
  },
  {
    "id": 187,
    "image": "/images/tunel-1.png",
    "title": "Túnel Macio com Entrada Dupla",
    "category": "Camas",
    "subcategory": "Túnel",
    "size": "Comprimento: 90cm",
    "price": "R$69,90",
    "descricao": [
      "Túnel de pelúcia com duas entradas e almofada interna, proporciona conforto e diversão ao mesmo tempo."
    ],
    "composicao": "Tecido de pelúcia, armação flexível interna, base acolchoada, lavável à mão."
  },
  {
    "id": 188,
    "image": "/images/tunel-2.png",
    "title": "Cama Túnel com Enchimento Fofo",
    "category": "Camas",
    "subcategory": "Túnel",
    "size": "Comprimento: 1m",
    "price": "R$79,90",
    "descricao": [
      "Modelo de túnel mais comprido, com enchimento extra para conforto máximo. Ideal para ambientes frios."
    ],
    "composicao": "Enchimento de fibra siliconada, revestimento em tecido sintético térmico, acabamento costurado à máquina."
  },
  {
    "id": 189,
    "image": "/images/tunel-3.png",
    "title": "Túnel de Brincar e Dormir 2 em 1",
    "category": "Camas",
    "subcategory": "Túnel",
    "size": "Comprimento: 80cm",
    "price": "R$74,50",
    "descricao": [
      "Túnel multifuncional ideal para descanso e brincadeiras. Estimula o instinto natural de esconderijo em gatos e cães de pequeno porte."
    ],
    "composicao": "Tecido Oxford, armação metálica flexível, interior acolchoado, fechos laterais para ajuste do formato."
  },
  {
    "id": 190,
    "image": "/images/pijama-1.png",
    "title": "Pijama Estampado Algodão Pet",
    "category": "Roupas e acessórios",
    "subcategory": "Pijamas",
    "size": "Tamanho: P",
    "price": "R$39,90",
    "descricao": [
      "Pijama Estampado Algodão Pet proporciona conforto, segurança e praticidade para o dia a dia do seu pet. Ideal para uso diário, adaptando-se às necessidades do animal com estilo e funcionalidade."
    ],
    "composicao": "Material resistente e de alta qualidade, adequado ao uso animal, com acabamento cuidadoso que garante durabilidade e bem-estar."
  },
  {
    "id": 191,
    "image": "/images/pijama-2.png",
    "title": "Pijama Inverno com Capuz",
    "category": "Roupas e acessórios",
    "subcategory": "Pijamas",
    "size": "Tamanho: M",
    "price": "R$44,90",
    "descricao": [
      "Pijama Inverno com Capuz proporciona conforto, segurança e praticidade para o dia a dia do seu pet. Ideal para uso diário, adaptando-se às necessidades do animal com estilo e funcionalidade."
    ],
    "composicao": "Material resistente e de alta qualidade, adequado ao uso animal, com acabamento cuidadoso que garante durabilidade e bem-estar."
  },
  {
    "id": 192,
    "image": "/images/pijama-3.png",
    "title": "Pijama Xadrez Pet Style",
    "category": "Roupas e acessórios",
    "subcategory": "Pijamas",
    "size": "Tamanho: G",
    "price": "R$49,90",
    "descricao": [
      "Pijama Xadrez Pet Style proporciona conforto, segurança e praticidade para o dia a dia do seu pet. Ideal para uso diário, adaptando-se às necessidades do animal com estilo e funcionalidade."
    ],
    "composicao": "Material resistente e de alta qualidade, adequado ao uso animal, com acabamento cuidadoso que garante durabilidade e bem-estar."
  },
  {
    "id": 193,
    "image": "/images/coleira-decorada-1.png",
    "title": "Coleira com Estampa de Frutas",
    "category": "Roupas e acessórios",
    "subcategory": "Coleiras decoradas",
    "size": "Tamanho: Ajustável",
    "price": "R$29,90",
    "descricao": [
      "Coleira com Estampa de Frutas proporciona conforto, segurança e praticidade para o dia a dia do seu pet. Ideal para uso diário, adaptando-se às necessidades do animal com estilo e funcionalidade."
    ],
    "composicao": "Material resistente e de alta qualidade, adequado ao uso animal, com acabamento cuidadoso que garante durabilidade e bem-estar."
  },
  {
    "id": 194,
    "image": "/images/coleira-decorada-2.png",
    "title": "Coleira com Laço de Cetim",
    "category": "Roupas e acessórios",
    "subcategory": "Coleiras decoradas",
    "size": "Tamanho: P",
    "price": "R$27,50",
    "descricao": [
      "Coleira com Laço de Cetim proporciona conforto, segurança e praticidade para o dia a dia do seu pet. Ideal para uso diário, adaptando-se às necessidades do animal com estilo e funcionalidade."
    ],
    "composicao": "Material resistente e de alta qualidade, adequado ao uso animal, com acabamento cuidadoso que garante durabilidade e bem-estar."
  },
  {
    "id": 195,
    "image": "/images/coleira-decorada-3.png",
    "title": "Coleira Colorida com Pingente",
    "category": "Roupas e acessórios",
    "subcategory": "Coleiras decoradas",
    "size": "Tamanho: M",
    "price": "R$32,90",
    "descricao": [
      "Coleira Colorida com Pingente proporciona conforto, segurança e praticidade para o dia a dia do seu pet. Ideal para uso diário, adaptando-se às necessidades do animal com estilo e funcionalidade."
    ],
    "composicao": "Material resistente e de alta qualidade, adequado ao uso animal, com acabamento cuidadoso que garante durabilidade e bem-estar."
  },
  {
    "id": 196,
    "image": "/images/gravata-1.png",
    "title": "Gravatinha Clássica Pet",
    "category": "Roupas e acessórios",
    "subcategory": "Gravatinhas",
    "size": "Tamanho: Único",
    "price": "R$14,90",
    "descricao": [
      "Gravatinha Clássica Pet proporciona conforto, segurança e praticidade para o dia a dia do seu pet. Ideal para uso diário, adaptando-se às necessidades do animal com estilo e funcionalidade."
    ],
    "composicao": "Material resistente e de alta qualidade, adequado ao uso animal, com acabamento cuidadoso que garante durabilidade e bem-estar."
  },
  {
    "id": 197,
    "image": "/images/gravata-2.png",
    "title": "Gravata Borboleta Estampada",
    "category": "Roupas e acessórios",
    "subcategory": "Gravatinhas",
    "size": "Tamanho: Ajustável",
    "price": "R$16,90",
    "descricao": [
      "Gravata Borboleta Estampada proporciona conforto, segurança e praticidade para o dia a dia do seu pet. Ideal para uso diário, adaptando-se às necessidades do animal com estilo e funcionalidade."
    ],
    "composicao": "Material resistente e de alta qualidade, adequado ao uso animal, com acabamento cuidadoso que garante durabilidade e bem-estar."
  },
  {
    "id": 198,
    "image": "/images/gravata-3.png",
    "title": "Gravatinha com Listras e Elástico",
    "category": "Roupas e acessórios",
    "subcategory": "Gravatinhas",
    "size": "Tamanho: P",
    "price": "R$13,90",
    "descricao": [
      "Gravatinha com Listras e Elástico proporciona conforto, segurança e praticidade para o dia a dia do seu pet. Ideal para uso diário, adaptando-se às necessidades do animal com estilo e funcionalidade."
    ],
    "composicao": "Material resistente e de alta qualidade, adequado ao uso animal, com acabamento cuidadoso que garante durabilidade e bem-estar."
  },
  {
    "id": 199,
    "image": "/images/carrinho-1.png",
    "title": "Carrinho Dobrável para Pets",
    "category": "Transporte",
    "subcategory": "Carrinhos",
    "size": "Altura: 100cm",
    "price": "R$299,90",
    "descricao": [
      "Carrinho Dobrável para Pets proporciona conforto, segurança e praticidade para o transporte do seu pet. Ideal para passeios, viagens ou deslocamentos urbanos com praticidade e estilo."
    ],
    "composicao": "Estrutura de alumínio, rodas de silicone, tecido impermeável com zíper reforçado e alça acolchoada ergonômica."
  },
  {
    "id": 200,
    "image": "/images/carrinho-2.png",
    "title": "Carrinho Luxo com Visor Telado",
    "category": "Transporte",
    "subcategory": "Carrinhos",
    "size": "Altura: 105cm",
    "price": "R$379,90",
    "descricao": [
      "Carrinho Luxo com Visor Telado proporciona conforto, segurança e praticidade para o transporte do seu pet. Ideal para passeios, viagens ou deslocamentos urbanos com praticidade e estilo."
    ],
    "composicao": "Estrutura de aço carbono, rodas giratórias com freio, cobertura com visor em tela, cesto inferior para acessórios."
  },
  {
    "id": 201,
    "image": "/images/carrinho-3.png",
    "title": "Carrinho Pet com Bolsa Removível",
    "category": "Transporte",
    "subcategory": "Carrinhos",
    "size": "Altura: 110cm",
    "price": "R$349,50",
    "descricao": [
      "Carrinho Pet com Bolsa Removível proporciona conforto, segurança e praticidade para o transporte do seu pet. Ideal para passeios, viagens ou deslocamentos urbanos com praticidade e estilo."
    ],
    "composicao": "Estrutura dobrável de ferro, tecido Oxford, zíper duplo, alças reforçadas e base almofadada removível."
  },
  {
    "id": 202,
    "image": "/images/cortador-1.png",
    "title": "Cortador de Unha Profissional",
    "category": "Cuidados",
    "subcategory": "Cortadores de unha",
    "size": "Tamanho: Médio",
    "price": "R$18,90",
    "descricao": [
      "Cortador de Unha Profissional proporciona conforto, segurança e praticidade para a higiene do seu pet. Ideal para manutenção regular das unhas com precisão e segurança."
    ],
    "composicao": "Lâminas de aço inoxidável, cabo emborrachado antiderrapante e trava de segurança integrada."
  },
  {
    "id": 203,
    "image": "/images/cortador-2.png",
    "title": "Cortador com Limitador de Corte",
    "category": "Cuidados",
    "subcategory": "Cortadores de unha",
    "size": "Tamanho: P",
    "price": "R$22,90",
    "descricao": [
      "Cortador com Limitador de Corte proporciona conforto, segurança e praticidade para a higiene do seu pet. Ideal para manutenção regular das unhas com precisão e segurança."
    ],
    "composicao": "Lâminas resistentes de aço carbono, limitador ajustável, estrutura ergonômica com material antiderrapante."
  },
  {
    "id": 204,
    "image": "/images/cortador-3.png",
    "title": "Cortador de Unha com Lupa",
    "category": "Cuidados",
    "subcategory": "Cortadores de unha",
    "size": "Tamanho: Grande",
    "price": "R$29,90",
    "descricao": [
      "Cortador de Unha com Lupa proporciona conforto, segurança e praticidade para a higiene do seu pet. Ideal para manutenção regular das unhas com precisão e segurança."
    ],
    "composicao": "Estrutura de plástico ABS, lâminas em aço inox, lupa acoplada e apoio antiderrapante de borracha."
  },
  {
    "id": 205,
    "image": "/images/escova-cuidados-1.png",
    "title": "Escova de Cerdas Macias",
    "category": "Cuidados",
    "subcategory": "Escovas",
    "size": "Tamanho: Único",
    "price": "R$24,50",
    "descricao": [
      "Escova de Cerdas Macias proporciona conforto, segurança e praticidade para o cuidado com os pelos do seu pet. Ideal para uso diário, removendo sujeiras e mantendo a pelagem saudável e brilhante."
    ],
    "composicao": "Cabo anatômico de plástico, cerdas sintéticas macias e base almofadada com tecnologia antiestática."
  },
  {
    "id": 206,
    "image": "/images/escova-cuidados-2.png",
    "title": "Escova 2 em 1 Massageadora",
    "category": "Cuidados",
    "subcategory": "Escovas",
    "size": "Tamanho: P",
    "price": "R$28,90",
    "descricao": [
      "Escova 2 em 1 Massageadora proporciona conforto, segurança e praticidade para o cuidado com os pelos do seu pet. Ideal para uso diário, removendo sujeiras e mantendo a pelagem saudável e brilhante."
    ],
    "composicao": "Cerdas de silicone, base flexível e pegador emborrachado, com função massageadora e removedora de pelos."
  },
  {
    "id": 207,
    "image": "/images/escova-cuidados-3.png",
    "title": "Escova com Cabo de Madeira",
    "category": "Cuidados",
    "subcategory": "Escovas",
    "size": "Tamanho: M",
    "price": "R$31,90",
    "descricao": [
      "Escova com Cabo de Madeira proporciona conforto, segurança e praticidade para o cuidado com os pelos do seu pet. Ideal para uso diário, removendo sujeiras e mantendo a pelagem saudável e brilhante."
    ],
    "composicao": "Cabo de madeira natural, cerdas firmes em nylon e ponta arredondada para evitar machucados."
  },
  {
    "id": 208,
    "image": "/images/lencos-1.png",
    "title": "Lenços Umedecidos com Aloe Vera",
    "category": "Cuidados",
    "subcategory": "Lenços umedecidos",
    "size": "Pacote: 50 unidades",
    "price": "R$19,90",
    "descricao": [
      "Lenços Umedecidos com Aloe Vera proporcionam conforto, segurança e praticidade para a higiene do seu pet. Ideais para limpeza rápida das patas, pelos e áreas sensíveis, com ação calmante."
    ],
    "composicao": "Fibras naturais, extrato de aloe vera, glicerina vegetal, sem álcool e sem parabenos."
  },
  {
    "id": 209,
    "image": "/images/lencos-2.png",
    "title": "Lenços Hipoalergênicos Neutros",
    "category": "Cuidados",
    "subcategory": "Lenços umedecidos",
    "size": "Pacote: 75 unidades",
    "price": "R$24,90",
    "descricao": [
      "Lenços Hipoalergênicos Neutros proporcionam conforto, segurança e praticidade para a higiene do seu pet. Ideais para limpeza rápida das patas, pelos e áreas sensíveis, com ação calmante."
    ],
    "composicao": "Tecido biodegradável, extratos vegetais calmantes, fórmula livre de fragrância, dermatologicamente testado."
  },
  {
    "id": 210,
    "image": "/images/lencos-3.png",
    "title": "Lenços com Perfume Suave",
    "category": "Cuidados",
    "subcategory": "Lenços umedecidos",
    "size": "Pacote: 100 unidades",
    "price": "R$27,90",
    "descricao": [
      "Lenços com Perfume Suave proporcionam conforto, segurança e praticidade para a higiene do seu pet. Ideais para limpeza rápida das patas, pelos e áreas sensíveis, com ação calmante."
    ],
    "composicao": "Lenços ultramacios, fórmula com aloe vera e camomila, fragrância suave e livre de álcool."
  },
  {
    "id": 211,
    "image": "/images/racao-hamster-1.png",
    "title": "Mix Nutritivo para Hamsters Jovens",
    "category": "Rações para Roedores",
    "subcategory": "Para hamsters",
    "size": "Peso: 400g",
    "price": "R$24,90",
    "descricao": [
      "O Mix Nutritivo para Hamsters Jovens é formulado para atender as necessidades alimentares durante a fase de crescimento, promovendo saúde e bem-estar. Contém uma combinação balanceada de grãos integrais, sementes, frutas desidratadas e vegetais ricos em fibras e vitaminas. Sua textura crocante ajuda na saúde bucal, enquanto os ingredientes selecionados oferecem energia e vitalidade. Ideal para manter o pelo brilhante, os ossos fortes e o sistema digestivo saudável."
    ],
    "composicao": "Milho integral, trigo, aveia, semente de girassol, cenoura desidratada, maçã seca, vitaminas A, D3, E, complexo B, minerais como cálcio e zinco, antioxidantes naturais e prebióticos para digestão saudável."
  },
  {
    "id": 212,
    "image": "/images/racao-hamster-2.png",
    "title": "Ração Natural com Grãos e Frutas Secas",
    "category": "Rações para Roedores",
    "subcategory": "Para hamsters",
    "size": "Peso: 500g",
    "price": "R$26,50",
    "descricao": [
      "A Ração Natural com Grãos e Frutas Secas proporciona uma alimentação rica e equilibrada para hamsters adultos. Com ingredientes selecionados e sem corantes artificiais, favorece a digestão e a saúde intestinal, ao mesmo tempo que fornece energia de forma natural. Frutas secas como banana e maçã adicionam sabor e nutrição, tornando a refeição mais atrativa. Ideal para fortalecer o sistema imunológico e garantir uma vida ativa e saudável ao pet."
    ],
    "composicao": "Aveia, milho laminado, trigo, flocos de arroz, banana desidratada, maçã seca, linhaça, ervilhas, extrato de levedura, prebióticos, minerais quelatados, vitamina C estabilizada, antioxidantes naturais."
  },
  {
    "id": 213,
    "image": "/images/racao-hamster-3.png",
    "title": "Ração Orgânica para Hamsters Adultos",
    "category": "Rações para Roedores",
    "subcategory": "Para hamsters",
    "size": "Peso: 350g",
    "price": "R$28,90",
    "descricao": [
      "A Ração Orgânica para Hamsters Adultos é ideal para tutores que buscam uma alimentação mais natural e saudável para seus pets. Produzida com ingredientes livres de pesticidas e aditivos químicos, essa ração é enriquecida com fibras, vitaminas e minerais. Sua fórmula exclusiva contribui para o bom funcionamento do metabolismo e manutenção do peso. Além disso, seu sabor atrativo estimula o apetite mesmo de hamsters mais exigentes."
    ],
    "composicao": "Grãos orgânicos certificados (milho, trigo, cevada), vegetais desidratados, cenoura, beterraba, frutas liofilizadas, levedura de cerveja, fontes naturais de ômega 3 e 6, minerais orgânicos e fibras vegetais."
  },
  {
    "id": 214,
    "image": "/images/racao-hamster-4.png",
    "title": "Alimento Balanceado para Hamsters Ativos",
    "category": "Rações para Roedores",
    "subcategory": "Para hamsters",
    "size": "Peso: 450g",
    "price": "R$22,90",
    "descricao": [
      "Este alimento foi especialmente desenvolvido para hamsters com alta demanda energética. Sua composição contém cereais integrais, frutas secas e proteínas vegetais que auxiliam no desenvolvimento muscular e no bom funcionamento do organismo. A fórmula é balanceada para atender as necessidades nutricionais diárias, proporcionando pelos brilhantes, dentes saudáveis e um sistema imunológico fortalecido."
    ],
    "composicao": "Cevada, flocos de milho, proteína de soja, maçã seca, semente de girassol, extrato de alecrim, vitaminas do complexo B, vitamina E, zinco, ferro, cobre e fibras naturais que auxiliam no trânsito intestinal."
  },
  {
    "id": 215,
    "image": "/images/racao-hamster-5.png",
    "title": "Ração Fortificada com Ômega 3 e 6",
    "category": "Rações para Roedores",
    "subcategory": "Para hamsters",
    "size": "Peso: 300g",
    "price": "R$25,90",
    "descricao": [
      "A Ração Fortificada com Ômega 3 e 6 oferece uma nutrição completa para hamsters que precisam manter a pele saudável e a pelagem sedosa. Os ácidos graxos essenciais presentes na fórmula têm ação anti-inflamatória, além de apoiar o sistema cardiovascular e nervoso. Sua combinação equilibrada de grãos, sementes e frutas promove também uma digestão eficiente e aumenta a vitalidade do animal no dia a dia."
    ],
    "composicao": "Milho, farelo de trigo, farinha de peixe, óleo de linhaça (fonte de ômega 3 e 6), cenoura desidratada, polpa de beterraba, antioxidantes naturais, prebióticos, minerais orgânicos e extrato de yucca."
  },
  {
    "id": 216,
    "image": "/images/racao-hamster-6.png",
    "title": "Ração Premium para Hamsters - Maçã e Mel",
    "category": "Rações para Roedores",
    "subcategory": "Para hamsters",
    "size": "Peso: 300g",
    "price": "R$19,90",
    "descricao": [
      "A Ração Premium com Maçã e Mel é uma opção irresistível para hamsters exigentes. Sua fórmula conta com frutas e mel natural, que fornecem energia rápida e melhoram o sabor da alimentação. Rica em fibras e antioxidantes, auxilia na digestão e previne doenças comuns em pequenos roedores. Seu tamanho e textura foram pensados para ajudar no desgaste dos dentes, contribuindo para a saúde bucal dos pets."
    ],
    "composicao": "Milho moído, flocos de aveia, maçã desidratada, mel natural, alfafa, cenoura, levedura seca, vitaminas A, C, E, minerais quelatados, fibras vegetais e antioxidantes naturais."
  },
  {
    "id": 217,
    "image": "/images/racao-porquinho-1.png",
    "title": "Ração Especial para Porquinhos-da-índia - Cenoura e Feno",
    "category": "Rações para Roedores",
    "subcategory": "Para porquinhos-da-índia",
    "size": "Peso: 1kg",
    "price": "R$34,90",
    "descricao": [
      "Desenvolvida com ingredientes de alta qualidade, a Ração Especial para Porquinhos-da-índia oferece uma dieta completa com feno e cenoura desidratada. Rica em fibras, essa ração melhora o trânsito intestinal e previne doenças digestivas. Contém vitamina C estabilizada, essencial para a saúde dessa espécie, que não a produz naturalmente. Com um aroma agradável e textura crocante, garante palatabilidade e nutrição de alto nível para o dia a dia."
    ],
    "composicao": "Feno de alfafa, cenoura desidratada, milho, flocos de soja, polpa de beterraba, vitamina C estabilizada, prebióticos, óleos vegetais, antioxidantes naturais, levedura de cerveja, minerais essenciais e fibras."
  },
  {
    "id": 218,
    "image": "/images/racao-porquinho-2.png",
    "title": "Ração Natural com Ervas Aromáticas",
    "category": "Rações para Roedores",
    "subcategory": "Para porquinhos-da-índia",
    "size": "Peso: 800g",
    "price": "R$29,90",
    "descricao": [
      "Feita com ervas aromáticas e ingredientes selecionados, esta ração oferece uma alimentação balanceada, promovendo saúde e bem-estar para porquinhos-da-índia. Livre de corantes e conservantes artificiais, fortalece o sistema imunológico e contribui para um pelo brilhante. A presença de fibras solúveis e insolúveis favorece a digestão e a saúde intestinal, tornando-se ideal para o consumo diário do seu pet."
    ],
    "composicao": "Feno de capim, alfafa, tomilho, hortelã, camomila, milho integral, aveia, frutas secas, levedura seca, prebióticos, vitamina C, D3, E, cálcio, ferro, zinco e antioxidantes naturais."
  },
  {
    "id": 219,
    "image": "/images/racao-porquinho-3.png",
    "title": "Alimento Completo Rico em Vitamina C",
    "category": "Rações para Roedores",
    "subcategory": "Para porquinhos-da-índia",
    "size": "Peso: 1,2kg",
    "price": "R$38,90",
    "descricao": [
      "Ideal para o consumo diário, este alimento é rico em vitamina C, nutriente essencial para a saúde dos porquinhos-da-índia. Sua fórmula foi desenvolvida com grãos selecionados, frutas e legumes desidratados, promovendo uma dieta equilibrada. A combinação de ingredientes fortalece o sistema imunológico, previne escorbuto e mantém a pelagem bonita e saudável. Com excelente palatabilidade, agrada até os pets mais exigentes."
    ],
    "composicao": "Grãos integrais, feno de alfafa, cenoura seca, maçã desidratada, vitamina C estabilizada, linhaça, prebióticos, vitaminas A, D3, E, complexo B, fibras, antioxidantes naturais e minerais orgânicos."
  },
  {
    "id": 220,
    "image": "/images/racao-porquinho-4.png",
    "title": "Mix Nutricional com Feno de Alfafa",
    "category": "Rações para Roedores",
    "subcategory": "Para porquinhos-da-índia",
    "size": "Peso: 900g",
    "price": "R$32,90",
    "descricao": [
      "Este mix é indicado para manter a nutrição completa dos porquinhos-da-índia. Rico em fibras provenientes do feno de alfafa, auxilia no desgaste natural dos dentes e na regulação intestinal. A inclusão de vegetais e frutas desidratadas complementa a dieta com vitaminas e minerais importantes. Sua fórmula promove ossos fortes, boa digestão e maior vitalidade, sendo ideal para todas as fases da vida do pet."
    ],
    "composicao": "Feno de alfafa, milho laminado, ervilhas secas, flocos de cenoura, maçã, beterraba desidratada, prebióticos, minerais quelatados, antioxidantes naturais e vitamina C estabilizada."
  },
  {
    "id": 221,
    "image": "/images/racao-porquinho-5.png",
    "title": "Ração Veggie com Legumes Desidratados",
    "category": "Rações para Roedores",
    "subcategory": "Para porquinhos-da-índia",
    "size": "Peso: 850g",
    "price": "R$30,50",
    "descricao": [
      "A Ração Veggie combina legumes desidratados com cereais naturais, oferecendo uma alternativa saudável e saborosa. Indicada para porquinhos-da-índia que necessitam de uma dieta leve e rica em fibras, contribui para o bom funcionamento intestinal e o controle de peso. A ausência de corantes e conservantes artificiais torna o produto ainda mais seguro para o dia a dia do seu pet."
    ],
    "composicao": "Cenoura, abobrinha, milho integral, farelo de soja, aveia em flocos, levedura de cerveja, vitamina C, prebióticos, extrato de alecrim, fibras alimentares, minerais orgânicos e antioxidantes naturais."
  },
  {
    "id": 222,
    "image": "/images/racao-porquinho-6.png",
    "title": "Ração Premium para Pelagem Brilhante",
    "category": "Rações para Roedores",
    "subcategory": "Para porquinhos-da-índia",
    "size": "Peso: 1kg",
    "price": "R$36,90",
    "descricao": [
      "Especialmente desenvolvida para porquinhos-da-índia com pelagem longa, esta ração contém nutrientes que promovem brilho e força aos pelos. Os ingredientes naturais ajudam na prevenção de alergias, fortalecem o sistema imunológico e oferecem uma dieta equilibrada. Com fibras e antioxidantes, também favorece a digestão e proporciona mais energia e disposição ao seu animal de estimação."
    ],
    "composicao": "Farelo de trigo, óleo de linhaça, milho moído, feno de alfafa, maçã seca, vitaminas A, E, C, biotina, zinco quelatado, antioxidantes naturais, levedura e prebióticos."
  },
  {
    "id": 223,
    "image": "/images/racao-coelho-1.png",
    "title": "Ração Premium para Coelhos Adultos Feno",
    "category": "Rações para Roedores",
    "subcategory": "Para coelhos",
    "size": "Peso: 1kg",
    "price": "R$33,90",
    "descricao": "Desenvolvida especialmente para coelhos adultos, esta ração premium é enriquecida com fibras de alta qualidade provenientes de feno selecionado. Sua fórmula ajuda a manter a saúde digestiva e promove o desgaste adequado dos dentes. Possui aroma suave e textura crocante que agrada até os coelhos mais exigentes. Ideal para garantir uma dieta balanceada, contém os nutrientes necessários para a vitalidade, brilho da pelagem e bom funcionamento intestinal. Indicada para uso diário, contribui para o bem-estar e longevidade do seu pet.",
    "composicao": "Feno de capim Tifton, farelo de soja, polpa de beterraba, óleo vegetal, prebióticos (MOS e FOS), extrato de yucca, vitaminas (A, D3, E, C), minerais orgânicos e inorgânicos, zinco, ferro, cobre, selênio, biotina, niacina, ácido fólico, antioxidantes naturais e aromatizantes. Livre de corantes artificiais e transgênicos. Contém fibras longas essenciais para a digestão eficiente e manutenção do sistema imunológico saudável."
  },
  {
    "id": 224,
    "image": "/images/racao-coelho-2.png",
    "title": "Ração Natural com Alfafa e Camomila",
    "category": "Rações para Roedores",
    "subcategory": "Para coelhos",
    "size": "Peso: 900g",
    "price": "R$31,90",
    "descricao": "Feita com ingredientes naturais, esta ração combina alfafa, camomila e outros vegetais que promovem o bem-estar físico e emocional dos coelhos. A alfafa fornece cálcio e proteínas essenciais, enquanto a camomila possui propriedades calmantes, ajudando a reduzir o estresse. Sua textura crocante favorece o desgaste dental natural e sua composição equilibrada contribui para uma digestão eficiente. Livre de corantes e conservantes artificiais, é indicada para coelhos de todas as idades e ideal para uma alimentação saudável e saborosa.",
    "composicao": "Alfafa desidratada, extrato de camomila, farelo de trigo, milho integral moído, polpa cítrica, óleo de linhaça, minerais (ferro, zinco, manganês), vitaminas A, C e E, levedura de cerveja, prebióticos naturais (FOS), antioxidantes naturais, extrato de alecrim, manjericão desidratado e aroma natural. Rica em fibras e nutrientes essenciais para a saúde do trato gastrointestinal e do sistema imunológico dos coelhos."
  },
  {
    "id": 225,
    "image": "/images/racao-coelho-3.png",
    "title": "Mix de Grãos com Ervas Naturais",
    "category": "Rações para Roedores",
    "subcategory": "Para coelhos",
    "size": "Peso: 800g",
    "price": "R$29,50",
    "descricao": "Este mix exclusivo de grãos e ervas naturais oferece variedade e sabor à dieta do seu coelho. Contém ingredientes selecionados que promovem uma alimentação rica em fibras, vitaminas e minerais essenciais. As ervas naturais, como hortelã e salsa, têm propriedades digestivas e contribuem para o bom funcionamento do organismo. É uma opção saudável e deliciosa para complementar a rotina alimentar dos coelhos, estimulando o apetite e o interesse pela comida. Ideal para enriquecer o ambiente e a saúde do seu pet.",
    "composicao": "Aveia em grãos, cevada, milho moído, ervilhas, cenoura desidratada, hortelã, salsa, manjericão, sementes de linhaça, farelo de arroz, vitaminas A, D, E e C, minerais (ferro, zinco, manganês, selênio), levedura de cerveja, prebióticos, antioxidantes naturais e óleo de girassol. Sem conservantes artificiais. Proporciona energia, digestão equilibrada e suporte imunológico para coelhos de todas as idades."
  },
  {
    "id": 226,
    "image": "/images/racao-coelho-4.png",
    "title": "Ração Fortificada para Crescimento Saudável",
    "category": "Rações para Roedores",
    "subcategory": "Para coelhos",
    "size": "Peso: 1,2kg",
    "price": "R$37,90",
    "descricao": "Perfeita para coelhos em fase de crescimento, esta ração fortificada oferece uma combinação equilibrada de proteínas, cálcio e vitaminas essenciais. Ajuda no desenvolvimento ósseo, muscular e na manutenção do sistema imunológico. Com textura ideal para o desgaste dos dentes e sabor atrativo, é indicada para filhotes e jovens adultos. Sua fórmula contém ingredientes naturais e fortificantes que promovem uma alimentação completa e balanceada, incentivando o crescimento saudável desde os primeiros meses de vida.",
    "composicao": "Farelo de soja, feno de alfafa, milho integral moído, óleo de milho, farinha de cenoura, vitaminas (A, D3, E, K, C), minerais quelatados (zinco, ferro, cobre), prebióticos, extrato de yucca, levedura de cerveja, fibras de polpa de beterraba, aminoácidos essenciais, biotina e antioxidantes naturais. Contém cálcio e fósforo em proporções ideais para o desenvolvimento saudável de coelhos jovens."
  },
  {
    "id": 227,
    "image": "/images/racao-coelho-5.png",
    "title": "Ração para Coelhos Filhotes com Prebióticos",
    "category": "Rações para Roedores",
    "subcategory": "Para coelhos",
    "size": "Peso: 750g",
    "price": "R$28,90",
    "descricao": "Especialmente desenvolvida para coelhos filhotes, esta ração é rica em nutrientes que auxiliam no crescimento, fortalecimento dos ossos e desenvolvimento do sistema digestivo. Contém prebióticos que favorecem a flora intestinal, além de ser altamente palatável. Com textura suave e ingredientes de fácil digestão, é ideal para a transição alimentar após o desmame. Proporciona uma alimentação segura e completa, ajudando a construir uma base sólida para a saúde futura do seu pet.",
    "composicao": "Farelo de soja, milho moído, farinha de alfafa, polpa de beterraba, óleo de girassol, vitaminas (A, D, E, C), minerais orgânicos (zinco, cobre, ferro), prebióticos (FOS e MOS), extrato de yucca, aminoácidos essenciais, fibras naturais, extrato de camomila e antioxidantes naturais. Sem corantes artificiais. Indicado para coelhos de até 6 meses de idade, promovendo saúde e crescimento equilibrado."
  },
  {
    "id": 228,
    "image": "/images/racao-coelho-6.png",
    "title": "Alimento Integral com Cenoura e Maçã",
    "category": "Rações para Roedores",
    "subcategory": "Para coelhos",
    "size": "Peso: 1kg",
    "price": "R$34,50",
    "descricao": "Com uma combinação deliciosa de cenoura e maçã, este alimento integral oferece sabor e nutrição em cada mordida. Rico em fibras e antioxidantes, ajuda na digestão e fortalece o sistema imunológico. Sua textura crocante colabora para o desgaste natural dos dentes, enquanto o aroma frutado estimula o apetite. Pode ser oferecido diariamente como base da alimentação ou em conjunto com feno e vegetais frescos. Ideal para coelhos adultos que merecem uma dieta equilibrada e saborosa.",
    "composicao": "Farinha de trigo, cenoura desidratada, maçã desidratada, farelo de soja, óleo de canola, extrato de levedura, vitaminas (A, C, E), minerais (ferro, zinco, manganês), prebióticos naturais, antioxidantes, fibras vegetais, extrato de hortelã e camomila. Sem corantes ou conservantes artificiais. Fornece energia, reforça a imunidade e contribui para a saúde digestiva e dental do seu coelho."
  },
  {
    "id": 229,
    "image": "/images/gaiola-tunel-1.png",
    "title": "Gaiola com Túnel Aventura",
    "category": "Gaiolas",
    "subcategory": "Com túnel",
    "size": "Tamanho: 60x40x45cm",
    "price": "R$189,90",
    "descricao": [
      "A Gaiola com Túnel Aventura é perfeita para pequenos roedores exploradores. Seu túnel transparente estimula a atividade física e oferece diversão constante. Ideal para hamsters, possui ótima ventilação, bandeja removível para facilitar a limpeza e estrutura resistente. Um espaço seguro e confortável que ajuda a manter o bem-estar do pet, promovendo entretenimento e reduzindo o estresse. O design moderno ainda contribui com a decoração do ambiente."
    ],
    "composicao": "Estrutura metálica com pintura epóxi atóxica, base em plástico resistente, túnel de acrílico transparente, peças de encaixe em polipropileno, sem componentes tóxicos, ideal para ambientes internos."
  },
  {
    "id": 230,
    "image": "/images/gaiola-tunel-2.png",
    "title": "Gaiola com Túnel Divertido",
    "category": "Gaiolas",
    "subcategory": "Com túnel",
    "size": "Tamanho: 55x35x40cm",
    "price": "R$175,00",
    "descricao": [
      "A Gaiola com Túnel Divertido proporciona um ambiente completo para o seu hamster brincar, descansar e explorar. Inclui túnel lateral com visão externa, ideal para manter o pet ativo e entretido. Fácil de montar e limpar, essa gaiola foi pensada para combinar praticidade e segurança, promovendo um habitat estimulante para o desenvolvimento saudável do seu roedor. Perfeita para ambientes internos e apartamentos."
    ],
    "composicao": "Base plástica com proteção UV, grades metálicas galvanizadas, túnel em PVC atóxico, encaixes reforçados de plástico ABS, materiais não corrosivos e próprios para pequenos animais."
  },
  {
    "id": 231,
    "image": "/images/gaiola-tunel-3.png",
    "title": "Gaiola com Túnel Transparente",
    "category": "Gaiolas",
    "subcategory": "Com túnel",
    "size": "Tamanho: 58x38x42cm",
    "price": "R$199,90",
    "descricao": [
      "Com um design moderno e funcional, a Gaiola com Túnel Transparente oferece conforto e entretenimento ao seu pet. Seu túnel liga dois compartimentos da gaiola, estimulando a curiosidade natural do roedor. Ideal para quem busca um lar completo e enriquecedor para o animal. Seu tamanho é ideal para espaços compactos, mantendo o ambiente do pet sempre limpo e arejado. Uma escolha que une beleza, segurança e diversão em um só produto."
    ],
    "composicao": "Estrutura em aço pintado, bandeja removível em plástico polipropileno, tubo acrílico transparente, conexões de segurança com trava dupla, componentes resistentes ao desgaste e à umidade."
  },
  {
    "id": 232,
    "image": "/images/gaiola-multiplano-1.png",
    "title": "Gaiola Multiplano Premium",
    "category": "Gaiolas",
    "subcategory": "Multiplano",
    "size": "Tamanho: 70x50x60cm",
    "price": "R$249,90",
    "descricao": [
      "A Gaiola Multiplano Premium é ideal para roedores que amam explorar. Com diversos andares e rampas, estimula a movimentação e o comportamento natural do pet. Espaçosa e de fácil higienização, proporciona um ambiente confortável, seguro e interativo. Indicada para coelhos, porquinhos-da-índia e hamsters grandes. Seu visual sofisticado combina com qualquer ambiente e oferece ao animal a liberdade de brincar e descansar com conforto."
    ],
    "composicao": "Grades de aço com pintura eletrostática, plataformas e rampas de plástico resistente, bandeja plástica removível, conectores de nylon durável, materiais atóxicos e de alta durabilidade."
  },
  {
    "id": 233,
    "image": "/images/gaiola-multiplano-2.png",
    "title": "Gaiola Multiplano Compacta",
    "category": "Gaiolas",
    "subcategory": "Multiplano",
    "size": "Tamanho: 65x45x55cm",
    "price": "R$229,00",
    "descricao": [
      "Projetada para roedores ativos, a Gaiola Multiplano Compacta possui dois andares conectados por rampas antiderrapantes, oferecendo mais espaço vertical em um formato compacto. Ótima ventilação e segurança em cada detalhe. Fácil de limpar, é ideal para espaços menores sem abrir mão do conforto do seu animal de estimação. Estimula a atividade física e mental dos roedores, tornando os momentos dentro da gaiola mais dinâmicos."
    ],
    "composicao": "Estrutura em aço inoxidável, bandejas e plataformas em polietileno, rampas com acabamento emborrachado, peças de fixação reforçadas, materiais laváveis e livres de substâncias nocivas."
  },
  {
    "id": 234,
    "image": "/images/gaiola-multiplano-3.png",
    "title": "Gaiola Multiplano com Escadas",
    "category": "Gaiolas",
    "subcategory": "Multiplano",
    "size": "Tamanho: 72x48x58cm",
    "price": "R$259,90",
    "descricao": [
      "A Gaiola Multiplano com Escadas é uma opção espaçosa e versátil para seu roedor. Com degraus e plataformas seguras, incentiva a movimentação e proporciona uma rotina mais saudável e divertida. Sua montagem é prática e o sistema de abertura frontal facilita o manuseio do animal. Ótima escolha para quem quer proporcionar conforto e entretenimento ao pet, além de facilitar a rotina de cuidados com praticidade e estilo."
    ],
    "composicao": "Grades com pintura protetora atóxica, escadas plásticas com base antiderrapante, bandeja plástica deslizante, conectores reforçados com trava de segurança, estrutura durável e ventilada."
  },
  {
    "id": 235,
    "image": "/images/rodinha-1.png",
    "title": "Rodinha Silenciosa para Roedores",
    "category": "Brinquedos",
    "subcategory": "Rodinhas",
    "size": "Diâmetro: 18cm",
    "price": "R$39,90",
    "descricao": [
      "A Rodinha Silenciosa para Roedores foi projetada especialmente para garantir exercícios seguros e silenciosos. Ideal para hamsters e pequenos roedores, promove atividade física regular, evitando o tédio e o sedentarismo. Seu sistema de rotação suave reduz ruídos e garante o conforto do pet, mesmo em ambientes internos. Feita com materiais resistentes e de fácil higienização, oferece estabilidade e durabilidade para o uso diário do seu pequeno companheiro."
    ],
    "composicao": "Plástico PP atóxico, eixo metálico com rolamento silencioso, base antiderrapante de silicone, sem componentes tóxicos, fácil de lavar e resistente ao uso contínuo."
  },
  {
    "id": 236,
    "image": "/images/rodinha-2.png",
    "title": "Roda de Exercício com Apoio",
    "category": "Brinquedos",
    "subcategory": "Rodinhas",
    "size": "Diâmetro: 20cm",
    "price": "R$45,00",
    "descricao": [
      "A Roda de Exercício com Apoio oferece uma estrutura firme e segura para o seu roedor praticar exercícios diários. Desenvolvida com material antiderrapante, permite que o animal corra com estabilidade e conforto. Seu design ergonômico e a base com suporte removível tornam a limpeza prática e rápida. Ideal para manter seu pet ativo e saudável, estimulando o instinto natural de movimentação e proporcionando uma vida mais longa e feliz ao seu bichinho."
    ],
    "composicao": "Estrutura de plástico ABS, superfície com textura antiderrapante, rolamento com eixo de aço, base de polietileno resistente e lavável, materiais atóxicos e livres de BPA."
  },
  {
    "id": 237,
    "image": "/images/rodinha-3.png",
    "title": "Roda de Corrida Transparente",
    "category": "Brinquedos",
    "subcategory": "Rodinhas",
    "size": "Diâmetro: 22cm",
    "price": "R$52,90",
    "descricao": [
      "A Roda de Corrida Transparente une funcionalidade e beleza para a rotina do seu roedor. Com material translúcido, permite acompanhar as atividades do pet, ao mesmo tempo em que proporciona uma corrida silenciosa e confortável. Indicada para hamsters, gerbils e outros pequenos roedores, essa rodinha é essencial para manter o bem-estar físico do animal. Fácil de montar e lavar, combina perfeitamente com qualquer tipo de gaiola ou habitat."
    ],
    "composicao": "Plástico acrílico transparente, rolamento com eixo reforçado, base de borracha macia para evitar ruído, estrutura livre de produtos tóxicos e design ergonômico para patas pequenas."
  },
  {
    "id": 238,
    "image": "/images/escadinha-1.png",
    "title": "Escadinha de Madeira Natural",
    "category": "Brinquedos",
    "subcategory": "Escadinhas",
    "size": "Tamanho: 30cm",
    "price": "R$29,90",
    "descricao": [
      "A Escadinha de Madeira Natural é perfeita para roedores que adoram escalar e explorar. Fabricada com madeira tratada, é segura para roer e proporciona um estímulo saudável ao comportamento natural dos pets. Ideal para coelhos, hamsters e porquinhos-da-índia, pode ser instalada em gaiolas ou áreas de lazer. Além de funcional, também ajuda no desgaste natural dos dentes. Um acessório que une diversão, exercício e saúde bucal para o seu amiguinho peludo."
    ],
    "composicao": "Madeira de pinus tratada, sem verniz, conectores metálicos para fixação segura, sem colas tóxicas, resistente à umidade e livre de produtos químicos prejudiciais."
  },
  {
    "id": 239,
    "image": "/images/escadinha-2.png",
    "title": "Escadinha Flexível para Gaiolas",
    "category": "Brinquedos",
    "subcategory": "Escadinhas",
    "size": "Tamanho: 35cm",
    "price": "R$33,50",
    "descricao": [
      "A Escadinha Flexível para Gaiolas é um brinquedo versátil e divertido para roedores pequenos. Pode ser moldada em diferentes formatos, como ponte ou rampa, adaptando-se à estrutura da gaiola. Estimula a atividade física e contribui para o enriquecimento ambiental do pet, reduzindo o estresse. Seu material é resistente, leve e fácil de instalar. Ideal para quem busca um acessório prático, criativo e funcional para o bem-estar do roedor."
    ],
    "composicao": "Madeira de reflorestamento, arame interno flexível, acabamento liso para não machucar as patas, livre de tinta, verniz ou colas industriais, 100% biodegradável e seguro."
  },
  {
    "id": 240,
    "image": "/images/escadinha-3.png",
    "title": "Escada de Níveis com Plataformas",
    "category": "Brinquedos",
    "subcategory": "Escadinhas",
    "size": "Tamanho: 40cm",
    "price": "R$39,00",
    "descricao": [
      "A Escada de Níveis com Plataformas é ideal para roedores curiosos que adoram subir e explorar. Com degraus largos e superfícies planas, proporciona diversão e estímulo físico. Pode ser usada em gaiolas multiplano ou solta em áreas de recreação. Fabricada com madeira resistente e segura para roer, auxilia também na manutenção dos dentes. Um item multifuncional para enriquecer a rotina do seu pet com segurança e interatividade."
    ],
    "composicao": "Plataformas de madeira natural, conexões com parafusos inoxidáveis, acabamento liso sem farpas, livre de colas industriais, sem pigmentos artificiais, segura para contato prolongado."
  },
  {
    "id": 241,
    "image": "/images/vitamina-1.png",
    "title": "Suplemento Vitamínico Diário",
    "category": "Cuidado com a saúde",
    "subcategory": "Vitaminas",
    "size": "Frasco: 50ml",
    "price": "R$24,90",
    "descricao": [
      "O Suplemento Vitamínico Diário foi desenvolvido especialmente para reforçar a imunidade de roedores. Contém vitaminas essenciais como A, D3, E e complexo B, promovendo mais energia, crescimento saudável e prevenção de doenças. Pode ser adicionado à água ou alimento do pet, sendo recomendado para hamsters, porquinhos-da-índia e coelhos. Um reforço nutricional prático que ajuda no equilíbrio do organismo e na manutenção da saúde em todas as fases da vida."
    ],
    "composicao": "Água purificada, vitamina A, D3, E, complexo B (B1, B2, B6 e B12), conservantes naturais, sem corantes artificiais, sem açúcar, formulação líquida de fácil absorção e palatável."
  },
  {
    "id": 242,
    "image": "/images/vitamina-2.png",
    "title": "Gotas de Energia para Roedores",
    "category": "Cuidado com a saúde",
    "subcategory": "Vitaminas",
    "size": "Frasco: 30ml",
    "price": "R$21,90",
    "descricao": [
      "As Gotas de Energia para Roedores oferecem uma combinação equilibrada de nutrientes essenciais que promovem mais disposição, fortalecimento dos ossos e melhor qualidade de vida. Ideal para períodos de troca de pelos, estresse ou recuperação de doenças. Com fórmula líquida, é de fácil administração e pode ser utilizada diariamente. Indicado para todas as espécies de roedores, esse suplemento auxilia na saúde geral e no desempenho metabólico do pet."
    ],
    "composicao": "Solução aquosa de vitaminas A, C, D3, E e B12, minerais quelatados, extrato de guaraná natural, conservante natural, livre de aditivos sintéticos, sem açúcar ou lactose."
  },
  {
    "id": 243,
    "image": "/images/vitamina-3.png",
    "title": "Fortificante Natural com Ômega",
    "category": "Cuidado com a saúde",
    "subcategory": "Vitaminas",
    "size": "Frasco: 60ml",
    "price": "R$29,90",
    "descricao": [
      "O Fortificante Natural com Ômega é um suplemento completo que une vitaminas, minerais e ácidos graxos essenciais para a saúde do seu roedor. Auxilia no brilho da pelagem, fortalece o sistema imunológico e atua no desenvolvimento ósseo e muscular. Recomendado para coelhos e porquinhos-da-índia, é palatável e fácil de administrar. Um cuidado diário que faz toda a diferença na qualidade de vida e longevidade do seu pet."
    ],
    "composicao": "Óleo de linhaça, ômega 3 e 6, vitaminas A, D, E e K, zinco orgânico, selênio, base líquida sabor cenoura, conservantes naturais, livre de conservantes sintéticos e aditivos artificiais."
  },
  {
    "id": 244,
    "image": "/images/dentes-1.png",
    "title": "Bloco Dental de Cálcio Natural",
    "category": "Cuidado com a saúde",
    "subcategory": "Itens para dentes",
    "size": "Peso: 100g",
    "price": "R$18,90",
    "descricao": [
      "O Bloco Dental de Cálcio Natural é um item essencial para a saúde bucal dos roedores. Ajuda a desgastar os dentes de forma natural, evitando o crescimento excessivo e possíveis problemas dentários. Além disso, fornece cálcio, mineral importante para ossos e dentes fortes. Pode ser colocado na gaiola como brinquedo comestível, proporcionando estímulo e enriquecimento ambiental. Indicado para coelhos, porquinhos-da-índia e hamsters."
    ],
    "composicao": "Carbonato de cálcio, farinha de alfafa, aroma natural de frutas, sem açúcar, corantes ou conservantes artificiais, textura firme e comestível, 100% natural e biodegradável."
  },
  {
    "id": 245,
    "image": "/images/dentes-2.png",
    "title": "Madeira Mineral para Roer",
    "category": "Cuidado com a saúde",
    "subcategory": "Itens para dentes",
    "size": "Pacote: 3 unidades",
    "price": "R$22,00",
    "descricao": [
      "A Madeira Mineral para Roer é ideal para manter os dentes dos roedores no tamanho adequado, evitando o desgaste irregular e problemas de mastigação. Enriquecida com minerais naturais, também auxilia na suplementação alimentar. Seu formato atrativo estimula o pet a brincar e roer com frequência, aliviando o estresse. Pode ser pendurada ou deixada solta na gaiola, oferecendo mais autonomia ao animal durante o uso diário."
    ],
    "composicao": "Madeira de reflorestamento, sais minerais naturais, formato cilíndrico com furos, livre de químicos e corantes, produto sustentável, seguro e comestível para roedores."
  },
  {
    "id": 246,
    "image": "/images/dentes-3.png",
    "title": "Mordedor Natural com Feno",
    "category": "Cuidado com a saúde",
    "subcategory": "Itens para dentes",
    "size": "Unidade: 1 bastão",
    "price": "R$19,50",
    "descricao": [
      "O Mordedor Natural com Feno é uma excelente opção para cuidar dos dentes do seu roedor enquanto oferece uma experiência saborosa e saudável. Produzido com feno compactado e ingredientes naturais, estimula a mastigação, ajuda a manter os dentes limpos e promove bem-estar. Também funciona como um brinquedo nutritivo e é ideal para coelhos e porquinhos-da-índia. Um item indispensável para enriquecer o dia a dia do seu pet com saúde e diversão."
    ],
    "composicao": "Feno de timothy, farinha de alfafa, amido vegetal, extrato de maçã, sem açúcar ou aditivos, compactado em formato cilíndrico, 100% natural e seguro para consumo diário."
  },
  {
    "id": 247,
    "image": "/images/racao-calopsita-1.png",
    "title": "Ração Calopsita Premium",
    "category": "Rações para Aves",
    "subcategory": "Para calopsitas",
    "size": "Peso: 1kg",
    "price": "R$26,90",
    "descricao": [
      "A Ração Calopsita Premium é desenvolvida com ingredientes de alta qualidade para garantir nutrição completa e balanceada às calopsitas. Composta por grãos selecionados, enriquecida com vitaminas e minerais essenciais, proporciona saúde e vitalidade às aves. Ideal para manter a plumagem brilhante e o sistema imunológico forte. Sua formulação também ajuda na digestão e bem-estar do pet. Indicada para uso diário, essa ração garante uma alimentação segura e saborosa.",
    ],
    "composicao": "Milho integral, sorgo, aveia, semente de girassol, trigo, cálcio, vitaminas A, D3 e E, minerais quelatados, aminoácidos essenciais, extrato de yucca, antioxidantes naturais, óleo de soja, levedura de cerveja, probióticos e prebióticos. Enriquecido com fibras alimentares para melhor digestibilidade e manutenção da flora intestinal saudável."
  },
  {
    "id": 248,
    "image": "/images/racao-calopsita-2.png",
    "title": "Ração Calopsita Frutas e Sementes",
    "category": "Rações para Aves",
    "subcategory": "Para calopsitas",
    "size": "Peso: 800g",
    "price": "R$22,50",
    "descricao": [
      "A Ração Calopsita Frutas e Sementes combina sementes naturais com pedaços desidratados de frutas, oferecendo uma refeição saborosa e nutritiva para calopsitas. Esta ração é formulada para estimular o apetite e promover o bem-estar da ave, com componentes que auxiliam na digestão e fornecem energia para o dia a dia. Seu aroma agradável e textura variada tornam a alimentação mais atrativa e completa.",
    ],
    "composicao": "Alpiste, painço, aveia, sementes de girassol, mamão desidratado, banana seca, maçã desidratada, vitaminas A, B1, B2, B6, B12, D3, E e K, minerais quelatados, aminoácidos, levedura de cerveja, óleo de milho, antioxidantes naturais e extrato de yucca. Sem corantes artificiais e com fibras naturais."
  },
  {
    "id": 249,
    "image": "/images/racao-calopsita-3.png",
    "title": "Ração Calopsita com Vitaminas",
    "category": "Rações para Aves",
    "subcategory": "Para calopsitas",
    "size": "Peso: 900g",
    "price": "R$24,90",
    "descricao": [
      "Desenvolvida especialmente para fornecer suporte vitamínico às calopsitas, a Ração Calopsita com Vitaminas garante nutrição ideal para manter o bom funcionamento do organismo. Possui uma mistura balanceada de sementes e suplementos que favorecem o crescimento saudável, melhora da plumagem e fortalecimento da imunidade. Ideal para aves em fase de crescimento ou recuperação.",
    ],
    "composicao": "Milheto, girassol preto, painço vermelho, semente de linhaça, beterraba desidratada, minerais orgânicos, vitaminas A, D3, C, E, complexo B, probióticos, prebióticos, cálcio, ferro, zinco, cobre, extrato de yucca, antioxidantes naturais e óleos vegetais. Livre de conservantes artificiais."
  },
  {
    "id": 250,
    "image": "/images/racao-canario-1.png",
    "title": "Ração Canário Mix Sementes",
    "category": "Rações para Aves",
    "subcategory": "Para canários",
    "size": "Peso: 500g",
    "price": "R$16,90",
    "descricao": [
      "A Ração Canário Mix Sementes é uma mistura cuidadosamente balanceada de sementes naturais, desenvolvida especialmente para canários. Proporciona energia, nutrição e bem-estar às aves, promovendo o bom funcionamento do organismo e uma plumagem vibrante. Indicado para uso diário, seu consumo regular garante uma dieta saudável e balanceada, respeitando as necessidades nutricionais da espécie.",
    ],
    "composicao": "Painço amarelo, painço vermelho, alpiste, níger, aveia, girassol miúdo, vitaminas A, D3 e E, minerais, cálcio, ferro, zinco, manganês, extrato de yucca, antioxidantes naturais e prebióticos. Sem conservantes artificiais, com alto teor de fibras e proteínas naturais."
  },
  {
    "id": 251,
    "image": "/images/racao-canario-2.png",
    "title": "Ração Canário com Frutas",
    "category": "Rações para Aves",
    "subcategory": "Para canários",
    "size": "Peso: 700g",
    "price": "R$19,50",
    "descricao": [
      "Ideal para enriquecer a alimentação dos canários, esta ração contém uma seleção de sementes e frutas desidratadas que agradam o paladar das aves e contribuem para sua saúde. A combinação de ingredientes naturais fortalece o sistema imunológico e melhora o brilho da plumagem. É uma excelente opção para variar a dieta sem comprometer o equilíbrio nutricional.",
    ],
    "composicao": "Painço, alpiste, aveia descascada, maçã desidratada, banana seca, mamão, semente de linhaça, óleo de milho, vitaminas A, B1, B2, B6, B12, C, D3, E, minerais orgânicos, levedura de cerveja, extrato de yucca e antioxidantes naturais. Produto livre de corantes e conservantes artificiais."
  },
  {
    "id": 252,
    "image": "/images/racao-canario-3.png",
    "title": "Ração Canário Super Premium",
    "category": "Rações para Aves",
    "subcategory": "Para canários",
    "size": "Peso: 1kg",
    "price": "R$28,90",
    "descricao": [
      "Formulada com ingredientes de altíssima qualidade, a Ração Canário Super Premium oferece uma nutrição completa e sofisticada, ideal para manter os canários saudáveis, ativos e com aparência exuberante. A ração contém elementos essenciais para uma dieta equilibrada e ajuda na prevenção de doenças comuns em aves. Recomendada para criadores e tutores exigentes.",
    ],
    "composicao": "Painço, aveia, sementes oleaginosas, proteína vegetal, óleo de linhaça, vitaminas A, D3, E, complexo B, cálcio, ferro, zinco, cobre, selênio, prebióticos, probióticos, levedura de cerveja, extrato de yucca, antioxidantes naturais e enzimas digestivas. Livre de conservantes artificiais e corantes."
  },
  {
    "id": 253,
    "image": "/images/racao-papagaio-1.png",
    "title": "Ração Papagaio Nutritiva",
    "category": "Rações para Aves",
    "subcategory": "Para papagaios",
    "size": "Peso: 1kg",
    "price": "R$34,90",
    "descricao": [
      "A Ração Papagaio Nutritiva é formulada para atender às necessidades específicas dos papagaios, oferecendo uma mistura rica em nutrientes e sabor. Promove o fortalecimento do sistema imunológico, ajuda na digestão e contribui para uma plumagem mais bonita e saudável. É ideal para uso diário e foi pensada para garantir o bem-estar e a longevidade das aves.",
    ],
    "composicao": "Milho, soja, sementes de abóbora, castanha-do-pará, girassol, frutas desidratadas (maçã, banana e mamão), vitaminas A, D3, E, C e K, complexo B, minerais quelatados, ômega 3 e 6, antioxidantes naturais, prebióticos e probióticos, levedura de cerveja e extrato de yucca. Sem adição de conservantes químicos."
  },
  {
    "id": 254,
    "image": "/images/racao-papagaio-2.png",
    "title": "Ração Papagaio Frutas Tropicais",
    "category": "Rações para Aves",
    "subcategory": "Para papagaios",
    "size": "Peso: 800g",
    "price": "R$31,90",
    "descricao": [
      "Com uma combinação deliciosa de frutas tropicais, esta ração é perfeita para papagaios que adoram variedade e sabor. Além do apelo palatável, ela é enriquecida com vitaminas e minerais que ajudam na saúde óssea, digestiva e imunológica. Os ingredientes naturais garantem uma alimentação equilibrada e sem aditivos artificiais, sendo ideal para consumo diário.",
    ],
    "composicao": "Mamão, manga, banana, abacaxi desidratado, sementes oleaginosas, milho integral, grão de bico, vitaminas A, D3, E, K, C, complexo B, minerais essenciais, prebióticos, probióticos, levedura de cerveja, óleo de soja, antioxidantes naturais e fibras solúveis. Livre de corantes artificiais e açúcar."
  },
  {
    "id": 255,
    "image": "/images/racao-papagaio-3.png",
    "title": "Ração Papagaio Equilíbrio Natural",
    "category": "Rações para Aves",
    "subcategory": "Para papagaios",
    "size": "Peso: 1,2kg",
    "price": "R$38,00",
    "descricao": [
      "A Ração Papagaio Equilíbrio Natural oferece uma dieta balanceada, com ingredientes cuidadosamente selecionados para proporcionar saúde e bem-estar ao seu papagaio. Rica em fibras, proteínas vegetais e vitaminas, essa ração contribui para o bom funcionamento do organismo e para uma plumagem vibrante e resistente. Indicada para papagaios de todas as idades.",
    ],
    "composicao": "Milho extrusado, ervilha, cenoura, semente de girassol, farelo de soja, frutas desidratadas, linhaça, vitaminas A, D3, E, C, complexo B, cálcio, fósforo, zinco, probióticos, prebióticos, antioxidantes naturais, extrato de yucca e enzimas digestivas. Sem transgênicos, conservantes ou corantes artificiais."
  },
  {
    "id": 256,
    "image": "/images/gaiola-pequena-1.png",
    "title": "Gaiola Pequena Básica",
    "category": "Gaiolas",
    "subcategory": "Pequenas",
    "size": "Dimensões: 30x25x35cm",
    "price": "R$49,90",
    "descricao": [
      "A Gaiola Pequena Básica é ideal para canários, periquitos e outras aves de pequeno porte. Fabricada com materiais resistentes e acabamento seguro, oferece conforto e segurança ao animal. Seu design compacto permite fácil transporte e limpeza. Conta com porta frontal, poleiros e comedouros inclusos, sendo perfeita para quem busca praticidade sem abrir mão da qualidade.",
    ],
    "composicao": "Estrutura em arame galvanizado com pintura epóxi atóxica, bandeja removível em polipropileno, comedouros e poleiros em plástico resistente, sistema de encaixe simples e seguro. Material leve e durável, ideal para ambientes internos."
  },
  {
    "id": 257,
    "image": "/images/gaiola-pequena-2.png",
    "title": "Gaiola Charmosa Mini",
    "category": "Gaiolas",
    "subcategory": "Pequenas",
    "size": "Dimensões: 28x22x30cm",
    "price": "R$54,90",
    "descricao": [
      "Compacta e com design charmoso, a Gaiola Charmosa Mini é indicada para aves pequenas, proporcionando um espaço seguro e confortável. Possui detalhes decorativos, pintura resistente e bandeja removível para facilitar a limpeza. Ideal para ambientes internos, sua estrutura leve permite fácil transporte e acomodação em diferentes locais da casa.",
    ],
    "composicao": "Fios de aço galvanizado com pintura eletrostática, base em plástico rígido, bandeja deslizante, poleiros em madeira tratada, porta frontal com trava de segurança, comedouro em acrílico. Produto durável, higiênico e fácil de manusear."
  },
  {
    "id": 258,
    "image": "/images/gaiola-pequena-3.png",
    "title": "Gaiola Econômica com Acessórios",
    "category": "Gaiolas",
    "subcategory": "Pequenas",
    "size": "Dimensões: 32x26x34cm",
    "price": "R$59,90",
    "descricao": [
      "Ideal para quem procura custo-benefício, a Gaiola Econômica com Acessórios é prática e funcional. Acompanha bebedouro, comedouro, dois poleiros e bandeja de fácil remoção. Seu formato retangular permite otimizar o espaço, e sua estrutura resistente garante segurança às aves. Ótima opção para iniciantes na criação de pequenos pássaros.",
    ],
    "composicao": "Arame galvanizado, pintura epóxi atóxica, bandeja plástica removível, acessórios em polipropileno, poleiros de madeira, suporte de alça para transporte. Material resistente à corrosão e fácil de higienizar."
  },
  {
    "id": 259,
    "image": "/images/gaiola-grande-1.png",
    "title": "Gaiola Grande Luxo",
    "category": "Gaiolas",
    "subcategory": "Grandes",
    "size": "Dimensões: 60x45x70cm",
    "price": "R$159,90",
    "descricao": [
      "A Gaiola Grande Luxo oferece amplo espaço e conforto para papagaios e outras aves de médio a grande porte. Conta com estrutura reforçada, acessórios completos e bandeja deslizante que facilita a limpeza. Ideal para áreas internas e externas, proporciona liberdade de movimento e um ambiente seguro para o pet. Seu acabamento de alta qualidade garante durabilidade.",
    ],
    "composicao": "Estrutura em aço com pintura epóxi, bandeja removível em polietileno, comedouros grandes, poleiros reforçados de madeira tratada, portão duplo com travas de segurança, rodinhas para locomoção. Produto robusto e fácil de montar."
  },
  {
    "id": 260,
    "image": "/images/gaiola-grande-2.png",
    "title": "Gaiola Aviário com Divisória",
    "category": "Gaiolas",
    "subcategory": "Grandes",
    "size": "Dimensões: 75x50x90cm",
    "price": "R$189,90",
    "descricao": [
      "Projetada para criadores ou tutores com mais de uma ave, a Gaiola Aviário com Divisória conta com amplo espaço interno e separador central removível. Ideal para reprodução ou convivência de diferentes espécies com segurança. Sua estrutura é resistente e pensada para o bem-estar dos animais, incluindo vários acessórios essenciais.",
    ],
    "composicao": "Aço tratado com pintura epóxi, divisória interna removível, bandejas independentes, poleiros em madeira, comedouros e bebedouros em acrílico, portas com tranca dupla. Rodízios reforçados para movimentação segura e fácil higienização."
  },
  {
    "id": 261,
    "image": "/images/gaiola-grande-3.png",
    "title": "Gaiola Espaçosa Premium",
    "category": "Gaiolas",
    "subcategory": "Grandes",
    "size": "Dimensões: 80x60x100cm",
    "price": "R$219,90",
    "descricao": [
      "Para quem busca uma moradia confortável e segura para sua ave, a Gaiola Espaçosa Premium é a escolha certa. Ideal para calopsitas, araras e papagaios, oferece muito espaço, ótima ventilação e estrutura robusta. Além disso, acompanha acessórios completos e tem design sofisticado que combina com qualquer ambiente.",
    ],
    "composicao": "Estrutura metálica com pintura atóxica, bandeja dupla removível, poleiros de madeira, comedouros de inox, portão frontal com trava, rodízios com freio, protetores laterais contra sujeira, suporte para brinquedos. Fácil montagem e durabilidade superior."
  },
  {
    "id": 262,
    "image": "/images/balancinho-1.png",
    "title": "Balanço de Corda para Aves",
    "category": "Brinquedos",
    "subcategory": "Balancinhos",
    "size": "Tamanho: 15x15cm",
    "price": "R$22,90",
    "descricao": [
      "O Balanço de Corda para Aves é um brinquedo interativo e divertido que proporciona estímulo físico e mental às aves. Feito com materiais seguros, ajuda a reduzir o estresse e a ansiedade, além de exercitar as patinhas e bico. Ideal para gaiolas de pequeno e médio porte, oferece entretenimento saudável e enriquecimento ambiental.",
    ],
    "composicao": "Corda de algodão 100% natural, argolas de metal galvanizado, base de madeira tratada, tintas atóxicas, estrutura resistente à mordidas. Produto artesanal, feito com materiais seguros e de qualidade."
  },
  {
    "id": 263,
    "image": "/images/balancinho-2.png",
    "title": "Balanço com Argola Colorida",
    "category": "Brinquedos",
    "subcategory": "Balancinhos",
    "size": "Tamanho: 20x18cm",
    "price": "R$25,90",
    "descricao": [
      "Colorido e resistente, o Balanço com Argola é ideal para aves como calopsitas e periquitos. Estimula o equilíbrio e o exercício físico, além de ser um ótimo passatempo. Pode ser facilmente pendurado na gaiola e oferece conforto com sua base anatômica. Indicado para promover bem-estar e saúde mental das aves domésticas.",
    ],
    "composicao": "Argola plástica atóxica, corrente metálica zincada, base em madeira natural, pintura com corantes vegetais, gancho em aço inox. Produto testado e aprovado por veterinários especializados em aves."
  },
  {
    "id": 264,
    "image": "/images/balancinho-3.png",
    "title": "Balanço com Espelho",
    "category": "Brinquedos",
    "subcategory": "Balancinhos",
    "size": "Tamanho: 18x15cm",
    "price": "R$27,50",
    "descricao": [
      "O Balanço com Espelho é um brinquedo divertido e estimulante para aves de pequeno porte. O espelho atrai a atenção do pet, promovendo interatividade, enquanto o balanço garante exercícios leves e naturais. Ideal para combater o tédio e incentivar o movimento dentro da gaiola.",
    ],
    "composicao": "Base de madeira, espelho acrílico atóxico, correntes de aço galvanizado, fixadores de segurança, pintura à base de água. Produto resistente e seguro, projetado para uso contínuo em ambientes domésticos."
  },
  {
    "id": 265,
    "image": "/images/espelho-1.png",
    "title": "Espelho Pequeno com Moldura",
    "category": "Brinquedos",
    "subcategory": "Espelhos",
    "size": "Tamanho: 8x6cm",
    "price": "R$12,90",
    "descricao": [
      "O Espelho Pequeno com Moldura é um item clássico para gaiolas de aves, oferecendo uma forma simples e divertida de entretenimento. A moldura resistente protege o espelho e permite fácil fixação na gaiola. Ideal para pequenos pássaros como canários e periquitos, este espelho estimula o comportamento natural de socialização, já que as aves costumam interagir com o próprio reflexo. Além de promover distração, ajuda a reduzir o estresse e a ansiedade nos momentos em que o pássaro está sozinho. Um acessório acessível e eficaz para enriquecer o ambiente do seu pet alado.",
    ],
    "composicao": "Plástico atóxico resistente, espelho de acrílico polido, moldura reforçada com encaixe adaptável a diversos modelos de gaiola, design leve, bordas arredondadas para maior segurança, livre de substâncias químicas prejudiciais às aves."
  },
  {
    "id": 266,
    "image": "/images/espelho-2.png",
    "title": "Espelho com Sinos Pendentes",
    "category": "Brinquedos",
    "subcategory": "Espelhos",
    "size": "Tamanho: 10x8cm",
    "price": "R$15,90",
    "descricao": [
      "O Espelho com Sinos Pendentes combina estímulos visuais e sonoros para manter sua ave entretida e ativa. Com sinos pequenos e seguros, pendurados sob o espelho, o brinquedo estimula o movimento e a curiosidade do animal. É excelente para pássaros que ficam sozinhos por longos períodos, promovendo uma interação divertida com o próprio reflexo e com os sons agradáveis dos sinos. Um acessório ideal para canários, calopsitas e outros pássaros de pequeno a médio porte. Garante horas de distração e contribui para o bem-estar físico e mental do seu companheiro de penas.",
    ],
    "composicao": "Plástico resistente, espelho de acrílico, sinos metálicos leves com revestimento não tóxico, argolas plásticas flexíveis, sistema de fixação por gancho, livre de BPA e materiais prejudiciais à saúde das aves."
  },
  {
    "id": 267,
    "image": "/images/espelho-3.png",
    "title": "Espelho Duplo com Moldura Colorida",
    "category": "Brinquedos",
    "subcategory": "Espelhos",
    "size": "Tamanho: 12x10cm",
    "price": "R$17,90",
    "descricao": [
      "O Espelho Duplo com Moldura Colorida é ideal para aves que gostam de interagir com seu reflexo. Com dois espelhos posicionados lado a lado, proporciona maior área de reflexão e mais diversão para o pet. A moldura colorida chama atenção e estimula a curiosidade. É uma excelente opção para ambientes internos e contribui para a saúde emocional do seu pássaro, reduzindo o tédio e o estresse. Pode ser facilmente acoplado à gaiola e é indicado para aves de pequeno e médio porte, como calopsitas, periquitos e agapornis.",
    ],
    "composicao": "Plástico colorido de alta durabilidade, espelhos de acrílico com acabamento polido, estrutura leve e segura, fixação por clipe universal, materiais 100% atóxicos e recicláveis."
  },
  {
    "id": 268,
    "image": "/images/poleiro-1.png",
    "title": "Poleiro de Madeira Natural",
    "category": "Acessórios",
    "subcategory": "Poleiros",
    "size": "Tamanho: 25cm",
    "price": "R$14,90",
    "descricao": [
      "O Poleiro de Madeira Natural é um item essencial para o conforto e bem-estar das aves. Proporciona uma superfície firme e segura para que o pássaro possa descansar, se exercitar e manter as garras em bom estado. Por ser feito de madeira natural, simula o ambiente que os pássaros encontrariam na natureza, o que é ideal para a saúde mental e física. Pode ser utilizado em diversas gaiolas e é indicado para espécies pequenas e médias. Um produto simples e funcional para deixar a vida do seu pássaro mais agradável.",
    ],
    "composicao": "Madeira de reflorestamento tratada termicamente, livre de vernizes e produtos tóxicos, base metálica com parafuso de fixação, acabamento natural com textura leve para estímulo tátil, compatível com diversos tipos de gaiolas."
  },
  {
    "id": 269,
    "image": "/images/poleiro-2.png",
    "title": "Poleiro Texturizado com Fixador",
    "category": "Acessórios",
    "subcategory": "Poleiros",
    "size": "Tamanho: 20cm",
    "price": "R$16,50",
    "descricao": [
      "O Poleiro Texturizado com Fixador oferece mais do que apoio: ele contribui para o desgaste natural das unhas e o estímulo dos pés das aves. Com superfície levemente áspera, evita o crescimento excessivo das garras e promove exercícios para a musculatura das pernas. O fixador ajustável permite instalação firme e prática em diversos tipos de gaiola. Ideal para calopsitas, periquitos e demais aves pequenas. Um acessório útil, seguro e indicado por criadores e veterinários especializados em aves.",
    ],
    "composicao": "Plástico texturizado de alta resistência, superfície com grânulos minerais atóxicos, suporte de aço galvanizado com parafuso de fixação, componentes livres de chumbo e substâncias tóxicas, desenvolvido para conforto e saúde das aves."
  },
  {
    "id": 270,
    "image": "/images/poleiro-3.png",
    "title": "Poleiro Colorido com Saliências",
    "category": "Acessórios",
    "subcategory": "Poleiros",
    "size": "Tamanho: 22cm",
    "price": "R$15,90",
    "descricao": [
      "O Poleiro Colorido com Saliências é uma ótima alternativa para manter a saúde podal das aves. Suas saliências massageiam os pés enquanto o animal permanece sobre ele, estimulando a circulação e prevenindo calosidades. Feito com material resistente e colorido, chama a atenção do pet e proporciona um ambiente mais alegre e estimulante. Pode ser facilmente instalado em diferentes tipos de gaiolas e é especialmente indicado para pássaros como agapornis, calopsitas e periquitos.",
    ],
    "composicao": "PVC reforçado com acabamento colorido, textura antiderrapante, base metálica ajustável, pigmentação atóxica, sistema de encaixe compatível com grades horizontais ou verticais, livre de metais pesados e componentes agressivos."
  },
  {
    "id": 271,
    "image": "/images/comedouro-1.png",
    "title": "Comedouro Duplo para Gaiola",
    "category": "Acessórios",
    "subcategory": "Comedouros",
    "size": "Tamanho: 12x6cm",
    "price": "R$13,90",
    "descricao": [
      "O Comedouro Duplo para Gaiola é uma solução prática para quem deseja oferecer dois tipos diferentes de alimentos ou combinar ração e água em um único acessório. Possui duas cavidades separadas e fundo arredondado que facilita a limpeza. Sua estrutura é feita para se adaptar perfeitamente às grades da gaiola, proporcionando segurança e estabilidade. Indicado para aves pequenas e médias, como periquitos, agapornis e calopsitas. Com design funcional e compacto, este comedouro garante a organização e a higiene no espaço do seu pet.",
    ],
    "composicao": "Plástico polipropileno atóxico, sistema de encaixe por ganchos adaptável à maioria das gaiolas, acabamento arredondado para evitar ferimentos, livre de BPA e metais pesados, cores vibrantes seguras para aves."
  },
  {
    "id": 272,
    "image": "/images/comedouro-2.png",
    "title": "Comedouro com Tampa Removível",
    "category": "Acessórios",
    "subcategory": "Comedouros",
    "size": "Tamanho: 10x7cm",
    "price": "R$14,50",
    "descricao": [
      "O Comedouro com Tampa Removível é ideal para quem busca praticidade no dia a dia. A tampa protege os alimentos contra sujeiras e permite manter a ração ou sementes frescas por mais tempo. Feito com material resistente e fácil de higienizar, o comedouro possui encaixe firme na gaiola, evitando desperdícios e quedas. Seu tamanho é perfeito para pequenas e médias aves, ajudando na organização do ambiente e garantindo mais conforto na hora da alimentação. A tampa transparente permite monitoramento rápido dos níveis de comida.",
    ],
    "composicao": "Policarbonato transparente livre de BPA, tampa com trava de segurança, base de polipropileno atóxico, sistema de engate rápido para gaiolas, componentes duráveis e resistentes ao tempo, livre de materiais tóxicos."
  },
  {
    "id": 273,
    "image": "/images/comedouro-3.png",
    "title": "Comedouro Giratório com Trava",
    "category": "Acessórios",
    "subcategory": "Comedouros",
    "size": "Tamanho: 13x8cm",
    "price": "R$18,90",
    "descricao": [
      "O Comedouro Giratório com Trava oferece praticidade e modernidade no manejo de aves. Possui um sistema giratório que permite abastecer o recipiente de fora da gaiola, sem a necessidade de abri-la, garantindo mais segurança. A trava evita que a ave derrube o alimento ou se machuque. Fabricado com plástico de alta resistência, é ideal para ambientes com mais de uma ave, promovendo facilidade no reabastecimento e limpeza. Um produto pensado para o bem-estar do tutor e do animal, aumentando a eficiência da rotina de cuidados.",
    ],
    "composicao": "Plástico ABS de alta durabilidade, mecanismo giratório com eixo metálico inoxidável, trava de segurança com encaixe firme, materiais atóxicos e laváveis, compatível com a maioria das gaiolas comerciais."
  },
  {
    "id": 274,
    "image": "/images/bebedouro-1.png",
    "title": "Bebedouro Automático 150ml",
    "category": "Acessórios",
    "subcategory": "Bebedouros",
    "size": "Capacidade: 150ml",
    "price": "R$9,90",
    "descricao": [
      "O Bebedouro Automático 150ml é ideal para manter sua ave sempre hidratada com praticidade e segurança. Sua estrutura permite o abastecimento contínuo de água limpa, evitando o acúmulo de sujeira no recipiente. A base se encaixa facilmente nas grades da gaiola, sendo firme e estável. O reservatório transparente facilita o monitoramento do nível da água, e seu formato estreito se adapta a diferentes modelos de gaiolas. É uma opção econômica e eficiente para garantir a hidratação diária de pássaros de pequeno porte como canários e periquitos.",
    ],
    "composicao": "Reservatório de plástico PET reciclável, bico dosador em polipropileno, encaixe com trava de segurança, materiais livres de BPA, alta resistência térmica, design ergonômico para fácil limpeza e reposição."
  },
  {
    "id": 275,
    "image": "/images/bebedouro-2.png",
    "title": "Bebedouro com Ventosa",
    "category": "Acessórios",
    "subcategory": "Bebedouros",
    "size": "Capacidade: 200ml",
    "price": "R$12,90",
    "descricao": [
      "O Bebedouro com Ventosa é ideal para quem busca uma fixação prática em superfícies lisas como vidro ou acrílico. A ventosa oferece segurança extra contra quedas acidentais e facilita o reposicionamento. Seu design permite fácil abastecimento e manutenção, mantendo a água limpa por mais tempo. Recomendado para ambientes internos e gaiolas diferenciadas, é um acessório versátil e higiênico. A transparência do reservatório permite verificar a quantidade de água sem remover o bebedouro. Ideal para aves pequenas e sensíveis à qualidade da água.",
    ],
    "composicao": "Reservatório em plástico transparente de alta qualidade, ventosa de silicone atóxico com grande poder de aderência, tampa com sistema anti-vazamento, livre de PVC e substâncias prejudiciais à saúde das aves."
  },
  {
    "id": 276,
    "image": "/images/bebedouro-3.png",
    "title": "Bebedouro com Suporte Metálico",
    "category": "Acessórios",
    "subcategory": "Bebedouros",
    "size": "Capacidade: 250ml",
    "price": "R$14,50",
    "descricao": [
      "O Bebedouro com Suporte Metálico é um item robusto, ideal para quem busca maior estabilidade e durabilidade. O suporte metálico garante que o bebedouro permaneça firme na gaiola, mesmo com o movimento constante das aves. Possui bico dosador que libera a água de forma controlada, evitando desperdício e mantendo a higiene do ambiente. É fácil de instalar e limpar, ideal para pássaros de médio porte, como calopsitas e agapornis. Um acessório resistente que facilita o cuidado diário com seu pet.",
    ],
    "composicao": "Frasco em plástico rígido atóxico, bico dosador com válvula anti-gotejamento, suporte em arame galvanizado de alta resistência, peças laváveis, livre de substâncias tóxicas ou metais pesados prejudiciais à saúde animal."
  },
  {
    "id": 277,
    "image": "/images/racao-peixes-1.png",
    "title": "Ração Colorida para Peixes Ornamentais",
    "category": "Rações para Peixes",
    "subcategory": "Para peixes ornamentais",
    "size": "Peso: 100g",
    "price": "R$14,90",
    "descricao": [
      "Ração colorida em flocos, ideal para realçar as cores vibrantes dos peixes ornamentais. Sua fórmula equilibrada fornece os nutrientes essenciais para uma dieta saudável e crescimento adequado.",
    ],
    "composicao": "Farinha de peixe, farelo de soja, farinha de trigo, levedura seca, vitaminas (A, C, D3, E, B1, B2, B6, B12), minerais (cálcio, fósforo, ferro, zinco, manganês), corantes naturais e antioxidantes."
  },
  {
    "id": 278,
    "image": "/images/racao-peixes-2.png",
    "title": "Ração Premium para Peixes Tropicais",
    "category": "Rações para Peixes",
    "subcategory": "Para peixes ornamentais",
    "size": "Peso: 200g",
    "price": "R$22,90",
    "descricao": [
      "Ração premium em grânulos, especialmente formulada para atender às necessidades nutricionais de peixes tropicais. Contém ingredientes de alta qualidade para promover a saúde, o crescimento e a vitalidade dos seus peixes.",
    ],
    "composicao": "Proteína de peixe hidrolisada, farinha de krill, spirulina, glúten de trigo, óleo de peixe rico em ômega-3, vitaminas (A, D3, E, K3, B complexo), minerais quelatados e probióticos."
  },
  {
    "id": 279,
    "image": "/images/racao-peixes-3.png",
    "title": "Ração Nutritiva para Peixes Ornamentais",
    "category": "Rações para Peixes",
    "subcategory": "Para peixes ornamentais",
    "size": "Peso: 150g",
    "price": "R$18,90",
    "descricao": [
      "Ração nutritiva com fórmula balanceada, ideal para manter a saúde dos peixes ornamentais. Possui ingredientes selecionados para garantir alta digestibilidade e boa absorção de nutrientes. Ajuda na melhoria da coloração natural e reforça o sistema imunológico dos peixes, proporcionando maior longevidade e bem-estar.",
    ],
    "composicao": "Farinha de peixe, farinha de algas marinhas, proteína de arroz, óleo de peixe, vitaminas A, D e E, minerais essenciais, spirulina, extrato de levedura e prebióticos que contribuem para a saúde intestinal dos peixes."
  },
  {
    "id": 280,
    "image": "/images/racao-fundo-1.png",
    "title": "Ração para Peixes de Fundo em Tabletes",
    "category": "Rações para Peixes",
    "subcategory": "Para peixes de fundo",
    "size": "Peso: 100g",
    "price": "R$16,90",
    "descricao": [
      "Ração em tabletes afundáveis, especialmente desenvolvida para peixes de fundo como cascudos e corydoras. Garante uma nutrição completa e equilibrada, promovendo o crescimento saudável e a vitalidade desses peixes.",
    ],
    "composicao": "Farinha de peixe, farelo de trigo, farinha de soja, espinafre desidratado, cálcio, fósforo, vitaminas (A, D3, E), minerais traço e ingredientes vegetais."
  },
  {
    "id": 281,
    "image": "/images/racao-fundo-2.png",
    "title": "Ração Afundante para Cascudos",
    "category": "Rações para Peixes",
    "subcategory": "Para peixes de fundo",
    "size": "Peso: 120g",
    "price": "R$19,90",
    "descricao": [
      "Ração afundante em formato de discos, ideal para a alimentação de cascudos e outros peixes de fundo com hábitos herbívoros e onívoros. Sua fórmula rica em fibras e nutrientes promove uma digestão saudável e o bem-estar dos peixes.",
    ],
    "composicao": "Algas espirulina, farelo de arroz, farinha de peixe, levedura de cerveja, vitaminas (A, D, E, C), minerais (zinco, ferro, manganês) e extratos vegetais."
  },
  {
    "id": 282,
    "image": "/images/racao-fundo-3.png",
    "title": "Ração Natural para Peixes de Fundo",
    "category": "Rações para Peixes",
    "subcategory": "Para peixes de fundo",
    "size": "Peso: 150g",
    "price": "R$21,90",
    "descricao": [
      "Ração natural em pellets afundáveis, formulada com ingredientes selecionados para atender às necessidades nutricionais dos peixes de fundo. Livre de corantes e conservantes artificiais, promove uma dieta equilibrada e um ambiente de aquário saudável.",
    ],
    "composicao": "Farinha de minhoca, farinha de peixe branco, algas marinhas, spirulina, vitaminas naturais, minerais orgânicos e fibras vegetais."
  },
  {
    "id": 283,
    "image": "/images/racao-flocos-1.png",
    "title": "Ração em Flocos para Peixes Tropicais",
    "category": "Rações para Peixes",
    "subcategory": "Em flocos / granulada",
    "size": "Peso: 50g",
    "price": "R$9,90",
    "descricao": [
      "Ração em flocos de fácil digestão, ideal para a alimentação diária de peixes tropicais de diversas espécies. Sua fórmula balanceada garante o aporte de nutrientes essenciais para o crescimento, a cor e a vitalidade dos peixes.",
    ],
    "composicao": "Farinha de peixe, farelo de soja, farinha de trigo, levedura seca, vitaminas (A, D3, E, B complexo), minerais (cálcio, fósforo) e antioxidantes."
  },
  {
    "id": 284,
    "image": "/images/racao-flocos-2.png",
    "title": "Ração Granulada para Aquário Comunitário",
    "category": "Rações para Peixes",
    "subcategory": "Em flocos / granulada",
    "size": "Peso: 100g",
    "price": "R$14,90",
    "descricao": [
      "Ração granulada de alta qualidade, adequada para alimentar diversas espécies de peixes em aquários comunitários. Seus grânulos de tamanho adequado são facilmente aceitos pela maioria dos peixes, proporcionando uma nutrição completa e equilibrada.",
    ],
    "composicao": "Proteína vegetal, farinha de peixe, farinha de camarão, spirulina, vitaminas (A, C, D, E), minerais e pigmentos naturais."
  },
  {
    "id": 285,
    "image": "/images/racao-flocos-3.png",
    "title": "Ração Balanceada em Flocos",
    "category": "Rações para Peixes",
    "subcategory": "Em flocos / granulada",
    "size": "Peso: 80g",
    "price": "R$12,90",
    "descricao": [
      "Ração balanceada em flocos, desenvolvida para fornecer todos os nutrientes necessários para a saúde e o bem-estar dos peixes de aquário. Sua fórmula equilibrada contribui para o crescimento saudável, aintensidade das cores e a resistência a doenças.",
    ],
    "composicao": "Farinha de peixe, glúten de trigo, farelo de aveia, lecitina de soja, vitaminas (A, D3, E, B1, B2, B6, B12), minerais e oligoelementos."
  },
  {
    "id": 286,
    "image": "/images/aquario-pequeno-1.png",
    "title": "Aquário Pequeno de Vidro 10L",
    "category": "Aquários",
    "subcategory": "Pequenos",
    "size": "Capacidade: 10L",
    "price": "R$89,90",
    "descricao": [
      "Aquário pequeno de vidro com capacidade para 10 litros, ideal para iniciantes ou para pequenos peixes e invertebrados. Seu design compacto se adapta facilmente a diversos ambientes.",
    ],
    "composicao": "Vidro, silicone."
  },
  {
    "id": 287,
    "image": "/images/aquario-pequeno-2.png",
    "title": "Aquário Mini com Tampa",
    "category": "Aquários",
    "subcategory": "Pequenos",
    "size": "Capacidade: 12L",
    "price": "R$109,90",
    "descricao": [
      "Aquário mini com tampa, oferecendo um ambiente seguro e controlado para seus pequenos peixes. Seu tamanho compacto é perfeito para espaços limitados.",
    ],
    "composicao": "Vidro, plástico (tampa)."
  },
  {
    "id": 288,
    "image": "/images/aquario-pequeno-3.png",
    "title": "Aquário Compacto em Acrílico",
    "category": "Aquários",
    "subcategory": "Pequenos",
    "size": "Capacidade: 8L",
    "price": "R$79,90",
    "descricao": [
      "Aquário compacto fabricado em acrílico resistente, leve e com boa visibilidade. Ideal para pequenos peixes e para quem busca praticidade e segurança.",
    ],
    "composicao": "Acrílico."
  },
  {
    "id": 289,
    "image": "/images/aquario-medio-1.png",
    "title": "Aquário Médio de Vidro 30L",
    "category": "Aquários",
    "subcategory": "Médios",
    "size": "Capacidade: 30L",
    "price": "R$179,90",
    "descricao": [
      "Aquário médio de vidro com capacidade para 30 litros, oferecendo um espaço adequado para uma variedade maior de peixes. Sua construção robusta garante durabilidade e segurança.",
    ],
    "composicao": "Vidro, silicone."
  },
  {
    "id": 290,
    "image": "/images/aquario-medio-2.png",
    "title": "Aquário de Vidro com Filtro",
    "category": "Aquários",
    "subcategory": "Médios",
    "size": "Capacidade: 35L",
    "price": "R$199,90",
    "descricao": [
      "Aquário médio de vidro com sistema de filtragem integrado, proporcionando um ambiente limpo e saudável para seus peixes. Ideal para quem busca praticidade e eficiência.",
    ],
    "composicao": "Vidro, plástico (filtro), silicone."
  },
  {
    "id": 291,
    "image": "/images/aquario-medio-3.png",
    "title": "Aquário Médio Retangular",
    "category": "Aquários",
    "subcategory": "Médios",
    "size": "Capacidade: 28L",
    "price": "R$169,90",
    "descricao": [
      "Aquário médio com design retangular clássico, oferecendo boa área de natação para os peixes e fácil visualização. Sua capacidade de 28 litros é ideal para diversas espécies.",
    ],
    "composicao": "Vidro, silicone."
  },
  {
    "id": 292,
    "image": "/images/aquario-led-1.png",
    "title": "Aquário com Iluminação LED Azul",
    "category": "Aquários",
    "subcategory": "Com LED",
    "size": "Capacidade: 25L",
    "price": "R$229,90",
    "descricao": [
      "Aquário com sistema de iluminação LED azul, realçando as cores dos peixes e criando um ambiente visualmente atraente. Sua capacidade de 25 litros é ideal para um pequeno biótopo.",
    ],
    "composicao": "Vidro, plástico (tampa com LED), silicone."
  },
  {
    "id": 293,
    "image": "/images/aquario-led-2.png",
    "title": "Aquário LED com Termostato",
    "category": "Aquários",
    "subcategory": "Com LED",
    "size": "Capacidade: 30L",
    "price": "R$249,90",
    "descricao": [
      "Aquário completo com iluminação LED e termostato integrado, proporcionando controle de temperatura e iluminação para o bem-estar dos seus peixes. Capacidade de 30 litros.",
    ],
    "composicao": "Vidro, plástico (tampa com LED e termostato), componentes eletrônicos, silicone."
  },
  {
    "id": 294,
    "image": "/images/aquario-led-3.png",
    "title": "Aquário LED Decorativo",
    "category": "Aquários",
    "subcategory": "Com LED",
    "size": "Capacidade: 20L",
    "price": "R$199,90",
    "descricao": [
      "Aquário com design moderno e iluminação LED decorativa, perfeito para integrar-se a diversos estilos de decoração. Sua capacidade de 20 litros é ideal para pequenos peixes ornamentais.",
    ],
    "composicao": "Vidro, plástico (estrutura com LED), silicone."
  },
  {
    "id": 295,
    "image": "/images/filtro-interno-1.png",
    "title": "Filtro Interno Submerso",
    "category": "Filtros e acessórios",
    "subcategory": "Filtros internos",
    "size": "Potência: 300L/h",
    "price": "R$69,90",
    "descricao": [
      "Filtro interno submerso com vazão de 300 litros por hora, eficiente na filtragem mecânica, química e biológica da água do aquário, garantindo um ambiente saudável para os peixes.",
    ],
    "composicao": "Plástico, bomba d'água, esponja filtrante, carvão ativado."
  },
  {
    "id": 296,
    "image": "/images/filtro-interno-2.png",
    "title": "Filtro Interno com Ventosa",
    "category": "Filtros e acessórios",
    "subcategory": "Filtros internos",
    "size": "Potência: 250L/h",
    "price": "R$59,90",
    "descricao": [
      "Filtro interno com sistema de fixação por ventosas, fácil de instalar e manter. Com potência de 250 litros por hora, promove a circulação e a limpeza da água do aquário.",
    ],
    "composicao": "Plástico, bomba d'água, material filtrante (esponja, perlon)."
  },
  {
    "id": 297,
    "image": "/images/filtro-interno-3.png",
    "title": "Filtro Interno Compacto",
    "category": "Filtros e acessórios",
    "subcategory": "Filtros internos",
    "size": "Potência: 200L/h",
    "price": "R$49,90",
    "descricao": [
      "Filtro interno compacto, ideal para aquários menores. Com potência de 200 litros por hora, oferece uma filtragem eficiente em um design discreto.",
    ],
    "composicao": "Plástico, bomba d'água, cartucho filtrante."
  },
  {
    "id": 298,
    "image": "/images/termostato-1.png",
    "title": "Termostato Regulável para Aquário",
    "category": "Filtros e acessórios",
    "subcategory": "Termostatos",
    "size": "Potência: 50W",
    "price": "R$54,90",
    "descricao": [
      "Termostato regulável com potência de 50W, essencial para manter a temperatura ideal da água do aquário, garantindo o conforto e a saúde dos peixes tropicais.",
    ],
    "composicao": "Vidro, resistência elétrica, componentes eletrônicos."
  },
  {
    "id": 299,
    "image": "/images/termostato-2.png",
    "title": "Termostato Submersível com Visor",
    "category": "Filtros e acessórios",
    "subcategory": "Termostatos",
    "size": "Potência: 100W",
    "price": "R$64,90",
    "descricao": [
      "Termostato submersível com visor indicador de temperatura e potência de 100W, permitindo um controle preciso da temperatura da água do seu aquário.",
    ],
    "composicao": "Vidro, resistência elétrica, componentes eletrônicos, visor de temperatura."
  },
  {
    "id": 300,
    "image": "/images/termostato-3.png",
    "title": "Aquecedor com Termostato Integrado",
    "category": "Filtros e acessórios",
    "subcategory": "Termostatos",
    "size": "Potência: 75W",
    "price": "R$59,90",
    "descricao": [
      "Aquecedor com termostato integrado de 75W, uma solução prática e eficiente para manter a temperatura ideal em aquários de pequeno e médio porte.",
    ],
    "composicao": "Vidro, filamento de aquecimento, termostato interno."
  },
  {
    "id": 301,
    "image": "/images/pedra-difusora-1.png",
    "title": "Pedra Difusora Redonda",
    "category": "Filtros e acessórios",
    "subcategory": "Pedras difusoras",
    "size": "Diâmetro: 3cm",
    "price": "R$6,90",
    "descricao": [
      "Pedra difusora redonda com 3cm de diâmetro, ideal para oxigenar a água do aquário de forma eficiente e criar um efeito visual agradável com bolhas finas.",
    ],
    "composicao": "Cerâmica porosa."
  },
  {
    "id": 302,
    "image": "/images/pedra-difusora-2.png",
    "title": "Pedra Difusora Longa",
    "category": "Filtros e acessórios",
    "subcategory": "Pedras difusoras",
    "size": "Comprimento: 10cm",
    "price": "R$8,90",
    "descricao": [
      "Pedra difusora longa com 10cm de comprimento, proporciona uma excelente oxigenação em aquários maiores, distribuindo as bolhas de ar de maneira uniforme.",
    ],
    "composicao": "Cerâmica porosa."
  },
  {
    "id": 303,
    "image": "/images/pedra-difusora-3.png",
    "title": "Pedra Difusora Alta Eficiência",
    "category": "Filtros e acessórios",
    "subcategory": "Pedras difusoras",
    "size": "Diâmetro: 4cm",
    "price": "R$7,90",
    "descricao": [
      "Pedra difusora de alta eficiência com 4cm de diâmetro, projetada para produzir microbolhas que maximizam a dissolução de oxigênio na água do aquário.",
    ],
    "composicao": "Cerâmica porosa de alta densidade."
  },
  {
    "id": 304,
    "image": "/images/limpeza-1.png",
    "title": "Kit de Limpeza para Aquário",
    "category": "Produtos para manutenção",
    "subcategory": "Limpeza de aquário",
    "size": "Contém: 3 itens",
    "price": "R$29,90",
    "descricao": [
      "Kit completo de limpeza para aquário, contendo os itens essenciais para manter a higiene e a qualidade da água, promovendo um ambiente saudável para os peixes.",
    ],
    "composicao": "Rede de pesca, limpador de algas, escova para cantos."
  },
  {
    "id": 305,
    "image": "/images/limpeza-2.png",
    "title": "Limpador Magnético para Aquário",
    "category": "Produtos para manutenção",
    "subcategory": "Limpeza de aquário",
    "size": "Tamanho: Médio",
    "price": "R$34,90",
    "descricao": [
      "Limpador magnético de tamanho médio para aquários, facilita a remoção de algas das paredes de vidro ou acrílico sem a necessidade de colocar as mãos na água.",
    ],
    "composicao": "Ímãs, feltro."
  },
  {
    "id": 306,
    "image": "/images/limpeza-3.png",
    "title": "Sifão para Limpeza de Fundo",
    "category": "Produtos para manutenção",
    "subcategory": "Limpeza de aquário",
    "size": "Comprimento: 1,5m",
    "price": "R$24,90",
    "descricao": [
      "Sifão com 1,5m de comprimento, ideal para remover detritos e sujeira acumulados no substrato do aquário durante as trocas parciais de água.",
    ],
    "composicao": "Plástico."
  },
  {
    "id": 307,
    "image": "/images/teste-agua-1.png",
    "title": "Kit de Teste de pH para Aquário",
    "category": "Produtos para manutenção",
    "subcategory": "Testes de água",
    "size": "Contém: 1 frasco",
    "price": "R$19,90",
    "descricao": [
      "Kit de teste de pH para aquário, essencial para monitorar e ajustar os níveis de pH da água, garantindo um ambiente adequado para a vida aquática.",
    ],
    "composicao": "Solução reagente."
  },
  {
    "id": 308,
    "image": "/images/teste-agua-2.png",
    "title": "Teste de Amônia para Aquários",
    "category": "Produtos para manutenção",
    "subcategory": "Testes de água",
    "size": "Contém: 25 tiras",
    "price": "R$22,90",
    "descricao": [
      "Teste de amônia em tiras para aquários, prático e rápido para verificar os níveis de amônia na água, um parâmetro crucial para a saúde dos peixes.",
    ],
    "composicao": "Tiras de teste com reagentes químicos."
  },
  {
    "id": 309,
    "image": "/images/teste-agua-3.png",
    "title": "Kit Completo de Testes Químicos",
    "category": "Produtos para manutenção",
    "subcategory": "Testes de água",
    "size": "Contém: 4 testes",
    "price": "R$39,90",
    "descricao": [
      "Kit completo de testes químicos para aquário, incluindo testes para pH, amônia, nitrito e nitrato, permitindo um monitoramento abrangente da qualidade da água.",
    ],
    "composicao": "Soluções reagentes para diferentes parâmetros."
  },
  {
    "id": 310,
    "image": "/images/condicionador-1.png",
    "title": "Condicionador de Água para Aquário",
    "category": "Produtos para manutenção",
    "subcategory": "Condicionadores",
    "size": "Volume: 100ml",
    "price": "R$18,90",
    "descricao": [
      "Condicionador de água para aquário em frasco de 100ml, remove cloro e cloramina da água da torneira, tornando-a segura para os peixes.",
    ],
    "composicao": "Tiosulfato de sódio, EDTA."
  },
  {
    "id": 311,
    "image": "/images/condicionador-2.png",
    "title": "Condicionador Anti-Cloro",
    "category": "Produtos para manutenção",
    "subcategory": "Condicionadores",
    "size": "Volume: 120ml",
    "price": "R$21,90",
    "descricao": [
      "Condicionador anti-cloro em frasco de 120ml, neutraliza rapidamente o cloro presente na água da torneira, protegendo os peixes e a biologia do aquário.",
    ],
    "composicao": "Sais inorgânicos."
  },
  {
    "id": 312,
    "image": "/images/condicionador-3.png",
    "title": "Condicionador com Vitaminas",
    "category": "Produtos para manutenção",
    "subcategory": "Condicionadores",
    "size": "Volume: 150ml",
    "price": "R$24,90",
    "descricao": [
      "Condicionador de água enriquecido com vitaminas em frasco de 150ml, não só remove o cloro como também adiciona nutrientes essenciais para a saúde e o bem-estar dos peixes.",
    ],
    "composicao": "Tiosulfato de sódio, vitaminas do complexo B."
  },
  {
    "id": 313,
    "image": "/images/vitamina-cao-1.png",
    "title": "Vitamina A para Cães",
    "category": "Vitaminas",
    "subcategory": "Para cães",
    "size": "Embalagem: 60 cápsulas",
    "price": "R$39,90",
    "descricao": [
      "Suplemento vitamínico essencial para a saúde da visão e do sistema imunológico de cães de todas as raças e idades.",
    ],
    "composicao": "Vitamina A (Retinol), excipientes."
  },
  {
    "id": 314,
    "image": "/images/vitamina-cao-2.png",
    "title": "Complexo B para Cães",
    "category": "Vitaminas",
    "subcategory": "Para cães",
    "size": "Embalagem: 30 comprimidos",
    "price": "R$45,90",
    "descricao": [
      "Complexo de vitaminas do grupo B que auxilia no metabolismo energético, na saúde do sistema nervoso e na manutenção da pelagem saudável dos cães.",
    ],
    "composicao": "Vitaminas B1, B2, B3, B5, B6, B9, B12, excipientes."
  },
  {
    "id": 315,
    "image": "/images/vitamina-cao-3.png",
    "title": "Vitamina C Reforço Imunológico para Cães",
    "category": "Vitaminas",
    "subcategory": "Para cães",
    "size": "Embalagem: 100g em pó",
    "price": "R$52,90",
    "descricao": [
      "Suplemento de Vitamina C em pó para cães, importante antioxidante que fortalece o sistema imunológico e auxilia na absorção de outros nutrientes.",
    ],
    "composicao": "Vitamina C (Ácido Ascórbico)."
  },
  {
    "id": 316,
    "image": "/images/vitamina-gato-1.png",
    "title": "Taurina para Gatos",
    "category": "Vitaminas",
    "subcategory": "Para gatos",
    "size": "Embalagem: 60 cápsulas",
    "price": "R$42,90",
    "descricao": [
      "Suplemento de taurina, aminoácido essencial para a saúde do coração, da visão e do sistema nervoso de gatos.",
    ],
    "composicao": "Taurina, excipientes."
  },
  {
    "id": 317,
    "image": "/images/vitamina-gato-2.png",
    "title": "Ômega 3 e 6 para Gatos",
    "category": "Vitaminas",
    "subcategory": "Para gatos",
    "size": "Frasco: 30ml",
    "price": "R$58,90",
    "descricao": [
      "Suplemento líquido de ômega 3 e 6, ácidos graxos essenciais que contribuem para a saúde da pele, da pelagem e das articulações dos gatos.",
    ],
    "composicao": "Óleo de peixe, óleo de linhaça."
  },
  {
    "id": 318,
    "image": "/images/vitamina-gato-3.png",
    "title": "Vitaminas Essenciais para Gatos Filhotes",
    "category": "Vitaminas",
    "subcategory": "Para gatos",
    "size": "Embalagem: 45g em pasta",
    "price": "R$49,90",
    "descricao": [
      "Pasta vitamínica palatável formulada para atender às necessidades nutricionais de gatos filhotes em fase de crescimento.",
    ],
    "composicao": "Vitaminas A, D, E, B complexo, cálcio, fósforo."
  },
  {
    "id": 319,
    "image": "/images/multivitaminico-1.png",
    "title": "Multivitamínico Completo para Cães",
    "category": "Vitaminas",
    "subcategory": "Multivitamínicos",
    "size": "Embalagem: 60 tabletes mastigáveis",
    "price": "R$69,90",
    "descricao": [
      "Suplemento multivitamínico e mineral completo para cães, fornecendo todos os nutrientes essenciais para a saúde geral, energia e vitalidade.",
    ],
    "composicao": "Vitaminas A, C, D, E, K, B complexo, cálcio, fósforo, ferro, zinco, selênio."
  },
  {
    "id": 320,
    "image": "/images/multivitaminico-2.png",
    "title": "Multivitamínico para Gatos com Taurina",
    "category": "Vitaminas",
    "subcategory": "Multivitamínicos",
    "size": "Embalagem: 30 cápsulas",
    "price": "R$55,90",
    "descricao": [
      "Multivitamínico para gatos enriquecido com taurina, essencial para a saúde felina, além de outras vitaminas e minerais importantes.",
    ],
    "composicao": "Taurina, vitaminas A, D, E, B complexo, minerais."
  },
  {
    "id": 321,
    "image": "/images/multivitaminico-3.png",
    "title": "Multivitamínico Líquido para Cães e Gatos",
    "category": "Vitaminas",
    "subcategory": "Multivitamínicos",
    "size": "Frasco: 120ml",
    "price": "R$75,90",
    "descricao": [
      "Multivitamínico líquido palatável para cães e gatos, fácil de administrar e ideal para animais com dificuldade em ingerir comprimidos.",
    ],
    "composicao": "Vitaminas A, D3, E, B1, B2, B6, B12, biotina, niacina."
  },
  {
    "id": 322,
    "image": "/images/suplemento-articular-1.png",
    "title": "Suplemento Articular para Cães com Condroitina e Glicosamina",
    "category": "Suplementos",
    "subcategory": "Articulares",
    "size": "Embalagem: 60 tabletes",
    "price": "R$89,90",
    "descricao": [
      "Suplemento articular para cães, formulado com condroitina e glicosamina para auxiliar na saúde das articulações, reduzir a dor e melhorar a mobilidade.",
    ],
    "composicao": "Sulfato de condroitina, sulfato de glicosamina, MSM (Metilsulfonilmetano)."
  },
  {
    "id": 323,
    "image": "/images/suplemento-articular-2.png",
    "title": "Suplemento Articular para Gatos com Ômega 3",
    "category": "Suplementos",
    "subcategory": "Articulares",
    "size": "Frasco: 60ml",
    "price": "R$78,90",
    "descricao": [
      "Suplemento líquido para gatos, rico em ômega 3, que contribui para a saúde das articulações e possui ação anti-inflamatória.",
    ],
    "composicao": "Óleo de salmão (fonte de ômega 3)."
  },
  {
    "id": 324,
    "image": "/images/suplemento-articular-3.png",
    "title": "Colágeno para Cães e Gatos",
    "category": "Suplementos",
    "subcategory": "Articulares",
    "size": "Embalagem: 150g em pó",
    "price": "R$95,90",
    "descricao": [
      "Suplemento de colágeno hidrolisado em pó para cães e gatos, auxilia na manutenção da saúde das articulações, tendões e ligamentos.",
    ],
    "composicao": "Colágeno hidrolisado."
  },
  {
    "id": 325,
    "image": "/images/suplemento-pelagem-1.png",
    "title": "Suplemento para Pelagem Brilhante de Cães",
    "category": "Suplementos",
    "subcategory": "Para pelagem",
    "size": "Embalagem: 90 cápsulas",
    "price": "R$62,90",
    "descricao": [
      "Suplemento para cães que promove uma pelagem mais brilhante, sedosa e saudável, além de auxiliar na redução da queda de pelos.",
    ],
    "composicao": "Biotina, ômega 3 e 6, vitaminas do complexo B, zinco."
  },
  {
    "id": 326,
    "image": "/images/suplemento-pelagem-2.png",
    "title": "Óleo de Linhaça para Pelagem de Gatos",
    "category": "Suplementos",
    "subcategory": "Para pelagem",
    "size": "Frasco: 100ml",
    "price": "R$55,90",
    "descricao": [
      "Óleo de linhaça, rico em ômega 3 e 6, essencial para a saúde da pele e da pelagem dos gatos, proporcionando brilho e maciez.",
    ],
    "composicao": "Óleo de linhaça."
  },
  {
    "id": 327,
    "image": "/images/suplemento-pelagem-3.png",
    "title": "Suplemento com Biotina para Cães e Gatos",
    "category": "Suplementos",
    "subcategory": "Para pelagem",
    "size": "Embalagem: 45 tabletes",
    "price": "R$59,90",
    "descricao": [
      "Suplemento com alta concentração de biotina para cães e gatos, importante para o fortalecimento dos pelos e unhas.",
    ],
    "composicao": "Biotina."
  },
  {
    "id": 328,
    "image": "/images/antipulgas-topico-1.png",
    "title": "Antipulgas Tópico para Cães Pequenos",
    "category": "Antipulgas",
    "subcategory": "Tópicos",
    "size": "Embalagem: 1 pipeta",
    "price": "R$42,90",
    "descricao": [
      "Antipulgas tópico de aplicação única para cães de pequeno porte, eficaz contra pulgas e carrapatos por até um mês.",
    ],
    "composicao": "Fipronil."
  },
  {
    "id": 329,
    "image": "/images/antipulgas-topico-2.png",
    "title": "Antipulgas Tópico para Gatos",
    "category": "Antipulgas",
    "subcategory": "Tópicos",
    "size": "Embalagem: 1 pipeta",
    "price": "R$38,90",
    "descricao": [
      "Antipulgas tópico para gatos, seguro e eficaz no combate a pulgas e piolhos por até um mês.",
    ],
    "composicao": "Imidacloprid."
  },
  {
    "id": 330,
    "image": "/images/antipulgas-topico-3.png",
    "title": "Antipulgas e Carrapatos Tópico para Cães Médios",
    "category": "Antipulgas",
    "subcategory": "Tópicos",
    "size": "Embalagem: 1 pipeta",
    "price": "R$55,90",
    "descricao": [
      "Antipulgas tópico para cães de médio porte, oferece proteção contra pulgas e carrapatos por um período prolongado.",
    ],
    "composicao": "Fipronil, (S)-metopreno."
  },
  {
    "id": 331,
    "image": "/images/antipulgas-comprimido-1.png",
    "title": "Antipulgas Oral para Cães",
    "category": "Antipulgas",
    "subcategory": "Comprimidos",
    "size": "Embalagem: 3 comprimidos",
    "price": "R$79,90",
    "descricao": [
      "Antipulgas oral palatável para cães, de ação rápida e eficaz contra pulgas.",
    ],
    "composicao": "Nitenpiram."
  },
  {
    "id": 332,
    "image": "/images/antipulgas-comprimido-2.png",
    "title": "Antipulgas e Carrapatos Oral para Cães",
    "category": "Antipulgas",
    "subcategory": "Comprimidos",
    "size": "Embalagem: 1 comprimido",
    "price": "R$65,90",
    "descricao": [
      "Comprimido oral para cães que protege contra pulgas e carrapatos por até três meses.",
    ],
    "composicao": "Fluralaner."
  },
  {
    "id": 333,
    "image": "/images/antipulgas-comprimido-3.png",
    "title": "Antipulgas Oral para Gatos",
    "category": "Antipulgas",
    "subcategory": "Comprimidos",
    "size": "Embalagem: 6 comprimidos",
    "price": "R$52,90",
    "descricao": [
      "Comprimidos antipulgas para gatos, fáceis de administrar e com ação rápida.",
    ],
    "composicao": "Capstar (Nitenpiram)."
  },
  {
    "id": 334,
    "image": "/images/antipulgas-coleira-1.png",
    "title": "Coleira Antipulgas para Cães Pequenos",
    "category": "Antipulgas",
    "subcategory": "Coleiras",
    "size": "Tamanho: Pequeno",
    "price": "R$85,90",
    "descricao": [
      "Coleira antipulgas para cães pequenos, oferece proteção contínua contra pulgas e carrapatos por vários meses.",
    ],
    "composicao": "Flumetrina, imidacloprid."
  },
  {
    "id": 335,
    "image": "/images/antipulgas-coleira-2.png",
    "title": "Coleira Antipulgas para Gatos",
    "category": "Antipulgas",
    "subcategory": "Coleiras",
    "size": "Tamanho: Único",
    "price": "R$78,90",
    "descricao": [
      "Coleira antipulgas segura e eficaz para gatos, com proteção de longa duração contra pulgas e carrapatos.",
    ],
    "composicao": "Propoxur, flumetrina."
  },
  {
    "id": 336,
    "image": "/images/antipulgas-coleira-3.png",
    "title": "Coleira Antipulgas para Cães Grandes",
    "category": "Antipulgas",
    "subcategory": "Coleiras",
    "size": "Tamanho: Grande",
    "price": "R$92,90",
    "descricao": [
      "Coleira antipulgas para cães de grande porte, com alta eficácia e proteção prolongada contra pulgas e carrapatos.",
    ],
    "composicao": "Deltametrina."
  },
  {
    "id": 337,
    "image": "/images/vermifugo-liquido-1.png",
    "title": "Vermífugo Líquido para Cães Filhotes",
    "category": "Vermífugos",
    "subcategory": "Líquido",
    "size": "Frasco: 20ml",
    "price": "R$35,90",
    "descricao": [
      "Vermífugo líquido palatável para cães filhotes, eficaz contra vermes intestinais comuns.",
    ],
    "composicao": "Pamoato de pirantel, febantel."
  },
  {
    "id": 338,
    "image": "/images/vermifugo-liquido-2.png",
    "title": "Vermífugo Líquido para Gatos",
    "category": "Vermífugos",
    "subcategory": "Líquido",
    "size": "Frasco: 15ml",
    "price": "R$32,90",
    "descricao": [
      "Vermífugo líquido de fácil administração para gatos, combate diversos tipos de vermes intestinais.",
    ],
    "composicao": "Praziquantel, pamoato de pirantel."
  },
  {
    "id": 339,
    "image": "/images/vermifugo-liquido-3.png",
    "title": "Vermífugo Líquido de Amplo Espectro para Cães",
    "category": "Vermífugos",
    "subcategory": "Líquido",
    "size": "Frasco: 30ml",
    "price": "R$48,90",
    "descricao": [
      "Vermífugo líquido de amplo espectro para cães adultos, eficaz contra vermes redondos, vermes chatos e giárdia.",
    ],
    "composicao": "Febantel, pamoato de pirantel, praziquantel."
  },
  {
    "id": 340,
    "image": "/images/vermifugo-comprimido-1.png",
    "title": "Vermífugo Comprimido para Cães Pequenos",
    "category": "Vermífugos",
    "subcategory": "Comprimido",
    "size": "Embalagem: 4 comprimidos",
    "price": "R$39,90",
    "descricao": [
      "Vermífugo em comprimidos palatáveis para cães de pequeno porte, fácil de administrar e eficaz contra vermes intestinais.",
    ],
    "composicao": "Pamoato de pirantel, febantel, praziquantel."
  },
  {
    "id": 341,
    "image": "/images/vermifugo-comprimido-2.png",
    "title": "Vermífugo Comprimido para Gatos",
    "category": "Vermífugos",
    "subcategory": "Comprimido",
    "size": "Embalagem: 2 comprimidos",
    "price": "R$36,90",
    "descricao": [
      "Vermífugo em comprimidos para gatos, indicado para o tratamento de infestações por vermes redondos e chatos.",
    ],
    "composicao": "Praziquantel, pamoato de pirantel."
  },
  {
    "id": 342,
    "image": "/images/vermifugo-comprimido-3.png",
    "title": "Vermífugo Comprimido para Cães Grandes",
    "category": "Vermífugos",
    "subcategory": "Comprimido",
    "size": "Embalagem: 1 comprimido",
    "price": "R$52,90",
    "descricao": [
      "Vermífugo em comprimido de dose única para cães de grande porte, eficaz contra diversos tipos de vermes.",
    ],
    "composicao": "Milbemicina oxima, praziquantel."
  },
  {
    "id": 343,
    "image": "/images/vermifugo-especifico-1.png",
    "title": "Vermífugo Específico para Filhotes de Cães",
    "category": "Vermífugos",
    "subcategory": "Específico por animal",
    "size": "Embalagem: 1 frasco",
    "price": "R$41,90",
    "descricao": [
      "Vermífugo líquido palatável especialmente formulado para filhotes de cães, seguro e eficaz contra os vermes mais comuns nessa fase.",
    ],
    "composicao": "Pamoato de pirantel."
  },
  {
    "id": 344,
    "image": "/images/vermifugo-especifico-2.png",
    "title": "Vermífugo Específico para Gatos Adultos",
    "category": "Vermífugos",
    "subcategory": "Específico por animal",
    "size": "Embalagem: 2 comprimidos",
    "price": "R$38,90",
    "descricao": [
      "Vermífugo em comprimidos desenvolvido especificamente para gatos adultos, com dosagem adequada e alta eficácia.",
    ],
    "composicao": "Praziquantel."
  },
  {
    "id": 345,
    "image": "/images/vermifugo-especifico-3.png",
    "title": "Vermífugo Específico para Cães Sensíveis",
    "category": "Vermífugos",
    "subcategory": "Específico por animal",
    "size": "Embalagem: 3 comprimidos",
    "price": "R$45,90",
    "descricao": [
      "Vermífugo palatável em comprimidos, formulado para cães com sensibilidade digestiva, eficaz contra vermes sem causar desconforto.",
    ],
    "composicao": "Mebendazol."
  },

];


const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const produto = produtosData.find(prod => prod.id === parseInt(id));
  const [quantidade, setQuantidade] = useState(1);

  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, visible: false });
  const imgRef = useRef(null);
  const isMobile = window.innerWidth <= 768;
  const zoom = isMobile ? 1.5 : 2.5;

  if (!produto) {
    return <h1>Produto não encontrado</h1>;
  }

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPos({ x, y, visible: true });
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div
          className="image-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setZoomPos({ ...zoomPos, visible: false })}
        >
          <img ref={imgRef} src={produto.image} alt={produto.title} className="product-image" />

          {zoomPos.visible && (
            <div
              className="zoom-box"
              style={{
                backgroundImage: `url(${produto.image})`,
                backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                backgroundSize: `${zoom * 100}%`
              }}
            />
          )}
        </div>

        <div className="product-info">
          <h1>{produto.title}</h1>
          <div className="avaliacao">
            <div className="estrela">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
            </div>
            <div className="align-av">
              <Link to="/review">
                <span className="avaliacoes">(3 avaliações)</span>
              </Link>
              <span className="estoque">Em estoque</span>
            </div>
          </div>

          <div className="quantidade-container">
            <button onClick={() => setQuantidade(q => Math.max(1, q - 1))}><FaMinus /></button>
            <span>{quantidade}</span>
            <button onClick={() => setQuantidade(q => q + 1)}><FaPlus /></button>
          </div>

          <h2>{produto.price}</h2>
          <Link to="/carrinho">
            <button className="adicionar-carrinho" onClick={() => addToCart(produto, quantidade)}>
              Adicionar ao carrinho
            </button>
          </Link>

        </div>

        <div className="align-semelhantes">

          <div className="descricao-composicao">
            <h3>Descrição</h3>
            <div className="descricao">
              {produto.descricao.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <hr />
            <h3>Composição</h3>
            <p className="composicao">{produto.composicao}</p>
          </div>

          <h3>Produtos Semelhantes:</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
