export const FirstProblem = () => {
    let x = 10;
    let z = 11;
    let result;

    // z > x 부등식은 z가 x보다 크다
    // 해당 질문의 답은 참 혹은 거짓
    if (z > x) {
        result = "Hello";
    } else {
        result = "Hi";
    }

    let ternaryResult = (z > x) ? "z는 x보다 크다." : "z는 x보다 작거나 같다."

    return (
        <div>
            <h3>javascript 제어문(if)</h3>

            <pre>{
                `
x = ${x}                          // 10
z = ${z}                          // 11
result = ${result}                // Hello
ternaryResult = ${ternaryResult}  
                `
            }</pre>
        </div>
    )  
}