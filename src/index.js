module.exports = function check(str, bracketsConfig) {
    let bufferArray = [];
    strArray = str.split("");

    let isOpenAndCloseBrackets = (bufArr) => {
        return bracketsConfig.some((item) => {
            return (
                item[0] == bufArr[bufArr.length - 2] &&
                item[1] == bufArr[bufArr.length - 1]
            );
        });
    };

    strArray.forEach((elem) => {
        bufferArray.push(elem);
        if (isOpenAndCloseBrackets(bufferArray)) {
            bufferArray.splice(-2, 2);
        }
    });

    return bufferArray.length > 0 ? false : true;
};
