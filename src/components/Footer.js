import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://github.com/Gabinrn/" target="_blank" rel="noopener" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabinneron/" target="_blank" rel="noopener" className="icon fa-linkedin">
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrqJPsrMQGdqZSRxJZWMcfNRncTGJznfrmkmNmLBgNZXtXXwntXZdxlnpWFSCHqHJxMJH" target="_blank" rel="noopener" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; 2020 Gabinrn, Inc.</li>
      </ul>
    </div>
  </div>
)

export default Footer
