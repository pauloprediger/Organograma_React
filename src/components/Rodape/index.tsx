import './Rodape.css'

export const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/paulo.prediger?locale=pt_BR" target="_blank">
                            <img src="images/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/pauloprediger/" target="_blank">
                            <img src="images/ig.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="images/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Paulo Prediger.
                </p>
            </section>
        </footer>
    )
}

