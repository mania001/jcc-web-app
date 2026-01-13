import Image from 'next/image'

export default function Logo() {
  return (
    <h1 className="font-inter flex items-center justify-center">
      <Image src={'/images/logo.png'} alt="" width={45} height={45} />
      <div className="ml-2">
        <span className="text-xl font-extrabold italic">JCC.TV</span>
        <p className="-mt-1 text-xs font-light">Jesus Centered Church</p>
      </div>
    </h1>
  )
}
