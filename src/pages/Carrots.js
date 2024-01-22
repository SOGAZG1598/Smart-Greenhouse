import '../styles/Carrots.css';
import { Carrot } from '../components/Carrot';

function Carrots(){
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
                <div className="containerXL">
                    <h2>Carrots Records</h2>
                    <Carrot/>
                </div>
                </main>
                
                <section className="left-sidebar">
                    <i className="fa fa-leaf">GHMAYAS</i>
                    <p></p>
                    <img className="user" src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"/>
                    <div className="vertical">
                        <ul>
                            <li><i className="fa fa-home"></i><a href="#"> Home</a></li>
                            <li><i className="fa fa-file-text"></i><a href="#"> Reports</a></li>
                                <ul>
                                    <li><a href="#">Carrot</a></li>
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

export default Carrots