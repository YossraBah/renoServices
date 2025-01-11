import Image from 'next/image';
import ImgLogo from '~/assets/images/2316870.mem0.pi1064.indgp.pdfgp.pdf.cmyk.nl.png'

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl flex flex-col justify-center items-center">
    <Image src={ImgLogo} alt='11' width={40} height={40}/>
    <span className='text-sm text-[#032b44]'>RENO'SERVICES</span>
  </span>
);

export default Logo;
