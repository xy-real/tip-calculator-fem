import Image from 'next/image';
import dollar from '../../public/icon-dollar.svg';

export default function BillInput(){
    return(
        <div>
            <label className='htmlFor="bill" className="text-md text-[hsl(186,14%,43%)]'>
                Bill
            </label>
            <div className='relative mt-2'>
                <Image src={dollar} alt='Dollar Icon' className='absolute left-3 top-1/2 transform -translate-y-1/2 z-10'/>
                <input
                className='w-full rounded-md border-2 border-transparent bg-[hsl(189,41%,97%)] px-4 py-2 text-right text-2xl font-bold text-[hsl(183,100%,15%)] placeholder:text-[hsl(183,100%,15%)]/40 focus:outline-none focus:ring-2 focus:ring-[hsl(172,67%,45%)]'
                type='number'
                id='bill'
                placeholder='0'
                />
            </div>
        </div>
        
        
    );
}