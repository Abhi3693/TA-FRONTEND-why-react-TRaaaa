
function ColorPallet(props) {
  return (
    <div className="unit flex space-btw flex-20 wrap">
      <div className="clr-box " style = {{backgroundColor : props.colorCode}}></div>
      <div className="flex space-btw">
        <span>
          {props.index === 0 ? 50 : props.index * 100 }
        </span>
        <span className="color-code">{props.colorCode}</span>
      </div>
    </div>
  )
}

export default ColorPallet;