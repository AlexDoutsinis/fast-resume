import React from "react"

type Props = {
  show: boolean
  handleClick: () => void
}

const RemoveInputBtn = ({ show, handleClick }: Props) => {
  if (!show) return null

  return <button onClick={handleClick}>Rm</button>
}

export default RemoveInputBtn
