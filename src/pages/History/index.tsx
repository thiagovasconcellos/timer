import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'

import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, StatusContainer } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>History</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutes</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {cycle.stoppedDate && (
                    <StatusContainer statusColor="red">Stopped</StatusContainer>
                  )}
                  {!cycle.endDate && !cycle.stoppedDate && (
                    <StatusContainer statusColor="yellow">
                      In progress
                    </StatusContainer>
                  )}
                  {cycle.endDate && (
                    <StatusContainer statusColor="green">
                      Finished
                    </StatusContainer>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
