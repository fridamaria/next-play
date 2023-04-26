export default function Home() {
  return (
    <main>
      <section className="min-h-screen min-w-full flex items-center justify-center bg-dark-beige">
        <p>Playground</p>
      </section>
      
      <section className="min-w-full @container">
        <section className="block @3xl:grid @3xl:grid-cols-3 min-h-screen">
          <div className="min-h-[30vh] flex items-center justify-center bg-lake-blue">
            <p>About</p>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-light-beige">
            <p>Game</p>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-lemon-yellow">
            <p>Weather</p>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-dark-beige">
            <p>Time</p>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-light-white">
            <p>Img</p>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-japan-blue">
            <p>Github</p>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-lemon-yellow">
            <p>Linked</p>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center col-span-2 bg-lake-blue">
            <p>Bye</p>
          </div>
        </section>
      </section>
    </main>
  )
}
