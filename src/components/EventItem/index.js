import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  onChangeDropdown = event => {
    const dropdown1El = document.getElementById(event.target.id).selectedIndex
    const optionsEl = document.getElementById(event.target.id).options
    this.disableOption(optionsEl[dropdown1El].index, event.target.id)
  }

  disableOption = (index, selectedDropdownId) => {
    const dropdown1El = document.getElementById('dropdown1').options
    const dropdown2El = document.getElementById('dropdown2').options
    const dropdown3El = document.getElementById('dropdown3').options

    if (selectedDropdownId === 'dropdown1') {
      dropdown2El[index].disabled = true
      dropdown3El[index].disabled = true
    } else if (selectedDropdownId === 'dropdown2') {
      dropdown1El[index].disabled = true
      dropdown3El[index].disabled = true
    } else if (selectedDropdownId === 'dropdown3') {
      dropdown2El[index].disabled = true
      dropdown1El[index].disabled = true
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="drop-down-container">
          <select type="select" id="dropdown1" onChange={this.onChangeDropdown}>
            <option value="item1">Item1</option>
            <option value="item2">Item2</option>
            <option value="item3">Item3</option>
          </select>{' '}
          <br />
          <select type="select" id="dropdown2" onChange={this.onChangeDropdown}>
            <option value="item1">Item1</option>
            <option value="item2">Item2</option>
            <option value="item3">Item3</option>
          </select>{' '}
          <br />
          <select type="select" id="dropdown3" onChange={this.onChangeDropdown}>
            <option value="item1">Item1</option>
            <option value="item2">Item2</option>
            <option value="item3">Item3</option>
          </select>
        </div>
      </div>
    )
  }
}

export default EventItem
