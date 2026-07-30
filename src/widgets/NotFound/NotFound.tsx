import Link from "next/link"
import "./NotFound.scss"

function NotFound() {
    

    return (
        <section className="NotFound container">
            <header className="NotFound__header">
                <p className="путь"><span>Home /</span> 404 Error</p>
            </header>
            <main className="NotFound__main">
               <div className="content">
                <h1 className="content__title">404 Not Found</h1>
                <p className="content__text">Your visited page not found. You may go home page.</p>
                <Link className="content__btn btn-red" href="/">Back to home page</Link>
               </div>
            </main>
        </section>
    )
}


export default NotFound