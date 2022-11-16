import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Image1 from '../../assets/img/portfolio/1.png' 
import Image2 from '../../assets/img/portfolio/2.png' 
import Image3 from '../../assets/img/portfolio/3.png' 
import Image4 from '../../assets/img/portfolio/4.png' 
import Image5 from '../../assets/img/portfolio/5.png' 
import Image6 from '../../assets/img/portfolio/6.png' 


function Portfolio() {

  return (
    <section class="page-section portfolio" id="portfolio">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4 mb-5">
                        <a href="https://omardgreat.github.io/photo-port/" target="_blank" rel="noopener noreferrer">
                            <img class="img-fluid" src={Image1} alt="..." />
                        </a>
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-5">
                        <a href="https://peaceful-escarpment-96466.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img class="img-fluid" src={Image2} alt="..." />
                        </a>
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-5">
                            <a href="https://omardgreat.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                                <img class="img-fluid" src={Image3} alt="..." />
                            </a>
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div> 
                    </div>

                    <div class="col-md-6 col-lg-4 mb-5">
                        <a href="https://omardgreat.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
                            <img class="img-fluid" src={Image4} alt="..." />
                        </a>
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-5">
                        <a href="https://text-editor-pwa-sea.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img class="img-fluid" src={Image5} alt="..." />
                        </a>
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-5">
                        <a href="https://omardgreat.github.io/Note-Taker/" target="_blank" rel="noopener noreferrer">
                            <img class="img-fluid" src={Image6} alt="..." />
                        </a>
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Portfolio;



