import './CityList.css';

function CityList(props){

    const {cities} = props;
    return (
        <div>
            <h1 className='subtitle'>CityList</h1>

            <ul>
                {cities.map((item, index)=>{
                    return <p className='citiesListDiv'><li className='citiesListItem' key={index}>{item}</li></p>
                })}
            </ul>
        </div>
    );
}

export default CityList;