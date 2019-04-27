/**
 * Reusable form component
 *
 * @author name <name@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class Form extends Component {
    renderTextField = ({
        input,
        meta: { touched, error },
        placeholder,
        type = 'text'
    }) => (
        <div className="field">
            <input type={type} placeholder={placeholder} {...input} />
            {error && touched && <span className="error">{error}</span>}
        </div>
    )

    render() {
        const { className, handleSubmit, children, formData } = this.props
        let formClassName = className ? className : ''
        let fields = []
        for (const field in formData) {
            if (formData.hasOwnProperty(field)) {
                const info = formData[field]

                fields.push(
                    <Field
                        key={field}
                        name={field}
                        component={this.renderTextField}
                        {...info}
                    />
                )
            }
        }
        return (
            <div className={`form ${formClassName}`}>
                <form onSubmit={handleSubmit}>
                    {fields}
                    {children}
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'form'
})(Form)
