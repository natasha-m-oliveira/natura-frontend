import { Banner } from '../../components/banner'
import { Card } from '../../components/card'

export default function Home() {
  return (
    <main className="w-full">
      <Banner />

      <h2 className="text-3xl text-center font-bold my-8">
        descubra as fragrâncias que combinam com você
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[calc(100%-2rem)] max-w-[calc(1280px-2rem)] mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="my-8 flex justify-center">
        <button className="bg-white text-black text-sm font-semibold border-zinc-300 border-[1px] w-44 p-3 rounded-full">
          Carregar outros
        </button>
      </div>
    </main>
  )
}
