import React from 'react'

export default function IconButton({ direction, disable,symbol,onClick}) {
  let cls = "icon-button ";
  if (direction === "left") cls += "left ";
  if (direction === "right") cls += "right ";
  if (disable) cls += "disable ";
  return (
    <div className={cls} onClick={onClick}>{symbol}</div>
  )
}