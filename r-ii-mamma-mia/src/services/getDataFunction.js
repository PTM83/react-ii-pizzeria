export const getDataObject = (object, value)=> {
    const valueObject = Object.values(object);
    const valueData = valueObject.reduce((cumulator, eachObject) => {

        if(eachObject.hasOwnProperty(value) && typeof eachObject[value]==='number'){
            return cumulator + eachObject[value];
        } else {
            return cumulator;
        }

    },0)
    return valueData;
}