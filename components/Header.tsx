import React from 'react'
import Logo from './Logo'
import DarkModeToggle  from './DarkModeToggle'
import UserButton from './UserButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import Link from 'next/link'
import { MessagesSquareIcon } from 'lucide-react'
import CreateChatButton from './CreateChatButton'


// Only server side components can be async functions
async function Header() {

  const session = await getServerSession(authOptions);
  // console.log(session);


  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
        <nav className='flex flex-col md:flex-row space-y-3 md:space-y-0 items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-6xl mx-auto'>
          <Logo />

          <div className='flex-1 flex align-center justify-end space-x-4'>
            {/* Language Select */}

             {
              session ? (
                <>
                  <Link href="/chat" prefetch={false} className='flex items-center'>
                    <MessagesSquareIcon className='text-black dark:text-white'/>
                  </Link>
                  <CreateChatButton />
                </>
              ) : <>
                <Link href='/pricing'>
                  Pricing
                </Link>
              
              </>
             }

             <DarkModeToggle />

             <UserButton session={session}/>
            
          </div>
        </nav>

        {/* upgrade banner */}
    </header>
  )
}

export default Header