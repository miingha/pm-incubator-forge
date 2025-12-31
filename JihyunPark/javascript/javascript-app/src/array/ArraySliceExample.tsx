export const ArraySliceExample = () => {
    // Slice는 Month 기간 지정 설정에 쓰일 수 있다
    let number_array: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    let slice_array: number[] = number_array.slice(3, 7);
    
    // 아래 코드는 위의 number_array에서
    // 3번 인덱스부터 7번 인덱스 전까지의 값을 잘라서 가져왔음

    return (
        <div>
            <h3>javascript Array Slice</h3>

            <pre>{
                `
number_array = ${number_array}
slice_array = ${slice_array}
                `
            }</pre>
        </div>
    )
}