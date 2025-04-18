import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2>ALGO ry</h2>
          <p>Yhteystiedot</p>
          <p>Agora, Mattilanniemi 2, 40100 Jyväskylä</p>
          <p>pj@algojkl.com</p>
          <p>
            <strong>© Algo ry, 2025</strong>
          </p>
        </div>

        <nav className="footer-nav">
          <ul>
            <div>
              <h2>NAVIGAATIO</h2>
              <li>
                <Link to="/">ETUSIVU</Link>
              </li>
              <li>
                <Link to="/tapahtumat">TAPAHTUMAT</Link>
              </li>
              <li>
                <Link to="/yhteistyot">YHTEISTYÖT</Link>
              </li>
              <li>
                <Link to="/fuksit">UUDET OPISKELIJAT</Link>
              </li>
              <li>
                <Link to="/hakijalle">HAKIJAT</Link>
              </li>
            </div>
            <div>
              <h2>TOIMIHENKILÖT</h2>
              <li>
                <Link to="/hallitus">HALLITUS</Link>
              </li>
              <li>
                <Link to="/aktiivit">AKTIIVIT</Link>
              </li>
            </div>
            <div>
              <h2>VIRALLISET DOKUMENTIT</h2>
              <li>
                <Link to="/saannot">SÄÄNNÖT</Link>
              </li>
              <li>
                <Link to="/ohjesaannot">OHJESÄÄNNÖT</Link>
              </li>
              <li>
                <Link to="/seloste">REKISTERISELOSTE</Link>
              </li>
              <li>
                <Link to="/dokumentit">DOKUMENTIT</Link>
              </li>
              <li>
                <Link to="/kunniagalleria">KUNNIAGALLERIA</Link>
              </li>
              <li>
                <Link to="/periaatteet">TOIMINNAN PERIAATTEET</Link>
              </li>
            </div>
            <div>
              <h2>JÄSENILLE</h2>
              <li>
                <Link to="/edut">JÄSENEDUT</Link>
              </li>
              <li>
                <Link to="/kerhotoiminta">KERHOTOIMINTA</Link>
              </li>
              <li>
                <Link to="/rekryt">REKRYT</Link>
              </li>
              <li>
                <Link to="/lomakkeet">LOMAKKEET</Link>
              </li>
              <li>
                <Link to="/kansainvalisyys">KANSAINVÄLISYYS</Link>
              </li>
              <li>
                <Link to="/kahvi">KATTILAN KAHVIKAMERA</Link>
              </li>
              <li>
                <Link to="/salaisuudet">SALAISUUDET</Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>

      <div className="feedback-comms">
        <div className="feedback">
          <h3>Haluatko antaa meille palautetta?</h3>
          <p>
            Se onnistuu, kun täytät alla olevan lomakkeen. Palautteet
            käsitellään täysin anonyymitse
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_uGBf6NpWvJi_v3o7w3iJ2flnCMrxnNWMi6hIgMhD3kPBAw/viewform">
            Palautelomake
          </a>
        </div>
        <div className="feedback">
          <h3>Algo ry:n Viestintäkanavat</h3>
          <p>
            <a href="https://t.me/+8y92cuFA8bozNGI0">Telegram-kanava</a>
          </p>
          <p>
            <a href="https://t.me/+ewJj_alb0eo2Njc0">Telegram-ilmoituskanava</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
