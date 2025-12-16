'use client'
import React from 'react'
import Link from 'next/link'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Rules = () => {
    return (
        <div className='sec-how-it-work sec-gap bg-darker col-gap'>
            <div className='container max-container'>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Rules</Breadcrumb.Item>
                </Breadcrumb>

                <div className='page-header'>
                    <h2 className='page-title'>Official LMS Rules
                    </h2>
                    <p>Welcome to the LMS. The rules are simple, but survival is hard. Understand the mechanics, plan your strategy, and don’t get eliminated</p>
                </div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z" fill='currentColor' /></svg>
                            </div>
                            <h3>1. Eligibility
                            </h3>
                            <ul className='list-bullet mb-24'>
                                <li>18+ Australian residents
                                </li>
                                <li>Valid email and mobile number</li>
                            </ul>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 128C60.7 128 32 156.7 32 192L32 256C32 264.8 39.4 271.7 47.7 274.6C66.5 281.1 80 299 80 320C80 341 66.5 358.9 47.7 365.4C39.4 368.3 32 375.2 32 384L32 448C32 483.3 60.7 512 96 512L544 512C579.3 512 608 483.3 608 448L608 384C608 375.2 600.6 368.3 592.3 365.4C573.5 358.9 560 341 560 320C560 299 573.5 281.1 592.3 274.6C600.6 271.7 608 264.8 608 256L608 192C608 156.7 579.3 128 544 128L96 128zM448 400L448 240L192 240L192 400L448 400zM144 224C144 206.3 158.3 192 176 192L464 192C481.7 192 496 206.3 496 224L496 416C496 433.7 481.7 448 464 448L176 448C158.3 448 144 433.7 144 416L144 224z" fill='currentColor' /></svg>
                            </div>
                            <h3>2. Entries
                            </h3>
                            <p>All entry fees must be paid before Round 1 begins.
                            </p>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" fill="currentColor"></path></svg>
                            </div>
                            <h3>3. Pick Rules
                            </h3>
                            <ul className='list-bullet mb-24'>
                                <li>One pick per round
                                </li>
                                <li>Team Cooldown Rule: You cannot pick the same team again for 5 rounds</li>
                                <li>Pick Change Rule: You may change your pick until 30 minutes before kickoff
                                </li>
                                <li>Picks lock automatically at cutoff
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 176C119.2 176 112 183.2 112 192L112 448C112 456.8 119.2 464 128 464L512 464C520.8 464 528 456.8 528 448L528 192C528 183.2 520.8 176 512 176L128 176zM64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM398.1 241.9C407.5 251.3 407.5 266.5 398.1 275.8L354 319.9L398.1 364C407.5 373.4 407.5 388.6 398.1 397.9C388.7 407.2 373.5 407.3 364.2 397.9L320.1 353.8L276 397.9C266.6 407.3 251.4 407.3 242.1 397.9C232.8 388.5 232.7 373.3 242.1 364L286.2 319.9L242.1 275.8C232.7 266.4 232.7 251.2 242.1 241.9C251.5 232.6 266.7 232.5 276 241.9L320.1 286L364.2 241.9C373.6 232.5 388.8 232.5 398.1 241.9z" fill='currentColor' /></svg>
                            </div>
                            <h3>4. Eliminations


                            </h3>
                            <p>
                                You are eliminated if:

                            </p>
                            <ul className='list-bullet mb-24'>
                                <li>Your team loses
                                </li>
                                <li>Your team draws</li>
                                <li>You miss the cutoff
                                </li>
                                <li>Your match is cancelled without rescheduling
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 112L352 112C360.8 112 368 119.2 368 128L368 176L416 176L416 128C416 92.7 387.3 64 352 64L128 64C92.7 64 64 92.7 64 128L64 448C64 483.3 92.7 512 128 512L240 512L240 464L128 464C119.2 464 112 456.8 112 448L112 128C112 119.2 119.2 112 128 112zM304 184C304 170.7 293.3 160 280 160L168 160C154.7 160 144 170.7 144 184C144 197.3 154.7 208 168 208L273.6 208C282.4 199.4 292.6 192.2 303.8 186.9C303.9 186 304 185 304 184zM512 528L352 528C343.2 528 336 520.8 336 512L336 288C336 279.2 343.2 272 352 272L453.5 272C457.7 272 461.8 273.7 464.8 276.7L523.3 335.2C526.3 338.2 528 342.3 528 346.5L528 512C528 520.8 520.8 528 512 528zM288 288L288 512C288 547.3 316.7 576 352 576L512 576C547.3 576 576 547.3 576 512L576 346.5C576 329.5 569.3 313.2 557.3 301.2L498.8 242.7C486.8 230.7 470.5 224 453.5 224L352 224C316.7 224 288 252.7 288 288z" fill='currentColor' /></svg>
                            </div>
                            <h3>5. Postponements

                            </h3>
                            <p>If the match is rescheduled within the same round window → pick stands.
                            </p>
                            <p>If not → players picking that team are eliminated.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z" fill="currentColor"></path></svg>
                            </div>
                            <h3>6.  Prize Pool


                            </h3>
                            <p>Shared equally if multiple players survive the final round.
                            </p>
                            <p>Prize funds held in NT trust account.</p>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M392 176L248 176L210.7 101.5C208.9 97.9 208 93.9 208 89.9C208 75.6 219.6 64 233.9 64L406.1 64C420.4 64 432 75.6 432 89.9C432 93.9 431.1 97.9 429.3 101.5L392 176zM233.6 224L406.4 224L455.1 264.6C521.6 320 560 402 560 488.5C560 536.8 520.8 576 472.5 576L167.4 576C119.2 576 80 536.8 80 488.5C80 402 118.4 320 184.9 264.6L233.6 224zM324 288C313 288 304 297 304 308L304 312C275.2 312.3 252 335.7 252 364.5C252 390.2 270.5 412.1 295.9 416.3L337.6 423.3C343.6 424.3 348 429.5 348 435.6C348 442.5 342.4 448.1 335.5 448.1L280 448C269 448 260 457 260 468C260 479 269 488 280 488L304 488L304 492C304 503 313 512 324 512C335 512 344 503 344 492L344 487.3C369 483.2 388 461.6 388 435.5C388 409.8 369.5 387.9 344.1 383.7L302.4 376.7C296.4 375.7 292 370.5 292 364.4C292 357.5 297.6 351.9 304.5 351.9L352 351.9C363 351.9 372 342.9 372 331.9C372 320.9 363 311.9 352 311.9L344 311.9L344 307.9C344 296.9 335 287.9 324 287.9z" fill='currentColor' /></svg>
                            </div>
                            <h3>7.  Refunds


                            </h3>
                            <p>Refunds only if the competition does not commence.
                            </p>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64zM320 130.8L320 508.9C458 442.1 495.1 294.1 496 205.5L320 130.9L320 130.9z" fill='currentColor' /></svg>
                            </div>
                            <h3>8.  Compliance


                            </h3>
                            <p>LMS is licensed by the Northern Territory Racing Commission.

                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rules
