import { useContext, useState, Fragment } from 'react'
import stylesButton from '../../../GlobalButtons/GlobalButtons.module.css'
import { Link } from 'react-router-dom'
import styles from './TableStudents.module.css'
import UseMedia from '../../../Hooks/UseMedia'
import { DataStudentsContext } from '../../../Hooks/DataStudentsContext'
import Email from '../../../../assets/icon-form-creat-new-student-mail.svg?react'
import Phone from '../../../../assets/icon-form-creat-new-student-phone.svg?react'
import Prev from '../../../../assets/icon-students-list-prev.svg?react'
import Next from '../../../../assets/icon-students-list-next.svg?react'
import Img from '../../../../assets/icon-list-students-img.svg?react'

const Students = () => {
  const { dataStudents } = useContext(DataStudentsContext)
  const [activePage, setActivePage] = useState(0)
  const [sortOrder, setSortOrder] = useState('newest')

  const mobile = UseMedia('(max-width: 800px)')

  const elementsForPage = 6
  const pages = Math.ceil(dataStudents.length / elementsForPage)

  const sortedData = [...dataStudents].sort((a, b) => {
    if (sortOrder === 'newest') return b.id - a.id
    else return a.id - b.id
  })

  const currentData = sortedData.slice(
    activePage * elementsForPage,
    activePage * elementsForPage + elementsForPage
  )

  const handlePrev = () => {
    if (activePage > 0) setActivePage(activePage - 1)
  }

  const handleNext = () => {
    if (activePage < pages - 1) setActivePage(activePage + 1)
  }

  const handleSortChange = (e) => {
    setSortOrder(e.target.value)
    setActivePage(0)
  }

  return (
    <section className={styles.students}>
      <h1>Students</h1>
      <div className={stylesButton.btnsPosition}>
        <select id="sort" name="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        <Link to="/create-new-student" className={stylesButton.btnPrimary}>
          + New Student
        </Link>
      </div>

      {!mobile && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
              <th>Date</th>
              <th>Parent Name</th>
              <th>City</th>
              <th>Contact</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map(({ id, name, date, parentName, city, contact }) => (
              <tr key={id}>
                <td className={styles.name}>
                  <div className={styles.namePosition}>
                    <Img className={styles.studentImg} />
                    {name}
                  </div>
                </td>
                <td className={styles.id}>{`#${id}`}</td>
                <td className={styles.colorDate}>{date}</td>
                <td>{parentName}</td>
                <td>{city}</td>
                <td>
                  <div className={styles.contact}>
                    <a href={`mailto:${contact.email}`}>
                      <Email className={styles.contactSvg} />
                    </a>
                    <a href={`tel:${contact.phone}`}>
                      <Phone className={styles.contactSvg} />
                    </a>
                  </div>
                </td>
                <td>
                  <span className={styles.grade}>VII A</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      

      {mobile && (
        <div className={styles.mobileStudents}>
          {currentData.map(({ id, name, date, parentName, city, contact }) => (
            <div key={id} className={styles.studentCard}>
              <div className={styles.namePosition}>
                <Img className={styles.studentImg} />
                <span className={styles.name}>{name}</span>
              </div>
              <div className={styles.id}>{`#${id}`}</div>
              <div className={styles.colorDate}>{date}</div>
              <div>{parentName}</div>
              <div>{city}</div>
              <div className={styles.contact}>
                <a href={`mailto:${contact.email}`}>
                  <Email className={styles.contactSvg} />
                </a>
                <a href={`tel:${contact.phone}`}>
                  <Phone className={styles.contactSvg} />
                </a>
              </div>
              <span className={styles.grade}>VII A</span>
            </div>
          ))}
        </div>
      )}

      

      <div className={styles.pagination}>
        <button onClick={handlePrev} disabled={activePage === 0}>
          <Prev className={styles.arrow} />
        </button>

        <div className={styles.pagination}>
          {Array.from({ length: pages }, (_, i) => (
            <div
              key={i+1}
              onClick={() => setActivePage(i)}
              className={`${styles.page} ${i === activePage ? styles.activePage : ''}`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <button onClick={handleNext} disabled={activePage === pages - 1}>
          <Next className={styles.arrow} />
        </button>
      </div>
    </section>
  )
}

export default Students
