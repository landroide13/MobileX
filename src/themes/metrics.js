import { Dimensions } from "react-native";


const { width, height } = Dimensions.get('window')

const metrics = {
    screenwidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    calc(size = 6){
        return metrics.screenwidth * (size / 365)
    }
}


export default metrics