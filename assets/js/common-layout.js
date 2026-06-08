const SITE_HEADER = String.raw`
    <!-- Preloader Start -->
    <div class="preloader">
        <div class="loading-container">
            <div class="loading"></div>
            <div id="loading-icon"><img src="assets/images/loader.svg" alt=""></div>
        </div>
    </div>
    <!-- Preloader End -->

    <!-- Topbar Section Start -->
    <div class="topbar">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3">
                    <div class="site-logo">
                        <a href="index.html">
                            <img src="assets/images/machnix-logo-color.png" alt="MACHNIX ENGINEERING (M) SDN BHD">
                            <span class="logo-legal logo-legal-dark">MACHNIX ENGINEERING (M) SDN. BHD.<br>202501025534 (1626947-P)</span>
                        </a>
                    </div>
                </div>

                <div class="col-lg-9 col-md-12">
                    <div class="topbar-contact-info">
                        <ul>
                            <li class="topbar-phone-item"><div class="icon-box"><img src="assets/images/icon-phone.svg" alt=""></div><p><a href="tel:+60104612145">+60 10 461 2145</a><a href="tel:+60102632145">+60 10 263 2145</a></p></li>
                            <li><a href="mailto:machnixengineering2025@gmail.com"><div class="icon-box"><img src="assets/images/icon-mail.svg" alt=""></div><p>machnixengineering2025@gmail.com</p></a></li>
                        </ul>
                        <div class="topbar-qoute-btn">
                            <a href="contact.html" class="btn-default"><span>Get Quote</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar Section End -->

    <!-- Header Start -->
    <header class="main-header">
        <div class="header-sticky">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/images/machnix-logo-color.png" alt="MACHNIX ENGINEERING (M) SDN BHD">
                        <span class="logo-legal logo-legal-light">MACHNIX ENGINEERING (M) SDN. BHD.<br>202501025534 (1626947-P)</span>
                    </a>

                    <div class="collapse navbar-collapse main-menu">
                        <div class="nav-menu-wrapper">
                            <ul class="navbar-nav mr-auto" id="menu">
                                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
                                <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                                <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-toggle"></div>
                </div>
            </nav>
            <div class="responsive-menu"></div>
        </div>
    </header>
    <!-- Header End -->`;

const SITE_FOOTER = String.raw`
    <!-- Footer Start -->
    <footer class="main-footer">
        <div class="container">
            <div class="footer-header">
                <div class="section-title dark-section">
                    <h2 class="text-anime-style-2" data-cursor="-opaque">Ready to start your <span>CNC machining requirement?</span></h2>
                    <p>Share your drawing, sample or requirement and our team will respond with practical manufacturing support.</p>
                </div>

                <div class="footer-contact-circle">
                    <a href="contact.html"><img src="assets/images/contact-now-circle.svg" alt=""></a>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="about-footer">
                        <div class="footer-logo">
                            <img src="assets/images/machnix-logo-color.png" alt="MACHNIX ENGINEERING (M) SDN BHD">
                            <span class="logo-legal logo-legal-light">MACHNIX ENGINEERING (M) SDN. BHD.<br>202501025534 (1626947-P)</span>
                        </div>

                        <div class="about-footer-content">
                            <p>Precision engineering, CNC machining, tooling solutions and industrial manufacturing support.</p>
                        </div>

                        <div class="footer-social-links">
                            <ul>
                                <li><a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="https://wa.me/60104612145" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 col-md-4 col-6">
                    <div class="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-4 col-6">
                    <div class="footer-links">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="turning-machining-precision-parts.html">Turning machining precision parts</a></li>
                            <li><a href="milling-machining-precision-parts.html">Milling machining precision parts</a></li>
                            <li><a href="die-and-mould-manufacturing.html">Die and mould manufacturing</a></li>
                            <li><a href="jig-and-fixture.html">Jig & fixture</a></li>
                            <li><a href="reverse-engineering-design.html">Reverse engineering design</a></li>
                            <li><a href="3d-printing.html">3D printing</a></li>
                            <li><a href="metal-surface-treatment.html">Metal surface treatment</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-4 col-12">
                    <div class="footer-links">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="tel:+60104612145">+60 10 461 2145</a><br><a href="tel:+60102632145">+60 10 263 2145</a></li>
                            <li><a href="mailto:machnixengineering2025@gmail.com">machnixengineering2025@gmail.com</a></li>
                            <li>No. 5, Lorong Perwira 3, Taman Perwira, 14100 Simpang Ampat, Pulau Pinang, Malaysia</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-copyright">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="footer-copyright-text">
                            <p>Copyright &copy; 2026 MACHNIX ENGINEERING (M) SDN BHD. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer End -->`;

const SITE_WHATSAPP_FLOAT = String.raw`
    <a class="machnix-whatsapp-float" href="https://wa.me/60104612145?text=Hi%20MACHNIX%20ENGINEERING%2C%20I%20would%20like%20to%20enquire%20about%20your%20CNC%20machining%20services." target="_blank" rel="noopener" aria-label="Chat with MACHNIX ENGINEERING on WhatsApp">
        <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
    </a>`;

function renderSiteHeader() {
    document.write(SITE_HEADER);
}

function renderSiteFooter() {
    document.write(SITE_FOOTER + SITE_WHATSAPP_FLOAT);
}

function addMachnixHeadingVideos() {
    var videoTargets = document.querySelectorAll('.hero, .page-header');

    videoTargets.forEach(function (target) {
        if (target.querySelector('.machnix-heading-video')) {
            return;
        }

        var videoWrap = document.createElement('div');
        videoWrap.className = 'machnix-heading-video';
        videoWrap.innerHTML = '<video autoplay muted loop playsinline preload="metadata"><source src="assets/videos/machnix-cnc-heading.mp4" type="video/mp4"></video>';
        target.insertBefore(videoWrap, target.firstChild);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addMachnixHeadingVideos);
} else {
    addMachnixHeadingVideos();
}
