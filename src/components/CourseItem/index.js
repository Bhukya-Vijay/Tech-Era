import {Link} from 'react-router-dom'
import './index.css'

const CourseIem = props => {
  const {courseDetails} = props
  const {id, logoUrl, name} = courseDetails

  return (
    <Link to={`courses/${id}`}>
      <li className="list-item">
        <div>
          <img src={logoUrl} alt={name} className="course-logo" />
        </div>
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}

export default CourseIem
