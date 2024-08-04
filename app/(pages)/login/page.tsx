'use client'

import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { image, main } from '../signup/config/style';
import { getUsers } from './services/LoginServices';
import { useUserStore } from '@/app/store';
import { useRouter } from 'next/navigation';
 
const formSchema = z.object({
  email: z.string().min(2).email(),
  password: z.string().min(2),
})

const Login=()=> {
    const setUser=useUserStore((state)=>state.setUser)
    const router=useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    })
  
    function onSubmit(values: z.infer<typeof formSchema>) {
      const user={
        session:null,
        fullname:'Marius',
        username:'username',
        email:'email',
        role:'nonmember',
      }
      setUser(user)
      router.push('/home')
    }
    
  return (
    <main className={`${main} `}>
      <Image className={`${image} `} src='/logo.png'  priority width={400} height={400} alt="sangkapLogo" />
      <div className="px-28 place-content-center">
        <Form {...form}>
          <h1 className='text-6xl mb-12 text-center font-bold'>LOGIN</h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link href={`#`}>Forgot password?</Link><br />
              <Button type="submit" className='m-auto'>Log in</Button>
              <br />
              <Link href="/signup">Don&apos;t have an account? </Link>
          </form>
        </Form>
      </div>
    </main>
    
  )
}

export default Login
