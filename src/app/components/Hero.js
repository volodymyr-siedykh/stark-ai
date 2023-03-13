import Image from 'next/image';
import Link from 'next/link';
import Form from './Form';
import heroImg from '../../../public/images/hero-img.png'
import iconBlue from '../../../public/images/icon-blue.svg'
import iconYellow from '../../../public/images/icon-yellow.svg'
import iconGreen from '../../../public/images/icon-green.svg'
import iconRed from '../../../public/images/icon-red.svg'

const Hero = () => {
  return (
    <section>
      <div className='section pb-[122px] relative'>
        <div className='hidden lg:flex absolute top-[100px] left-[20px] flex-col justify-center items-center gap-[8px] bg-pale-cyan py-[20px] px-[40px] rounded-[20px]'>
          <Image src={iconBlue} alt='icon job search' />
          <div className='text-black-primary font-medium'>Job Search</div>
        </div>
        <div className='hidden lg:flex absolute top-[280px] left-[150px] flex-col justify-center items-center gap-[8px] bg-pale-pink py-[20px] px-[40px] rounded-[20px]'>
          <Image src={iconRed} alt='icon practice' />
          <div className='text-black-primary font-medium'>Practice</div>
        </div>
        <div className='hidden lg:flex absolute top-[130px] right-[20px] flex-col justify-center items-center gap-[8px] bg-pale-green py-[20px] px-[40px] rounded-[20px]'>
          <Image src={iconGreen} alt='icon portfolio' />
          <div className='text-black-primary font-medium'>Build portfolio</div>
        </div>
        <div className='hidden lg:flex absolute top-[310px] right-[160px] flex-col justify-center items-center gap-[8px] bg-pale-yellow py-[20px] px-[40px] rounded-[20px]'>
          <Image src={iconYellow} alt='icon insight' />
          <div className='text-black-primary font-medium'>Insight</div>
        </div>
        <h1 className='mt-[125px] text-center'>
          Stark A.I - Your Personal Recruiter
        </h1>
        <p className='text-center mt-6'>
          Build your career to find your dream job with a simple chat with stark
          A.I
        </p>
        <div className='flex flex-col max-w-[fit-content] sm:flex-row gap-4 justify-center mt-12 mx-auto text-center'>
          <Link href='/' className='btn-blue'>
            Sign Up
          </Link>
          <Link href='/' className='btn-transparent'>
            Learn More
          </Link>
        </div>
        <Image
          className='mt-[90px] mx-auto'
          src={heroImg}
          alt='hero image'
          width={142}
          height={140}
        />
        <div className='grid sm:grid-cols-[max-content_1fr] max-w-[913px] items-center gap-[19px] mt-[15px] py-[18px] px-[12px] border border-main-blue rounded-[10px] bg-white mx-auto'>
          <Image src={heroImg} alt='hero image' width={59} height={59} />
          <p>
            Hello i am stark, your personal recruiter and will assist you in
            finding the perfect job match. build resume, provide tests to
            improve the skill and insights on how to build your career. what can
            i do for you today.
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Hero;
