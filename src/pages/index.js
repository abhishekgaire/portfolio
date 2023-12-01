import Head from 'next/head';
import {MenuButton} from '../components'
import { Header } from '../components'
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto w-auto ">
        <MenuButton>Menu</MenuButton>
        <MenuButton>Contact</MenuButton>
        <Header/>
      </main>
    </div>
  );
}