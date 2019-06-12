import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';


class Getplan extends Component {
    state = {
        videos: [],
        nextvideo : [],
    };



    // getnextvideo = async () => {
    //     const res = await axios.get('http://localhost:3000/popularity/get_popularity_liked_general_video')
    //     this.setState({ nextvideo: res.data })
    //     console.log(this.state.nextvideo)
    // }
    getbestplan = async () => {
        const res = await axios.get('http://localhost:3000/popularity/get_popularity_liked_general_video')
        this.setState({ videos: res.data })
        console.log(this.state.videos)
    }


    componentDidMount() {
        // this.getnextvideo()
        this.getbestplan()
    }

    render() {
        const opts = {
            height: '150',
            width: '150',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        }

        return (
            <>
            <header>
                <nav className="container_nav">
                    <div className="divLogoTripitto">
                        {/* <img className="logoTripitto" src={Logo}alt="logo tripitto"></img> */}
                    </div>
                    <htmlform method="GET" action="rechercher" className="Search">
                        <input class="inputNav" type="text" placeholder="Voyager..."></input>
                        {/* <img class="icone-loupe"src={Search}alt="Search"></img> */}
                    </htmlform>
                    <ul className="ulNav">
                        <li>VIDÉOS</li>
                        <li>VIDÉASTES</li>
                    </ul>
                </nav>
            </header>
            {/* <h4>PROJETTEZ VOUS DANS VOTRE PROCHAINE DESTINATION</h4>
            <div class="section_nextdestination_video">
                {this.state.nextvideo.map(nextvideo => (
                    <div className="divVideoNext" key={nextvideo.id_general_video}>
                        <div>
                            <p>{nextvideo.video_title} 
                                <YouTube videoId={nextvideo.video_link} opts={opts} onReady={this._onReady} />
                            </p>
                            <p>{nextvideo.countries}</p>
                            

                        </div> 
                    </div>
                ))}
            </div>   */}

            <h4>AVEC UN MAXIMUM DE BONS PLANS</h4>
            <div class="section_bestplan_video">
                {this.state.videos.map(video => (
                    <div className="divVideoPLan" key={video.id_general_video}>
                        <div>
                            <p>{video.video_title} 
                                <YouTube videoId={video.video_link} opts={opts} onReady={this._onReady} />
                            </p>
                            <p>{video.countries}</p>
                            <p>{video.video_user}</p>
                            <p>{video.number_tips}</p>
                            <p>{video.nb_views}</p>
                        </div> 
                    </div>
                ))}
            </div>  
           
            </>
        )
    }
}

export default Getplan;