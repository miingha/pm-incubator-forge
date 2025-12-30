// z가 x 보다 크면 Hello,
//z가 x 보다 작거나 같으면 Hi를 출력해주세요. 

export const FirstProblem = () => {
    let x = 5;
    let z = 10;
    let result;
    if(z > x) {
        result = "Hello";
    }
    else {
        result = "Hi";
    }   


    let ternaryResult = z > x ? "Hello" : "Hi";

    return (
        <div>
        
            <pre>{
            `
 x = ${x}           // 5
 z = ${z}           // 10
 result = ${result}    // Hello
 ternaryResult = ${ternaryResult} 
              `   }</pre>
        </div>
    )               }