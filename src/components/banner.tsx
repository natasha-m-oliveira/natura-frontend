export function Banner() {
  return (
    <div className="bg-amber-600 text-white w-full h-[70lvh]">
      <div className="grid grid-cols-2 items-center w-[calc(100%-2rem)] max-w-[calc(1280px-2rem)] mx-auto h-full">
        <div>
          <h2 className="md:text-5xl text-4xl font-bold">Se joga no arraiá</h2>
          <span className="block my-4 text-sm">
            aproveite as festas com o melhor da maquiagem Natura
          </span>
          <button className="bg-white text-black text-sm font-semibold w-44 p-3 rounded-full">
            Comprar agora
          </button>
        </div>
      </div>
    </div>
  )
}
