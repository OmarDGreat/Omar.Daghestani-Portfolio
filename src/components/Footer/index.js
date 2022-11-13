import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            Broomfield, CO
                            <br />
                            12527 Big Dry Creek Drive
                        </p>
                    </div>
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/omar.daghestani.775" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/omar-daghestani" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/OmarDGreat" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub} /></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="N/A" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer