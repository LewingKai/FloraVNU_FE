"use client"

import React, { useRef } from "react"

interface Props {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className: string
  disabled?: boolean
}

const BubblyButton = ({ children, onClick, className, disabled }: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const animateButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    if (buttonRef.current) {
      buttonRef.current.classList.remove("animate")
      void buttonRef.current.offsetWidth
      buttonRef.current.classList.add("animate")
    }

    if (onClick) onClick(e)
  }

  return (
    <button
      ref={buttonRef}
      className={`${disabled ? "pointer-events-none" : ""} ${className} bubbly-button`}
      onClick={animateButton}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default BubblyButton
