/**
 * Checkbox component
 *
 * @author name <Niilo@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import React, { Fragment } from 'react'

import Check from 'assets/icons/check-icon.svg'

const Checkbox = ({ checked, children, onChange = () => {} }) => (
    <div onClick={() => onChange(!checked)} className="checkbox-container">
        <div className={`checkbox checkbox-${checked}`}>
            {checked && <img src={Check} />}
        </div>
        <span>{children}</span>
    </div>
)

export default Checkbox
