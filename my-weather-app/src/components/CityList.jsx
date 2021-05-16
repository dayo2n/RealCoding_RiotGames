import './CityList.css';

function CityList(props){

    const {cities} = props;
    return (
        <div>
            <h1 className='subtitle'>CityList</h1>

            <ul>
                {cities.map((item, index)=>{
                    return <li className='citiesListItem' key={index}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default CityList;