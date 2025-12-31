export const MapReduceExample = () => {
    let number_array: number [] = [2, 4, 6, 8, 10];

    // reduece의 경우엔 아래와 같이 연산됨
    // ((누산 대상, 배열의 요소) => 누산 대상 + 배열의 요소, 초기값)
    // accumulator의 시작점
    // 앞서 만들었던 다소 복잡한 연산의 for Loop 구성을 단순화 시킨 작업임
    let result_array: number = 
        number_array.reduce((accmulator, element) => accmulator + element, 0);

    return (
        <div>
            <h3>javascript Reduce Function</h3>

            <pre>{
                `
number_array = ${number_array}
result_array = ${result_array}
                `
            }</pre>
        </div>
    )
}