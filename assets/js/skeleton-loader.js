(function () {
    'use strict';

    const SkeletonLoader = {
        config: {
            minLoadingTime: 0,
            fadeOutDuration: 80,
            dataCheckInterval: 10,
            maxWaitTime: 1500,
        },

        init() {
            if (typeof AOS !== 'undefined') {
                AOS.init({ disable: true, once: true });
            }

            document.body.classList.add('loading');
            this.setupSkeletons();
            this.observeContentLoad();
        },

        setupSkeletons() {
            this.createHeroSkeleton();
            this.createPersonalInfoSkeleton();
            this.createSkillsSkeleton();
            this.createAchievementsSkeleton();
            this.createProjectsSkeleton();
            this.createServicesSkeleton();
            this.createContactSkeleton();
        },

        createHeroSkeleton() {
            const heroSubtitle = document.querySelector('.hero-subtitle');
            if (heroSubtitle) {
                heroSubtitle.insertAdjacentHTML('beforebegin', `
                    <div class="skeleton-hero-subtitle skeleton-placeholder">
                        <div class="skeleton skeleton-subtitle-line" style="animation-delay: 0s"></div>
                        <div class="skeleton skeleton-subtitle-line" style="animation-delay: 0.08s"></div>
                        <div class="skeleton skeleton-subtitle-line skeleton-subtitle-line-short" style="animation-delay: 0.16s"></div>
                    </div>
                `);
            }

            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                heroImage.insertAdjacentHTML('beforebegin', `
                    <div class="skeleton-hero-image skeleton-placeholder">
                        <div class="skeleton-image-container">
                            <div class="skeleton-profile-wrapper">
                                <div class="skeleton skeleton-profile-img"></div>
                            </div>
                        </div>
                    </div>
                `);
            }
        },

        createPersonalInfoSkeleton() {
            const infoGrid = document.querySelector('.personal-info-grid');
            if (!infoGrid) return;

            const skeletons = Array(4).fill(0).map((_, i) => `
                <div class="skeleton-info-item" style="animation-delay: ${i * 0.08}s">
                    <div class="skeleton skeleton-info-icon"></div>
                    <div class="skeleton-info-content">
                        <div class="skeleton skeleton-info-title"></div>
                        <div class="skeleton skeleton-info-value"></div>
                    </div>
                </div>
            `).join('');

            infoGrid.insertAdjacentHTML('beforebegin', `
                <div class="skeleton-info-grid skeleton-placeholder">
                    ${skeletons}
                </div>
            `);
        },

        createSkillsSkeleton() {
            ['languages', 'tools', 'others'].forEach(tab => {
                const skillsContent = document.querySelector(`.${tab} .skills-grid`);
                if (!skillsContent) return;

                const actualSkillsCount = window.PORTFOLIO_CONFIG?.skills?.[tab]?.length || 8;
                const skeletons = Array(actualSkillsCount).fill(0).map((_, i) => `
                    <div class="skeleton-skill-wrapper" style="animation-delay: ${i * 0.04}s">
                        <div class="skeleton-skill">
                            <div class="skeleton skeleton-skill-image"></div>
                        </div>
                        <div class="skeleton skeleton-skill-name"></div>
                    </div>
                `).join('');

                skillsContent.insertAdjacentHTML('beforebegin', `
                    <div class="skeleton-skills-grid skeleton-placeholder">
                        ${skeletons}
                    </div>
                `);
            });
        },

        createAchievementsSkeleton() {
            ['development', 'activities'].forEach(tab => {
                const container = document.querySelector(`.${tab} .timeline-container`);
                if (!container) return;

                const itemCount = window.PORTFOLIO_CONFIG?.achievements?.[tab]?.length || 3;
                const skeletons = Array(itemCount).fill(0).map((_, i) => `
                    <div class="skeleton-timeline-item" style="animation-delay: ${i * 0.08}s">
                        <div class="skeleton skeleton-timeline-node"></div>
                        <div class="skeleton-timeline-content">
                            <div class="skeleton-timeline-header">
                                <div class="skeleton-timeline-header-left">
                                    <div class="skeleton skeleton-timeline-date"></div>
                                    <div class="skeleton skeleton-timeline-title"></div>
                                    <div class="skeleton skeleton-timeline-badge"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');

                container.insertAdjacentHTML('beforebegin', `
                    <div class="skeleton-timeline-container skeleton-placeholder">
                        ${skeletons}
                    </div>
                `);
            });
        },

        createProjectsSkeleton() {
            const projectGrid = document.getElementById('project-grid');
            if (!projectGrid) return;

            const projectCount = window.PORTFOLIO_CONFIG?.projects?.length || 2;
            const skeletons = Array(projectCount).fill(0).map((_, i) => `
                <div class="skeleton-project-item" style="animation-delay: ${i * 0.06}s">
                    <div class="skeleton skeleton-project-media"></div>
                    <div class="skeleton-project-content">
                        <div class="skeleton skeleton-project-category"></div>
                        <div class="skeleton skeleton-project-title"></div>
                        <div class="skeleton skeleton-project-description"></div>
                        <div class="skeleton skeleton-project-description" style="width: 95%;"></div>
                        <div class="skeleton skeleton-project-description" style="width: 85%;"></div>
                        <div class="skeleton-project-tags">
                            <div class="skeleton skeleton-project-tag"></div>
                            <div class="skeleton skeleton-project-tag"></div>
                            <div class="skeleton skeleton-project-tag"></div>
                        </div>
                    </div>
                </div>
            `).join('');

            projectGrid.insertAdjacentHTML('beforebegin', `
                <div class="skeleton-project-grid skeleton-placeholder">
                    ${skeletons}
                </div>
            `);
        },

        createServicesSkeleton() {
            const servicesContainer = document.getElementById('services-container');
            if (!servicesContainer) return;

            const serviceCount = window.PORTFOLIO_CONFIG?.services?.length || 6;
            const skeletons = Array(serviceCount).fill(0).map((_, i) => `
                <div class="service-item padd-15" style="animation-delay: ${i * 0.08}s">
                    <div class="skeleton-service-item">
                        <div class="skeleton skeleton-service-icon"></div>
                        <div class="skeleton skeleton-service-title"></div>
                        <div class="skeleton skeleton-service-description"></div>
                        <div class="skeleton skeleton-service-description" style="width: 95%;"></div>
                        <div class="skeleton skeleton-service-description" style="width: 90%;"></div>
                    </div>
                </div>
            `).join('');

            servicesContainer.insertAdjacentHTML('beforebegin', `
                <div class="skeleton-services-wrapper skeleton-placeholder">
                    ${skeletons}
                </div>
            `);
        },

        createContactSkeleton() {
            const contactGrid = document.querySelector('.contact-grid');
            if (!contactGrid) return;

            const skeletons = Array(4).fill(0).map((_, i) => `
                <div class="skeleton-contact-item" style="animation-delay: ${i * 0.06}s">
                    <div class="skeleton skeleton-contact-icon"></div>
                    <div class="skeleton-contact-details">
                        <div class="skeleton skeleton-contact-label"></div>
                        <div class="skeleton skeleton-contact-value"></div>
                    </div>
                </div>
            `).join('');

            contactGrid.insertAdjacentHTML('beforebegin', `
                <div class="skeleton-contact-grid skeleton-placeholder">
                    ${skeletons}
                </div>
            `);
        },

        observeContentLoad() {
            const startTime = Date.now();
            const checkContent = () => {
                const elapsed = Date.now() - startTime;
                const isDataLoaded = this.isContentPopulated();

                if (isDataLoaded && elapsed >= this.config.minLoadingTime) {
                    this.showContent();
                } else if (elapsed < this.config.maxWaitTime) {
                    setTimeout(checkContent, this.config.dataCheckInterval);
                } else {
                    this.showContent();
                }
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', checkContent);
            } else {
                checkContent();
            }
        },

        isContentPopulated() {
            if (typeof window.PORTFOLIO_CONFIG === 'undefined') {
                return false;
            }

            return [
                document.querySelector('.hero-subtitle')?.textContent.trim(),
                document.querySelector('.profile-img')?.src,
                document.querySelector('.personal-info-grid .info-item'),
                document.querySelector('.skills-grid .skill'),
                document.querySelector('.timeline-container .timeline-item'),
                document.querySelector('.project-grid .project-item'),
                document.querySelector('#services-container .service-item-inner'),
                document.querySelector('.contact-grid .contact-link')
            ].every(el => el !== null);
        },

        showContent() {
            const transitions = [
                { skeleton: '.skeleton-hero-subtitle', content: '.hero-subtitle' },
                { skeleton: '.skeleton-hero-image', content: '.hero-image' },
                { skeleton: '.skeleton-info-grid', content: '.personal-info-grid' },
                { skeleton: '.skeleton-skills-grid', content: '.skills-grid' },
                { skeleton: '.skeleton-timeline-container', content: '.timeline-container' },
                { skeleton: '.skeleton-project-grid', content: '#project-grid' },
                { skeleton: '.skeleton-services-wrapper', content: '#services-container' },
                { skeleton: '.skeleton-contact-grid', content: '.contact-grid' }
            ];

            // Prepare content elements for fade in
            transitions.forEach(({ content }) => {
                document.querySelectorAll(content).forEach(el => {
                    el.style.visibility = 'visible';
                    el.style.pointerEvents = 'auto';
                    el.style.opacity = '0';
                    el.style.transition = 'none';
                });
            });

            // Force reflow to prepare animations
            void document.body.offsetWidth;

            requestAnimationFrame(() => {
                transitions.forEach(({ skeleton, content }) => {
                    // Fade out skeletons
                    document.querySelectorAll(skeleton).forEach(el => {
                        el.style.transition = `opacity ${this.config.fadeOutDuration}ms ease`;
                        el.style.opacity = '0';
                    });

                    // Fade in content
                    document.querySelectorAll(content).forEach(el => {
                        el.style.transition = `opacity ${this.config.fadeOutDuration}ms ease`;
                        el.style.opacity = '1';
                    });
                });

                setTimeout(() => {
                    // Remove skeletons
                    document.querySelectorAll('.skeleton-placeholder').forEach(el => el.remove());

                    // Cleanup and reinitialize
                    document.body.classList.remove('loading');
                    document.body.classList.add('loaded');

                    // Reset position styles
                    transitions.forEach(({ content }) => {
                        document.querySelectorAll(content).forEach(el => {
                            el.style.position = '';
                        });
                    });

                    // Reinitialize AOS
                    if (typeof AOS !== 'undefined') {
                        AOS.init({
                            duration: 800,
                            easing: 'ease-out-cubic',
                            once: true,
                            offset: 50,
                            delay: 50,
                            anchorPlacement: 'top-bottom',
                            disable: false
                        });
                        AOS.refresh();
                    }
                }, this.config.fadeOutDuration);
            });
        }
    };

    SkeletonLoader.init();
    window.SkeletonLoader = SkeletonLoader;
})();