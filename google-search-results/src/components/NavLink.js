import React from 'react'

class NavLink extends React.Component {
    state = {
        classes: "search-type"
    }

    activeLink = () => {
        this.setState({
            classes: "search-type active"
        })
    }

    render(){
        const {icon,text} = {...this.props}
        return (
            <li>
                <a className={this.state.classes} href="#" onClick={this.activeLink}>
                    <i className={icon}></i>
                    <span>{text}</span>
                </a>
            </li>
        )
    }
}

export default NavLink