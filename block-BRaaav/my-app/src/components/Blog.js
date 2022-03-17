import {profileData, blogInfo} from "../data/profileData";
import Dot from "./Dot";

function Blog() {
  return (
    <section className="blog padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Blog</h2>
            {<Dot/>}
          </header>
          <div className="flex wrap">
            {blogInfo.map((info, i)=> {
              return <CreateProfile key = {i} {...info} />
            })}
          </div>
        </div>
      </section>
  )
}

function CreateProfile(props) {
  return (
    <article className="flex article flex-48">
              <div className="flex-40 font-0">
                <img
                  className="flexible-img"
                  src={props.img}
                  alt="Blog image"
                />
              </div>

              <div className="flex-60 article-content">
                <time dateTime="">
                  <i className="far fa-clock"></i>
                  {props.date}
                </time>
                <h3>{props.title}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a className="btn btn-tertiary" href="#">View Detail</a>
              </div>
            </article>
  )
}

export default Blog;