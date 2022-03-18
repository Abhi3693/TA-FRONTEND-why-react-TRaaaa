import CollorPallets from "./ColorPallets";
import colors from "../data/colors.json";

function App() {
  var keys = Object.keys(colors);
  return keys.map((k) => {
    return <CollorPallets key = {k} shade ={k} />
  })
  
}

export default App;

