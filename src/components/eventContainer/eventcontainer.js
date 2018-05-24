import React, {Component} from 'react'
import Carousel from '../../shared/carousel'
import EventCard from '../eventCard'
import config from '../../config/index'
import http from '../../helper/http'

class EventContainer extends Component {
  constructor (props) {
    super()
    this.state = {
      events: false,
      showErrorMsg: false
    }
    this.handleEventClick = this.handleEventClick.bind(this)
  }

  handleEventClick (event) {
    this.props.history.push(`/${event.id}`)
  }

  componentDidMount () {
    http.get(`${config.url}api/event`)
      .then(response => response.json())
      .then((events) => {
        this.setState({events})
      }).catch((reject) => {
        this.setState({showErrorMsg: true})
      })
  }

  render () {
    const {events, showErrorMsg} = this.state
    return (
      <div className='container section'>
        <h2 className='title is-4 is-marginless'>Events</h2>
        {showErrorMsg && <div>There is a problem getting list of events.Please try after some time</div>}
        {events && events.length > 0 &&
        <Carousel>
          {events.map((event, index) => {
            return (
              <div key={index} className='is-inline-block'>
                <EventCard event={event} onEventClick={this.handleEventClick} />
              </div>
            )
          })}
        </Carousel>}
      </div>
    )
  }
}

export default EventContainer
