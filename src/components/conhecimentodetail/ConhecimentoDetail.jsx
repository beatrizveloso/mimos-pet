import React from 'react';
import { FaFacebookF, FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import './ConhecimentoDetail.css';

const conhecimentosData = [
  {
    id: 1,
    image: '/images/conhecimentos-1.png',
    tag: 'Informativo',
    title: 'Dono não, Tutor! Por que não se usa mais a palavra dono para o Pet?',
    description: 'Se você ainda não está familiarizado com o termo “tutor” no universo pet, ele pode parecer estranho ou até exagerado. Afinal, é apenas uma palavra, não é? Por que substituir “dono”, um termo tão comum e utilizado há décadas, por algo diferente? Seria apenas uma questão de politicamente correto ou existe um significado maior por trás dessa mudança? A verdade é que essa alteração vai muito além das palavras. Ela reflete a forma como enxergamos nossos companheiros de quatro patas e a relação que construímos com eles. Vamos entender melhor essa diferença?',
    content: [
      {
        title: "QUEM É DONO, <span>POSSUI ALGO.</span> E NINGUÉM POSSUI UM CÃOZINHO OU GATO",
        paragraph: "De acordo com o dicionário Michaelis, dono significa proprietário, possuidor, alguém que tem pleno domínio sobre algo. Já tutor é descrito como aquele que protege, ampara ou defende alguém ou algo mais frágil. Agora pense: qual dessas definições reflete melhor a relação entre humanos e seus animais de estimação? Somos donos dos nossos pets, livres para fazer o que quisermos com eles, ou somos tutores, zelando pelo seu bem-estar como verdadeiros guardiões?",
      },
      {
        title: "MAUS TRATOS AOS ANIMAIS: UMA REALIDADE QUE <span>PRECISA SER MUDADA</span>",
        paragraph: "Imagine o seu celular. Se você se cansar dele, pode trocá-lo, vendê-lo ou jogá-lo fora sem que isso cause maiores impactos. Mas animais não são objetos. Eles têm sentimentos, sofrem e dependem de nós para terem uma vida digna. Infelizmente, muitas pessoas ainda enxergam os animais como propriedades descartáveis. Todos os dias, milhares de bichinhos são abandonados ou submetidos a maus-tratos simplesmente porque alguém decidiu que não queria mais tê-los por perto. Mudar a forma como nos referimos aos pets é um pequeno passo que pode gerar uma grande transformação. Ao nos reconhecermos como tutores, reafirmamos nosso compromisso de cuidar, proteger e garantir que nossos companheiros tenham uma vida longa e feliz. No fim das contas, essa não é apenas uma questão de nomenclatura, mas de consciência e responsabilidade. E, ao longo desse caminho, podemos construir uma relação ainda mais bonita e cheia de amor com nossos amiguinhos de quatro patas. E você, o que acha dessa mudança? Compartilhe com quem precisa ler essa mensagem!",
      }
    ]
  },
  {
    id: 2,
    image: '/images/conhecimentos-2.png',
    tag: 'Informativo',
    title: 'Pet Friendly: Dicas para Decorar seu Apartamento',
    description: 'Transformar seu apartamento em um ambiente pet friendly é mais simples do que parece. A chave está em escolher móveis e materiais que sejam duráveis e fáceis de limpar, como tecidos resistentes e pisos de cerâmica ou madeira.',
    content: [
      {
        title: "ESCOLHENDO OS MATERIAIS <span>CERTOS</span>",
        paragraph: "A escolha dos materiais faz toda a diferença em um lar com pets. Para evitar dores de cabeça com móveis arranhados e tecidos desgastados, opte por materiais duráveis e fáceis de limpar. Sofás e poltronas podem ser revestidos com tecidos impermeáveis ou couro sintético, que facilitam a remoção de pelos e sujeira. Já no piso, dê preferência para cerâmica, porcelanato ou laminados, que são mais resistentes e fáceis de higienizar do que carpetes e tapetes felpudos.",
      },
      {
        title: "ESPAÇOS EXCLUSIVOS PARA O SEU <span>PET</span>",
        paragraph: "Ter um cantinho especial para o seu pet faz toda a diferença no conforto e bem-estar dele. Reserve um espaço da casa para colocar a caminha, os brinquedos e o pote de ração e água. Se o seu bichinho gosta de se esconder, pense em criar um refúgio aconchegante, como uma toca ou uma casinha. Para gatos, é interessante investir em prateleiras suspensas, nichos e arranhadores verticais, permitindo que eles explorem o espaço de forma mais divertida e segura.",
      },
      {
        title: "EVITE <span>ITENS PERIGOSOS</span>",
        paragraph: "A segurança do seu pet deve estar em primeiro lugar. Evite móveis com quinas muito pontudas e prefira opções arredondadas. Cuidado também com objetos decorativos pequenos ou frágeis que possam ser derrubados e quebrados facilmente. Além disso, mantenha plantas tóxicas fora do alcance do seu animal de estimação. Algumas plantas comuns, como lírios, comigo-ninguém-pode e costela-de-adão, podem ser prejudiciais para cães e gatos.",
      },
      {
        title: "<span>MANTENHA</span> A ORGANIZAÇÃO",
        paragraph: "Quem tem pet sabe que brinquedos e acessórios podem acabar espalhados pela casa. Para evitar bagunça, utilize cestos organizadores ou caixas decorativas onde seja fácil guardar os itens do seu bichinho sem comprometer a estética do ambiente.",
      },
      {
        title: "MANTENHA CONFORTO PARA <span>TODOS</span>",
        paragraph: "Por fim, lembre-se de que um lar pet friendly deve ser confortável tanto para você quanto para o seu bichinho. Proporcione espaços aconchegantes, com almofadas, mantas e tapetes antiderrapantes, para que ele possa se movimentar livremente sem escorregar. Criar um ambiente pet friendly não significa abrir mão do estilo e da beleza da sua decoração. Com algumas adaptações simples, é possível garantir que seu apartamento seja um espaço harmonioso, seguro e acolhedor para todos os moradores – incluindo os de quatro patas! 🐶🐱",
      }
    ]
  },
  {
    id: 3,
    image: '/images/conhecimentos-3.png',
    tag: 'Informativo',
    title: 'Como dar comprimido para pets: dicas para não estressar seu pet!',
    description: 'Dar comprimido para cães e gatos pode ser desafiador, mas com paciência e algumas estratégias, é possível tornar o processo mais fácil e menos estressante para o seu pet.',
    content: [
        {
            title: "TORNANDO A EXPERIÊNCIA <span>MAIS AGRADÁVEL</span> PARA O SEU PET",
            paragraph: "Muitos animais rejeitam comprimidos por instinto, associando-os a algo estranho ou desagradável. Para facilitar, experimente esconder o remédio em um petisco favorito ou misturá-lo com a comida. Outra técnica é oferecer um petisco antes e depois do comprimido, criando uma associação positiva com o momento da medicação."
        },
        {
            title: "TÉCNICAS PARA <span>ADMINISTRAR O COMPRIMIDO</span> COM SUCESSO",
            paragraph: "Se esconder o comprimido não funcionar, tente oferecê-lo diretamente. Com delicadeza, segure o focinho do pet, incline levemente sua cabeça para cima e coloque o comprimido no fundo da boca. Massagear a garganta pode ajudar na deglutição. Sempre reforce com carinho e elogios para que seu pet se sinta seguro."
        },
        {
            title: "EVITANDO O <span>ESTRESSE</span> DURANTE A MEDICAÇÃO",
            paragraph: "O estresse pode dificultar ainda mais a administração do remédio. Escolha um ambiente calmo e tente agir de forma tranquila. Caso o pet esteja muito resistente, consulte um veterinário sobre alternativas, como medicamentos em formato líquido ou mastigável. O mais importante é garantir a saúde do seu amigo de forma gentil e eficiente."
        }
    ]
}
];

const ConhecimentoDetail = () => {
  const { id } = useParams();
  const conhecimento = conhecimentosData.find(item => item.id === parseInt(id));

  if (!conhecimento) {
    return <h1>Conhecimento não encontrado</h1>;
  }

  const currentUrl = window.location.href;

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(conhecimento.title + ' - ' + currentUrl)}`;
    window.open(url, '_blank');
  };

  const shareGeneric = () => {
    if (navigator.share) {
      navigator.share({
        title: conhecimento.title,
        text: conhecimento.description,
        url: currentUrl,
      });
    } else {
      alert('Seu navegador não suporta compartilhamento nativo.');
    }
  };

  return (
    <div className="conhecimento-detail-container">
      <h1 className="main-title">{conhecimento.title}</h1>
      <p className="author-date">Por Mimo’sPet <br/> 06/06/2023 16h16  Atualizado há 2 anos</p>
      <img className="image" src={conhecimento.image} alt={conhecimento.title} />
      <p className="text">{conhecimento.description}</p>

      {conhecimento.content && conhecimento.content.map((section, index) => (
        <div key={index} className="content-section">
          <h2 className="sub-title" dangerouslySetInnerHTML={{ __html: section.title }} />
          <p className="text">{section.paragraph}</p>
        </div>
      ))}


      <div className="social-share">
        <button className="social-icon facebook" onClick={shareOnFacebook}>
          <FaFacebookF className="icon" />
        </button>

        <button className="social-icon whatsapp" onClick={shareOnWhatsApp}>
          <FaWhatsapp className="icon" />
        </button>

        <button className="social-icon share" onClick={shareGeneric}>
          <FaShareAlt className="icon" />
        </button>
      </div>
    </div>
  );
};

export default ConhecimentoDetail;
