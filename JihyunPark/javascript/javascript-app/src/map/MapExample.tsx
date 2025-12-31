export const MapExample = () => {
    // 순수 자바스크립트인 경우엔 아래와 같이 표현해도 됩니다.
    // let number_array = [2, 4, 6, 8, 10];
    // 근데 저기 옆에 있는 :number []은 뭐지?

    // 해당 요소부터는 타입스크립트 특성을 가짐
    // typeScript은 타입을 명시하는 작업
    // 결론적으로 ':number []'는 숫자 배열임을 명시하는 행위!
    let number_array: number [] = [2, 4, 6, 8, 10];
    let square_result_array: number [] = number_array.map(element => element * element);

    // square(제곱) 결과 배열
    // number_array.map()을 사용하면 아래와 같이 동작함

    // 1. number_array 내부에 요소들은 1개씩 꺼내옴
    // 2. element라는 것이 2 혹은 4,6,8,10이 됨을 의미
    // 3. 꺼내온 element에 대해서 element * element 연산 수행
    // => 를 통해 이 내용을 화살표 내용의 연산으로 적용
    // => 즉, element가 2라면 2*2 연산 수행
    // 4. 그 결과값들을 모아서 새로운 배열을 생성
    // 5. 그 새로운 배열이 square_result_array에 할당됨
    return (
        <div>
            <h3>javascript Map Function</h3>

            <pre>{
                `
number_array = ${number_array}
square_result_array = ${square_result_array}
                `
            }</pre>
        </div>
    )
}