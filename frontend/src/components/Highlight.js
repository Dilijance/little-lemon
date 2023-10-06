import Icon from "../icons_assets/Dish icon.svg"

function Highlight() {
    return (
        <article class="highlight">
            <header>
                <h1>Our services</h1>
            </header>
            <div class="container">
                <div class="icon">
                    <img src={Icon} alt=""  />
                </div>
                <header>
                    <h1>Service 1</h1>
                </header>
            </div>
            <div class="container">
                <div class="icon">
                    <img src={Icon} alt=""  />
                </div>
                <header>
                    <h1>Service 2</h1>
                </header>
            </div>
            <div class="container">
                <div class="icon">
                    <img src={Icon} alt=""  />
                </div>
                <header>
                    <h1>Service 3</h1>
                </header>
            </div>
            <div class="container">
                <div class="icon">
                    <img src={Icon} alt=""  />
                </div>
                <header>
                    <h1>Service 4</h1>
                </header>
            </div>
        </article>
    );
};

export default Highlight;