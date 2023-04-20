import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 min-w-full">
      <section className="min-h-screen min-w-full flex items-center justify-center" style={{background: "#ECE9DE"}}>
        <p style={{color: "#0B52AD", fontSize: 30}}>PLAYGROUND</p>
      </section>
      
      <section className="min-h-screen min-w-full grid grid-cols-3">
        <div className="flex items-center justify-center" style={{background: "#A4C5E6"}}>
          <p>1</p>
        </div>
        <div className="flex items-center justify-center" style={{background: "#F5F3F3"}}>
          <p>2</p>
        </div>
        <div className="flex items-center justify-center" style={{background: "#F2D500"}}>
          <p>3</p>
        </div>
        <div className="flex items-center justify-center" style={{background: "#ECE9DE"}}>
          <p>4</p>
        </div>
        <div className="flex items-center justify-center" style={{background: "#FBFBFB"}}>
          <p>5</p>
        </div>
        <div className="flex items-center justify-center" style={{background: "#0B52AD"}}>
          <p>6</p>
        </div>
        <div className="flex items-center justify-center" style={{background: "#F2D500"}}>
          <p>7</p>
        </div>
        <div className="flex items-center justify-center col-span-2" style={{background: "#A4C5E6"}}>
          <p>8</p>
        </div>
      </section>
    </main>
  )
}
