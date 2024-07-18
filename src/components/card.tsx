import Image from 'next/image'

export function Card() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="flex items-center justify-center max-w-xl rounded-xl">
        <Image
          src="/no-image-available.jpg"
          alt=""
          width={600}
          height={600}
          className="block max-w-full object-cover rounded-xl"
        />
      </div>
      <h3 className="text-lg font-bold">Essencial Masculino 100ml</h3>
      <span className="text-xl font-bold">R$212,00</span>
    </div>
  )
}
