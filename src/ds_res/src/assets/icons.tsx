import React from "react"

export const GrowthArrow = () => (
  <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.89304 4.26803L3.85805 0.187208C3.67241 -0.0624027 3.32759 -0.0624027 3.14195 0.187208L0.106956 4.26803C-0.142722 4.60375 0.0726051 5.11025 0.465006 5.11025H2.57176V8.97058C2.57176 9.53911 2.98734 10 3.5 10C4.01266 10 4.42824 9.53911 4.42824 8.97058V5.11025H6.535C6.9274 5.11025 7.14272 4.60375 6.89304 4.26803Z"
      fill="#18C02A"
    />
  </svg>
)

export const DeclineArrow = () => (
  <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.89304 5.73197L3.85805 9.81279C3.67241 10.0624 3.32759 10.0624 3.14195 9.81279L0.106956 5.73197C-0.142722 5.39625 0.0726051 4.88975 0.465006 4.88975H2.57176V1.02942C2.57176 0.460888 2.98734 0 3.5 0C4.01266 0 4.42824 0.460888 4.42824 1.02942V4.88975H6.535C6.9274 4.88975 7.14272 5.39625 6.89304 5.73197Z"
      fill="#D81D1D"
    />
  </svg>
)

export const SelectArrow = ({styles = {}}) => (
  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles}>
    <path d="M1 1L5.5 5L10 1" stroke="#AFC5D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SortArrow = () => {
  return (
    <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 0.375L0 3.5H5L2.5 0.375Z" fill="#666F78"/>
      <path d="M2.5 8.625L0 5.5H5L2.5 8.625Z" fill="#666F78"/>
    </svg>
  )
}

export const DownArrow = () => {
  return (
    <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 3.625L0 0.5H5L2.5 3.625Z" fill="#666F78"/>
    </svg>
  )
}

export const UpArrow = () => {
  return (
    <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 0.375L0 3.5H5L2.5 0.375Z" fill="#666F78"/>
    </svg>
  )
}
