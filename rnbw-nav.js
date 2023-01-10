const navTemplate = `
<nav class="box-l padding-l direction-column box">
    <a href="https://rnbw.dev" class="box direction-cl">
        <svg-icon size="80">rnbw</svg-icon>
        <p class="text-s">high-quality, functional</br>design-development tools</p>
    </a>
    <div class="gap-xl box justify-end">
        <a href="https://rnbw.dev/features" class="align-center direction-row">
            <svg-icon size="80">prdct</svg-icon>
            <span>product</span>
        </a>
        <a href="https://rnbw.dev/guides" class="align-center direction-row">
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

customElements.define('rnbw-nav', RnbwNav);
