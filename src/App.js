import './App.css';
import {arc} from "d3-shape"

const width=760;
const height=660;

const centerX=width/2;
const centerY=height/2;
const strokwidth=5;
const eyeOffsetX=90;
const eyeOffsetY=100
const eyeRadius=40;
const mouthWidth=10;
const mouthRadius=140


const mouthArc=arc()
.innerRadius(mouthRadius)
.outerRadius(mouthRadius + mouthWidth)
.startAngle(Math.PI/2)
.endAngle(Math.PI * 3 /2);
  


const teeth=[]
var foo = new Array(45);
for(var i = 0; i < foo.length; i++){
  teeth.push(i)
}

function App() {
  return (
    <div className="Apsp">
         <svg width={width} height={height}>
             <g transform={`translate(${centerX}, ${centerY})`}>
             <circle 
             r="200"
             fill='yellow'
             stroke='black'
             strokeWidth={strokwidth}
             >
             </circle>
             <circle
               cx={-eyeOffsetX}
               cy={-eyeOffsetY}
               r={eyeRadius}
             >
             </circle>
             
             <circle
               cx={eyeOffsetX}
               cy={-eyeOffsetY}
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
