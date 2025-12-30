import './App.css'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { CalculationExample } from './math_operation/CalculationExample'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { FristProblem } from './assets/problem/FristProblem'

function App() {

  return (
    <>
      <div>
        <CalculationExample/>
        <VariableAndDataTypes/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
        <FristProblem/>
      </div>
    </>
  )
}

export default App 