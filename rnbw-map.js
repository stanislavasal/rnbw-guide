const rnbwMapTemplate = `
                <div
                    class="direction-column box hidden-on-mobile border radius-s padding-m border gap-m"
                    style="min-height: 600px">
                    <div
                        class="direction-row panel justify-stretch gap-xl background-primary radius-s border">
                        <div>
                            <div class="border-bottom padding-m">
                                <a>
                                    <span class="text-l">1.2 Navigate</span>
                                    <p class="text-s">Navigate anywhere.</p>
                                </a>
                            </div>
                            <div class="border-bottom padding-m">
                                <a href="#workspaces">
                                    <span class="text-l">1.3 Workspaces</span>
                                    <p class="text-s">
                                        View and toggle workspaces.
                                    </p>
                                </a>
                                <a href="#projects">
                                    <span class="text-l">1.3 Projects</span>
                                    <p class="text-s">
                                        View and toggle projects.
                                    </p>
                                </a>
                                <a href="#files">
                                    <span class="text-l">1.3 Files</span>
                                    <p class="text-s">
                                        View, edit, and organize your files.
                                    </p>
                                </a>
                            </div>

                            <div class="border-bottom padding-m box">
                                <a href="#elements">
                                    <span class="text-l"
                                        >1.6 Elements / Tree</span
                                    >
                                    <p class="text-s">
                                        View and control objects in a
                                        hierarchical manner
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div
                                class="padding-m gap-s border-bottom opacity-l">
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
                    <div class="box direction-row gap-m">
                        <a href="#elements">
                            <span class="text-l">1.6 Elements / Stage</span>
                            <p class="text-s">
                                Visualize and manipulate objects and their
                                composition.
                            </p>
                        </a>
                        <div
                            class="padding-l radius-s background-primary border">
                            <a href="#jumpstart">
                                <span class="text-l">1.1 Jumpstart</span>
                                <p class="text-s">
                                    Start and open projects, control settings
                                    and get help.
                                </p>
                            </a>
                        </div>
                        <div
                            class="background-primary padding-l radius-s border">
                            <a href="#do-something">
                                <span class="text-l">1.7 Do something</span>
                                <p class="text-s">
                                    All of the features and functions offered by
                                    rnbw.
                                </p>
                            </a>
                        </div>
                        <div
                            class="background-primary padding-l radius-s border">
                            <a href="#add-something">
                                <span class="text-l">1.8 Add something</span>
                                <p class="text-s">
                                    Add different things in different contexts.
                                </p>
                            </a>
                        </div>
                        <div
                            class="direction-column border-left padding-l background-primary radius-s border">
                            <a href="#code">
                                <span class="text-l">1.5 Code</span>
                                <p class="text-s">
                                    Edit your code. The real thing.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>`;

class RnbwMap extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = rnbwMapTemplate;
    }
}

customElements.define("rnbw-map", RnbwMap);
