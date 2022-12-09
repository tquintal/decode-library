import FirstBook from './assets/1.svg';
import SecondBook from './assets/2.svg';
import ThirdBook from './assets/3.svg';
import FourthBook from './assets/4.svg';
import FifthBook from './assets/5.svg';
import SixthBook from './assets/6.svg';
import SeventhBook from './assets/7.svg';

export const Books = [
    {
        id: 2,
        title: 'Torne-se um decifrador de pessoas',
        author: 'Alexandre Monteiro',
        category: 'Desenvolvimento pessoal',
        price: 2,
        available: true,
        ordered: false,
        likes: 40,
        dislikes: 6,
        publish: 'Planeta, junho de 2021',
        image: FirstBook,
    },
    {
        id: 3,
        title: 'A Powerful Path',
        author: 'Haven Obrien',
        category: 'Outros',
        price: 1.5,
        available: true,
        ordered: true,
        likes: 0,
        dislikes: 0,
        publish: 'Triple fascination',
        image: SecondBook
    },
    {
        id: 4,
        title: 'Grandes Palavras Pequenas Ações',
        author: 'Joana Santos',
        category: 'Desenvolvimento pessoal',
        price: 1.3,
        available: true,
        ordered: false,
        likes: 0,
        dislikes: 0,
        publish: 'Outros',
        image: ThirdBook
    },
    {
        id: 1,
        title: 'War & Peace',
        author: 'Leo Tolstoy',
        category: 'Outros',
        price: 2,
        available: false,
        ordered: false,
        likes: 0,
        dislikes: 0,
        publish: 'Oxford University Press',
        image: FourthBook
    },
    {
        id: 5,
        title: 'Tudo o que somos juntos',
        author: 'Alice Kellen',
        category: 'Outros',
        price: 2,
        available: true,
        ordered: false,
        likes: 0,
        dislikes: 0,
        publish: 'Outros',
        image: FifthBook
    },
    {
        id: 6,
        title: 'O Sanatório',
        author: 'Richard Osman',
        category: 'Outros',
        price: 2,
        available: true,
        ordered: false,
        likes: 0,
        dislikes: 0,
        publish: 'Outros',
        image: SixthBook
    },
    {
        id: 7,
        title: 'Vidas Seguintes',
        author: 'Abdulrazak Gurnah',
        category: 'Outros',
        price: 2,
        available: true,
        ordered: false,
        likes: 0,
        dislikes: 0,
        publish: 'Outros',
        image: SeventhBook
    }
];

export const Categories = [
    'Desenvolvimento pessoal',
    'Outros',
    'Arte',
    'Banda desenhada',
    'Ciências exatas e naturais',
    'Ciências sociais e humanas',
    'Desporto e lazer',
    'Dicionários e enciclopédias',
    'Direito',
    'Economia e finanças',
    'Engenharia',
    'Ensino e educação',
    'Gastronomia e vinhos',
    'Gestão',
    'Guias turísticos e mapas',
    'História',
    'Infantis e juvenis',
    'Informática',
    'Literatura',
    'Medicina',
    'Plano nacional de leitura',
    'Política',
    'Saúde e bem-estar',
    'Religião e moral',
    'Vida prática'
];
