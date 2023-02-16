import { SocialMedia } from '../../components/SocialMedia'
import './home.css'

export function Home() {
  return (
    <section className="home">
      <div className="adapt-conjunto">
        <img src="image/adapt.png" alt="Logo adapt" />
        <div>
          <h1 title="Nova Edição">NEW ADDITION</h1>
          <p title="Obtenha o ajuste certo, cada jogo, cada passo">
            Get the rigth fit, every game, every step
          </p>
        </div>
        <img className="adapt-button" src="image/botão.png" alt="botão" />
      </div>

      <div className="tenis">
        <img src="image/tenis.png" alt="tenis nike" />
      </div>

      <div className="produtos">
        <h2>$379</h2>
        <div className="produtos-detalhe">
          <details className="produtos-cards">
            <summary title="Tamanho">Size</summary>
            <option value="BR-39">BR-39</option>
            <option value="BR-39">BR-40</option>
            <option value="BR-39">BR-41</option>
          </details>
          <details className="produtos-cards">
            <summary title="Cor">Color</summary>
            <option selected value="Branco">
              Withe
            </option>
            <option value="Azul">Blue</option>
            <option value="Verde">Green</option>
          </details>
        </div>
       
          <button className="produtos-botao" type="submit">BUY NOW</button>
        
      </div>
      <div>
        <SocialMedia />
      </div>
    </section>
  )
}
