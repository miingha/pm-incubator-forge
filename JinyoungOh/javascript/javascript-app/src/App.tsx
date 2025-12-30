import './App.css'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { CalculationExample } from './math_operation/CalculationExample'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { FirstProblem } from './problem/FirstProblem'

function App() {

  return (
    <>
      <div>
       <CalculationExample/>
       <VariableAndDataTypes/>
       <LogicalOperationExample/>
       <ControlFlowIf/>
       <FirstProblem/>
      </div>
    </>
  )
}

export default App
