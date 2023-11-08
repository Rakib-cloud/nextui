import React from 'react'

export default function GridLayout({children}:any) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-8 my-32'>{children}</div>
  )
}
