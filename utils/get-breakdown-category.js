import {breakdownCategories} from "../data/breakdown-categories";

const getBreakdownCategory = (userVal, minVal, maxVal) => {
        // get percentage
        let percentage = (userVal / maxVal) * 100;

      
        // work out color
        let colors = breakdownCategories;
        
        
        let chosenColor = null;
        colors.forEach((color) => {
          if( percentage >= color.minPercent ){
            chosenColor = color;
          }
        })
      
        return chosenColor;
}

export default getBreakdownCategory;