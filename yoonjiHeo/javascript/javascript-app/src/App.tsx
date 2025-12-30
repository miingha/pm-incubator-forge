import './App.css'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalculationExample } from './math_operation/CalculationExample'

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
