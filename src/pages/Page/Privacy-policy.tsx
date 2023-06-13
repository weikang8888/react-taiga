import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/about/footer-car.png";
import Loader from "../../components/Loader/Loader";
const PrivacyPolicy = () => {
  return (
    <>
      <Loader />
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"Privacy Policy"}
        bannerTarget={"Privacy Policy"}
        bannerPreviousTarget={"Pages"}
        showChevron={true}
      />{" "}
      <section className="privacy-area pt-100">
        <div className="container">
          <div className="privacy-item">
            <h2>1. What is Privacy Policy?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <div className="privacy-item">
            <h2>2. How do we apply our Privacy Policy?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="privacy-item">
            <h2>3. How we do serve for you</h2>
            <ul>
              <li>
                <i className="bx bx-chevron-right"></i>
                Our engineers are very dedicated on work
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>
                Our company always gives best services
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>
                We always give qualityful things
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>
                You can get everything under a roof
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>
                We have a option to give online service
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
