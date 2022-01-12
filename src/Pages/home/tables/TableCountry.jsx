import './tablecountry.css';

const TableCountry = ({ Slice }) => {

    return (
        <div id="table-country">
            <div className="table-header">
                <h5 className="h5hed">کشورهای اصلی صادر کننده</h5>
                <div className="form">
                    <h5>برآیند صادرات</h5>
                    <h5>نسبت</h5>
                </div>
            </div>
            <div className="table-body">
                {Slice.map((item) => {
                    return (
                        <div className="table-item" key={item.id} id={item.id} >
                            <span className="spanbody">{item.name}</span>
                            <div className="form-body">
                                <span>{item.price} میلیون دلار</span>
                                <span>{item.avrage}</span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default TableCountry;

