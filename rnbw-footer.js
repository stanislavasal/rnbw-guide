const footerTemplate = `
<footer class="padding-xl box-l">
    <div class="gap-s direction-column align-start box-l">
        <div class="gap-m direction-row align-start box">
            <svg-icon size="80">ovrvw</svg-icon>
            <div class="space"></div>
            <div class="text-s">© <span id="year"></span> Rainbow Design, Ltd.</div>
            <div class="space"></div>
        </div>
        <div class="direction-row gap-s box">
            <a href="https://rnbw.dev/features">features</a><a
                href="https://rnbw.dev/updates"
                target="_blank">updates</a><a href="https://rnbw.dev/guides">guides</a><a href="https://renecss.org/">rene.css ↗</a><a href="http://svg-icon.xyz/">svg-icon.js ↗</a><a href="https://rfrncs.design/">rfrncs.design ↗</a>
        </div>
        <div class="direction-row gap-s box">
            <a href="https://rnbw.dev/pricing">pricing</a><a href="https://rnbw.dev/about">about</a>
                <a href="https://discord.com/invite/HycXz8TJkd" target="_blank">discord
                ↗</a><a href="https://twitter.com/rnbwdev" target="_blank">twitter ↗</a><a
                href="mailto:hello@rnbw.dev">get in touch</a>
        </div>
        <div class="direction-row gap-s box">
            <a href="https://www.notion.so/rnbw/Terms-Conditions-0f1a79a92cd84cbdb84c99ed48445db2"
                target="_blank">terms</a><a
                href="https://www.notion.so/rnbw/Privacy-Policy-d490b0e9792e460289985feddf601097"
                target="_blank">privacy</a><a href="https://www.notion.so/rnbw/GDPR-e0ff3e4d10f649ffbf0c81b99629ec84"
                target="_blank">gdpr</a>
        </div>
    </div>
</footer>
`;

class RnbwFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = footerTemplate;
    }
}

customElements.define('rnbw-footer', RnbwFooter);

const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML += currentYear;