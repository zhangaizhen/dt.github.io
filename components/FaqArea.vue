<template>
  <section class="faq-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="faq-accordion">
            <div class="accordion-container-one">
              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">How to process the funtion for construction?</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">There are many variations of passages of available but the majority have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                  </p>
                </div>
              </div>

              <div class="ac accordion__content">
                <h2 class="ac-q accordion__title-text" tabIndex="0">Where should I incorporate my business?</h2>
                <div class="ac-a">
                  <p class="accordion__content-desc">There are many variations of passages of available but the majority have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                  </p>
                </div>
              </div>

              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">How there are many variations of passages</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">There are many variations of passages of available but the majority have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                  </p>
                </div>
              </div>
              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">What about our safety measures ?</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">There are many variations of passages of available but the majority have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="faq-request-quote">
            <span>Request a free Quote</span>
            <form action="#">
              <div class="input-box">
                <input type="text" placeholder="Your Name">
              </div>
              <div class="input-box">
                <input type="email" placeholder="Email Address">
              </div>
              <div class="input-box">
                <input type="text" placeholder="Phone Number">
              </div>
              <div class="input-box">
                <textarea name="#" id="#" cols="30" rows="10" placeholder="Write Message"></textarea>
              </div>
              <div class="input-box">
                <button class="main-btn">Get a free quote</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "FaqArea",
      mounted() {
        new Accordion('.accordion-container-one');
      }

    }
</script>

<style scoped>
  .ac {
    margin-top: 10px;
    padding: 10px;
    background: #FFFFFF;
    box-sizing: border-box;
  }

  .ac>.ac-q {
    font: bold 15px Oswald, sans-serif;
    padding: 10px 30px 10px 10px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    position: relative;
    margin: 0;
    color: #192437;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .ac.is-active .ac-q {
    color: #5cb85c !important;
  }
  .ac>.ac-q::after {
    content: '+';
    text-align: center;
    width: 15px;
    right: 10px;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    position: absolute
  }

  .ac>.ac-a {
    overflow: hidden;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease
  }

  .ac>.ac-a p {
    margin: 0;
    padding: 10px;
    color: #545764;
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
  }

  .ac.js-enabled>.ac-a {
    visibility: hidden
  }

  .ac.is-active>.ac-a {
    visibility: visible
  }

  .ac.is-active>.ac-q::after {
    content: '\2013';
    color: #5cb85c;
  }
</style>
