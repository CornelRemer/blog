import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './Start.css';
import Hoc from '../../hoc/hoc';

class Start extends Component{
    render () {
        const styles = {
            backgroundImage: `url(/static/img/start/titelbild.JPG)`,
            //backgroundSize: 'contain',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 60%',
            backgroundAttachment: 'fixed'
        }

        return (
            <Hoc>
                <div className="Start">
                    <p id="Headline">Australien <br/> 2019 - 2020</p>
                    <img src="/static/img/start/titelbild.JPG"/>
                    <p id="Paragraph">
                    Herzlich willkommen auf unserem Blog! Schön, dass Du Dich hierher verirrt hast!<br/><br/>
                    Nach einiger Planung, Auflösung unserer Berliner Wohnung und Packen, begann am 7. April 2019 unser einjähriges Abenteuer in Australien. Wir sind, nach einem kurzen Zwischenstopp im heißen Singapur, in Sydney gelandet. Hier wollen wir sechs Monate arbeiten, um uns etwas Geld für die Reise anzusparen, und natürlich leben und Sydney entdecken. Im Oktober geht es dann endlich auf große Reise rund um Australien.<br/><br/>
                    Wir freuen uns, wenn Du ab und zu hier vorbeischaust und unsere Erlebnisse an den vielen Stränden, in den Nationalparks, im Outback und in den Städten Down Unders verfolgst.<br/><br/>
                    Als kleine Info zu unserem Blog: Cornel hat mit viel Mühe, abendlicher Zeit nach der Arbeit, Frustration, aber auch viel Spaß diesen Blog komplett selbst programmiert. Verzeih daher kleine Performancefehlerchen, aber komm auch gerne auf uns zu, solltest Du Anzeigefehler oder andere Probleme entdecken.<br/><br/>
                    Logg Dich einfach mit dem von uns zugeschickten Passwort ein und los geht’s!
                    <p className='Handwriting'>Cornel & Marina</p>
                    </p>
                </div>
                {/*<div className="Titelbild" style={styles}>
                    <div className="TextStartseite"></div>
        </div>*/}
                
            </Hoc>
            
        )
    }
}

export default Start;