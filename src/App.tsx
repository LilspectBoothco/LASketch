import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './style.css';

import logo from './photos/logo.png';
import logoFooter from './photos/logo-footer.png';
import pageHero from './photos/page-hero.png';
import homeHero from './photos/home-hero.png';
import step1 from './photos/step1.png';
import step2 from './photos/step2.png';
import step3 from './photos/step3.png';
import gal1 from './photos/gal1.png';
import gal2 from './photos/gal2.png';
import gal3 from './photos/gal3.png';
import gal4 from './photos/gal4.png';
import gal5 from './photos/gal5.png';
import gal6 from './photos/gal6.png';
import keepsake from './photos/keepsake.png';
import beach from './photos/beach.png';
import booth from './photos/booth.png';
import expHero from './photos/exp-hero.png';
import expCorporate from './photos/exp-corporate.png';
import expExhib from './photos/exp-exhib.png';
import expUni from './photos/exp-uni.png';
import expKids from './photos/exp-kids.png';
import expDog from './photos/exp-dog.png';
import expMuseum from './photos/exp-museum.png';
import styPhoto from './photos/sty-photo.png';
import styDavinci from './photos/sty-davinci.png';
import styMichelangelo from './photos/sty-michelangelo.png';
import styRaphael from './photos/sty-raphael.png';
import styPicasso from './photos/sty-picasso.png';
import styMonet from './photos/sty-monet.png';
import styDonatello from './photos/sty-donatello.png';
import styComic from './photos/sty-comic.png';
import prompts from './photos/prompts.jpg';
import survey from './photos/survey.jpg';
import ipadSketch from './photos/ipad-sketch.png';
import paperLeft from './photos/paper-left.png';
import paperRight from './photos/paper-right.png';
import sharing from './photos/sharing.png';
import gallery from './photos/gallery.png';
import arm1 from './photos/arm1.png';
import arms12 from './photos/arms12.png';
import arms123 from './photos/arms123.png';
import standDiagram from './photos/stand-diagram.png';
import tableSketch from './photos/table-sketch.png';
import screenPoster from './photos/screen-poster.webp';

function Chip({ children, tone }: { children: React.ReactNode; tone?: 'blue' }) {
    return <span className={tone === 'blue' ? 'sl-chip sl-chip-blue' : 'sl-chip'}>{children}</span>;
}

function SiteNav() {
    return <header className="sl-nav">
        <Link to="/" className="sl-nav-logo" aria-label="Sketch LA home"><img src={logo} alt="Sketch LA" /></Link>
        <nav className="sl-nav-links" aria-label="Site pages">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/experiences">Experiences</NavLink>
            <NavLink to="/styles">Styles</NavLink>
            <NavLink to="/customisation">Customisation</NavLink>
            <NavLink to="/setups">Setups</NavLink>
        </nav>
        <Link to="/quote" className="sl-btn sl-btn-small">Get a quote</Link>
    </header>;
}

function CtaBand({ title }: { title: string }) {
    return <section className="sl-cta">
        <h2>{title}</h2>
        <Link to="/quote" className="sl-btn">Get a quote</Link>
    </section>;
}

function Footer() {
    return <footer className="sl-footer">
        <div className="sl-footer-main">
            <img src={logoFooter} alt="Sketch LA" />
            <div className="sl-footer-words">
                <span>Brand activations</span><span>Corporate events</span><span>Private parties</span>
            </div>
        </div>
        <p className="sl-footer-note">Visual preview of the Sketch LA website concept. Pages, images and forms are illustrative; nothing on this site sends or stores information.</p>
    </footer>;
}

function Hero({ title, sub, subBlue, art, artAlt }: { title: React.ReactNode; sub: string; subBlue?: boolean; art?: string; artAlt?: string }) {
    return <section className="sl-hero">
        <div className="sl-hero-text">
            <h1>{title}</h1>
            <p className={subBlue ? 'sl-sub sl-sub-blue' : 'sl-sub'}>{sub}</p>
            <Link to="/quote" className="sl-btn">Get a quick quote</Link>
        </div>
        {art && <div className="sl-hero-art"><img src={art} alt={artAlt || ''} /></div>}
    </section>;
}

function Attribution({ children }: { children: React.ReactNode }) {
    return <p className="sl-attribution">{children}</p>;
}

/* ---------- HOME ---------- */

function IconBox({ d }: { d: string }) {
    return <svg className="sl-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>;
}

const icons = {
    frame: 'M4 4h16v16H4z M8 12l2.5-3 2 2.5L15 9l3 5H7z M9.5 8.5h.01',
    user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5',
    hash: 'M9 4L7 20 M17 4l-2 16 M4 9h17 M3 15h17',
    palette: 'M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.4-2.2-.7-1.4.2-2.8 1.8-2.8H17a4 4 0 0 0 4-4c0-5-4-7-9-7z M7.5 10.5h.01 M11 7.5h.01 M15.5 9h.01',
    plug: 'M9 7V3 M15 7V3 M7 7h10v4a5 5 0 0 1-10 0z M12 16v5',
    cube: 'M12 3l8 4.5v9L12 21l-8-4.5v-9z M12 12l8-4.5 M12 12v9 M12 12L4 7.5',
    wrench: 'M14.5 6.5a4 4 0 0 0-5.3 5L4 16.7V20h3.3l5.2-5.2a4 4 0 0 0 5-5.3l-2.7 2.7-2.3-.7-.7-2.3z',
    lock: 'M6 11V8a6 6 0 0 1 12 0v3 M5 11h14v9H5z M12 15v2',
    stand: 'M4 21h16 M6 21V8l6-4 6 4v13 M10 21v-6h4v6',
    pen: 'M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z M13.5 7l3.5 3.5',
    calendar: 'M5 5h14v16H5z M5 9h14 M9 3v4 M15 3v4',
};

function Home() {
    return <>
        <Hero
            title={<>Your guests, drawn live by a robot</>}
            sub="Live sketch robot hire for unforgettable events."
            art={homeHero}
            artAlt="Sketch of the Sketch LA robot drawing a guest's portrait while a crowd watches"
        />

        <section className="sl-section">
            <h2>How it works</h2>
            <div className="sl-steps">
                <div className="sl-step"><img src={step1} alt="Guest having a photo taken on a phone" /><h3>Snap a photo</h3><p>We take a photo of your guest.</p></div>
                <div className="sl-step"><img src={step2} alt="Robot arm sketching a portrait on an easel" /><h3>Watch it draw</h3><p>Our robot sketches their portrait in pen, live at your event.</p></div>
                <div className="sl-step"><img src={step3} alt="Hand holding the finished portrait sketch" /><h3>Take it home</h3><p>Your guest leaves with a unique keepsake.</p></div>
            </div>
        </section>

        <section className="sl-section">
            <div className="sl-section-head">
                <h2>Drawing styles and sizes</h2>
                <Chip>Illustrative gallery - placeholder sketches, not actual model outputs.</Chip>
            </div>
            <div className="sl-gallery">
                {[[gal1, 'Da Vinci'], [gal2, 'Michelangelo'], [gal3, 'Raphael'], [gal4, 'Picasso'], [gal5, 'Monet'], [gal6, 'Donatello']].map(([src, name]) =>
                    <figure key={name as string}><img src={src as string} alt={`Placeholder sketch in the ${name} style`} /><figcaption>{name}</figcaption></figure>)}
            </div>
            <div className="sl-sizes">
                <div className="sl-size"><span className="sl-paper sl-p-4x6" />4x6</div>
                <div className="sl-size"><span className="sl-paper sl-p-6x8" />6x8</div>
                <div className="sl-size"><span className="sl-paper sl-p-a4v" />A4 vertical</div>
                <div className="sl-size"><span className="sl-paper sl-p-a4h" />A4 horizontal</div>
            </div>
            <p className="sl-more"><Link to="/styles">Explore the six drawing styles</Link></p>
        </section>

        <section className="sl-section">
            <h2>Custom and Brand</h2>
            <div className="sl-duo">
                <figure>
                    <img src={keepsake} alt="Branded keepsake sketch with a Your Logo placeholder" />
                    <figcaption>Branded keepsake sketch</figcaption>
                </figure>
                <figure>
                    <img src={beach} alt="Custom beach scene sketch" />
                    <figcaption>Custom beach scene sketch <Chip tone="blue">Concept - subject to output testing</Chip></figcaption>
                </figure>
            </div>
            <div className="sl-features">
                <div><IconBox d={icons.frame} /><strong>Themed frames</strong></div>
                <div><IconBox d={icons.user} /><strong>Guest names</strong><span>on every sketch</span></div>
                <div><IconBox d={icons.hash} /><strong>Event hashtags</strong></div>
                <div><IconBox d={icons.palette} /><strong>Colour matched</strong><span>to your brand</span></div>
            </div>
            <p className="sl-more"><Link to="/customisation">See customisation options</Link></p>
        </section>

        <section className="sl-section">
            <h2>Practicalities</h2>
            <div className="sl-practical">
                <div><IconBox d={icons.plug} /><strong>Power requirements</strong></div>
                <div><IconBox d={icons.cube} /><strong>Small footprint</strong></div>
                <div><IconBox d={icons.wrench} /><strong>Quick setup</strong></div>
                <div className="sl-speed">
                    <strong>Speed vs. detail</strong>
                    <span className="sl-slider"><span className="sl-slider-knob" /></span>
                    <span className="sl-slider-ends"><span>Faster, high volume</span><span>More detail, studio quality</span></span>
                </div>
                <div><IconBox d={icons.lock} /><strong>Privacy and photos</strong><span>Placeholder - photo handling details to be confirmed.</span></div>
            </div>
        </section>

        <section className="sl-band">
            <div className="sl-band-art"><img src={booth} alt="Sketch of a Sketch LA exhibition stand with the drawing robot" /></div>
            <div className="sl-band-text">
                <h2>For standbuilders and agencies</h2>
                <ul>
                    <li><IconBox d={icons.stand} /> Your stand or our table</li>
                    <li><IconBox d={icons.pen} /> Branding options</li>
                    <li><IconBox d={icons.calendar} /> Tell us your show dates</li>
                </ul>
                <p className="sl-more"><Link to="/setups">See setups and integration</Link></p>
            </div>
        </section>

        <CtaBand title="Planning an event?" />
    </>;
}

/* ---------- EXPERIENCES ---------- */

const experiences = [
    { img: expCorporate, alt: 'Sketch of the robot drawing at a corporate event', title: 'Corporate events', text: 'Break the ice and send guests home with a drawn portrait.', chips: ['Icebreaker', 'Branded paper', 'Queue-friendly'] },
    { img: expExhib, alt: 'Sketch of the robot attracting a crowd on an exhibition stand', title: 'Exhibitions and trade shows', text: 'Pull a crowd to the stand and keep them watching.', chips: ['Footfall magnet', 'Your stand or our table', 'Branding options'] },
    { img: expUni, alt: 'Sketch of the robot drawing at a university open day', title: 'University open days', text: 'Give prospective students a keepsake of the day.', chips: ['Drawn live on campus', 'Campus-friendly', 'Shareable keepsakes'] },
    { img: expKids, alt: 'Sketch of children colouring robot-drawn outlines at a table', title: 'Kids Colouring Club', text: 'The robot draws bold outlines; kids colour them in at their own table.', chips: ['Separate colouring table', 'Adult supervision required', 'Take-home art'] },
    { img: expDog, alt: 'Sketch of the robot drawing a dog portrait', title: 'Dog Sketchbot', text: 'Portraits of four-legged guests.', chips: ['Concept - subject to output testing', 'Pet portraits', 'Event-friendly'], blueFirst: true },
    { img: expMuseum, alt: 'Sketch of the robot as a live drawing attraction in a venue', title: 'Museums and retail', text: 'A live drawing attraction for venues and shop floors.', chips: ['Indoor friendly', 'Compact footprint', 'Flexible setup'] },
];

function Experiences() {
    return <>
        <Hero title="Experiences" sub="One sketch robot, every kind of event." subBlue art={expHero} artAlt="Sketch of the Sketch LA robot on an exhibition stand" />
        <section className="sl-section">
            {experiences.map((e, i) =>
                <div className={i % 2 ? 'sl-split sl-split-flip' : 'sl-split'} key={e.title}>
                    <div className="sl-split-art"><img src={e.img} alt={e.alt} /></div>
                    <div className="sl-split-text">
                        <h2>{e.title}</h2>
                        <p className="sl-sub">{e.text}</p>
                        <p className="sl-chips">{e.chips.map((c, j) => <Chip key={c} tone={e.blueFirst && j === 0 ? 'blue' : undefined}>{c}</Chip>)}</p>
                    </div>
                </div>)}
        </section>
        <CtaBand title="Planning something different?" />
    </>;
}

/* ---------- STYLES ---------- */

const styleModels = [
    { img: styDavinci, name: 'Da Vinci', text: 'A big-head caricature that still clearly looks like them.' },
    { img: styMichelangelo, name: 'Michelangelo', text: 'Light, even lines and a clean look. The lowest cost per drawing.' },
    { img: styRaphael, name: 'Raphael', text: 'Bold, thick cartoon lines that read from across the room.' },
    { img: styPicasso, name: 'Picasso', text: 'Smooth, confident outlines with a warm, friendly feel.' },
    { img: styMonet, name: 'Monet', text: 'The closest resemblance of them all. A true-to-life portrait.' },
    { img: styDonatello, name: 'Donatello', text: 'Full detailed scenes - and the only model that draws comics.' },
];

function Styles() {
    return <>
        <Hero title="Drawing styles" sub="One photo, six ways to draw it. Pick a style for the event, or let guests choose for themselves." subBlue art={pageHero} artAlt="Sketch of the robot drawing a guest while others watch" />

        <section className="sl-section">
            <h2>One photo, six drawings</h2>
            <div className="sl-split">
                <figure className="sl-photofig">
                    <img src={styPhoto} alt="The source photo used for every style sample" />
                    <figcaption>The photo (Foto Master sample)</figcaption>
                </figure>
                <p className="sl-body">Every sample below was drawn from this one photo by Foto Master's drawing models. Prompt: 'Surfing a big wave on a tropical island'. Simple versions shown; most styles also have a Detailed version.</p>
            </div>
            <div className="sl-styles">
                {styleModels.map((m, i) =>
                    <div className={i % 2 ? 'sl-split sl-split-flip' : 'sl-split'} key={m.name}>
                        <figure className="sl-photofig">
                            <img src={m.img} alt={`${m.name} drawing style sample`} />
                            <figcaption>Foto Master sample - same photo</figcaption>
                        </figure>
                        <div className="sl-split-text">
                            <h3>{m.name}</h3>
                            <p className="sl-body">{m.text}</p>
                        </div>
                    </div>)}
            </div>
            <figure className="sl-comic">
                <img src={styComic} alt="Six-panel comic drawn by the Donatello model" />
                <figcaption>Donatello also draws multi-panel comics - Foto Master sample</figcaption>
            </figure>
            <div className="sl-banner">Plus a free offline model - it runs locally with no internet and draws basic portraits.</div>
            <Attribution>All drawing samples are Foto Master vendor outputs (fotomaster.com), shown for style comparison. They are not Sketch LA or Boothco drawings.</Attribution>
        </section>
        <CtaBand title="Can't pick a favourite?" />
    </>;
}

/* ---------- CUSTOMISATION ---------- */

const customItems = [
    { imgs: [prompts], alt: 'iPad prompt entry screen on the drawing platform', title: 'Custom AI scenes', text: 'The client writes the prompt. One line typed on the iPad, and the whole scene is built around it - guests can pitch their own idea too.', chip: 'Foto Master platform example' },
    { imgs: [survey], alt: 'iPad survey screen asking a guest their name', title: 'Survey based drawings', text: 'Ask a question and put the answer into the artwork - their name, their choices, their story.', chip: 'Foto Master platform example' },
    { imgs: [ipadSketch], alt: 'Sketch of a branded iPad selection screen beside the robot', title: 'Branded iPad experience', text: 'Selection screens, surveys and animated sessions on the guest iPad, styled for the event or brand.', chip: 'Illustrative concept' },
    { imgs: [paperLeft, paperRight], alt: 'Branded paper layout design samples', title: 'Branded paper & layouts', text: "Add a QR code, a logo or a message - or design the whole sheet. Before & After layouts put the guest's photo beside the drawing.", chip: 'Foto Master sample designs' },
    { imgs: [sharing], alt: 'iPad screen offering to share the drawing by email or SMS', title: 'Digital sharing', text: 'The digital copy goes straight to guests by QR code, email or text.', chip: 'Foto Master platform example' },
    { imgs: [gallery], alt: 'Online gallery of event drawings on phone and laptop', title: 'The final gallery', text: "Drawings upload to a branded online gallery guests open by QR code - a live grid of the event's drawings, photos and clips.", chip: 'Foto Master platform example' },
];

function Customisation() {
    return <>
        <Hero title="Customisation" sub="Your event, your branding - from the first tap on the iPad to the final gallery." subBlue art={pageHero} artAlt="Sketch of the robot drawing a guest while others watch" />
        <section className="sl-section">
            {customItems.map((c, i) =>
                <div className={i % 2 ? 'sl-split sl-split-flip' : 'sl-split'} key={c.title}>
                    <div className="sl-split-art">
                        <div className={c.imgs.length > 1 ? 'sl-imgpair' : undefined}>
                            {c.imgs.map((src, j) => <img key={j} src={src} alt={c.alt} />)}
                        </div>
                        <p className="sl-chiprow"><Chip>{c.chip}</Chip></p>
                    </div>
                    <div className="sl-split-text">
                        <h2><span className="sl-num">{i + 1}</span> {c.title}</h2>
                        <p className="sl-sub">{c.text}</p>
                    </div>
                </div>)}
            <Attribution>Interface photos and paper designs are Foto Master platform examples (fotomaster.com), shown to visualise the concept. The exact setup for each event is planned with you.</Attribution>
        </section>
        <CtaBand title="Have a theme in mind?" />
    </>;
}

/* ---------- SETUPS ---------- */

const arms = [
    { img: arm1, alt: 'Single drawing arm on a table', label: 'ONE ARM', blurb: 'A compact rig for tighter stands.' },
    { img: arms12, alt: 'Two drawing arms side by side', label: 'TWO ARMS', blurb: 'Two guests drawn at the same time.' },
    { img: arms123, alt: 'Three drawing arms in a row', label: 'THREE ARMS - THE OG', blurb: 'The original Sketchbot rig, three at once.' },
];

function Setups() {
    return <>
        <Hero title={<>Setups &amp; Integration</>} sub="From a single arm to the full three-arm rig - planned around your stand, your power and your room." art={pageHero} artAlt="Sketch of the robot drawing a guest while others watch" />

        <section className="sl-section">
            <h2><span className="sl-num">1</span> One, two or three arms</h2>
            <p className="sl-body">Match the rig to the event. A single arm for smaller gatherings, two arms for busier floors, or the full three-arm setup - the original Sketchbot rig. Every arm draws its own guest at the same time.</p>
            <div className="sl-arms">
                {arms.map(a =>
                    <div className="sl-arm" key={a.label}>
                        <img src={a.img} alt={a.alt} />
                        <p className="sl-chiprow"><Chip>Foto Master platform example</Chip></p>
                        <h3>{a.label}</h3>
                        <p>{a.blurb}</p>
                    </div>)}
            </div>
        </section>

        <section className="sl-section">
            <h2><span className="sl-num">2</span> Standbuilder integration</h2>
            <p className="sl-body">Having a stand built? We plan the sketchbot zone with your standbuilder before the build starts - footprint, screen position and power, agreed in advance so there are no surprises on the day.</p>
            <div className="sl-diagram">
                <img src={standDiagram} alt="Sketch layout of a stand with live TV and drawing table, width, depth and height marked to confirm" />
            </div>
            <h3 className="sl-listhead">Planned with your standbuilder:</h3>
            <ul className="sl-list">
                <li>Exact footprint and screen position for the setup you book</li>
                <li>Socket positions and cable routes inside the stand</li>
                <li>Power requirements - confirmed from Boothco's technical documents</li>
                <li>Lighting over the drawing area</li>
                <li>Where guests queue and watch while their drawing is made</li>
            </ul>
        </section>

        <section className="sl-section">
            <h2><span className="sl-num">3</span> Boothco supplied tables</h2>
            <p className="sl-body">No hunting for venue furniture. We bring our own tables for the rig and the paper trays, matched to the setup you book.</p>
            <div className="sl-diagram">
                <img src={tableSketch} alt="Sketch of the supplied table with drawing arm, paper and iPad - exact dimensions to confirm" />
            </div>
        </section>

        <section className="sl-section">
            <h2><span className="sl-num">4</span> Live drawing TV</h2>
            <p className="sl-body">Every stroke is mirrored live on the big screen as it happens - the whole room watches the drawing come together. Between drawings, the screen can play sponsor content, promos or videos. Hooks up to an external display, with the screen and mounting planned per event.</p>
            <div className="sl-diagram">
                <img src={screenPoster} alt="Event screen showing the live drawing feed" />
                <p className="sl-chiprow"><Chip>Foto Master platform example</Chip></p>
            </div>
            <Attribution>Setup photos are Foto Master platform examples (fotomaster.com), shown to visualise configurations. Diagrams marked 'Illustrative concept' are sketches, not technical drawings. Exact dimensions, power and equipment lists are confirmed from Boothco's technical documents before each event.</Attribution>
        </section>
        <CtaBand title="Planning your stand?" />
    </>;
}

/* ---------- QUOTE ---------- */

function Quote() {
    return <>
        <Hero title={<>Get a<br />quick quote</>} sub="Tell us about your event - a few details are enough, and we'll help you shape the rest." art={pageHero} artAlt="Sketch of the robot drawing a guest while others watch" />

        <section className="sl-section">
            <div className="sl-formcard">
                <p className="sl-preview-note">Preview only - this form is not connected and nothing is sent or stored.</p>
                <fieldset disabled>
                    <label>Event date</label>
                    <input type="text" placeholder="Select a date" readOnly />
                    <label>Venue or city</label>
                    <input type="text" placeholder="e.g. Manchester, or your venue name" readOnly />
                    <label>Expected guests</label>
                    <div className="sl-chipset">
                        <button type="button">Under 50</button><button type="button">50 - 150</button><button type="button">150 - 300</button><button type="button">300+</button><button type="button">Not sure yet</button>
                    </div>
                    <label>What are you interested in?</label>
                    <div className="sl-chipset">
                        <button type="button">One arm</button><button type="button">Two arms</button><button type="button">Three arms - the OG</button><button type="button">Live drawing TV</button><button type="button" className="is-selected">Not sure - advise me</button>
                    </div>
                    <label>Anything else?</label>
                    <textarea placeholder="Theme, branding, timing or questions - anything that helps" rows={3} readOnly />
                    <label>Your name</label>
                    <input type="text" placeholder="Your name" readOnly />
                    <label>Email</label>
                    <input type="email" placeholder="you@example.com" readOnly />
                    <label>Phone (optional)</label>
                    <input type="tel" placeholder="Your number" readOnly />
                    <button type="button" className="sl-btn sl-btn-block">Send my enquiry</button>
                    <p className="sl-formnote">No commitment - this starts a conversation, not a booking.</p>
                </fieldset>
            </div>
        </section>

        <section className="sl-section">
            <h2>What happens next</h2>
            <ol className="sl-next">
                <li><strong>We look at your date and venue</strong><span>We check the date and talk through the space, power and layout - with you, and your standbuilder if you have one.</span></li>
                <li><strong>You get a quote shaped to your event</strong><span>A clear quote and a setup plan: which rig, which tables, and how the drawing flow works for your guests.</span></li>
                <li><strong>We set up, your guests get drawn</strong><span>On the day we bring the rig, the tables and the paper - and the drawing starts.</span></li>
            </ol>
        </section>

        <section className="sl-section">
            <h2>Prefer to talk it through?</h2>
            <p className="sl-body">Skip the form - message us and we'll work it out together.</p>
            <p className="sl-deadbtns">
                <span className="sl-btn sl-btn-outline" aria-disabled="true">Message us on WhatsApp</span>
                <span className="sl-btn sl-btn-outline" aria-disabled="true">Email us</span>
            </p>
            <p className="sl-formnote">Buttons connect to Boothco's WhatsApp and email when the site goes live.</p>
        </section>
    </>;
}

/* ---------- APP ---------- */

export function App() {
    return <div className="sl-site">
        <SiteNav />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/styles" element={<Styles />} />
                <Route path="/customisation" element={<Customisation />} />
                <Route path="/setups" element={<Setups />} />
                <Route path="/quote" element={<Quote />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </main>
        <Footer />
    </div>;
}
