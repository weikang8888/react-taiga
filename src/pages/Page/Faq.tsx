import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../static/assets/about/about-taiga.png";
import "./page.css";
import Loader from "../../components/Loader/Loader";

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [activeIndex3, setActiveIndex3] = useState(null);
  const [activeIndex4, setActiveIndex4] = useState(null);

  const faqData = [
    {
      question: "When is it time to look?",
      p: "It is critical to replace old tyres for the best driving experience. Maximum traction contributes to more responsive handling of your car, resulting in a smoother, more reliable ride.",
      p2: "Always check your tyres at multiple tread regions. Check each tyre's inner, outer, and center grooves, as tyres might wear differently on each side due to faulty wheel alignment and/or insufficient inflation.",
      p3: "Visit Taiga Auto Service for a free examination by one of our professionals.",
    },
    {
      question: "Choosing a new tyre? What should I consider?",
      p: "Look for tyres that perform well in braking and handling tests. Allow tread wear, riding comfort, noise, and rolling resistance to help you limit down your options.",
      p2: "Choosing a vehicle tyre is determined by where you reside, weather and terrain difficulties, performance expectations, and vehicle requirements.",
    },
  ];

  const faqData2 = [
    {
      question:
        "Tyre Care: How can I maintain optimal driving performance and comfort?",
      p: "Check your tyre pressure every 3,000 miles/4,500 kilometers to maintain your car operating smoothly and evenly, allowing you to use less gas NOTE: When the tires are cool, they should be inflated according to the vehicle manufacturer's guidelines, which can be found on the vehicle door placard or in the owner's manual. NEVER exceed the maximum limit printed on a tyre sidewall1.",
      p2: "To assist equalize tread wear, rotate your tyres every 6,000 - 8,000 miles/10,000 - 13,000 kilometers.",
      p3: `Check your wheel alignment as directed in your owner's handbook, or as soon as you notice a "pull" in the wheel.`,
      p4: "Visually inspect your tyres for anomalies in tread wear, which could indicate alignment or inflation issues.",
    },
    {
      question: "Why is tire pressure important?",
      p: "Improper tyre pressure can cause a variety of issues, including uneven and accelerated tyre wear, structural damage, and even poor gas mileage. Maintaining appropriate tyre inflation can improve gas mileage and save you money at the pump.",
      p2: "You are suggested to monitor tyre inflation once a month or before a long trip. Tires should be inflated according to the manufacturer's guidelines, which should be listed on the vehicle door placard or in the owner's manual.",
      p3: "Proper vehicle and tyre maintenance is an excellent investment because it results in improved driving performance, significant cost savings, and improved fuel mileage.",
    },
  ];

  const faqData3 = [
    {
      question: "What amount of air should I put in my tires?",
      p: "The most crucial aspect of tyre care is proper inflation. The maximum permitted working pressure is indicated by the inflation pressure shown on the side of the tyre. However, it is not always the best inflation for your vehicle. Always utilize the vehicle manufacturer's suggested inflation, which is listed on the vehicle door placard or in the owner's handbook.",
      p2: "When the tyres are cold (i.e., less than a mile or one hour or more after driving), always check the inflation. Make use of a high-quality tyre gauge. Remember that radial tyres naturally have a little bulge in the sidewall when properly inflated. Inflation should be checked or adjusted every few weeks, before every lengthy trip or when traveling with a large load. Don't forget to double-check the spare! Any inquiries you have about tyre inflation can be answered by your Taiga Auto Service salesperson.",
    },
    {
      question: "What exactly is tyre alignment?",
      p: "When all suspension and steering components are in good working order and the tyre and wheel assemblies are running straight and true, the vehicle is properly aligned. For consistent tread wear and precise steering, proper alignment is required. Uneven front or rear tyre wear, as well as changes in your vehicle's handling or steering response (i.e.pulling to one side), are signs of misalignment.",
      P2: "Many modern automobiles have rear suspensions that can be modified for alignment. Depending on the symptoms, your car may require a front-end adjustment or a four-wheel alignment. The low expense of vehicle alignment pays for itself in tyre usage, performance, and comfort. Goodyear stores offer professional alignment and suspension treatment.",
    },
    {
      question: "Why do I need to have my tires balanced?",
      p: `Tyres that are properly balanced are essential for driving comfort and a long tyre life. Unbalanced tyres can generate vibration in your car, which can lead to driver fatigue, premature tyre wear, and premature wear on your vehicle's suspension. Tyres should be rebalanced as soon as vibrations or "steering wheel shimmy" appear. Vibrations can also be caused by misalignment or mechanical issues, so take your car to a Goodyear outlet for a more thorough diagnostic and repair.`,
    },
    {
      question:
        "Isn't it simple to put a tyre on a wheel? Can I do it on my own?",
      p: "Never attempt to mount your own tyres. Tyre mounting necessitates both experience and the necessary equipment. If you attempt to mount your own tyres, you risk significant injury as well as damage to your tyre and rim.",
    },
    {
      question: "How do I know when my tires need to be replaced?",
      p: "Tread wear indication bars are incorporated into the tread of many tyres. It's time for replacement tyres when the tread has worn down to the point where you can see a solid bar of rubber across the width of the tread.",
    },
    {
      question: "Can my driving habits have an impact on the life of my tyres?",
      p: "•	Don't go too fast. Driving at fast speeds generates a lot of heat. This heat accelerates tyre wear and decreases tyre durability.",
      p2: "•	Avoid sharp turns on curves and around corners, as well as sudden starts and stops.",
      p3: "•	Don't ride on the pavement's edge or drive over curbs, chuckholes, or other obstacles.",
    },
    {
      question: "Do I have to replace my current tyres with the same size?",
      p: "Never use a tyre that is less in size than the ones that arrived with the car. Tyres should always be replaced with the same size designation (or permitted alternatives).",
    },
    {
      question: "Should only two new tyres be installed in the front or rear?",
      p: "When using radial tyres alongside bias or bias belted tyres on the same vehicle, the radials must always be mounted on the rear axle. On the same axle, never combine radial and bias-ply tyres. We recommend that you install a pair of replacement tyres that are the same size and construction as those on the automobile on the rear axle. On the rear axle, a single new tyre with the most tread depth should be used.",
    },
    {
      question: "Do my new tyres require any extra care?",
      p: "Your new tyres will most likely feel different than the ones you replaced. Drive slowly as you get used to the increased performance and handling. When stopping, accelerating, cornering, or driving in the rain, use extra caution. This is when the difference will be most visible.",
    },
    {
      question: `Should I "mix" the types of tires on my new car?`,
      p: "Tyres of various sizes, constructions, and stages of wear can all have an impact on vehicle handling and stability. It is advised that all tyres be the same size, construction (radial or non-radial), and speed rating for the best overall performance. If several speed ratings are used on a vehicle, the same size, type, and speed rating must be used on the same axle. The lower speed rating tyres should be used to determine permitted tyre-related vehicle speed. On the same axle, never combine radial and bias-ply tyres.",
    },
    {
      question: "What do I do if I feel a vibration?",
      p: "Vibration indicates that your vehicle has an issue that requires attention. To assist in determining the likely cause and remedy of the vibration, the tyres, steering system, and suspension system should be checked. If the vibration is not addressed, it might lead to excessive tyre and suspension wear. It may even be hazardous.",
    },
  ];

  const faqData4 = [
    {
      question:
        "Car Service - Short Term (may be done before a lengthy drive or once a month)",
      p: "•	Oil and Coolant Levels - Before any journey, it's always a good idea to check the oil and coolant levels under the hood of your car while the engine is turned off. Low levels of these fluids might cause significant harm to your engine as well as unnecessary failures along the route.",
      p2: "•	Air Filter - The job of an air filter is to regulate the air flow into your engine and keep nasties out of your car. By ensuring that your air filter is in good operating order, you may enhance your fuel efficiency, lower your emissions, and extend the life of your engine. This is simple to do at home, so see your owner's manual for instructions and how frequently it should be changed.",
      p3: "•	Tire Pressure - The number stamped on the tires is the maximum amount of pressure that the tires can withstand. If its capacity is surpassed, a tire blowout may occur. Low tire pressure, on the other hand, may result in lost gasoline and hotter tires.",
      p4: "•	Tire Rotation - Depending on your vehicle alignment, usage, and a variety of other circumstances, the tread wear patterns on your tires may differ between the front and back tires, or even from one side of the tread to the other. Rotating them will help to extend their service life by balancing tread wear and preventing vibration issues. This should be done every 8,000 kilometers.",
      p5: "•	Car Lights - It is critical that the lights on your vehicle function properly, yet this is often forgotten. Request assistance from another person to complete this check. Sit in the car and switch on all of the lights and signals, then inquire if the lights are working properly. You can also park your vehicle in front of a flat surface to ensure that both headlights are operational and correctly positioned.",
      p6: "•	Motor oil - Motor oil in your engine performs several functions: it lubricates the moving parts, acts as a sealant against debris, cools the engine, lowers wear and strain, and aids in the prevention of engine corrosion. Depending on your vehicle and the type of oil you use, you may need to change both the oil and the filter every three months or every 10,000 kilometers.",
    },
    {
      question: "Car Service - Long-Lasting",
      p: "•	Spark Plugs - The spark plugs in your car are responsible for igniting the car and the air mixes that finally power it up. If these are not functioning properly, your engine may not be performing to its full potential. When you notice that your engine is not running properly, you should get it professionally checked to replace any damaged spark plugs. You can also get it updated every 50,000 kilometers.",
      p2: "•	Serpentine Belt - A simple piece of rubber that powers peripheral components such as your alternator, power steering pump, and air conditioner compressor keeps your automobile going. Inspect the belt visually to check that it is free of cracks and other signs of wear and strain. Replace it according to the manufacturer's recommendations for your vehicle. ",
      p3: "•	Shocks and Struts - Your car's shocks and struts operate to control the effect of speed bumps and potholes on the road and are critical to the steering system. A professional should inspect these every 100,000km or if you feel a deterioration in smoothness or lack of control while driving.",
      p4: "•	Transmission Fluid - Like engine oil, this fluid is a lubricant that keeps all of the moving parts inside your transmission in good operating order. Regardless of the gearbox (manual or automatic), it is critical to have this fluid checked and changed as needed to avoid costly damage down the road. You can replace it every two years or after driving 50,000 to 90,000 kilometers.",
      p5: "•	Transfer Case Fluid - The transfer case is responsible for transferring power from the transmission to the axles. To ensure that the transfer case fluid is properly filled and leak-free, get it examined according to the vehicle manufacturer's guidelines. This will need you to get beneath the vehicle, therefore having it serviced by a professional is suggested. This fluid can also be changed every 50,000 kilometers. Please keep in mind that this fluid is only suitable for four-wheel-drive vehicles.",
      p6: "•	Coolant Fluid - Your car's radiator is an important component that keeps your engine cool and running properly. Having your coolant system cleansed on a regular basis will assist get rid of pollutants that can accumulate inside as well as ensuring that your radiator is properly loaded. It is advised that you replace the coolant after the first 210,000 km or 120 months, and then every 30,000 km or 24 months after that.",
    },
    {
      question: "Seasonal car service (every 6 months to 1 year)",
      p: "•	Windshield Wiper Replacement - It is advised that you replace your wiper blades every 6-12 months. Windshield wipers are constructed of rubber, which degrades over time and becoming less effective. You should get into the practice of inspecting your wipers on a regular basis and be aware of the warning indications that they are beginning to wear out. Some of these indicators include broken, split, or cracked rubber components, wipers that leave steak marks on your windshield, bent frames, and strange noises when they drag across the glass.",
      p2: "•	Battery Performance Check - One of the most critical components for your vehicle's operation is the battery. A car battery provides huge amounts of electrical current to the vehicle's starter, engine, and other electronic equipment. Extreme temperatures have an impact on battery performance, therefore regular battery testing will ensure that the battery will operate when you need it to. When you next service your car, make sure to check the battery.",
    },
  ];

  const handleItemClick = (sectionIndex, itemIndex) => {
    if (sectionIndex === 1) {
      if (itemIndex === activeIndex1) {
        setActiveIndex1(-1);
      } else {
        setActiveIndex1(itemIndex);
      }
    } else if (sectionIndex === 2) {
      if (itemIndex === activeIndex2) {
        setActiveIndex2(-1);
      } else {
        setActiveIndex2(itemIndex);
      }
    } else if (sectionIndex === 3) {
      if (itemIndex === activeIndex3) {
        setActiveIndex3(-1);
      } else {
        setActiveIndex3(itemIndex);
      }
    } else if (sectionIndex === 4) {
      if (itemIndex === activeIndex4) {
        setActiveIndex4(-1);
      } else {
        setActiveIndex4(itemIndex);
      }
    }
  };

  return (
    <>
      <Loader />
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"FAQ"}
        bannerTarget={"FAQ"}
        bannerPreviousTarget={"Pages"}
        showChevron={true}
      />
      <section className="faq-area pt-100 pb-70">
        <div className="container">
          <div className="row faq-wrap">
            <div className="col-lg-12">
              <div className="faq-head">
                <h2>Buying Tyres</h2>
              </div>
              <div className="faq-item">
                <ul className="accordion">
                  {faqData.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(1, index)}>
                      <a className={index === activeIndex1 ? "active" : ""}>
                        {item.question}
                      </a>
                      <div
                        className={` ${
                          index === activeIndex1 ? "active-p" : "d-none"
                        }`}>
                        <p>{item.p}</p>
                        <p>{item.p2}</p>
                        <p>{item.p3}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row faq-wrap">
            <div className="col-lg-12">
              <div className="faq-head">
                <h2>Tips to Maximise Tyre Life</h2>
              </div>
              <div className="faq-item">
                <ul className="accordion">
                  {faqData2.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(2, index)}>
                      <a className={index === activeIndex2 ? "active" : ""}>
                        {item.question}
                      </a>
                      <div
                        className={` ${
                          index === activeIndex2 ? "active-p" : "d-none"
                        }`}>
                        <p>{item.p}</p>
                        <p>{item.p2}</p>
                        <p>{item.p3}</p>
                        <p>{item.p4}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row faq-wrap">
            <div className="col-lg-12">
              <div className="faq-head">
                <h2>Tyre Maintenance</h2>
              </div>
              <div className="faq-item">
                <ul className="accordion">
                  {faqData3.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(3, index)}>
                      <a className={index === activeIndex3 ? "active" : ""}>
                        {item.question}
                      </a>
                      <div
                        className={` ${
                          index === activeIndex3 ? "active-p" : "d-none"
                        }`}>
                        <p>{item.p}</p>
                        <p>{item.p2}</p>
                        <p>{item.p3}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row faq-wrap">
            <div className="col-lg-12">
              <div className="faq-head">
                <h2>Things to Look for When Servicing Your Vehicle?</h2>
              </div>
              <div className="faq-item">
                <ul className="accordion">
                  {faqData4.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(4, index)}>
                      <a className={index === activeIndex4 ? "active" : ""}>
                        {item.question}
                      </a>
                      <div
                        className={` ${
                          index === activeIndex4 ? "active-p" : "d-none"
                        }`}>
                        <p>{item.p}</p>
                        <p>{item.p2}</p>
                        <p>{item.p3}</p>
                        <p>{item.p4}</p>
                        <p>{item.p5}</p>
                        <p>{item.p6}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
