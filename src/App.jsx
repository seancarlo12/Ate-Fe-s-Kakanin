import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProductCard from "./components/ProductCard.jsx";
import SectionTitle from "./components/SectionTitle.jsx";
import Lenis from "lenis";
import {
    WovenDivider,
    BilaoPattern,
    BananaLeaf,
    CoconutIcon,
    SoftBlob,
} from "./components/Decorations.jsx";
import "./App.css";

const PRODUCTS = [
    {
        name: "Bibingkang Kanin",
        image:
            "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/488069000_4038862193039410_7404488757201088320_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2034&ctp=s2048x2034&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGwCp_9zj0la-K9F-ve9GxpJtlUvQfm6bom2VS9B-bpuotafdMxciKUr5WjNQwge_N8om5kHPSThBYxFPFpjrl5&_nc_ohc=_G8NYKyuBrsQ7kNvwE9NrFh&_nc_oc=Adqf0toNrVRxrjbZfdmN4n4Mll6gGf07uvl2yoY1YcVTAdVECIpmF58PkdTK7aLZmDM&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=NaST51wyTi-mduKpPoRNGQ&_nc_ss=7b2a8&oh=00_AQBD1Xdx3op5d_Dxmw0ZhK4BFmlJKAuENJ0wUsADn6o9Fg&oe=6A4C6E52",
        description: "Traditional baked rice cake with a soft, chewy texture.",
        tags: ["Holiday Favorite"],
    },
    {
        name: "Ube Biko Yema",
        image:
            "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/489306747_4041012689491027_1307521356344398262_n.jpg?stp=dst-jpg_tt6&cstp=mx2043x2048&ctp=s2043x2048&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG92GVYO2oLyUGUnuo65Bz_MkiVPjwqijQySJU-PCqKNBv09bsMXZiyX5QPhycGHD63EBpiXXL7nU3JtjLU6IWm&_nc_ohc=Pv8O2FBCr-0Q7kNvwFQXI8N&_nc_oc=AdoxiUBxVHTTw1kUA_iA5t0nJ02Toxw1_w73U4ouZuRCpetA8z3ezkT8woy3DQV893Q&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=4t1FWcfDA7fI-xJSWGWaaA&_nc_ss=7b2a8&oh=00_AQC-Bt6etkiXqKe_gXt2pxKqGf2oSiwBfjwsT1fCaTgQCw&oe=6A4F3C2E",
        description:
            "Chewy ube sticky rice topped with rich, creamy yema.",
        tags: ["Ube", "Yema", "Creamy"],
    },
    {
        name: "Sapin-Sapin",
        image:
            "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/488355206_4038862509706045_4272303713698006342_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2021&ctp=s2048x2021&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE2IFz8AXZOosGxsc5bMuiTWpoLzg_AollamgvOD8CiWR9K5MzlBJLu8msX_Wpnx4HQLt0nLI8DHUjW30Rtn7-V&_nc_ohc=ha_8pigo7NoQ7kNvwE__Nej&_nc_oc=Adr55EZruJziCPH7VDGTh9xd05gfziP_BfywNGM9AifxC8iZaTDy8Ey4U7JmLeI5ptk&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=jJCJLXvBBk_sNgxnSqMw7Q&_nc_ss=7b2a8&oh=00_AQB1R21Pe1qy166keA46MODq_FZP_CjW6VVkEV8Wj3OybA&oe=6A4C88DE",
        description:
            "Colorful layered glutinous rice cake with a rich coconut finish.",
        tags: ["Colorful", "Fiesta Favorite"],
    },
    {
        name: "Biko",
        image:
            "https://tastebudsschoolblog.wordpress.com/wp-content/uploads/2020/05/fb_img_15899729820476112.jpg",
        description:
            "Sticky rice simmered in coconut milk and dark muscovado sugar.",
        tags: ["Sweet", "Traditional"],
    },
    {
        name: "Palitaw",
        image:
            "https://www.lovefilipinofood.com/wp-content/uploads/2026/03/shredded-coconut-sesame-palitaw-easy.jpg",
        description: "Flattened rice cakes rolled in coconut and toasted sesame.",
        tags: ["Sesame", "Light Snack"],
    },
    {
        name: "Kutsinta",
        image:
            "https://scontent.fcrk2-3.fna.fbcdn.net/v/t39.30808-6/492360268_1217521493711885_8511440910237840196_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEDI44oleB515YvptmSCiYk9iCCECl0XeP2IIIQKXRd4zTt5WSHIp0idE1iY5aFR52T3Y2FV7J7UN4itqfZfnim&_nc_ohc=z-1Va1w3_twQ7kNvwEwi4y0&_nc_oc=AdpKyKmrEGAQ7X8lfhtNV9iAp_MMpg4Q6UND0fl201Azo1eVsz1EscPpqh7F8Bi_JXU&_nc_zt=23&_nc_ht=scontent.fcrk2-3.fna&_nc_gid=Cuu9mSBrHdqAFX-U6TtZFw&_nc_ss=7b2a8&oh=00_AQBIQU5u8JlXYFXffBp32zZjwg7f0nufbwZJ77osv06aaQ&oe=6A4C5636",
        description:
            "Chewy brown rice cakes glazed and served with fresh grated coconut.",
        tags: ["Chewy", "Coconut"],
    },
    {
        name: "Putong Puti",
        image:
            "https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.6435-9/118152306_191999315617496_240518967618305424_n.jpg?stp=dst-jpg_tt6&cstp=mx960x719&ctp=s960x719&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF8NUIH1E6Y9_Z9RmGDpWsma47ro5A3ToprjuujkDdOiv3x4ymPBZ3y0GiyN4wpdybA_OTEMf6mvnYaqzjzc1ZR&_nc_ohc=lnZjqQA1D3wQ7kNvwH5-VFf&_nc_oc=AdrUEA2cEBITXo_trSCmnHEJWeAElChDTrJDivd4pORjlwgKawHbLlMd3nRo6ije3Ao&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=yj8xUpairREX3lJk3h2fvw&_nc_ss=7b2a8&oh=00_AQDa8X5jwGY_-Jd40_mIHvfE-xFXnJmXQUbQT-PsrodZ7g&oe=6A6E290A",
        description: "Soft steamed rice cakes with a delicate, pillowy bite.",
        tags: ["Steamed", "Classic"],
    },
    {
        name: "Combilao",
        image:
            "https://scontent.fcrk2-4.fna.fbcdn.net/v/t39.30808-6/502523624_4097485693843726_8321725940645247160_n.jpg?stp=dst-jpg_tt6&cstp=mx720x1367&ctp=s720x1367&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFUFtkZkc8UVKXpAkmQ-nyChV_OFhj4TEGFX84WGPhMQRnMGK_mXX7RIGAw7J9BHFXZ2NMQmeotWDm5ZiYkAFXH&_nc_ohc=8SDmi4Tir_oQ7kNvwERBBa-&_nc_oc=AdqtDHx9BxtRkS_Fsrp-gTPh07zA55H2ydhRvmpWR11aPLVC363JNobi115IgR8kvuk&_nc_zt=23&_nc_ht=scontent.fcrk2-4.fna&_nc_gid=0AZE0j4MQDzvDY0JyPlLOA&_nc_ss=7b2a8&oh=00_AQDdsdzsqEaDpgNdVpsQIOAPPu5JjmVr3lJFd2yVtJmebA&oe=6A4F406C",
        description:
            "Mix and match your favorite kakanin in one bilao.",
        tags: ["Mix & Match", "Custom"],
    },
];

const WHY_CHOOSE_US = [
    {
        icon: "🌅",
        title: "Fresh Daily",
        description: "Every batch is cooked fresh each morning, never held over.",
    },
    {
        icon: "📜",
        title: "Traditional Recipe",
        description: "Recipes passed down through generations of the family.",
    },
    {
        icon: "🎁",
        title: "Affordable Bilao Packages",
        description: "Generous bilao trays priced for every kind of celebration.",
    },
    {
        icon: "🎉",
        title: "Perfect for Events",
        description:
            "Fiestas, birthdays, reunions — kakanin made for the occasion.",
    },
    {
        icon: "📍",
        title: "Locally Made",
        description: "Sourced and prepared right here in the community.",
    },
    {
        icon: "❤️",
        title: "Made with Love",
        description: "Every piece handled with the same care as a home kitchen.",
    },
];

const GALLERY_IMAGES = [
    {
        label: "Bilao spread for fiesta",
        size: "large",
        src: "https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/487784663_991986173140413_3556332356868784681_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF09hsDTo4eoHJHK1XkwoJvuweo6qWjwJy7B6jqpaPAnLtdUXjBs8kPqBlugN33OUKt0bMF47MSA2b_1xOi4xsL&_nc_ohc=EVK7BwUsJS0Q7kNvwFs54dB&_nc_oc=Ado4XOGBfD2wN1OwjJSHXKnl539rfVJhMyy011gLfG2bJSeP3QvrWWnUgRx3adCJqgQ&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=hrj0a9K2ubOJvB_A8FyV_A&_nc_ss=7b2a8&oh=00_AQA2_ghRkofy85ejVGkTo5VNLwlP1N6hUVFzk1o4aPxOYw&oe=6A4DD007",
    },
    {
        label: "Fresh biko close-up",
        size: "small",
        src: "https://images.yummy.ph/yummy/uploads/2023/03/biko-300x169.jpg",
    },
    {
        label: "Sapin-sapin layers",
        size: "small",
        src: "https://i.ytimg.com/vi/-5X8g2AB3zM/maxresdefault.jpg",
    },
    {
        label: "Steaming kakanin trays",
        size: "medium",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCO1zVxaPn_Mjr17jgW54dn_kMZhuxohiKvRjbI2C1oQoONBPK1bPmeoU&s=10",
    },
    {
        label: "Sapin-Sapin / Biko Combilao",
        size: "medium",
        src: "https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/487126235_4030135523912077_5097410989904547097_n.jpg?stp=dst-jpg_tt6&cstp=mx1965x2048&ctp=s1965x2048&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGf77VVegs-gq29-lNrFMD-O-jpPn_0HqE76Ok-f_QeoTsZV72v4qsF0IREE-PDBTZTSlJW0doPE3QO0AWvqDw8&_nc_ohc=MXJKGbenkxAQ7kNvwEV28XE&_nc_oc=AdrQf8UPPJPD-CCLgDALGrxE6xZXqwGnfaCRwAH_jSXucdL65OCtLT54HxwjbxUTwxE&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=2Fu32DORlyufBpm4-S1Bew&_nc_ss=7b2a8&oh=00_AQA5fYv9ho5nYXmoF1qNBzZFN1B3tUYwUZGGlFplOBYQvQ&oe=6A4F2319",
    },
    {
        label: "Bibingka on clay pot",
        size: "small",
        src: "https://img.lazcdn.com/g/p/c65d841c74ca200dc5a57d4fee399c54.jpg_720x720q80.jpg_.webp",
    },
    {
        label: "Ate Fe's preparing orders",
        size: "small",
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4uKQqhHropB7HVbhaPf51pO9iEEa51KmImGDbX2-_i7IHHd7JsnXadJGHW9EjC6BAWFvYnpF_4UtGQPgFh8VqdOOSeiZ96OKTNfXDLP1W4OIQ5mcyzhK1s1OUhcXjul09ew9-heHZTg/s1600/FullSizeRender.jpg",
    },
    {
        label: "Kakanin gift box",
        size: "large",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxXuTioGdSZxcvnhBw1i1Tz2RPoC0PkEyyk4RQhjX7IMr_ohJ7jB9hNJf&s=10",
    },
];

/**
 * Sets up a scroll-triggered fade-in for any element with the "reveal" class.
 * Kept as one shared observer so we don't attach a listener per section.
 */
function useScrollReveal() {
    useEffect(() => {
        const revealEls = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal--visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 },
        );
        revealEls.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

function App() {
    useScrollReveal();
    const productsRef = useRef(null);

    const scrollToProducts = () => {
        productsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <>
            <Navbar />

            <main>
                {/* ================= Hero Section ================= */}
                <section id="home" className="hero">
                    <SoftBlob className="hero__blob hero__blob--top" tone="gold" />
                    <SoftBlob className="hero__blob hero__blob--bottom" tone="pandan" />
                    <BananaLeaf className="hero__leaf hero__leaf--left" />
                    <BananaLeaf className="hero__leaf hero__leaf--right" />

                    <div className="container hero__inner">
                        <div className="hero__content reveal">
                            <span className="eyebrow-tag">Homemade Since Day One</span>
                            <h1 className="hero__heading">
                                Traditional Filipino Kakanin{" "}
                                <span className="hero__heading-accent">Made with Love</span>
                            </h1>
                            <p className="hero__text">
                                Handcrafted rice cakes and delicacies made fresh daily using traditional recipes—perfect for every fiesta, gathering, or quiet afternoon craving.
                            </p>
                            <div className="hero__actions">
                                <button className="btn btn--primary" onClick={scrollToProducts}>
                                    View Our Kakanin
                                </button>
                                <a href="#contact" className="btn btn--secondary">
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        <div className="hero__visual reveal">
                            <BilaoPattern className="hero__bilao" />
                            <div className="hero__bilao-center">
                                <span className="hero__bilao-emoji" aria-hidden="true">
                                    <img
                                        src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/488069000_4038862193039410_7404488757201088320_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2034&ctp=s2048x2034&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGwCp_9zj0la-K9F-ve9GxpJtlUvQfm6bom2VS9B-bpuotafdMxciKUr5WjNQwge_N8om5kHPSThBYxFPFpjrl5&_nc_ohc=_G8NYKyuBrsQ7kNvwE9NrFh&_nc_oc=Adqf0toNrVRxrjbZfdmN4n4Mll6gGf07uvl2yoY1YcVTAdVECIpmF58PkdTK7aLZmDM&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=NaST51wyTi-mduKpPoRNGQ&_nc_ss=7b2a8&oh=00_AQBD1Xdx3op5d_Dxmw0ZhK4BFmlJKAuENJ0wUsADn6o9Fg&oe=6A4C6E52"
                                        alt="Featured Bilao"
                                    />
                                </span>
                                {/* Replace with real photo of a filled bilao tray. */}
                            </div>
                            {/* <CoconutIcon className="hero__coconut" /> */}
                        </div>
                    </div>
                </section>

                <WovenDivider tone="pandan" />

                {/* ================= Featured Kakanin Section ================= */}
                <section id="products" className="products" ref={productsRef}>
                    <div className="container">
                        <SectionTitle
                            eyebrow="Our Kakanin"
                            title="Featured Kakanin"
                            description="Every piece is steamed, baked, or rolled fresh — the same recipes Ate Fe has trusted for years."
                        />
                        <div className="products__grid">
                            {PRODUCTS.map((product, index) => (
                                <div
                                    key={product.name}
                                    className="reveal"
                                    style={{ transitionDelay: `${(index % 4) * 80}ms` }}
                                >
                                    <ProductCard {...product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <WovenDivider tone="gold" flip />

                {/* ================= About Section ================= */}
                <section id="about" className="about">
                    <BananaLeaf className="about__leaf about__leaf--top" />
                    <BananaLeaf className="about__leaf about__leaf--bottom" />
                    <div className="container about__inner">
                        <div className="about__visual reveal">
                            <div className="about__frame about__frame--quote">
                                <ul className="about__testimonials">
                                    <li className="about__testimonial">
                                        <blockquote>
                                            "Tastes just like homemade. You can tell it's made with real love"
                                            <br />
                                        </blockquote>
                                    </li>
                                    <li className="about__testimonial">
                                        <blockquote>
                                            "Fresh, soft, and never too sweet. This is the
                                            biko I grew up with."
                                        </blockquote>
                                    </li>
                                    <li className="about__testimonial">
                                        <blockquote>
                                            "You can taste the difference when something is
                                            made the traditional way. Worth every peso."
                                        </blockquote>
                                        <br /><br />
                                        <cite className="about__testimonial-author">— Loyal Customers</cite>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="about__content reveal">
                            <span className="eyebrow-tag">Our Story</span>
                            <h2 className="about__heading">
                                A Family Kitchen, Three Generations Strong
                            </h2>
                            <p className="about__text">
                                Ate Fe learned to cook kakanin at her mother's side, stirring
                                biko over a wood fire long before sunrise. Today, that same
                                recipe book guides every batch that leaves our kitchen — fresh
                                ingredients, traditional techniques, and nothing rushed.
                            </p>
                            <ul className="about__list">
                                <li>Family recipes passed down for generations</li>
                                <li>Fresh, locally-sourced ingredients</li>
                                <li>Traditional cooking methods, no shortcuts</li>
                                <li>Prepared daily in small, careful batches</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <WovenDivider tone="pandan" />

                {/* ================= Why Choose Us Section ================= */}
                <section className="why-us">
                    <div className="container">
                        <SectionTitle
                            eyebrow="Why Ate Fe's"
                            title="Why Choose Us"
                            description="What makes every bilao worth ordering again."
                        />
                        <div className="why-us__grid">
                            {WHY_CHOOSE_US.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="why-us__card reveal"
                                    style={{ transitionDelay: `${(index % 3) * 80}ms` }}
                                >
                                    <span className="why-us__icon" aria-hidden="true">
                                        {item.icon}
                                    </span>
                                    <h3 className="why-us__title">{item.title}</h3>
                                    <p className="why-us__description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <WovenDivider tone="gold" flip />

                {/* ================= Gallery Section ================= */}
                <section id="gallery" className="gallery">
                    <div className="container">
                        <SectionTitle
                            eyebrow="A Peek Inside"
                            title="Gallery"
                            description="Moments from the kitchen, the market, and the tables we've been part of."
                        />
                        <div className="gallery__grid">
                            {GALLERY_IMAGES.map((image, index) => (
                                <div
                                    key={image.label}
                                    className={`gallery__item gallery__item--${image.size} reveal`}
                                    style={{ transitionDelay: `${(index % 4) * 60}ms` }}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.label}
                                        className="gallery__image"
                                    />

                                    <span className="gallery__placeholder-text">
                                        {image.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <WovenDivider tone="pandan" />

                {/* ================= Contact Section ================= */}
                <section id="contact" className="contact">
                    <div className="container contact__inner">
                        <div className="reveal">
                            <SectionTitle
                                eyebrow="Get in Touch"
                                title="Order Your Bilao Today"
                                align="left"
                                description="Reach out and we'll help you plan the perfect kakanin spread for your next occasion."
                            />

                            <ul className="contact__details">
                                <li>
                                    <span className="contact__label">Facebook</span>
                                    <span>facebook.com/esperanza.tolentino.543</span>
                                </li>
                                <li>
                                    <span className="contact__label">Phone</span>
                                    <span>+63 938 979 1860</span>
                                </li>
                                <li>
                                    <span className="contact__label">Email</span>
                                    <span>tolentinoesie@gmail.com</span>
                                </li>
                                <li>
                                    <span className="contact__label">Address</span>
                                    <span>
                                        Cabanatuan City, Nueva Ecija,Philippines
                                    </span>
                                </li>
                            </ul>

                            <div className="contact__actions">
                                <a
                                    href="https://web.facebook.com/esperanza.tolentino.543"
                                    className="btn btn--primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Message us on Facebook
                                </a>
                            </div>
                        </div>

                        <div className="contact__visual reveal">
                            <BilaoPattern className="contact__bilao" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;
