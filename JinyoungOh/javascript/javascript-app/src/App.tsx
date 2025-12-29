import './App.css'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { CalculationExample } from './math_operation/CalculationExample'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'

function App() {

  return (
    <>
      <div>
       <CalculationExample/>
       <VariableAndDataTypes/>
       <LogicalOperationExample/>
      </div>
    </>
  )
}

export default App
