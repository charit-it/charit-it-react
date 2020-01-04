import React from "react";
import * as RB from 'react-bootstrap';
import Popup from 'reactjs-popup';

class About_us extends React.Component {
    render() {
        return (
            <Popup trigger={<RB.Nav.Link href="#about_us">About us</RB.Nav.Link>} modal closeOnDocumentClick >
                <div className="row about_us">
                    <div className="col-md-12">
                        <h4>About Charit-it</h4>
                        <p>Charit-it is an app developed by Caio, Kate and Peace, three <a href="https://www.techreturners.com/">Tech Returners</a> graduates.</p>
                        <p>We have backgrounds in fashion, forest engineering and marketing, and we felt that we could do something to make buying second-hand clothes easier and fun.</p> 
                        <h5>Why embrace second-hand?</h5>
                        <p>There are plenty of reasons, but here are just our favourite 3:</p>
                        <ol>
                            <li><strong>It's good for the planet and other humans.</strong> 70 million trees are cut down every year to make brand new clothes. And 1.5 trillion litres of water are used by the fashion industry every year, while 750 million people in the world have no access to drinking water. Brand new clothes use resources that should be better spent in saving our planet and our people. Donating used items and buying second-hand clothes is one way to be a part of the solution.</li>
                            <li><strong>It's good for your heart.</strong> Every time to buy something from a charity shop, you fund causes such as cancer research, water sanitation, education, child safety, caring for the differently abled or the elderly... and the list goes on. So you can shop your heart out while helping others.</li>
                            <li><strong>It's good for your pocket.</strong> You'll be saving yourself a lot of money. Not many second-hand items are over £10, and you can find dresses, shoes, accessories, shirts and jeans for less than £5.</li>
                        </ol>
                        <p>So we came up with Charit-it. Depending on who you are, Charit-it works for you in different ways.</p>
                        <h5>I volunteer in a charity shop... And it takes forever to catalogue donations</h5>
                        <p>If you volunteer in a charity shop, Charit-it makes it easy to catalogue donations. In the volunteer space, you can add new items to your shop's catalogue: take a picture, type in a few details about the item and add the price. Your donated item will be live in Charit-it for buyers to browse online. In the volunteer space you can also see all the items in your shop and delete or edit them as you need. In the future, you'll be able to connect Charit-it to your till, so when someone buys an item, it will automatically dissapear from your online catalogue.</p>
                        <h5>I'm a shopper... And it's a hassle to visit 4 or 5 charity shops to find what I want</h5>
                        <p>If you're a buyer, Charit-it makes it easy to browse charity shops near you from the comfort of your home, on the go, or wherever you are. You'll see the address and phone number of the shop where that item is. In the future, Charit-it will allow you to pay for your items online, so they're yours to collect whenever you'd like.</p>
                    </div>

                </div>
            </Popup>
        );
    }
}

export default About_us;