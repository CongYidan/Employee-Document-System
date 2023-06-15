import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Personal Journal Hive!</span></h1>
            </header>
            <main className="public__main">
                <p>A secret hive developed by Danielle to store your personal journals!</p>
                <address className="public__addr">
                    Danielle Cong<br />
                    San Jose, CA<br />
                    MSCS @Northeastern University<br />
                    <a href="mailto: congyd126@gmail.com">contact us</a>
                </address>
                <br />
                <p>Owner: Danielle Cong</p>
            </main>
            <footer>
                <Link to="/login">User Login</Link>
            </footer>
        </section>

    )
    return content
}

export default Public