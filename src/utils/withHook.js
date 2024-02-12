import React from 'react'

export const withHook = (
  hook,         // first parameter is hook
  Component     // second parameter is component
) => {
  return (props) => {
    return <Component {...hook(props)} />     // return the component view with the hook returns as props
  }
}