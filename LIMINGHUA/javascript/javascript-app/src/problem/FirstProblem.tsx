export const FirstProblem = () => {
    let z = 5;
    let x = 20;
    let result;


    if(z > x){
        result = "Hello"
    } else {

        result = "Hi"
    }


    let ternaryResult = z > x ? "Hello" : "Hi"
    

    return (
        <div>
            <h3>javascript 제어문 (if)</h3>
            
            <pre>{
                // esc키 아래 물결 (~) 부분을 쉬프트 키 누르지 않고 찍으면 백틱
                `
z = ${z}                            // 5
x = ${x}                            // 20
result = ${result}                  // Hi
ternaryResult = ${ternaryResult}
                `
            }</pre>
        </div>
    )
}