// z가 x 보다 크면 Hello,
// z가 x 보다 작거나 같으면 Hi를 출력해주세요.
export const ControlFlowIf = () => {
    let z = 10;
    let x = 20;
    let result;

    if (z > x) {
        result = "Hello"
    } else {
        result = "Hi"
    }

   
    let ternaryResult = z > x ? "Hello" : "Hi"

    return (
        <div>
            <h3>javascript 제어문 (if)</h3>

            <pre>{
                `
z = ${z}                            // 10
x = ${x}                            // 20
result = ${result}                  // Hi
ternaryResult = ${ternaryResult}
                `
            }</pre>
        </div>
    )
}