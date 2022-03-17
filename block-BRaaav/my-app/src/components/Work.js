import {workData} from "../data/profileData";
import Dot from "./Dot";

function Work() {
  return (
    <section className="work padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Work</h2>
            {<Dot/>}
          </header>
          <div className="flex">
            {workData.map((work, i) => {
              return <SingleWork key = {i} {...work} />
            })}
          </div>
        </div>
      </section>
  )
}

function SingleWork(props) {
  return (
    <div className="flex-23">
              <img
                className="flexible-img"
                src={props.img}
                alt="Work Image 1"
              />
            </div>
  )
}

export default Work