import React, { Component } from 'react';
import axios from 'axios'
import './DetailledInfo.css';
import Bed from '../../Images-tripitto/Icon/hebergement.png';
import Food from '../../Images-tripitto/Icon/Ingredients/plaisir_culinaire.png';
import Museum from '../../Images-tripitto/Icon/Visites.png';
import Sport from '../../Images-tripitto/Icon/sport.png';
import Love from '../../Images-tripitto/Icon/Love.png';
import Idea from '../../Images-tripitto/Icon/Idea.png';
import Bar from '../../Images-tripitto/IconVideo/bar.png';
import Trip from '../../Images-tripitto/IconVideo/trip.png';





class DetailledInfo extends Component {
	state = {
		detailledInfo: [],
	};

	getDetailledInfo = async () => {
		let pathApi = process.env.REACT_APP_PATH_API_DEV + '/travel_step/get_travelstep'
		if (process.env.NODE_ENV === 'production') {
			pathApi = process.env.REACT_APP_PATH_API_PROD + '/travel_step/get_travelstep'
		}
		const res = await axios.get(pathApi)
		this.setState({ detailledInfo: res.data })
	}

	componentDidMount() {
		this.getDetailledInfo()
	}


	render() {
		let i = 1;

		const url = window.location.href;
		const idDetailledVideo = url.slice(32)

		return (
			<>
				{this.state.detailledInfo.filter(item => item.id_travel_step == idDetailledVideo).map(item => (
					<div className="container_globalTravel" key={i++}>
						<div key={item.id_travel_step}>
							<div className="container_info" key={item.id_travel_step}>
								<div className="container_detailled">
									<div className="trip_box">
										<span className="trip">
											<img className="trip" src={Trip} alt="village" />
										</span>
									</div>
									<div className="container_trip">

										<span className="step1">{item.step_number}
										</span>
										{item.step_weather}
										<span>{item.step_name}</span>
										<span>{item.video_travel_step}</span>
										<span>{item.step_name}</span>
										<span>{item.step_type}</span>
										<span>{item.step_duration}</span>
										<p className="font_text_way">Se déplacer en {item.way_get_around}</p>


										<strong><li>Plutot habiter vers <span className="color_accomodation">{item.accomodation1}</span> ou <span className="color_accomodation">{item.accomodation2}</span></li></strong>
										<p>
											<img className="bed" src={Bed} alt="bed" /><span className="district1">{item.district1}</span> |
                    <span className="district">{item.district2}</span> |
                    <span className="district"> {item.district3}</span>
										</p>										

										{/* <li>{item.district_comment}</li> */}
										{/* <li>{item.accomodation3}</li> */}
										{/* <li>{item.accomodation_link1}</li>
										<li>{item.accomodation_link2}</li>
										<li>{item.accomodation_link3}</li> */}
										<p><img className="food" src={Food} alt="food" />
											<span className="district1">{item.restaurant1}</span> |
                    <span className="district">{item.restaurant2}</span>  |
                    <span className="district">{item.restaurant3}</span>
											<span className="district">{item.restaurant4}</span>
											<li>{item.restaurant5}</li>
											<li>{item.restaurant6}</li> </p>

										<p> <img className="bar" src={Bar} alt="bed" />
											<span className="district1">{item.bar1}</span>|
                    <span className="district">{item.bar2}</span>|
                    <span className="district">{item.bar3}</span>
											<li>{item.bar4}</li>
											<li>{item.bar5}</li>
											<li>{item.bar6}</li>
										</p>

										<p><img className="Museum" src={Museum} alt="museum" /><span className="museum">{item.must_visit1}</span>  |
                    <span className="museum1">{item.must_visit2}</span>  |
                    <span className="museum1">{item.must_visit3}</span>
											<span className="museum1">{item.must_visit4}</span>
											<li>{item.must_visit5}</li>
											<li>{item.must_visit6}</li>
										</p>

										<p><img className="sport" src={Sport} alt="sport"></img>
											<span className="museum">{item.sport_activity1}</span>
											<span className="museum1">{item.sport_activity2}</span>
											<span className="museum1">{item.sport_activity3}</span>
											<span className="museum1">{item.sport_activity4}</span>
										</p>
										{/* <span className="comment_sport">{item.sport_activity_comment}</span> */}


										<li>{item.sport_activity5}</li>
										<li>{item.sport_activity6}</li>

										<p><img className="love" src={Love} alt="love"></img>{item.crush}</p>
										<p ><img className="idea" src={Idea} alt="idea"></img>{item.advice}</p>
										<div className="tripButton">
											<button className="buttonTrip">VOIR ETAPE SUIVANTE</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</>
		)
	}
}

export default DetailledInfo;
