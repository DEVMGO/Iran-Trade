import Jadval from '../tables/Jadval';
import './omdeh.css';

const Omdeh = () => {
    return (
        <div id="Omdeh">
            <div className="container">
                <div className="title">
                    <hr />
                    <h4>عمده کالاهای صادراتی و وارداتی</h4>
                    <hr />
                </div>

                <div className="jadvals">
                    <div className="row">
                        <div className="col-md-6 jadval">
                            <Jadval />
                        </div>
                        <div className="col-md-6 jadval">
                            <Jadval />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Omdeh;