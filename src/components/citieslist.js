import react from 'react';
import wind from '../images/icon-wind.png'
import compass from '../images/icon-compass.png'
import umbrella from '../images/icon-umberella.png'
import moment from 'moment';


class CitiesList extends react.Component {
    constructor(props) {
        super(props);

    }


    verLocal() {

    }


    onArraydelete(e) {
        this.props.tira(e);

    }




    render() {
        const array = [...this.props.citiesList]
        return (
            <div onSubmit={(e) => this.onFormSubmit(e)}>
                {array.map(element => {
                    return (
                        <div className="location">{element}
                            <button onClick={() => this.verLocal()} >Ver</button>
                            <button onClick={(element) => this.onArraydelete(element)}>Remove</button>
                        </div>
                    )


                })}

            </div>
        )


    }
}
export default CitiesList;