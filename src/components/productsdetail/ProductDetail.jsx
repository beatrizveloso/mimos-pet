import React, { useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import "./ProductDetail.css";

const produtosData = [
  {
    "id": 1,
    "image": "/images/ração-1.png",
    "title": "Ração Seca Para Gatos Adultos Carne",
    "category": "Ração",
    "size": "2,7kg",
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
    "category": "Brinquedo",
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
    "category": "Brinquedo",
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
    "category": "Brinquedo",
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
    "category": "Brinquedo",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "category": "Alimentação",
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
    "title": "Magnus Cat Premium Gatos Filhotes Carne e Frango",
    "category": "Alimentação",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Fantasia",
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
    "category": "Ração para Cães",
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
    "category": "Ração para Cães",
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
    "category": "Ração para Cães",
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
    "category": "Ração para Cães",
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
    "category": "Ração para Cães",
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
    "category": "Ração para Cães",
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
    "category": "Ração para Cães",
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
    "category": "Ração para Cães",
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
    "category": "Ração para Cães",
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
    "category": "Ração para Cães",
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
    "category": "Ração para Cães",
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
    "category": "Ração para Cães",
    "size": "Tamanho: 15kg",
    "price": "R$106,99",
    "descricao": [
      "Ração com croquetes em formato de ossinhos e delicioso sabor carne. Ideal para cães adultos que apreciam textura crocante. Contribui para a saúde bucal e oferece todos os nutrientes necessários para uma alimentação equilibrada. Perfeita para ser oferecida diariamente, com excelente aceitação pelos pets."
    ],
    "composicao": "Farinha de carne bovina, milho integral, gordura de frango, conservantes naturais, vitaminas e minerais. Receita nutritiva, saborosa e com ingredientes selecionados para a saúde diária do seu pet."
  },
];


const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const produto = produtosData.find(prod => prod.id === parseInt(id));
  const [quantidade, setQuantidade] = useState(1);

  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, visible: false });
  const imgRef = useRef(null);
  const zoom = 2.5;

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
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="#FFD700" />
            ))}
            <span className="avaliacoes">(30 avaliações)</span>
            <span className="estoque">Em estoque</span>
          </div>

          <div className="quantidade-container">
            <button onClick={() => setQuantidade(q => Math.max(1, q - 1))}><FaMinus /></button>
            <span>{quantidade}</span>
            <button onClick={() => setQuantidade(q => q + 1)}><FaPlus /></button>
          </div>

          <h2>{produto.price}</h2>
          <button className="adicionar-carrinho" onClick={() => addToCart(produto, quantidade)}>
            Adicionar ao carrinho
          </button>

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
