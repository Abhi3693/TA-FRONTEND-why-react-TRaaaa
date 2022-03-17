import propTypes from "prop-types";
import data from "../data/articles";

function Articles() {
  return (
    <section className="container">
      <ul className="">
        {data.map((d, i)=> {
          return <Article key={i} {...d}/>
        })}
      </ul>
    </section>
  )
}


function Article(props) {
  return (
    <li className="card">
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

Article.propTypes = {
  title : propTypes.string.isRequired,
  url : propTypes.string.isRequired,
  urlToImage : propTypes.string.isRequired,
}

export default Articles;
