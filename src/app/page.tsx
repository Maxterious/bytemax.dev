import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Image
      src={"/background.svg"}
      alt='Background image'
      style={{objectFit: "cover"}}
      fill={true}
      />
    </div>
  )
}
