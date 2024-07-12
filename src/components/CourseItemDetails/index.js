import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import Header from '../Header'

class CourseDetails extends Component {
  state = {
    isLoading: true,
    courseDetails: {},
    isSuccess: false,
  }

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({
        isLoading: false,
        courseDetails: updatedData,
        isSuccess: true,
      })
    } else {
      this.setState({isLoading: false, isSuccess: false})
    }
  }

  renderSuccessView = () => {
    const {courseDetails} = this.state
    const {name, imageUrl, description} = courseDetails
    return (
      <div className="course-details-card">
        <img src={imageUrl} alt={name} className="course-details-logo" />
        <div className="name-description-container">
          <h1 className="course-heading">{name}</h1>
          <p className="course-description">{description}</p>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#4fa94d" height={50} width={50} />
    </div>
  )

  onClick = () => {
    this.getCourseDetails()
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button
        type="button"
        onClick={this.getCourseDetails}
        className="retry-button"
      >
        Retry
      </button>
    </div>
  )

  render() {
    const {isSuccess, isLoading} = this.state
    return (
      <>
        <Header />
        <div className="course-details-card-container">
          {isLoading && this.renderLoadingView()}
          {isSuccess ? this.renderSuccessView() : this.renderFailureView()}
        </div>
      </>
    )
  }
}

export default CourseDetails
