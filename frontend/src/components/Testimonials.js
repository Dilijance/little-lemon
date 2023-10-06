import Avatar from '../icons_assets/Avatar.svg'

function Testimonials() {
    return (
        <article>
            <header>
                <img src={Avatar} alt="" />
                <p>Name Last Name</p>
            </header>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            <button>
                <p>Back</p>
            </button>
            <button>
                <p>Forward</p>
            </button>
        </article>
    );
};

export default Testimonials;