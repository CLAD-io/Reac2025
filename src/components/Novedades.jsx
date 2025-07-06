import nov1 from '../assets/novedades.png'
import { Helmet } from 'react-helmet'


export default function Novedades () {
    return(
        <div className="novedades">
            <Helmet>
            <title>Novedades | RouteTikcs!</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
            <div className="novedades1">
                <img src={nov1} alt=""  style={{width:"900px" , height:"180px", marginBottom:"20px"}}/>
                <img src='https://cdn.getcrowder.com/images/5483e335-2625-4507-8bd3-52d3aa6ac03d-airbag-banneraa-1920x720-1-min.jpg' alt=""  style={{width:"900px" , height:"280px", marginBottom:"20px" }}/>
                <img src='https://cdn.getcrowder.com/images/ab628a96-7099-49d8-ae84-cd8639587828-1920x720-wb-df-desktop.jpg' alt=""  style={{width:"900px" , height:"280px", marginBottom:"20px"}}/>
                 <img src='https://cdn.getcrowder.com/images/18c1c6da-d44f-48b2-863b-1f23bff511a1-banner.jpg' alt=""  style={{width:"900px" , height:"280px", marginBottom:"20px"}}/>
            </div>
        </div>
    )
}