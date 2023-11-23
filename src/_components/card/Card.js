import React from "react"
import styles from './Card.module.css'
import mainImage from '../../_assets/png/bikes.png'
import heartLogo from '../../_assets/svg/heart icon.svg'
import Button from "../button/Button"
import locationIcon from '../../_assets/svg/location.svg'
import shareIcon from '../../_assets/svg/share icon.svg'
import eyeIcon from '../../_assets/svg/eye icon.svg'
 

const Card = () =>{
  return (
    <div className={styles.card}>
       <div className= {styles.btn}><Button/></div>
       <img className={styles.heartLogo} src={heartLogo} alt="heart-logo" />
       <img className={styles.mainImage} src={mainImage} alt="bikes-pic" />
        <div className={styles.textDiv}>
          <h3 className={styles.heading}> Golf Cart </h3>
          <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Consequat tincidunt
          </p>
          <div className={styles.amountDiv}>
            <div className={styles.locationDiv}>
             <img className={styles.locationLogo} src={locationIcon} alt="heart-logo" />
             <span className={styles.locationSpan}> Alibey island </span>
            </div>
              <div className={styles.dollerDiv}>
                <span> $50/day </span>
              </div>
          </div>

          <div className={styles.lowerDiv}>

          <img className={styles.shareIcon} src={shareIcon} alt="share-logo" />

          <img className={styles.eyeIcon} src={eyeIcon} alt="eye-logo" />
          <Button/>

          </div>

        </div>
    </div>
  )
}

export default Card