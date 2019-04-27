/**
 * Checkbox component
 *
 * @author name <Niilo@vertics.co>
 *
 * @copyright Vertics Co 2019
 */

import React, { Fragment } from 'react'

const Checkbox = ({ checked, children, onChange = () => {} }) => (
    <div onClick={() => onChange(!checked)} className="checkbox-container">
        <div className={`checkbox checkbox-${checked}`}>
            {checked && <i className="material-icons">check</i>}
        </div>
    </div>
)

export default Checkbox
