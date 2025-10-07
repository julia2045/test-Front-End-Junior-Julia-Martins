import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CreateNewStudent.module.css'
import stylesButton from '../../../GlobalButtons/GlobalButtons.module.css'
import TextInput from '../../../Forms/TextInput'
import styleInput from '../../../Forms/Input.module.css'
import { DataStudentsContext } from '../../../Hooks/DataStudentsContext'

const CreateNewStudent = () => {
  const navigate = useNavigate()
  const { addStudent } = useContext(DataStudentsContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const f = e.target

    addStudent({
      id: Date.now(),
      name: `${f.FirstName.value} ${f.LastName.value}`,
      date: f.date.value,
      parentName: f.parentsName.value,
      city: f.place.value,
      contact: { email: f.Email.value, phone: f.phone.value },
    })

    alert('Data sent!')
    f.reset()
    navigate('/Students')
  }

  return (
    <section className={styles.NewStudent}>
      <h1>Add New Student</h1>

      <form onSubmit={handleSubmit} >
      
        <div className={styles.form}>
          <h2 className={styles.titleForm}>Student Details</h2>

          <div className={styles.InputsForm}>

            <div className={styles.spaceForms}>
              <TextInput
                type="text"
                id="FirstName"
                name="FirstName"
                label="First Name*"
                placeholder="Name"
                required
              />
              <TextInput
                type="text"
                id="LastName"
                name="LastName"
                label="Last Name*"
                placeholder="Last Name"
                required
              />
            </div>

            <p className={styleInput.wrapper}>
              Date & Place of Birth *
            </p>

            <div className={styles.spaceForms}>
              <div className={styles.inlineGroup}>
                <TextInput type="date" id="date" name="date" required />
                <TextInput
                  type="text"
                  id="place"
                  name="place"
                  placeholder="Place"
                  required
                />
              </div>

              <TextInput
                type="text"
                label="Parents Name*"
                id="parentsName"
                name="parentsName"
                placeholder="Name"
                required
              />
            </div>

            <div className={styles.spaceForms}>
              <TextInput
                type="email"
                label="Email*"
                id="Email"
                name="Email"
                placeholder="Email@email.com"
                required
              />
              <TextInput
                type="number"
                label="Phone*"
                id="phone"
                name="phone"
                placeholder="+123456789"
                required
              />
            </div>

            <div>
              <label htmlFor="address" className={styleInput.wrapper}>
                Address*
              </label>
              <textarea
                id="address"
                name="address"
                rows="5"
                cols="50"
                maxLength="2000"
              ></textarea>
            </div>
          </div>
        </div>

        
        <div className={styles.form}>
          <h2 className={styles.titleForm}>Parent Details</h2>

          <div className={styles.InputsForm}>
            <div className={styles.spaceForms}>
              <TextInput
                type="text"
                id="parentFirstName"
                name="parentFirstName"
                label="First Name*"
                placeholder="Name"
              />
              <TextInput
                type="text"
                id="parentLastName"
                name="parentLastName"
                label="Last Name*"
                placeholder="Last Name"
              />
            </div>

            <div className={styles.spaceForms}>
              <TextInput
                type="email"
                label="Email*"
                id="parentEmail"
                name="parentEmail"
                placeholder="Email@email.com"
              />
              <TextInput
                type="number"
                label="Phone*"
                id="parentPhone"
                name="parentPhone"
                placeholder="+123456789"
              />
            </div>

            <div className={styles.spaceForms}>
              <div>
                <label htmlFor="parentAddress" className={styleInput.wrapper}>
                  Address*
                </label>
                <textarea
                  id="parentAddress"
                  name="parentAddress"
                  rows="5"
                  cols="50"
                  maxLength="2000"
                ></textarea>
              </div>

              <div>
                <p className={styleInput.wrapper}>Payments</p>
                <div className={styles.inlineGroup}>
                  <div className={styles.radioGroup}>
                    <input type="radio" id="paid" name="payment" value="cash" />
                    <label htmlFor="paid">Cash</label>
                  </div>
                  <div className={styles.radioGroup}>
                    <input type="radio" id="debit" name="payment" value="debit" />
                    <label htmlFor="debit">Debit</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className={stylesButton.btnsPosition}>
          <button type="button" className={stylesButton.btnOutline}>
            Save as Draft
          </button>
          <button type="submit" className={stylesButton.btnPrimary}>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreateNewStudent
