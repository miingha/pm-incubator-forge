export const MapFilterExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10];

    // filter가 오면 배열의 요소를 element로 뽑음
    // 화살표 이후가 핵심인데
    // element % 4 === 0 은 아래를 의미
    // element를 4로 나누었을 때 나머지가 0인 것들만 걸러내라! (true인 것만 남김)
    // filter는 조건의 결과가 True인 것들만 걸러내서 새로운 배열을 만듦
    let result_array: number[] = 
        number_array.filter((element) => element % 4 === 0);

    // 만약 for Loop로 동일한 작업을 한다면?
    /*
    let result_array: number[] = [];
    for (let i = 0; i < number_array.length; i++) {
        if (number_array[i] % 4 === 0) {
            result_array.push(number_array[i]);
        }
    }
    */
    return (
        <div>
            <h3>javascript Filter Function</h3>

            <pre>{
                `
number_array = ${number_array}
result_array = ${result_array}
                `
            }</pre>
        </div>
    )
}