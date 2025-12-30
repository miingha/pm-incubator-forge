export const FirstProblem = () => {
    let x = 10;
    let z = 20;
    let result;

    if(x<z){
        result="Hello"
    }
    else{
        result="Hi"
    }

     return(
        <div>
            <h3>Problem</h3>
            <pre>{
                // `는 ~키 아래 있는 기호
                `
            x = ${x}
            z = ${z}                          
            result = ${result}               
                `
            
            }</pre>
        </div>
    )
}