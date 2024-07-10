
export default function MainContent() {
  return (
    <main>
      <div className="main__header">
        <h1 className="main__text">Nagłówek H1</h1>
        <hr className="main__hr"/>
      </div>
      <div className="main__blocks">
        <div className="main__blocks-block1">
          <h2>Blok pierwszy</h2>
        </div>
        <div className="main__blocks-block2">
          <h2>Blok drugi</h2>
        </div>
        <div className="main__blocks-block3">
          <h2>Blok z długą nazwą która sama się przytnie ...</h2>
        </div>
      </div>
    </main>
  )
}
