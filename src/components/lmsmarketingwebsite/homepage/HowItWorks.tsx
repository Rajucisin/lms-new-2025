import React from 'react'

const HowItWorks = () => {
    return (
        <div className="sec-how-ti-work bg-darker sec-gap">
            <div className="container max-container">
                <div className="section-header text-center mb-40">
                    <h2 className="hd-title">How It Works</h2>
                    
                </div>

                <div className="row">
                    <div className='col-lg-4'>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg viewBox="0 0 640 640"><path d="M325.1 86.6C236.1 104.6 174.6 150 135.1 210.5C111.8 246.1 97 285.8 88.4 326L315.9 553.4C404.9 535.4 466.4 490 506 429.5C529.3 393.9 544.1 354.2 552.7 314L325.1 86.6zM561.1 254.7C564.3 212.4 561.8 171.4 556.3 136C551.9 108.2 529.5 88 503.2 84.4C460.2 78.5 421 76.9 385.4 79L561.1 254.6zM255.7 561.1L79.9 385.4C76.7 427.7 79.2 468.7 84.7 504.1C89.1 531.9 111.5 552.1 137.8 555.7C180.8 561.6 220 563.2 255.6 561.1zM335.5 207C344.9 197.6 360.1 197.6 369.4 207L433.4 271C442.8 280.4 442.8 295.6 433.4 304.9C424 314.2 408.8 314.3 399.5 304.9L335.5 240.9C326.1 231.5 326.1 216.3 335.5 207zM271.5 271C280.9 261.6 296.1 261.6 305.4 271L369.4 335C378.8 344.4 378.8 359.6 369.4 368.9C360 378.2 344.8 378.3 335.5 368.9L271.5 304.9C262.1 295.5 262.1 280.3 271.5 271zM207.5 335C216.9 325.6 232.1 325.6 241.4 335L305.4 399C314.8 408.4 314.8 423.6 305.4 432.9C296 442.2 280.8 442.3 271.5 432.9L207.5 368.9C198.1 359.5 198.1 344.3 207.5 335z" fill='currentColor'/></svg>
                            </div>
                            <h3>1. Join a Competition
                            </h3>
                            <p>Choose the entry tier that suits you—high-stakes, mid-range or social.
                            </p>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg viewBox="0 0 640 640"><path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" fill='currentColor'/></svg>
                            </div>
                            <h3>2. Make One Pick Each Round</h3>
                            <p>Select the team you think will win.
                                You can pick the same team multiple times in a season but once you pick a team, they enter a 5-round cooldown and cannot be picked again until the cooldown ends.
                            </p>
                          
                            <div className='box-wedge'>
                                <p>Example:
                            Pick Broncos in Round 1 → next eligible in Round 7.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="step-card">
                            <div className="step-icon">
                                <svg viewBox="0 0 640 640"><path d="M480 491.4C538.5 447.4 576 379.8 576 304C576 171.5 461.4 64 320 64C178.6 64 64 171.5 64 304C64 379.8 101.5 447.4 160 491.4L160 528C160 554.5 181.5 576 208 576L240 576L240 536C240 522.7 250.7 512 264 512C277.3 512 288 522.7 288 536L288 576L352 576L352 536C352 522.7 362.7 512 376 512C389.3 512 400 522.7 400 536L400 576L432 576C458.5 576 480 554.5 480 528L480 491.4zM160 320C160 284.7 188.7 256 224 256C259.3 256 288 284.7 288 320C288 355.3 259.3 384 224 384C188.7 384 160 355.3 160 320zM416 256C451.3 256 480 284.7 480 320C480 355.3 451.3 384 416 384C380.7 384 352 355.3 352 320C352 284.7 380.7 256 416 256z" fill='currentColor'/></svg>
                            </div>
                            <h3>3. Survive and Win</h3>
                            <p>Stay alive longer than everyone else and win the prize pool.
</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
