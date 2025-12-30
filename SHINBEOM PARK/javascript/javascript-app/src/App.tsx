import './App.css'
import { VariableAndDataTypes } from './data_type/VariableAndDataType'
import { CalculationExample } from './math_operation/CalculationExample'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'



function App() {

  return (
    <>
      <div>
        <CalculationExample/>
        <VariableAndDataTypes/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
        
      </div>
    </>
  )
}

export default App