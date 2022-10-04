export interface InputT extends React.ComponentProps<'input'> {
    label: string
    error?: boolean
    value?: string
    type?: string
    required?: boolean
}
