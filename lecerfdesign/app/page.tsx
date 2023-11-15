import Header from "@/Components/Header/Header"
import Button from "@/Components/UI-kit/Button/Button"

export default function Page() {
  return (
    <main className="Home">
        <Header />
        <div className="backgroundImage">
            <div className="titleContentHome">
                <div className="titleHome">
                    <p>Bienvenue chez Lecerf Design</p>
                </div>
                <div className="descriptionContentHome">
                    <h2>PRINT, DESIGN, COMMUNICATION</h2>
                </div>
            </div>
            <div className="ButtonContentHome">
                <Button ButtonStyle={{fontSize: "16px", color: "var(--White-color)"}} ButtonContent="Contacter-moi" />
            </div>
        </div>
    </main>
  )
}
