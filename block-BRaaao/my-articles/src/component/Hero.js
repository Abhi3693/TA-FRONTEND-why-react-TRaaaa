import data from "../data"

function Articles() {
  {console.log(data)}
  
  return (
    <ul className="container flex wrap space-btw">
      {data.map((d, i)=> {
        return <Article key={i} {...d}/>
      })}
    </ul>
  )
}

function Article(props) {
  return (
      <li className="card flex-30">
        <img src={props.urlToImage} alt="article-img"/>
        <div className="card-info">
          <h2>{props.title}</h2>
          <h3>{props.publishedAt.split("T")[0]}</h3>
          <h3>{props.description.slice(0,100)}</h3>
          <p>{props.content}</p>
          <a href={props.url} className="read-more">Read More</a>
        </div>
      </li>
  )
}

export default Articles;