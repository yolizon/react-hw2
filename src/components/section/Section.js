import React from 'react'
import styles from './Section.module.css'
import PropTypes from 'prop-types'

const Section=({title, children})=>(
    <div>
        <section className={styles.title}>
            <h2>{title}</h2>
        {children}
        </section>
    </div>
)
Section.propTypes={
    title:PropTypes.string.isRequired
}
export default Section