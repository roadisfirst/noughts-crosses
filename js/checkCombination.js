import Field from './Field';

const checkCombination = (arr) => {
    const row = 3;
    let result = false;
    let winnArr = [];
    Field.COMBINATIONS.forEach(combination => {
        let temp = [];
        let counter = 0;
        arr.forEach(element => {
            if(combination.includes(element)){
                counter++;
                temp.push(element);
            }
        });
        if(counter === row){
            result = true;
            winnArr = [...temp];
        }
    })
    return {result: result, arr: winnArr};
}

export default checkCombination;