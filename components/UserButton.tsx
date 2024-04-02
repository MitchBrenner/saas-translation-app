'use client' // needs to use client if you use onClick 
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from './UserAvatar'
import { Session } from 'next-auth'
import { Button } from './ui/button'
import { signIn, signOut } from 'next-auth/react'
  

function UserButton({ session } : { session: Session | null}) {

    if (!session) 
        return (
            <Button variant={'outline'} onClick={() => signIn()}>
                Sign In
            </Button>
        );

  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar 
                image={session.user?.image}
                name={session.user?.name}
            />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton