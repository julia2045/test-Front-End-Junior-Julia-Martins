import React from 'react'
import styles from './NewStudent.module.css'
import Input from './Forms/Input'
import styleInput from './Forms/Input.module.css'

const NewStudent = () => {
  return (
    <section className={styles.NewStudent}>
      <h1>Add New Student</h1>
      <div className={styles.form} >
        <h2 className={styles.titleForm}>Students Details</h2>
        <form >
            <div className={styles.spaceForms}>
                <Input type={"text"} id={'FirstName'} name={'FirstName'} label={'First Name*'} placeholder={"  Name"}/>
                <Input type={"text"} id={'LastName'} name={'LastName'} label={'Last Name*'} placeholder={"  Last Name"}/>
            </div>
            <div className={styles.spaceForms}>
                <div className={styles.inlineGroup}>
                    <Input type={"date"} label={'Date & Place of Birth *'} id={"data"} name={"data"}/>
                    <Input type={'text'} id={'place'} name={'place'} placeholder={'Place'}/>
                </div>
                <Input className={styles.inlineGroup} type={'text'} label={'Parents Name*'} id={'parentsName'} name={'parentsName'} placeholder={'Name'}/>
            </div>
            <div className={styles.spaceForms}>
                <Input type={'email'} label={'Email*'} id={'Email'} name={'Email'} placeholder={'Email@email.com'}/>
                <Input type={'number'} label={'Phone'} id={'phone'} name={'phone'} placeholder={'+123456789'}/>
            </div>
            <div>
                <label for="address" className={styleInput.wrapper}>Addres*</label>
                <textarea id="address" name="address" rows="5" cols="50" maxlength="2000"></textarea>
            </div>
                
        </form>
      </div>
      <div className={styles.form} >
        <h2 className={styles.titleForm}>Parents Details</h2>
        <form >
            <div className={styles.spaceForms}>
                <Input type={"text"} id={'FirstName'} name={'FirstName'} label={'First Name*'} placeholder={"  Name"}/>
                <Input type={"text"} id={'LastName'} name={'LastName'} label={'Last Name*'} placeholder={"  Last Name"}/>
            </div>
            <div className={styles.spaceForms}>
                <Input type={'email'} label={'Email*'} id={'Email'} name={'Email'} placeholder={'Email@email.com'}/>
                <Input type={'number'} label={'Phone'} id={'phone'} name={'phone'} placeholder={'+123456789'}/>
            </div>
            <div className={styles.spaceForms}>
  
                <div>
                    <label for="address" className={styleInput.wrapper}>Addres*</label>
                    <textarea id="address" name="address" rows="5" cols="50" maxlength="2000"></textarea>
                </div>
                 <div>
                    <p className={styleInput.wrapper}>Payments*</p>
                    <div className={styles.spaceForms}>
                        <div className={styles.radioGroup}>
                            <input type="radio" id="paid" name="payment" value="paid" />
                            <label htmlFor="paid">Cash</label>
                        </div>
                        <div className={styles.radioGroup}>
                            <input type="radio" id="unpaid" name="payment" value="unpaid" />
                            <label htmlFor="unpaid">Debit</label>
                        </div>
   
                    </div>
                </div>

            </div>
        </form>
      </div>
       <div className={styles.buttonsForm}>
            <button className={styles.buttonSave}>Save as Draft</button>
            <button className={styles.submit}>Submit</button>
        </div>
    </section>
  )
}

export default NewStudent
