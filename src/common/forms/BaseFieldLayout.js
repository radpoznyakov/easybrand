import React from 'react'

import Label from './Label'


export default function BaseFieldLayout(props) {
    const {
            label,
        } = props

    const { inputComponent: InputComponent, ...restProps } = props

    return (
        <div>
            {label && (
                <Label>
                    {label}
                </Label>
            )}
            <InputComponent
                {...restProps}
                {...props.input}
            />
        </div>
    )
}
