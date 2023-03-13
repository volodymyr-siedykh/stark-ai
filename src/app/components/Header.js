import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className='section mt-[50px]'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='text-2xl font-bold text-black-secondary'>
            Stark A.I
          </Link>
          <div className='flex items-center justify-between gap-3 sm:gap-10'>
            <div className='hidden sm:block'>Employer</div>
            <Link href='/' className='btn-transparent'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header