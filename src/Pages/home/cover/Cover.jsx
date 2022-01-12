import './cover.css';
import kashti from '../../../assets/ship-5.jpg';

const Cover = () => {
    return (
        <div id="cover">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 img-cover">
                        <img src={kashti} alt="" />
                    </div>
                    <div className="col-lg-6 text-cover">
                        <h4>ایران ترید</h4>
                        <h4>بزرگترین بانک اطلاعاتی کالاهای وارداتی و صادراتی</h4>
                        <p>کسب و کار شما نمی تواند تغییرات مهم نظارتی جهانی را از دست بدهد.</p>
                        <form class="d-flex form-serch">
                            <input class="form-control me-2" type="search" placeholder="نام کالا یا کد تعرفه آن را وارد کنید" aria-label="Search" />
                            <button class ="btn btn-outline-success" type ="submit">جستوجو</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cover;