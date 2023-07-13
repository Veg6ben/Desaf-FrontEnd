
export const Article = ({img, number, title, text}) => {
  return (
    <article className='flex border h-[162px]'>
    <div className='w-[100px] flex-none'>
        <img src={img} alt="" />
    </div>
    <div className='pl-6'>
        <p className=' text-3xl mb-[18px] font-bold text-white'>{number}</p>
        <h2 className='font-bold mb-[18px] hover:text-orange-400 cursor-pointer'>{title}</h2>
        <p className='text-blue-900 text-[16px]'>{text}</p>
    </div>
    </article>
  )
}
 