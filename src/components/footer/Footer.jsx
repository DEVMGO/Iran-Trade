import './footer.css';
import logo from '../../assets/logo-2.jpg'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 ir-data">
                        <div className="logo-foot">
                            <img src={logo} alt="" />
                        </div>
                        <div className="ir-text">
                            <h4>IR-Data</h4>
                            <p>شرکت آوان تاواتاو به عنوان یک شرکت بازرگانی معتبر بین المللی
                                در زمینه واردات و صادرات صنعت نساجی و صنایع غذایی فعال است.
                                محصول اصلی وارداتی این شرکت الیاف پنبه خام است
                                و به عنوان نمونه کالاهای صادراتی می توان از خرمای مضافتی و کشمش نام برد.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 links">
                        <h4>لینک های مفید</h4>
                        <div className="link">
                            <a href="/">بیشترین واردات به ایران</a>
                            <a href="/">بیشترین صادرات به ایران</a>
                            <a href="/">کشورهایی که بیشترین تعامل را با ایران داشتند</a>
                            <a href="/">بسته ها</a>
                            <a href="/">دسته بندی ها</a>
                        </div>
                    </div>
                    <div className="col-lg-4 contact">
                        <h4>ارتباط با ما</h4>
                        <div className="item-contact">
                            <span>تلفن: </span><span>+989125544331</span>
                        </div>
                        <div className="item-contact">
                            <span>ایمیل: </span><span>info@ir_trades.com</span>
                        </div>
                        <div className="item-contact">
                            <span>آدرس: </span><span>تهران,ضلع غربی میدان شیخ بهایی, ساختمان رایان ونک, واحد 206</span>
                        </div>
                    </div>
                </div>

                <p className="copy-right">تمامی حقوق این سایت متعلق به ir-trad ,به شماره ثبت1234 میباشد. 2021</p>
            </div>
            <hr />
        </div>
    );
}

export default Footer;