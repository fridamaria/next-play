import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 min-w-full">
      <section className="min-h-screen min-w-full flex items-center justify-center" style={{background: "#ECE9DE"}}>
        <p style={{color: "#0B52AD", fontSize: 30}}>PLAYGROUND</p>
      </section>
      
      <section className="min-h-screen min-w-full grid grid-cols-3">
        <div className="flex items-center justify-center bg-lake-blue">
          <p>About</p>
        </div>
        <div className="flex items-center justify-center bg-light-beige">
          <p>Game</p>
        </div>
        <div className="flex items-center justify-center bg-lemon-yellow">
          <p>Weather</p>
        </div>
        <div className="flex items-center justify-center bg-dark-beige">
          <p>Time</p>
        </div>
        <div className="flex items-center justify-center bg-light-white">
          <p>Img</p>
        </div>
        <div className="flex items-center justify-center bg-japan-blue">
          <p>Github</p>
        </div>
        <div className="flex items-center justify-center bg-lemon-yellow">
          <p>Linked</p>
        </div>
        <div className="flex items-center justify-center col-span-2 bg-lake-blue">
          <p>Bye</p>
        </div>
      </section>
    </main>
  )
}
