import React, { Component } from 'react'
// import { connect } from 'react-redux'

export class NewsList extends Component {
  render() {
    let {title, description, newsimg, url} = this.props;

    return (
      <>
      <div className="card">
        <img src={!newsimg ? "https://i.ytimg.com/vi/78PSwr_p7To/maxresdefault.jpg" : newsimg} className="card-img-top" alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} rel="noreferrer" target='_blank' className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </>
    )
  }
}
