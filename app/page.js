"use client";
import { useState } from "react";
import {
  Menu,
  Search,
  LayoutGrid,
  Layers3,
  PanelsTopLeft,
  Spade,
  ShieldCheck,
  Zap,
  Gift,
  Headphones,
  Crown,
} from "lucide-react";
const icons = {
  menu: Menu,
  search: Search,
  grid: LayoutGrid,
  cards: Layers3,
  slots: PanelsTopLeft,
  spade: Spade,
  shield: ShieldCheck,
  bolt: Zap,
  gift: Gift,
  headset: Headphones,
};
function Icon({ name, size = 28 }) {
  const LucideIcon = icons[name];
  return (
    <LucideIcon
      className="icon"
      size={size}
      strokeWidth={2.25}
      aria-hidden="true"
    />
  );
}
function TelegramIcon({ size = 30 }) {
  return (
    <img
      className="telegramIcon"
      src="/telegram-icon.png"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
    />
  );
}
const cats = [
  ["grid", "All Apps", "green"],
  ["cards", "Rummy", "orange"],
  ["slots", "Slots", "purple"],
  ["spade", "Poker", "blue"],
];
const daily = [
  ["LinkPay", "Daily Use", "₹100", "₹100", "LINKPAY", "#1260a0", "https://mobile.linkpulsex.com/#/pages/auth/register?invite=i4H0Vv", "/linkpay.png", "4%"],
  ["DDPay", "Daily Use", "₹100", "₹100", "DDPAY", "#0b5979", "https://dd-pay.net/#/?invite=Dcgv02", "/ddpay.png", "4%"],
  ["UonoPay", "Daily Use", "₹150", "₹100", "UONO", "#6b3fa0", "https://omnicloud-down.com/#/?invite=66xlGU", "/uonopay.jpg", "3.8%"],
  ["JDPay", "Daily Use", "₹100", "₹100", "JDPAY", "#1a7a5c", "https://jdpay88888886.com/#/?invite=5446bp", "/jdpay.jpg", "3.7%"],
  ["ComePay", "Daily Use", "₹100", "₹100", "COME", "#8B4513", "https://comepaydown.net/#/?invite=xtMXNS", "/comepay.jpg", "3% + ₹3"],
  ["Wecoin", "Daily Use", "₹100", "₹100", "WECOIN", "#c0392b", "https://install.wecoin.top/#/?invite=ND1Wwm", "/wecoin.jpg", "4.2%"],
  ["UonoHub", "Daily Use", "₹400", "₹100", "UHUB", "#16a085", "https://h5.youuono.com/?uid=93945318", "/uonohub.jpg", "4+2"],
  ["WDPay", "Daily Use", "₹210", "₹100", "WDPAY", "#2980b9", "https://market.earnrupee.in/download/luodiye.html?invite=gNSQQm", "/wdpay.jpg", "4.1%"],
  ["Shaktipay", "Daily Use", "₹200", "₹100", "SHAKTI", "#d35400", "https://shaktipay.app/#/?invite=aox01H", "/shaktipay.jpg", "3.8%"],
];
const high = [
  ["BoPay", "Bonus", "₹1600", "₹20,000", "BOPAY", "#8B0000", "https://store.richpay.info/#/rs/srbsN4LVG5", "/bopay.jpg", "", "Profit", "Transaction"],
  ["GMPay", "Bonus", "₹850", "₹13,000", "GMPAY", "#2c3e50", "https://web.gmpay.top/#/rs/3LRdnx3Reb", "/gmpay.jpg", "", "Profit", "Transaction"],
  ["SixPay", "Bonus", "₹450", "₹5,000", "SIXPAY", "#8e44ad", "https://sixpay.vip/#/rs/QzUoVBycDG", "/sixpay.jpg", "", "Profit", "Transaction"],
  ["ViviPay", "Bonus", "₹260", "₹5,000", "VIVIPAY", "#1abc9c", "https://vivipayagent.com/#/rs/O72qsM7dzh", "/vivipay.jpg", "", "Profit", "Transaction"],
  ["TivraPay", "Bonus", "₹450", "₹4,000", "TIVRAPAY", "#e67e22", "https://zxcvwe.wiki/#/rs/PrZTIGlEyg", "/tivrapay.jpg", "", "Profit", "Transaction"],
  ["YayaPay", "Bonus", "₹300", "₹5,000", "YAYAPAY", "#27ae60", "https://refer.yavip.top/#/rs/vLahrqSeX7", "/yayapay.jpg", "", "Profit", "Transaction"],
  ["ZipPay", "Bonus", "₹750", "₹8,000", "ZIPPAY", "#f39c12", "https://web.zippay.wiki/#/rs/D76Q07xysU", "/zippay.jpg", "", "Profit", "Transaction"],
];
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <button
          className="iconBtn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name="menu" size={38} />
        </button>
        <h1>Buy Sell App</h1>
        <button className="iconBtn" aria-label="Search">
          <Icon name="search" size={38} />
        </button>
      </header>
      {open && <div className="drawerOverlay" onClick={() => setOpen(false)} />}
      <div className={`drawer ${open ? 'open' : ''}`}>
        <b>Menu</b>
        <a href="/" onClick={() => setOpen(false)}><span style={{color:'#078b13'}}><Icon name="grid" size={20} /></span> Home</a>
        <a href="/" onClick={() => setOpen(false)}><span style={{color:'#e67e22'}}><Icon name="cards" size={20} /></span> All Apps</a>
        <a href="/" onClick={() => setOpen(false)}><span style={{color:'#8e44ad'}}><Icon name="gift" size={20} /></span> Latest Bonuses</a>
        <a href="/privacy" onClick={() => setOpen(false)}><span style={{color:'#2980b9'}}><Icon name="shield" size={20} /></span> Privacy Policy</a>
        <a href="/terms" onClick={() => setOpen(false)}><span style={{color:'#c0392b'}}><Icon name="bolt" size={20} /></span> Terms &amp; Conditions</a>
        <div className="drawerSpacer" />
        <a className="drawerTelegram" href="https://t.me/Bablulooters1" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          <TelegramIcon size={22} />
          Support
        </a>
      </div>
    </>
  );
}
function Hero() {
  return (
    <a className="hero bannerHero" href="https://t.me/+5Cub9Fh9aClmNGRl" target="_blank" rel="noopener noreferrer" aria-label="Join the Buy Sell App Telegram channel">
      <img src="/header-banner.png" alt="Earn With Babu — trusted real apps and daily updates" />
    </a>
  );
}
const topBonusApps = [
  { rank: 2, name: "LinkPay", image: "/linkpay.png", url: "https://mobile.linkpulsex.com/#/pages/auth/register?invite=i4H0Vv" },
  { rank: 1, name: "Shaktipay", image: "/shaktipay.jpg", url: "https://shaktipay.app/#/?invite=aox01H" },
  { rank: 3, name: "DDPay", image: "/ddpay.png", url: "https://dd-pay.net/#/?invite=Dcgv02" },
];
function TopBonus() {
  return (
    <section className="topBonus" aria-label="Top featured apps">
      <div className="topBonusTitle">
        <span>TOP 3 APPS</span>
        <h2>Top Featured Apps</h2>
        <p>Popular apps, updated today</p>
      </div>
      <div className="bonusPodium">
        {topBonusApps.map((app) => (
          <article className={`podiumCard rank${app.rank}`} key={app.name}>
            {app.rank === 1 && <b className="winnerTag"><Crown size={13} fill="currentColor" /> Top 1</b>}
            <div className="podiumImage">
              <img src={app.image} alt={`${app.name} app`} />
              <strong>{app.rank}</strong>
            </div>
            <h3>{app.name}</h3>
            <p>Verified App</p>
            <a className="podiumDownload" href={app.url} target="_blank" rel="noopener noreferrer">Download</a>
          </article>
        ))}
      </div>
    </section>
  );
}
function Listing({ x, i }) {
  return (
    <article className="listing">
      <div
        className="thumb"
        style={{ background: x[7] ? `transparent` : `linear-gradient(145deg,${x[5]},#031a0c)` }}
      >
        <span className={"rank n" + i}>{i}</span>
        {x[7] ? <img className="thumbImg" src={x[7]} alt={x[0]} /> : <strong>{x[4]}</strong>}
        {!x[7] && <small>RUMMY</small>}
      </div>
      <div className="info">
        <div>
          <h3>{x[0]}</h3>
          <mark>{x[1]}</mark>
        </div>
        <strong>{x[9] || "Commission"}: {x[9] ? x[2] : (x[8] || "4%")}</strong>
        <p>{x[10] || (x[7] ? "Sign Up Bonus" : "Min Withdrawal")}: {x[10] ? x[3] : (x[7] ? x[2] : x[3])}</p>
      </div>
      <div className="assure">
        <span>
          <Icon name="shield" size={21} />
          <small>Secure</small>
        </span>
        <span>
          <Icon name="bolt" size={21} />
          <small>Fast Payout</small>
        </span>
      </div>
      {x[6] ? <a className="deal" href={x[6]} target="_blank" rel="noopener noreferrer"><span>Download</span></a> : <button className="deal"><span>Download</span></button>}
    </article>
  );
}
function Footer() {
  return (
    <footer>
      <div className="footerTop">
        <div className="footerBrand">
          <span>B</span>
          <div>
            <b>Buy Sell App</b>
            <small>Trusted apps. Better rewards.</small>
          </div>
        </div>
        <div className="footerLinks">
          <a href="#">Home</a>
          <a href="#">All Apps</a>
          <a href="#">Bonuses</a>
          <a href="https://t.me/Bablulooters1" target="_blank" rel="noopener noreferrer">Support</a>
        </div>
      </div>
      <div className="footerNote">
        <Icon name="shield" size={18} />
        <p>
          Play responsibly. Check every app&apos;s terms before downloading.
        </p>
      </div>
      <div className="footerBottom">
        <small>© 2026 Buy Sell App. All rights reserved.</small>
        <span><a href="/privacy" style={{color:'inherit',textDecoration:'none'}}>Privacy</a> · <a href="/terms" style={{color:'inherit',textDecoration:'none'}}>Terms</a></span>
      </div>
    </footer>
  );
}
export default function Home() {
  const [tab, setTab] = useState("daily"),
    data = tab === "daily" ? daily : high;
  return (
    <main>
      <Header />
      <Hero />
      <TopBonus />
      <aside className="community">
        <i>
          <TelegramIcon size={37} />
        </i>
        <div>
          <b>Join Our Telegram Channel</b>
          <p>Get latest updates, new apps &amp; bonuses</p>
        </div>
        <a className="telegramJoin" href="https://t.me/+5KZPfOPmzEMxZjQ1" target="_blank" rel="noopener noreferrer">
          <TelegramIcon size={23} />
          <span>Join Now</span>
        </a>
      </aside>
      <div className="tabs">
        <button
          className={tab === "daily" ? "active" : ""}
          onClick={() => setTab("daily")}
        >
          <Icon name="shield" size={20} />
          Daily Use
        </button>
        <button
          className={tab === "high" ? "active" : ""}
          onClick={() => setTab("high")}
        >
          <Icon name="gift" size={20} />
          High Bonus
        </button>
      </div>
      <div className="heading">
        <i />
        <span>♣</span>
        <h2>{tab === "daily" ? "DAILY USE APPS" : "HIGH BONUS APPS"}</h2>
        <span>♣</span>
        <i />
      </div>
      <section className="list">
        {data.map((x, i) => (
          <Listing x={x} i={i + 1} key={x[0]} />
        ))}
      </section>
      <section className="trust">
        {[
          ["shield", "100% Trusted", "Safe & Secure"],
          ["bolt", "Fast Withdraw", "Instant Payouts"],
          ["gift", "Great Bonuses", "Best Signup Bonus"],
          ["headset", "24×7 Support", "Always Here"],
        ].map((x) => (
          <div key={x[1]}>
            <Icon name={x[0]} />
            <span>
              <b>{x[1]}</b>
              <small>{x[2]}</small>
            </span>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
