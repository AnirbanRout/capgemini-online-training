
import "@fortawesome/fontawesome-free/css/all.min.css";

const Body = () => {

    return (
        <div className="container">

            <div className="welcome">

                <div className="text">
                    <h2>Welcome!</h2>
                    <p>This is the top content are. Here you can put important information, cards, stats or anything you like.</p>
                </div>
                <div className="image">

                    <i className="fas fa-desktop"></i>

                </div>

            </div>

            <div className="info">

                <div className="text">
                    <h2>More Information</h2>
                    <p>This is the bottom content area. You can place additional details, tables, lists or other content here.</p>
                    <ul>
                        <li>Item One</li>
                        <li>Item Two</li>
                        <li>Item Three</li>
                    </ul>
                </div>

                <div className="image">
                    <i className="fas fa-chart-bar"></i>
                </div>

            </div>

        </div>
    )

}

export default Body;