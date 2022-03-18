import ColorPallet  from "./ColorPallet";
import colors from "../data/colors.json";


function ColorPallets(props) {
  let varients = colors[props.shade];
  return( 
    <div className="container">
      <div className="card flex space-btw ">
        <div className="flex-15">
          <h2>
            {props.shade.charAt(0).toUpperCase() +
             props.shade.slice(1, props.shade.length)
            }
          </h2>
          <span className="sub-title" >Cool.colors</span>
        </div>
        
        <div className="unit-holder flex space-btw flex-80 wrap">
          {varients.map((v, i) => {
            return <ColorPallet key = {v} index = {i} colorCode = {v} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ColorPallets;