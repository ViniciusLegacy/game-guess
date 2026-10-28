import { Letters } from "./components/Letters"
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"

import styles from "./app.module.css"

export default function App() {
  
  function handleRestartGame(){
    alert("Reiniciar o jogo")
  }
  
  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        
        <Tip tip="Linguagem de programação dinâmica" />

        <Letters value="R" />
        <Letters value="R" />
        <Letters value="R" />
        <Letters value="R" />
        <Letters value="R" />
      </main>
    </div>
  ) 
}