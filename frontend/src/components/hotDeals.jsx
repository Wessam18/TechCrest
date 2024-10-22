import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import React from 'react';


// Sample deals array with more options
const deals = [
    { title: "New Collection Up to 50% OFF", discount: "50%" },
    { title: "Buy One Get One Free", discount: "100%" },
    { title: "30% Off All Items", discount: "30%" },
    { title: "Limited Time: 40% Off", discount: "40%" },
    { title: "Flash Sale: 60% Off!", discount: "60%" },
    { title: "End of Season Sale: 20% Off", discount: "20%" },
    { title: "Exclusive Deal: 35% Off for Members", discount: "35%" },
    { title: "Special Offer: 15% Off on First Purchase", discount: "15%" },
    { title: "Weekend Deal: 25% Off Sitewide", discount: "25%" },
    { title: "Bundle Deal: Save 10% When You Buy 3", discount: "10%" },
    { title: "Clearance Sale: Up to 70% Off", discount: "70%" },
    { title: "Holiday Special: Buy 2 Get 1 Free", discount: "100%" },
];

const HotDeal = () => {
    const [deal, setDeal] = useState(null); // Deal can be null initially
    const [countdown, setCountdown] = useState({
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    
    const navigate = useNavigate(); // Navigation hook

    useEffect(() => {
        // Get the current date
        const today = new Date();
        const dateKey = today.toISOString().split('T')[0]; // Get date in YYYY-MM-DD format

        // Use local storage to store the selected deal
        const storedDealIndex = localStorage.getItem(dateKey);

        let dealIndex;
        if (storedDealIndex) {
            dealIndex = Number(storedDealIndex);
        } else {
            // Randomly select a deal index if it's not already stored
            dealIndex = Math.floor(Math.random() * deals.length);
            localStorage.setItem(dateKey, dealIndex.toString()); // Store the deal index for today
        }

        setDeal(deals[dealIndex]); // Set the deal

        // Start the countdown (for 1 day)
        const countdownTimer = setInterval(() => {
            setCountdown(prevCountdown => {
                const newSeconds = prevCountdown.seconds - 1;
                if (newSeconds < 0) {
                    const newMinutes = prevCountdown.minutes - 1;
                    if (newMinutes < 0) {
                        const newHours = prevCountdown.hours - 1;
                        if (newHours < 0) {
                            const newDays = prevCountdown.days - 1;
                            if (newDays < 0) {
                                clearInterval(countdownTimer); // Stop countdown
                                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                            }
                            return { days: newDays, hours: 23, minutes: 59, seconds: 59 };
                        }
                        return { days: prevCountdown.days, hours: newHours, minutes: 59, seconds: 59 };
                    }
                    return { days: prevCountdown.days, hours: prevCountdown.hours, minutes: newMinutes, seconds: 59 };
                }
                return { days: prevCountdown.days, hours: prevCountdown.hours, minutes: prevCountdown.minutes, seconds: newSeconds };
            });
        }, 1000);

        // Cleanup on unmount
        return () => clearInterval(countdownTimer);
    }, []);

    const handleShopNowClick = () => {
        // Navigate to /shop-now and pass the deal
        navigate('/shopnow', { state: { deal } });
    };

    return (
        <div id="hot-deal" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hot-deal">
                            <ul className="hot-deal-countdown">
                                <li>
                                    <div>
                                        <h3>{countdown.days.toString().padStart(2, '0')}</h3>
                                        <span>Days</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3>{countdown.hours.toString().padStart(2, '0')}</h3>
                                        <span>Hours</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3>{countdown.minutes.toString().padStart(2, '0')}</h3>
                                        <span>Mins</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3>{countdown.seconds.toString().padStart(2, '0')}</h3>
                                        <span>Secs</span>
                                    </div>
                                </li>
                            </ul>
                            <h2 className="text-uppercase">Hot Deal Today</h2>
                            {deal && (
                                <p>{deal.title}</p>
                            )}
                            <button className="primary-btn cta-btn" onClick={handleShopNowClick}>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotDeal;
