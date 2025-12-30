import './App.css'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalculationExample } from './math_operation/CalculationExample'
import { FirstProblem } from './problem/FirstProblem'

function App() {

  return (
    <>
    <div>
      {/*커스텀 태그 생성*/}
      <CalculationExample />
      <VariableAndDataTypes />
      <LogicalOperationExample />
      <ControlFlowIf />
      <FirstProblem />
    </div>
    </>
  )
}

export default App
