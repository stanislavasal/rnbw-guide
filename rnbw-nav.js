const navTemplate = `
<nav class="box-l padding-l direction-column box">
    <a href="https://rnbw.dev" class="box gap-l">
        <svg-icon size="80">rnbw</svg-icon>
        <p class="text-s">high-quality,</br> functional design</br>and development tools</p>
    </a>
    <div class="gap-xl box justify-end">
        <a href="https://rnbw.dev/features" class="align-center direction-row">
            <svg-icon size="80">prdct</svg-icon>
            <span>rnbw 0.1</span>
        </a>
        <a href="https://guide.rnbw.dev/" class="align-center direction-row">
        <svg-icon size="80">usrgd</svg-icon>
            <span>guide</span>
        </a>
        <a href="https://rnbw.dev/community" class="align-center direction-row">
            <svg-icon size="80">cmnty</svg-icon>
            <span>community</span>
        </a>
        <a href="https://rnbw.dev/start" class="align-center direction-row">
            <svg-icon size="80">gtstrt</svg-icon>
            <span>start</span>
        </a>
    </div>
</nav>
`;

class RnbwNav extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = navTemplate;
    }
}

customElements.define("rnbw-nav", RnbwNav);
