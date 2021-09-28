import React from"react";
import Fade from 'react-reveal/Fade';
import Section from"assets/elements/Section";
import Header from 'assets/parts/Header';
import Clients from "assets/parts/Clients";
import Feature from "assets/parts/Feature";

import HeroImage from 'assets/images/hero-image.png';
import FeatureTile01 from 'assets/images/feature-tile-icon-01.svg';
import FeatureTile02 from 'assets/images/feature-tile-icon-02.svg';
import FeatureTile03 from 'assets/images/feature-tile-icon-03.svg';
export default function Homepage() {
    const feature = [
        {
            imgSrc: FeatureTile01,
            imgAlt: "Feature Tile Icon 01",
            title: "Join The System",
            desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            imgSrc: FeatureTile02,
            imgAlt: "Feature Tile Icon 02",
            title: "Join The System02",
            desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            imgSrc: FeatureTile03,
            imgAlt: "Feature Tile Icon 03",
            title: "Join The System03",
            desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        }
    ]
    return (
        <div classNameName="body-wrap">
            <Header></Header>
            <main classNameName="site-content">
                <Section classNameName="hero illustration-section-01" isCenteredContent>
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
                </Section>
                <Clients></Clients>
                <Section className="features-style">
                    <div className="container">
                        <div className="features-tiles-inner section-inner">
                            <div className="tiles-wrap">
                                {
                                    feature.map(( feature, index) => <Feature delayInMS={2500} data={feature}></Feature>)
                                }  
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
        </div>
    );
}
