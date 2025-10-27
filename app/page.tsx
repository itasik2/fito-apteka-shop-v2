import Link from "next/link";

export default async function Home() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-br from-green-100 to-green-50 border p-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-green-900">
          Фито-аптека: сила трав и природная косметика
        </h1>
        <p className="mt-3 text-green-800 max-w-2xl">
          Масла, сборы, кремы и добавки — только натуральные составы, проверенные временем и наукой.
        </p>
        <div className="mt-6">
          <Link href="/shop" className="btn bg-green-700 hover:bg-green-800 text-white">Перейти в каталог</Link>
        </div>
      </div>
    </section>
  );
}
