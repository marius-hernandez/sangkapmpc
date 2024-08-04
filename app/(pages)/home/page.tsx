'use client'

import { useUserStore } from '@/app/store'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';


const Home = () => {
    const user=useUserStore.getState()
    const [hydrated, setHydrated] = useState<boolean>(false);
    const router=useRouter()
    
    const logout=()=>{
        user.resetUser()
        localStorage.removeItem('user-storage')
        router.push('/login')
    }


    // useEffect(()=>{
    //     if(user.session ==null) router.push('/404')
    // }, [user])

    useEffect(() => {
        setHydrated(true);
    }, []);
    return (
        <div>
            <h1>{hydrated ? user.fullname: 'Loading'}</h1>
            <h1>{hydrated ? user.email: 'Loading'}</h1>
            <h1>{hydrated ? user.role: 'Loading'}</h1>
            <h1>{hydrated ? user.username: 'Loading'}</h1>
            <button onClick={logout} className='bg-red-500'>Logout</button>
        </div>
    )
}

export default Home