import Google from '../icons_assets/google.png'
import Dropbox from '../icons_assets/dropbox.png'
import Instagram from '../icons_assets/insta.png'
import LinkedIn from '../icons_assets/linkedin.png'

function Partners() {
    return (
        <article class="partners">
            <header>
                <h1>They trust us</h1>
            </header>
            <img src={Google} alt=""  />
            <img src={Dropbox} alt=""  />
            <img src={Instagram} alt=""  />
            <img src={LinkedIn} alt=""  />
        </article>
    );
};

export default Partners;