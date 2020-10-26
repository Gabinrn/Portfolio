import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SimpleSlider from '../components/Gallery/components/Jbpics'

const PageIndex = () => {
  const siteTitle = 'Gabin NERON'
  const siteDescription = 'Welcome to the website of Gabin NERON, here you will find all of my project.'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2 style={{ textAlign: 'center' }}>
               <strong>Project : Job-Discount</strong>
            </h2>
          </header>
          <div className="12u 12u$(xsmall) work-item">
          
          <SimpleSlider />
          </div>
          
          <div style={{display: 'flex'}}>
              <a style={{marginLeft: "auto", marginRight: "auto", textAlign: 'center' }} href="/" className="button"><i class="icon fa-return"> </i> 
                Return
              </a>
            
              <a style={{marginLeft: "auto", marginRight: "auto" , textAlign: 'center' }} href="https://github.com/Gabinrn/Epitech-Project-Web" target="_blank" className="button"><i class="icon fa-github" style={{marginRight: "4px"}} > </i>GitHub </a>
          </div>
        </section>

        <section id="two">
          <h2>The Project</h2>

         <h4>The goal of this project is to make a site to advertise job offers like Indeed. Thus, we have to work on the Front, but also on the Back.</h4>
          <p>Here, it aims to realise :</p>
          <ul>
            <li>A database to store job offers.</li>
            <li>A web page (front end) using Javascript technologies to display an online job board as well as an administration page for the admin user. </li>
            <li>An API (back end) :
              <ol>
                <li>
                To enable the user to apply for jobs.
                </li>
                <li>
                To manage the database (only for the admin user) - CRUD operations (Create, Read, Update, Delete).
                </li>
              </ol>
            </li>
          </ul>

          
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <div className="row">
            <div className="8u 12u$(small)">
              <p>
                 In order to get in touch you can contact me on <a href="https://linkedin.com/in/gabinneron/" target="_blank">Linkedin</a>, <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrqJPsrMQGdqZSRxJZWMcfNRncTGJznfrmkmNmLBgNZXtXXwntXZdxlnpWFSCHqHJxMJH" target="_blank">Gmail</a>.
                 <br />
                 I will try to answer your request as soon as possible.
              </p>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Lyon 8, 69008
                  <br />
                  France
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  06-04-53-94-72
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  gabin.neron@epitech.eu
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default PageIndex
