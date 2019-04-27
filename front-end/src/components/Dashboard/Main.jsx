/**
 * Dashboard main component
 *
 */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import INFO from 'constants'

import { changeAccess } from 'actions/bot'

import { Button, Search, Checkbox, Loading } from '../Utils'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            loading: true,
            categorys: {}
        }
    }

    componentDidMount = () => {
        this.flatten(this.props.channels)
    }

    flatten = channels => {
        let categorys = {
            rogue: {
                channels: [],
                name: 'Rogue kanavat'
            }
        }

        for (let i = 0; i < channels.length; i++) {
            let channel = channels[i]
            channel.access = false

            if (channel.type === 4) {
                // Categorys
                if (categorys[channel.id]) {
                    categorys[channel.id].name = channel.name
                } else {
                    categorys[channel.id] = {
                        channels: [],
                        name: ''
                    }
                }
            } else if (channel.type === 0) {
                const permission_overwrites = channel.permission_overwrites
                let blockedChannel = false

                for (let j = 0; j < permission_overwrites.length; j++) {
                    const overwrite = permission_overwrites[j]
                    if (overwrite.type === 'role' && overwrite.id === INFO.removeRole) {
                        blockedChannel = true
                        break
                    } else if (overwrite.type === 'member' && overwrite.id === this.props.user.id) {
                        if ((overwrite.deny & (1 << 10)) == 0) {
                            channel.access = true
                        }
                    }
                }

                if (blockedChannel) {
                    continue
                } else {
                    if (channel.parent_id) {
                        if (categorys[channel.parent_id]) {
                            categorys[channel.parent_id].channels.push({ ...channel })
                        } else {
                            categorys[channel.parent_id] = {
                                channels: [{ ...channel }],
                                name: ''
                            }
                        }
                    } else {
                        categorys.rogue.channels.push({ ...channel })
                    }
                }
            }
        }

        this.setState({
            categorys,
            loading: false
        })
    }

    changeAccessLocal = (categoryId, id, checked) => {
        let categorys = this.state.categorys
        categorys[categoryId].channels = categorys[categoryId].channels.map(c =>
            c.id === id ? { ...c, access: checked } : c
        )

        this.setState({
            categorys
        })
    }

    handleChange = name => e => this.setState({ [name]: e.target.value })

    handleAccessChange = categoryId => id => async checked => {
        try {
            await this.props.dispatch(changeAccess(id, checked))
            this.changeAccessLocal(categoryId, id, checked)
        } catch (e) {
            console.error(e)
        }
    }

    renderChannelItem = (id, checked, name, onChange) => (
        <div className="channelItem" key={id}>
            <Checkbox checked={checked} onChange={onChange(id)} />
            <span>{name}</span>
        </div>
    )

    renderCategorys = () => {
        const categorys = []
        for (const id in this.state.categorys) {
            if (this.state.categorys.hasOwnProperty(id)) {
                const category = this.state.categorys[id]
                const channels = category.channels.filter(c => c.name.includes(this.state.search))
                if (channels.length > 0) {
                    categorys.push(
                        <div className="category" key={id}>
                            <span className="bigtext">
                                {category.name !== '' ? category.name : '[UNDEFINED]'}
                            </span>
                            {channels.map(c =>
                                this.renderChannelItem(
                                    c.id,
                                    c.access,
                                    c.name,
                                    this.handleAccessChange(id)
                                )
                            )}
                        </div>
                    )
                } else {
                    continue
                }
            }
        }
        return categorys
    }

    render = () => (
        <Fragment>
            <Helmet title="Zeus" />
            <div className="home-container">
                <div className="nav">
                    <Search value={this.state.search} onChange={this.handleChange('search')} />
                </div>

                <div className="home-innerContainer">
                    {this.state.loading ? (
                        <Loading />
                    ) : (
                        <div className="home-categorys">{this.renderCategorys()}</div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={() => this.props.dispatch({ type: 'LOGOUT' })}>
                            Kirjaudu ulos
                        </Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    channels: state.main.channels,
    user: state.main.user
})

export default connect(mapStateToProps)(Main)
