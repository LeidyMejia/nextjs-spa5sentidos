const AboutUsHome = () => {
  return (
    <div className="bottom-spas py-5 " id="about">
      <div className="container py-xl-5 py-lg-3">
        <div className="about-top p-xl-5 p-sm-4 p-3 text-center aboutus-content"
             style={{ backgroundImage: `url(/theme/home/about_us_home.jpg)` }}>
          <h3>Welcome</h3>
          <p className="text-white mt-2 mb-4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.
          </p>
        {/*  <img src="images/site/aboutus/bo2.png"*/}
        {/*       title="{{ config('adminty.title_prefix') }}{{ $about->title }}{{ config('adminty.title_postfix') }}"*/}
        {/*       alt="{{ $about->title }}" className="img-fluid img-small-aboutus"/>*/}
        </div>
        <div className="row about-bottom-beautysls mt-md-5 mt-4">
          <div className="col-md-4 grids-beautyslsm">
            <div className="top-head-abspas">
              <h3 className="border-left text-capitalize text-dark pl-4 mb-4">
                Special Care Solutions
              </h3>
            </div>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>

          <div className="col-md-4 grids-beautyslsm">
            <div className="top-head-abspas">
              <h3 className="border-left text-capitalize text-dark pl-4 mb-4">
                Special Care Solutions
              </h3>
            </div>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>

          <div className="col-md-4 grids-beautyslsm">
            <div className="top-head-abspas">
              <h3 className="border-left text-capitalize text-dark pl-4 mb-4">
                Special Care Solutions
              </h3>
            </div>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsHome;