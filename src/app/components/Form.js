import Image from 'next/image';
import icon from '../../../public/images/form-icon.svg'

const Form = () => {
  return (
    <form>
      <div className='flex items-center justify-between bg-white border border-main-blue rounded-[10px] px-[22px] py-[20px] mt-[17px] max-w-[671px] mx-auto'>
        <input
          className='w-full border-none outline-none placeholder-black-secondary'
          type='text'
          placeholder='Hey would you like to search for a job today.....'
        />
        <Image src={icon} alt='form icon' width={24} height={24} />
      </div>
    </form>
  );
};

export default Form;
