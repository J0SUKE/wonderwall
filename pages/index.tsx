import React, { useEffect } from 'react'
import Home from '../components/pages/Home'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { log } from 'console';

export default function HomePage() {
  
  const router = useRouter();

  useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      console.log('ready');
      
    })
  })

  return <Layout>
    <Home/>
  </Layout>
}

