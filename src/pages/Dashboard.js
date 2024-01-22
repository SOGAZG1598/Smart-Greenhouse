import { RealtimeData } from '../components/RealtimeData';
import '../styles/Dashboard.css';
import { Actuators } from '../components/Actuadores';

function Dashboard(){
    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet"/>
            <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
            

            <div className="left-sidebar-flexbox">
                <main className="main-content">
                <div className="containerXML">
                                <h2 className="font-weight-700 font-24 ">LATEST NEWS</h2>
                                <img className='noticia' src="https://vegcropshotline.org/wp-content/uploads/2017/03/Fig1a_crop_IMG_9564-300x272.jpg" />
                                <p className='text'>Some of the red and green multi-leaf lettuce plants are wilted and closer inspection reveals death and 
                                soft decay at the crown and well as freeze damage. Getting even closer as in Figure 3 we see white fuzzy mold and find hard 
                                black sclerotia 1/8 to ¼ inch across and up to ½ inch long at the base of the plants and in the soil. These sclerotia confirm 
                                that the plants have succumbed to white mold or lettuce drop caused by the fungus Sclerotinia sclerotiorum. The lettuce was 
                                transplanted in September or October 2016 and the photos taken in mid to late January. 
                                We continue to see more plants succumbing to the disease.
                                <a href="https://vegcropshotline.org/article/problems-in-overwintered-salad-greens-white-mold-and-tip-burn/"> Read More</a></p>
                    </div>
                    <div className="containerBIG">
                                <h2 className="font-weight-700 font-24 ">PLANTS</h2>
                                <RealtimeData/>
	                </div>
                    <div className="containerSM">
                                <h2 className="font-weight-700 font-24 ">ACTUATORS</h2>
                                <Actuators/>
	                </div>
                </main>
                <section className="left-sidebar">
                    <i className="fa fa-leaf">GHMAYAS</i>
                    <p></p>
                    <img className="user" src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"/>
                    <div className="vertical">
                        <ul>
                            <li><i className="fa fa-home"></i><a href="/dashboard"> Home</a></li>
                            <li><i className="fa fa-file-text"></i> Reports</li>
                                <ul>
                                    <li><a href="/carrots">Carrot</a></li>
                                    <li><a href="#">Lettuce</a></li>
                                    <li><a href="#">Apple</a></li>
                                    <li><a href="#">Pear</a></li>
                                    <li><a href="#">Melon</a></li>
                                    <li><a href="#">Banana</a></li>
                                </ul>
                            <li><i className="fa fa-gear"></i><a href="#"> Settings</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard