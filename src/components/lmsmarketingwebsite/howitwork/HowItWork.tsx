'use client'
import React from 'react'
import Link from 'next/link'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const HowItWork = () => {
  return (
    <div className='sec-how-it-work sec-gap bg-darker col-gap'>
      <div className='container max-container'>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>How It Works</Breadcrumb.Item>
        </Breadcrumb>

        <div className='page-header'>
          <h2 className='page-title'>How Last Man Standing Works</h2>
          <p>LMS is a survivor-style sports competition played across the NRL and AFL seasons (NFL and EPL coming soon!).
            Your goal: Pick a winning team every week and stay alive longer than anyone else.</p>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className="step-card">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z" fill='currentColor'/></svg>
              </div>
              <h3>1. Join a Competition
              </h3>
              <p>Choose from high-stakes, mid-range, or social-level competitions.

              </p>

            </div>
          </div>
          <div className='col-lg-4'>
            <div className="step-card">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" fill='currentColor'/></svg>
              </div>
              <h3>2. Pick One Team Each Round
              </h3>
              <ul className='list-bullet mb-24'>
                <li>Choose the team you believe will win
                </li>
                <li>Once you pick a team, they enter a 5-round cooldown
                </li>
                <li>You cannot pick that team again until 5 rounds have passed
                </li>
              </ul>

              <div className='box-wedge'>
                <p>Example:
                  Pick Broncos in Week 1 → next eligible Week 7.</p>
              </div>

            </div>
          </div>
          <div className='col-lg-4'>
            <div className="step-card">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M129.9 292.5C143.2 199.5 223.3 128 320 128C373 128 421 149.5 455.8 184.2C456 184.4 456.2 184.6 456.4 184.8L464 192L416.1 192C398.4 192 384.1 206.3 384.1 224C384.1 241.7 398.4 256 416.1 256L544.1 256C561.8 256 576.1 241.7 576.1 224L576.1 96C576.1 78.3 561.8 64 544.1 64C526.4 64 512.1 78.3 512.1 96L512.1 149.4L500.8 138.7C454.5 92.6 390.5 64 320 64C191 64 84.3 159.4 66.6 283.5C64.1 301 76.2 317.2 93.7 319.7C111.2 322.2 127.4 310 129.9 292.6zM573.4 356.5C575.9 339 563.7 322.8 546.3 320.3C528.9 317.8 512.6 330 510.1 347.4C496.8 440.4 416.7 511.9 320 511.9C267 511.9 219 490.4 184.2 455.7C184 455.5 183.8 455.3 183.6 455.1L176 447.9L223.9 447.9C241.6 447.9 255.9 433.6 255.9 415.9C255.9 398.2 241.6 383.9 223.9 383.9L96 384C87.5 384 79.3 387.4 73.3 393.5C67.3 399.6 63.9 407.7 64 416.3L65 543.3C65.1 561 79.6 575.2 97.3 575C115 574.8 129.2 560.4 129 542.7L128.6 491.2L139.3 501.3C185.6 547.4 249.5 576 320 576C449 576 555.7 480.6 573.4 356.5z" fill='currentColor'/></svg>
              </div>
              <h3>3.  Change Your Pick Anytime Before Lockout

              </h3>
              <p>
                You may update or change your pick up to 30 minutes before the first match of the round.
                After that, picks lock.

              </p>

            </div>
          </div>
          <div className='col-lg-4'>
            <div className="step-card">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 176C119.2 176 112 183.2 112 192L112 448C112 456.8 119.2 464 128 464L512 464C520.8 464 528 456.8 528 448L528 192C528 183.2 520.8 176 512 176L128 176zM64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM398.1 241.9C407.5 251.3 407.5 266.5 398.1 275.8L354 319.9L398.1 364C407.5 373.4 407.5 388.6 398.1 397.9C388.7 407.2 373.5 407.3 364.2 397.9L320.1 353.8L276 397.9C266.6 407.3 251.4 407.3 242.1 397.9C232.8 388.5 232.7 373.3 242.1 364L286.2 319.9L242.1 275.8C232.7 266.4 232.7 251.2 242.1 241.9C251.5 232.6 266.7 232.5 276 241.9L320.1 286L364.2 241.9C373.6 232.5 388.8 232.5 398.1 241.9z" fill='currentColor'/></svg>
              </div>
              <h3>4. Survive or Be Eliminated


              </h3>
              <p>
                You survive if your pick wins.
              </p>
              <p>You are eliminated if your pick loses or draws or if you fail to submit a pick before the cutoff.  Be sure to make your weekly pick!
              </p>

            </div>
          </div>
          <div className='col-lg-4'>
            <div className="step-card">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z" fill='currentColor'/></svg>
              </div>
              <h3>5. Win the Prize Pool

              </h3>
              <p>The final remaining player — or all players who survive the final round — win the prize pool.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className="step-card">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M80 480L80 224L560 224L560 480C560 488.8 552.8 496 544 496L352 496C352 451.8 316.2 416 272 416L208 416C163.8 416 128 451.8 128 496L96 496C87.2 496 80 488.8 80 480zM96 96C60.7 96 32 124.7 32 160L32 480C32 515.3 60.7 544 96 544L544 544C579.3 544 608 515.3 608 480L608 160C608 124.7 579.3 96 544 96L96 96zM240 376C270.9 376 296 350.9 296 320C296 289.1 270.9 264 240 264C209.1 264 184 289.1 184 320C184 350.9 209.1 376 240 376zM408 272C394.7 272 384 282.7 384 296C384 309.3 394.7 320 408 320L488 320C501.3 320 512 309.3 512 296C512 282.7 501.3 272 488 272L408 272zM408 368C394.7 368 384 378.7 384 392C384 405.3 394.7 416 408 416L488 416C501.3 416 512 405.3 512 392C512 378.7 501.3 368 488 368L408 368z" fill='currentColor'/></svg>
              </div>
              <h3>6. Your Dashboard

              </h3>
              <p>In your Dashboard, you can view:

              </p>
              <ul className='list-bullet mb-24'>
                <li>Your Current pick
                </li>
                <li>Cooldown status for teams
                </li>
                <li>Pick history
                </li>
                <li>Number of players remaining
                </li>
                <li>Prize pool progress
                </li>
                <li>Round countdown
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='text-center'>
            <Link href="/website/login" className='btn-theme btn-yellow'>Register or Login Now</Link>
        </div>
      </div>
    </div>
  )
}

export default HowItWork
