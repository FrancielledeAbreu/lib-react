import * as React from 'react'

interface Props {
  value?: number
  label?: string
}

const Typography = ({ value, label }: Props) => {
    const header = () => {
        switch (value) {
            case 1:
                return "h1"
            case 2:
                return "h2"
            case 3:
                return "h3"
            case 4:
                return "h4"
            case 5:
                return "h5"
            case 6:
                return "h6"
            default:
                return "h1"
        }
    }

  return <div>{label}</div>
}

export default Typography