import { appleImg } from '../utils'
import { searchImg } from '../utils'
import { bagImg } from '../utils'

import { navLists } from '../constants'

function Navbar(){

    return <div>
        <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
            <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt="Apple" />

                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map((nav) => (
                        <div key={nav} className='px-5 cursor-pointer text-gray hover:text-white transition-all'>{nav}</div>
                    ))}
                </div>

                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} alt="search" width={18}/>
                    <img src={bagImg} alt="bag" width={18}/>
                </div>
            </nav>
        </header>

    </div>

}

export default Navbar;