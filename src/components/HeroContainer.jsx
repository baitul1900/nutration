import { Link } from "react-router-dom";

const HeroContainer = () => {

    let data = [ {
        title: "কিশোর-কিশোরীদের জন্য পুষ্টি কার্যক্রম",
        description : "বিএমআই ক্যালকুলেটরের সাহায্যে আপনার বিএমআই চেক করুন"
    }]

    let imgData = [
        {
            img : "/hero-image.png"
        }
    ]

    return (



        <main>
            <div className="container hero-container">
                <div className="row justify-content-center g-0">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-5 fst-column align-self-center">
                        
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="container" key={index}>
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>

                                        <Link  to="/#bmi-calc-section" className="btn bmi-button">বিএমআই ক্যালকুলেটর </Link>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-7 sec-col">
                        {
                            imgData.map((item, index) => {
                                return (
                                    <div className="container p-0" key={index}>
                                        <img src={item['img']} className="img-fluid" alt="hero-image" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroContainer;


