import resume from "../data/resume.json";
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import styles from './resume.module.css';

import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  return {
    props: {
      resume: resume
    }
  }
}

export default function Resume({ resume }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
       <div>
        <Link href="/">Back to home</Link>
      </div>
      <h2 className={styles.title}>{resume.name}</h2>
      <div className={styles.experiences}>
        <h3>Experiences</h3>
        {resume.experiences.map(e => 
        <div>
         <h4>{e.name}</h4>
         {e.description}
        </div>)
        }
      </div>   
      <div className={styles.educations}>
        <h3>Educations</h3>
        {resume.educations.map(e => 
        <div>
          <h4>{e.name}</h4>
          {e.description}
        </div>)}  
      </div>
      <div className={styles.skills}>
        <h3>Skills</h3>
        {resume.skills.map(e => 
        <div>
          <h4>{e.name}</h4>
          {e.description}
        </div>)}
       </div>
      </section>
  
    </Layout>
  )
}