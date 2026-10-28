import { Letters } from "./components/Letters"
import { Button } from "./components/Button"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
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

        <div className={styles.word}>
          <Letters value="R" />
          <Letters value="" />
          <Letters value="" />
          <Letters value="" />
          <Letters value="" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>
      </main>
    </div>
  ) 
}