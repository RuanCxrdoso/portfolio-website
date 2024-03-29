import Image from 'next/image'
import reactLogo from '/public/assets/reactLogo.svg'
import Link from 'next/link'


export function Footer() {
  return (
    <footer className="footer px-8 py-8 border border-t-[#33343F] border-l-transparent border-r-transparent border-b-transparent flex flex-col gap-10">
      <div className="flex justify-between items-center sm:px-10">
        <Link href="https://www.linkedin.com/in/ruancardosolinkdin" target='_blank' >
          <span className="text-[#ADB7BE]">&lt;</span>
          <span className="text-[#ADB7BE]">R </span>
          <span className="text-[#F2A900]">CARDOSO </span>
          <span className="text-[#ADB7BE]">/&gt;</span>
        </Link>
        <p className="text-[#ADB7BE]">All rights reserved &copy;</p>
      </div>
      <div className="self-center flex items-center gap-1">
        <p className="text-[#ADB7BE] text-sm sm:text-base ">Developed by Ruan with</p>
        <Image src={reactLogo} width={26} height={26}  alt='' className='logo react' />
      </div>
    </footer>
  )
}