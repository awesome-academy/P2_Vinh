import React from 'react';
import { useSelector } from "react-redux";

export default function Message() {
  const appState = useSelector(state => state);

  return (
      <div className="message" style={{padding: appState.message.text ? ".5rem 1rem" : ""}}>{appState.message.text}</div>
  )
}
