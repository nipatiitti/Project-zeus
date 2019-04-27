// form validation logics

export const required = value => (value ? undefined : 'This field is required')

// email validation
export const validateEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

// password length validation
export const validatePasswordLength = value =>
    value && value.length > 6
        ? undefined
        : 'Password must be at least 6 characters'

// Matching passwords
export const matchesValue = value => value2 =>
    value && value2 && value === value2 ? undefined : "Passwords don't match"
