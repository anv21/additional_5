module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let currentEl;


    for(let i = 0; i < str.length; i++) {
        currentEl = str.charAt(i);
        for(let j = 0; j < bracketsConfig.length; j++) {

            if(currentEl === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
                if(currentEl !== stack[stack.length -1]) {
                    stack.push(currentEl);
                } else {
                    stack.pop();
                }
            } else {
                if(currentEl === bracketsConfig[j][0]) {
                    stack.push(currentEl);
                } else if (currentEl === bracketsConfig[j][1]) {
                    if(stack.pop() !== bracketsConfig[j][0]) {
                        return false;
                    }
                }
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    } else {
        return true;
    }

};