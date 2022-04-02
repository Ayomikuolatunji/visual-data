import './App.css';
import {arc} from "d3-shape"
console.log(arc)
const width=960;
const height=960;

const centerX=width/2;
const centerY=height/2;
const strokwidth=5;
const eyeOffsetX=90;
const eyeOffsetY=100
const eyeRadius=40;


const mouthArc=arc()
.innerRadius(90)
.outerRadius(100)
.startAngle(0)
.endAngle(Math.PI * 2);


console.log(mouthArc)

function App() {
  return (
    <div className="Apsp">
         <svg width={width} height={height}>
             <g>
             <circle 
             r="200"
             cx={centerX}
             cy={centerY}
             fill='yellow'
             stroke='black'
             strokeWidth={strokwidth}
             >
             </circle>
             <circle
               cx={centerX - eyeOffsetX}
               cy={centerY - eyeOffsetY}
               r={eyeRadius}
             >
             </circle>
             <circle
               cx={centerX + eyeOffsetX}
               cy={centerY - eyeOffsetY}
               r={eyeRadius}
             >
             </circle>
            <path d={mouthArc()} />
             </g>
         </svg>
    </div>
  );
}

export default App;
