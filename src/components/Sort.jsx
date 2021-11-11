import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sort = () => {
    let location = useLocation();

    const loc = location.search.split("?")
    const qs = require('qs');
    const obj = qs.parse(loc[1])

    const params = {
        category: obj.category,
    };

    const categories = ["Province", "Positive", "Death", "Recovered"];

    const [category, setCategory] = useState(params.category || categories[0]);

    let navigate = useNavigate();
    function handleClick() {
        navigate(`/indonesia/?category=${category}`);
    }

    return (
        <div className="btn-group my-3">
            <a className="" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="sort-img" src="/images/equalizer.png" ></img>
            </a>
            <ul className="dropdown-menu px-3">
                <div className="form-check">
                    {
                        categories.map((c) => (
                            <>
                                <li>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id={c}
                                        onChange={() => setCategory(c)}
                                        defaultValue={category}
                                    />
                                    <label className="form-check-label" for={c}>
                                        {c}
                                    </label>
                                </li>
                            </>
                        ))
                    }
                </div>
                <li><a className="btn btn-sm btn-sort d-flex justify-content-center my-2" onClick={handleClick}>Urutkan</a></li>
            </ul>
        </div>
    )
}

export default Sort;