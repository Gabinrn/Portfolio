import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Gabin NERON'
  const siteDescription = 'Welcome to the website of Gabin NERON, here you will find all of my project.'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              About me 
               <p><strong>Hello, i'm Gabin NERON</strong></p>
            </h2>
          </header>
          <h3>
          As a student at Epitech Lyon, I'm passionate about technology !
          Currently working on several projects,
          I regularly update my GitHub profile : <a href="https://github.com/Gabinrn/" className="icon fa-github">  Here</a>
          </h3>
          <ul className="actions">
            <li>
              <a href="https://gofile.io/d/8ad1c1" className="button"><i class="icon fa-download"> </i> 
                Download my resume
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Portfolio</h2>

          <Gallery />

        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <div className="row">
            <div className="8u 12u$(small)">
              <p>
                 In order to get in touch you can contact me on <a href="https://linkedin.com/in/gabinneron/">Linkedin</a>, <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrqJPsrMQGdqZSRxJZWMcfNRncTGJznfrmkmNmLBgNZXtXXwntXZdxlnpWFSCHqHJxMJH">Gmail</a>.
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

export default HomeIndex
