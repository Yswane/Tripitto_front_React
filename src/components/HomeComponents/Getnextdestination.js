import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';
import './Getnextdestination.css';

import leftHome from '../../Images-tripitto/Icon/leftHome.png'
import RightHome from '../../Images-tripitto/Icon/RightHome.png'



class Getnextdestination extends Component {
    state = {
        nextpicture : [],
        videos: [],
        bestplan: 1,
    };

    
    getnextvideo = async () => {
        const res = await axios.get('http://localhost:3000/popularity/get_popularity_liked_general_video_travel_information')
        this.setState({ nextpicture: res.data })
        console.log (this.state.nextpicture)
    }
    getbestplan = async () => {
        const res = await axios.get('http://localhost:3000/popularity/get_popularity_liked_general_video_travel_information2')
        this.setState({ videos: res.data })
        console.log(this.state.videos)
    }

    selectbestplan = () => {
        this.setState({ BestPlan: +5 })
        console.log(this.state.BestPlan)
    }

    selectbestplanBack = () => {
        this.setState({ BestPlan: -5 })
        console.log(this.state.BestPlan)
    }

    componentDidMount() {
        this.getnextvideo()
        this.getbestplan()
        this.selectbestplan()
        this.selectbestplanBack()
    }

    render() {
let i = 1
let a = 1
let b = 1 
let c = 1 
        return (
            <>
    {/****************************** SECTION NEXT DESTINATION******************************* */}
        <section className='nextdestination'>
                <div class="wrapper-nextpicture">
                {this.state.nextpicture.map(nextpicture => (
                    <div className={"divpictureNext" + i} key={i++}>
                            <img src={nextpicture.cover_picture} className={"nextpictureimg" + a} key={a++}/>
                            <p className={"p"+ b} key={b++}>{nextpicture.video_title}</p> <br/>
                            <p className={"p"+ b} key={b++}>{nextpicture.countries}</p>
                    </div>
                ))}
                </div>  
        </section>
{/****************************** SECTION BEST PLAN  ***************************** */}
        <section className="bestplan">
            <div className='container_bestplan_title'>
                <h2 className="title_best_plan">AVEC UN MAXIMUM DE BONS PLANS</h2>
            </div>
            <div>
                <img onClick={this.selectbestplan} className="leftHome" src={leftHome} alt=""></img>
            </div>
            <div>
                <img onClick={this.selectbestplanBack} className="rightHome" src={RightHome} alt=""></img>
            </div>
        </section> 
            <div class="container_bestplan">
                {this.state.videos.map(video => (
                    <div className={"divVideoPLan" + c} key={c++}>
                            <img src={video.cover_picture} className='picture_bestplan'/>
                            <div className='container_title_bestplan_numbertips'>
                            <p className='title_bestplan_numbertips'>+{video.number_tips}%</p>
                            </div>
                            <div className='container_title_bestplan_video_duration'>
                            <p className='title_bestplan_video_duration'>{video.video_duration}</p>
                            </div>
                            <p className='title_bestplan_title'>{video.video_title}</p>
                            <p className='title_bestplan_countries'>{video.countries}</p>
                            <p className='title_bestplan_user'>{video.video_user}</p>
                            <p className='title_bestplan_nbviews'>{video.nb_views}</p>
                    </div> 
                ))}
            </div> 
         

            </>


        )
    }
}



export default Getnextdestination;