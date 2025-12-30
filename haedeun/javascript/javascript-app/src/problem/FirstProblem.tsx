export const FirstProblem = () => {
    let x = 13;
    let z = 11;
    let result;


    if (z > x) {

        result = "Hello"
    } else if(z <= x) {

        result = "Hi."
    }

    return (
        <div>
            <h3>javascript 제어문 문제1 (if)</h3>

            <pre>{
                `                       
result = ${result}                 
                `
            }</pre>
        </div>
    )
}