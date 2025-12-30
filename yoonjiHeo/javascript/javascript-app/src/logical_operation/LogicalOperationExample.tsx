export const LogicalOperationExample = () => {
    // 아래와 같은 일반 변수 선언을 해야함
    // ===의 경우 완벽하게 일치하는지 여부를 봅니다.
    // 타입까지 일치ㅏ는지 확이하는 것입니다.
    // 현재 숫자 10과 문자열 10을 비교하기 때문에 false 
    const strictEquality = 10 === ("10" as any)
    // 숫자 10과 문자열 10을 비교하는데 type 일치는 보지 않습니다. 
    // 둘 다 같은 10이기 때문에 true로 처리합니다.
    const roughEquaity = 10 == ("10" as any)
    // 논리 연산 AND(&&)
    // AND 연산의 특성으로 모든 것이 참인 경우에만 참
    const logicalAnd = true && false
    // 논리 연산 OR
    // OR 특성으로 하나만 ㅊ마이어도 참
    const logicalOr = true || false
    // 비트연산 AND
    // 2^2,  2^1,  2^0
    // 1      0     1   (5)
    // 1      0     0   (4)
    const bitwiseAnd = 5 & 4    // 4
    // 비트연산 OR
    // 2^2,  2^1,  2^0
    // 1      0     1   (5)
    // 0      1     0   (2)
    const bitwiseOr = 5 | 2    // 7

    return (
        <div>
            <h3>javascript 논리 연산자</h3>

            <pre>{
                // esc키 아래 물결 (~) 부분을 쉬프트 키 누르지 않고 찍으면 백틱
                ` 
console.log(10 === "10");     // ${strictEquality}
console.log(10 == "10");      // ${roughEquaity}
console.log(true && false);   // ${logicalAnd}
console.log(true || false);   // ${logicalOr}
console.log(5 & 4);           // ${bitwiseAnd}
console.log(5 | 2);           // ${bitwiseOr}
                ` 
            }</pre>
        </div>
    )
}