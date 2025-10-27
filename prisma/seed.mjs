import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.product.count();
  if (count > 0) {
    console.log("Seed skipped, already have data.");
    return;
  }
  await prisma.product.createMany({
    data: [
      {
        name: "Травяной сбор «Здоровье ЖКТ»",
        brand: "ФитоДар",
        description: "Смесь ромашки, мяты, фенхеля и календулы для поддержки пищеварения.",
        price: 129900,
        image: "/seed/herbalmix.jpg",
        category: "Фиточаи и сборы",
        stock: 80
      },
      {
        name: "Масло чайного дерева 100%",
        brand: "GreenSoul",
        description: "Антисептическое эфирное масло для ухода за кожей и волосами.",
        price: 159900,
        image: "/seed/teatree.jpg",
        category: "Масла и эфиры",
        stock: 60
      },
      {
        name: "Крем с календулой и алоэ",
        brand: "NatureLine",
        description: "Успокаивающий и заживляющий крем для чувствительной кожи.",
        price: 189900,
        image: "/seed/calendula.jpg",
        category: "Кремы и бальзамы",
        stock: 45
      },
      {
        name: "Фитокомплекс «Иммунная защита»",
        brand: "VitaHerb",
        description: "Биодобавка с эхинацеей, шиповником и цинком.",
        price: 249900,
        image: "/seed/immunity.jpg",
        category: "Добавки и витамины",
        stock: 50
      }
    ]
  });
  console.log("Seed complete: фито-продукты добавлены.");
}

main().finally(async () => await prisma.$disconnect());


// Seed posts
await prisma.post.createMany({
  data: [
    {
      title: "Как выбрать продукт по типу кожи",
      slug: "kak-vybrat-po-tipu-kozhi",
      content: "Короткое руководство по типам кожи и базовым активам. Без мистики.",
      category: "советы",
      image: "/seed/post1.jpg"
    },
    {
      title: "Что говорят исследования о ретиноидах",
      slug: "issledovaniya-o-retinoidah",
      content: "Сводка научных источников про ретиноиды и как не сгореть от счастья.",
      category: "исследования",
      image: "/seed/post2.jpg"
    }
  ]
});
