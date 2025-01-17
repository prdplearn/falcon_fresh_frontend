"use client"

import React from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { bulk_ic1, bulk_ic2, cart_icon, logo, user_icon } from '@/assets/images'
import SearchBar from './Search'
import CountrySelect from './CountrySelect'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from './ui/button'
import { IoMenu } from "react-icons/io5";
import Menu from './Menu'



const Header = () => {
    return (
        <>
            <div className='bg-[#60BAAE] top_bar'>
                <Wrapper className="max-w-[95%]  p-3">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className=''>
                            <ul className='flex gap-3'>
                                <li><Link href="" className='text-white'>About Us</Link></li>
                                <li><Link href="" className='text-white'>My Account</Link></li>
                                <li><Link href="" className='text-white'>Wishlist</Link></li>
                                <li><Link href="" className='text-white'>Order Tracking</Link></li>
                            </ul>
                        </div>
                        <div className='text-center'>
                            <p className='text-white'>Free Delivery in Dubai, Sharjah & Ajman For Orders Above Aed 100</p>
                        </div>
                        <div className='text-end'>
                            <p className='text-white'>Need help? Call Us:+ 1800 900</p>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <header >
                <Wrapper className="max-w-[95%]  p-3">
                    <nav className='flex gap-5 items-center justify-between'>
                        <div className='flex gap-5 items-center'>
                            <div className="logo w-[250px]">
                                <Image src={logo} alt='logo' width={140} height={"auto"} />
                            </div>
                            <SearchBar />
                        </div>
                        <div className="cart_compo flex justify-center items-center ">
                            <div className='flex gap-3'>
                                <CountrySelect />
                                <DropdownMenu>
                                    <DropdownMenuTrigger>

                                        <div className='flex'><Image src={user_icon} width={30} height={30} alt='User Icon' className='mr-3 inline-block' /><span className='inline'>Account</span> </div>


                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Billing</DropdownMenuItem>
                                        <DropdownMenuItem>Team</DropdownMenuItem>
                                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <button className='w-full ml-5'>
                                    <Image className='inline-block' alt='cart' src={cart_icon} width={25} height={25} /> (<span className='count text-lg text-[#B21F78]'>0</span>)
                                </button>
                            </div>
                        </div>
                    </nav>



                </Wrapper>
                <menu className='border-2 border-t border-t-gray-300 border-b border-b-gray-300 '>
                    <Wrapper className="max-w-[95%] flex items-center">
                        <Sheet>
                            <SheetTrigger><span className='text-md text-[--primeColor] font-medium'><IoMenu fontSize={30} className='inline'/> All</span></SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                                    <SheetDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                        <div className='ml-5'>
                            <Menu/>
                        </div>

                        <div className='ml-auto'>
                            <ul className="flex">
                                <li className='flex mr-4'> <Link href="" className='flex mr-4 items-center'><Image src={bulk_ic1} width={25} height={25} alt='bluk icon' className='mr-3'/> Bulk Buysbulk</Link></li>
                                <li className='flex mr-4'> <Link href="" className='flex mr-4 items-center'> <Image src={bulk_ic2} width={25} height={25} alt='bluk icon' className='mr-3'/> Bulk Enquiries</Link></li>
                            </ul>
                        </div>


                    </Wrapper>
                </menu>
            </header>


        </>
    )
}

export default Header
