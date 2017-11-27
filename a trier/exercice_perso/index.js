const fileManager = require ('./fileManager'); // ==> module file system
const [action,value] = [process.argv[2],process.argv[3]];

const checkActions = () => {
    const actionPossibleValues = {
        add:true,
        remove:true
    }
    return actionPossibleValues[action];
}

const checkValue = () => (value)? true : false;
    if (checkActions() && checkValue()) {
        fileManager.init('./list.txt',action,value);
    } else {
        console.log(`the possibles actions are:
                -add
                - remove`
        );
    }

