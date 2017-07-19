import React from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../../actions/topic';

class AddTopic extends React.Component {
  constructor(p) {
    super(p);

    this.state = {
      title: '',
      content: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
            <h3>Add new Topic</h3>
            <form action="" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Topic name</label>
                <input className="form-control" value={this.state.title} name="title" type="text" placeholder="Topic name..." onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="">Topic content</label>
                <textarea className="form-control" value={this.state.content} name="content" rows="3" placeholder="Topic content..." onChange={this.handleChange}></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  handleChange(e) {

    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.addTopic) {
      this.props.addTopic({
        title: this.state.title,
        content: this.state.content
      });
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTopic: data => dispatch(addTopic(data))
  }
}

export default connect(null, mapDispatchToProps)(AddTopic);
