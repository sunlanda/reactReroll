

import React from "react"
import {renderToString} from "react-dom/server"
import DDD from "./App.js"

const Le = renderToString(<DDD/>)
console.log(Le)
