import './Bitcoin101Page.css'
import bitcoinArticle from '../content/bitcoin101Article'

const Bitcoin101Page:React.FC = () =>{
    const paragraphs  = bitcoinArticle  .paragraph
                        .split(/\n\s*\n/)
                        .map(p  => p.trim())
                        .filter(p => p.length>0);

    return  (
        <div className='article'> 
            <header className="article-header">
                <h1 className="title">{bitcoinArticle.title}</h1>
                <h2 className="author">{bitcoinArticle.author}</h2>
            </header>

            <main  className="article-body">
               {paragraphs.map((para, idx) =>(
                <p key={idx}>{para}</p>
               ))}
            </main>
         </div>
    )
}

export default Bitcoin101Page;