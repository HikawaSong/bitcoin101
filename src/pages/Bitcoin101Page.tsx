import './Bitcoin101Page.css'
import bitcoinArticle from '../content/bitcoin101Article'

const Bitcoin101Page:React.FC = () =>{
    const paragraphs  = bitcoinArticle.paragraph
                        .split(/\n\s*\n/)
                        .map(p  => p.trim())
                        .filter(p => p.length>0);


    return  (
        <div>
        <header className='header'></header>
        <div className='article'> 
            <header className="article-header">
                <h1 className="title">{bitcoinArticle.title}</h1>
                <h2 className="author">{bitcoinArticle.author}</h2>
            </header>

            <main  className="article-body">
               {paragraphs.map((para, idx) => {
                const image = bitcoinArticle.imageMap?.[para as keyof typeof bitcoinArticle.imageMap];
                if(image){
                    return <img key={idx} src={image.src} alt={image.alt} 
                    className='article-image' />
                }
                return <p key={idx} className='paragraph'>{para}</p>
            })}
            </main>
         </div>
         <footer className='footer'></footer>
         </div>
    )
}

export default Bitcoin101Page;