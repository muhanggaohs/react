import React from"react";
import Fade from 'react-reveal/Fade';
import Button from"assets/elements/Section";
import Header from 'assets/parts/Header';

import HeroImage from 'assets/images/hero-image.png';
export default function Homepage() {
    return (
        <div classNameName="body-wrap">
            <Header></Header>
            <main classNameName="site-content">
                <section classNameName="hero illustration-section-01" isCenteredContent>
                    <div className="container-sm">
						<div className="hero-inner section-inner">
							<div className="hero-content">
								<Fade bottom delay={500}>
                                    <h1
                                        className="mt-0 mb-16"
                                        data-reveal-delay="200"
                                    >
                                        Landing template for startups
                                    </h1>
                                </Fade>
								<div className="container-xs">
									<Fade bottom delay={1000}>
                                        <p
                                            className="mt-0 mb-32"
                                            data-reveal-delay="400"
                                        >
                                            Our landing page template works on all
                                            devices, so you only have to set it up
                                            once, and get beautiful results forever.
                                        </p>
                                    </Fade>
								</div>
							</div>
							<div
								className="hero-figure  illustration-element-01"
								data-reveal-value="20px"
								data-reveal-delay="800"
							>
								<Fade bottom delay={1500}>
                                    <img
                                        className="has-shadow"
                                        src={HeroImage}
                                        alt="Hero"
                                        width="896"
                                        height="504"
                                    />
                                </Fade>
							</div>
						</div>
					</div>
                </section>
            </main>
        </div>
    );
}
