class MathUtils {
    public constructor() {
    }
    private static instance: MathUtils;
    public static getInstance(): MathUtils {
        if (!MathUtils.instance) {
            MathUtils.instance = new MathUtils();
        }
        return MathUtils.instance;
    }
    /** 检查二维数组，横排，竖排，是否成功匹配，row排，line列
     * 比如[1,1,1,2,1,2,3,1,3]。返回[0,1,2,4,7] 
     */
    public checkMatch(arr, row: number = 3, line: number = 3) {
        if (arr.length != row * line) {
            console.log("检查的数组，长度不匹配")
            return
        }
        let resultRow = [];
        for (let r = 0; r < row; r++) {
            resultRow.push(true);
        }
        for (let r = 0; r < row; r++) {
            let temp = arr[r * line];
            for (let l = 1; l < line; l++) {
                if (arr[l + (r * line)] != temp) {
                    resultRow[r] = false;
                    continue;
                }
            }
        }
        let resultLine = []
        for (let l = 0; l < line; l++) {
            resultLine.push(true);
        }
        for (let l = 0; l < line; l++) {
            let temp = arr[l];
            for (let r = 1; r < row; r++) {
                if (arr[(r * line) + l] != temp) {
                    resultLine[l] = false;
                    continue
                }
            }
        }
        // console.log(resultRow);
        // console.log(resultLine);
        let newArr = resultRow.concat(resultLine);
        let result = [];
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i]) {
                if (i < row) {//横排
                    for (let j = 0; j < line; j++) {
                        let num = (i * line) + j
                        if (result.indexOf(num) == -1) {
                            result.push(num)
                        }
                    }
                } else {//竖排(r-row)真实的序号
                    for (let r = 0; r < row; r++) {
                        let num = (i - row) + (r * line)
                        if (result.indexOf(num) == -1) {
                            result.push(num)
                        }
                    }
                }
            }
        }
        result.sort((a, b) => a - b);
        return result;
    }

}