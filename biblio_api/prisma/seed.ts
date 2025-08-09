import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpa dados existentes
  await prisma.loan.deleteMany();
  await prisma.book.deleteMany();
  await prisma.author.deleteMany();

  // Cria autores
  const hernandes = await prisma.author.create({
    data: {
      name: 'Hernandes Dias Lopes',
      bio: 'Hernandes Dias Lopes é marido de Udemilta, pai de Thiago e Mariana e avô de Bento e Chloe. É bacharel em Teologia pelo Seminário Presbiteriano do Sul (Campinas, SP) e doutor em Ministério pelo Reformed Theological Seminary (Jackson, Mississippi, EUA). Integra a equipe pastoral da Primeira Igreja Presbiteriana de Vitória (ES) desde 1985, e é pastor colabora-dor da Igreja Presbiteriana de Pinheiros (São Paulo, SP). É conferencista, escritor com mais de 160 títulos publicados e diretor-executivo da missão Luz Para o Caminho. É membro da Academia Evangélica de Letras do Brasil.',
    },
  });

  const augustus = await prisma.author.create({
    data: {
      name: 'Augustus Nicodemus',
      bio: 'Augustus Nicodemus Gomes Lopes é um pastor brasileiro. Foi vice-presidente do Supremo Concílio da Igreja Presbiteriana do Brasil de 2018 a 2022, na chapa com Roberto Brasileiro. É pastor presbiteriano e ex-chanceler da Universidade Presbiteriana Mackenzie, de São Paulo.',
    },
  });

  const luciano = await prisma.author.create({
    data: {
      name: 'Luciano Subirá',
      bio: 'Luciano Subirá é um pastor, escritor e conferencista brasileiro, conhecido por seu ministério de ensino bíblico interdenominacional, o Orvalho.com. Ele também lidera a Comunidade Alcance, em Curitiba, e é autor de diversos livros, incluindo "Até que Nada Mais Importe" e "Maturidade", que abordam temas como devoção, relacionamentos e crescimento pessoal. Luciano Subirá é casado com Kelly Subirá e pai de dois filhos, Israel e Lissa.',
    },
  });

  const yago = await prisma.author.create({
    data: {
      name: 'Yago Martins',
      bio: 'Yago de Castro Martins é um teólogo, escritor, pastor batista, podcaster e youtuber brasileiro, sendo um dos principais expoentes do Novo Calvinismo no Brasil. É presidente do Instituto Schaeffer de Teologia e Cultura e dono do canal do YouTube Dois Dedos De Teologia, o maior canal de teologia reformada do Brasil.',
    },
  });

  // Cria livros
  await prisma.book.createMany({
    data: [
      // Hernandes Dias Lopes
      {
        title: 'Pregando com Poder',
        authorId: hernandes.id,
        copies: 5,
        onLoan: 2,
        totalLoans: 12,
        resume:
          'Um guia para pregadores comprometidos com a exposição fiel da Palavra.',
      },
      {
        title: 'Sofrimento e Glória',
        authorId: hernandes.id,
        copies: 3,
        onLoan: 1,
        totalLoans: 8,
        resume: 'Reflexões bíblicas sobre a dor e o propósito divino.',
      },
      {
        title: 'A Supremacia de Cristo',
        authorId: hernandes.id,
        copies: 4,
        onLoan: 0,
        totalLoans: 5,
        resume: 'Um estudo sobre a centralidade de Cristo em toda a vida.',
      },

      // Augustus Nicodemus
      {
        title: 'O que Estão Fazendo com a Igreja',
        authorId: augustus.id,
        copies: 6,
        onLoan: 3,
        totalLoans: 20,
        resume: 'Uma análise crítica das mudanças contemporâneas nas igrejas.',
      },
      {
        title: 'O Evangelho e a Vida',
        authorId: augustus.id,
        copies: 4,
        onLoan: 0,
        totalLoans: 6,
        resume: 'Como o evangelho transforma todas as áreas da existência.',
      },
      {
        title: 'O Culto Segundo Deus',
        authorId: augustus.id,
        copies: 5,
        onLoan: 1,
        totalLoans: 9,
        resume: 'Um guia bíblico para a adoração congregacional.',
      },

      // Luciano Subirá
      {
        title: 'O Falar em Línguas',
        authorId: luciano.id,
        copies: 3,
        onLoan: 1,
        totalLoans: 7,
        resume: 'Um estudo bíblico sobre o dom de línguas.',
      },
      {
        title: 'De Todo Coração',
        authorId: luciano.id,
        copies: 5,
        onLoan: 2,
        totalLoans: 11,
        resume: 'Ensinamentos sobre amar a Deus de forma integral.',
      },
      {
        title: 'O Poder Secreto da Oração',
        authorId: luciano.id,
        copies: 4,
        onLoan: 0,
        totalLoans: 4,
        resume: 'Um convite para aprofundar a vida de oração.',
      },

      // Yago Martins
      {
        title: 'Você é Aquilo que Ama',
        authorId: yago.id,
        copies: 5,
        onLoan: 2,
        totalLoans: 13,
        resume: 'Reflexões sobre como nossos amores moldam nossa vida.',
      },
      {
        title: 'Mais que um Carpinteiro? (com Jonas Madureira)',
        authorId: yago.id,
        copies: 3,
        onLoan: 1,
        totalLoans: 5,
        resume: 'Uma defesa da fé cristã para o público moderno.',
      },
      {
        title: 'Reforma Sexual',
        authorId: yago.id,
        copies: 4,
        onLoan: 0,
        totalLoans: 6,
        resume: 'Uma visão bíblica sobre sexualidade e relacionamentos.',
      },
    ],
  });

  console.log('✅ Seed concluído com sucesso!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
