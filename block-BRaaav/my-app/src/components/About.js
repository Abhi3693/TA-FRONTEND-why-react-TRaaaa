import {profileData} from "../data/profileData";
import Dot from "./Dot";

function About() {
  return (
    <section className="about padding">
        <div className="container flex align-start">
          <div className="flex-40">
            <header className="sec-header">
              <h2 className="heading">Let us introduce</h2>
              {/* <div className="dot-wrapper flex justify-start">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div> */}
              {<Dot/>}
            </header>

            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique ut sequi voluptatibus beatae corporis repellat
              asperiores fugit debitis corrupti nesciunt nam doloribus animi qui
              illum, recusandae nisi neque iusto culpa!
            </p>
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex-30 progress">
            {profileData.map((data, i)=> {
              return <Progress key={i} {...data}/>
            })}
          </div> 
          <div className="flex-30">
            <img
              className="flexible-img about-img"
              src="/media/about-image.jpg"
              alt="About Image"
            />
          </div>
        </div>
      </section>
  )
}


function Progress(props) {
  return (
    <div className="progress-item">
      <div className="flex">
        <h3>{props.type}</h3>
        <p>{props.percent}</p>
      </div>
      <progress value={props.percent} max="100"></progress>
    </div>
  )
}

export default About;