import Image from '../icons_assets/restauranfood.jpg'

function HeroSection() {
    return (
        <article class="heroSection">
            <aside>
                <header>
                    <h1>Little Lemon</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </header>
                <button>
                    <a href="https://youtube.com">Start now</a>
                </button>
            </aside>
            <aside>
                <img width="200px" src={Image} alt="Dish"/>
            </aside>
      </article>
    );
};

export default HeroSection;