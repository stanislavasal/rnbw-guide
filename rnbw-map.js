const rnbwMapTemplate = `
                                <div class="row box hidden-on-mobile border radius-s border" style="min-height: 600px">
                    <div id="anim4" class="column panel justify-stretch gap-xl border-right">
                        <div>
                            <div class="border-bottom padding-m">
                                <a>
                                    <span class="text-l"><span class="padding-xs background-secondary radius-s border">1.2</span> Navigate</span>
                                    <p class="text-s">Navigate anywhere.</p>
                                </a>
                            </div>
                            <div class="border-bottom padding-m">
                                <a href="https://guide.rnbw.dev/quick-start#workspaces">
                                    <span class="text-l">
                                        <span class="padding-xs background-secondary radius-s border">1.3</span> Files
                                    </span>
                                    <p class="text-s">
                                        View and toggle files and subfolders.
                                    </p>
                                </a>
                            </div>

                            <div class="border-bottom padding-m box">
                                <a href="https://guide.rnbw.dev/quick-start#elements">
                                    <span class="text-l">
                                        <span class="padding-xs background-secondary radius-s border">1.4</span> Elements
                                    </span>
                                    <p class="text-s">
                                        View and control objects in a
                                        hierarchical manner
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div class="padding-m gap-s border-bottom opacity-l">
                                <a>
                                    <span class="text-l">Settings</span>
                                    <p class="text-s">
                                        Control the properties and values of
                                        nodes.
                                    </p>
                                </a>
                            </div>
                            <div class="padding-m gap-s opacity-l">
                                <a>
                                    <span class="text-l">Styles</span>
                                    <p class="text-s">
                                        Apply and create styles for your
                                        elements.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="box-s column gap-m padding-m">
                    <svg-icon class="opacity-xl" src="https://rnbw.company/images/shapes.svg"></svg-icon>
                        <a id="anim2" href="https://guide.rnbw.dev/quick-start#elements">
                            <span class="text-l"><span class="padding-xs background-secondary radius-s border">1.5</span> Stage</span>
                            <p class="text-s">
                                Visualize and manipulate objects and their
                                composition.
                            </p>
                        </a>
                        <div id="anim1" class="row border radius-s box-s align-stretch" style="align-self: center;">
                            <div class="box-l padding-m border-bottom">
                                <a href="https://guide.rnbw.dev/quick-start#jumpstart">
                                    <span class="text-l"><span class="padding-xs background-secondary radius-s border">1.1</span> Jumpstart</span>
                                    <p class="text-s">
                                        Start and open projects, control
                                        settings and get help.
                                    </p>
                                </a>
                            </div>
                             <div class="border-bottom box-l padding-m">
                                <a href="https://guide.rnbw.dev/quick-start#add-something">
                                    <span class="text-l">
                                        <span class="padding-xs background-secondary radius-s border">1.6</span> Add something
                                    </span>
                                    <p class="text-s">
                                        Add different things in different
                                        contexts.
                                    </p>
                                </a>
                            </div>
                            <div class="box-l padding-m border-bottom">
                                <a href="https://guide.rnbw.dev/quick-start#do-something">
                                    <span class="text-l"><span class="padding-xs background-secondary radius-s border">1.7</span> Do something</span>
                                    <p class="text-s">
                                        All of the actions
                                        offered by rnbw.
                                    </p>
                                </a>
                            </div>
                            <div class="box-l padding-m">
                                <a href="https://guide.rnbw.dev/quick-start#ask-something">
                                    <span class="text-l"><span class="padding-xs background-secondary radius-s border">1.8</span> Ask something</span>
                                    <p class="text-s">
                                        let AI do the work and unleash your creativity.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
          <div id="anim3" class="box border-left padding-m border-left">
                            <a href="https://guide.rnbw.dev/quick-start#code">
                                <span class="text-l"><span class="padding-xs background-secondary radius-s border">1.9</span> Code</span>
                                <p class="text-s">
                                    Edit your code. The real thing.
                                </p>
                            </a>
                        </div>
        </div>`;

class RnbwMap extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = rnbwMapTemplate;
    }
}

customElements.define("rnbw-map", RnbwMap);

document.addEventListener("DOMContentLoaded", () => {
    const rnbwMapElement = document.querySelector("rnbw-map");
    const fadeInSections = rnbwMapElement.querySelectorAll("div");

    // Add CSS styles
    const style = document.createElement("style");
    style.innerHTML = `
    rnbw-map div {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s, transform 0.5s;
    }

    rnbw-map div.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
    document.head.appendChild(style);

    const fadeInOnScroll = (entries, observer) => {
        let delay = 0;

        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            setTimeout(() => {
                entry.target.classList.add("is-visible");
            }, delay);

            delay += 250;
            observer.unobserve(entry.target);
        });
    };

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver(fadeInOnScroll, options);
    fadeInSections.forEach((section) => {
        observer.observe(section);
    });
});
