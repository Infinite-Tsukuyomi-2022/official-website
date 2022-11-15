import styles from "./index.module.scss";
import Marquee from "react-fast-marquee";
import ConnectButton from "../../components/ConnectButton";
import PartialBorderDiv from "../../components/PartialBorderDiv";
import { useMediaQuery } from "react-responsive";
// import Marquee from "../../components/Marquee";
import logo from "../../assets/logo.svg";
import service01 from "../../assets/service01.svg";
import service02 from "../../assets/service02.svg";
import service03 from "../../assets/service03.svg";
import service04 from "../../assets/service04.svg";

import strategy01 from "../../assets/strategy01.svg";
import strategy02 from "../../assets/strategy02.svg";
import strategy03 from "../../assets/strategy03.svg";
import strategy04 from "../../assets/strategy04.svg";
import strategy05 from "../../assets/strategy05.svg";
import strategy06 from "../../assets/strategy06.svg";
import strategy07 from "../../assets/strategy07.svg";
import strategy08 from "../../assets/strategy08.svg";

import team01 from "../../assets/team01.svg";
import team02 from "../../assets/team02.svg";
import team03 from "../../assets/team03.svg";
import team04 from "../../assets/team04.svg";
import team05 from "../../assets/team05.svg";
import team06 from "../../assets/team06.svg";

import bottomBanner from "../../assets/bottom-banner.svg";
import bottomBannerMobile from "../../assets/bottom-banner-mobile.svg";
import { useEffect } from "react";

const Main = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 775px)" });
  return (
    <div style={{ padding: "20px 16px", background: "black" }}>
      <div className={styles.gradient_box}>
        <div className={styles.headerTitle}>無限月讀</div>

        <div className={styles.mainContent}>
          <ConnectButton
            customeStyle={{
              right: "10px",
              fontSize: "20px",
            }}
            btnText="通往 web 3.0"
          />
          <div className={styles.topContainer}>
            <img className={styles.logo} src={logo} alt="Logo" />
            <div className={styles.intro_card_container}>
              <div className={styles.intro_card_title}>
                INFINITE TSUKUYOMI CORP.
              </div>
              <div className={styles.intro_card_desc}>
                關於我們 <br />
                無限月讀希望透過科技，成為連接虛擬世界與實體世界的門，整合 Web
                2.0 與
                3.0，協助品牌踏入區塊鏈世界，發展新型商業模式，一同邁入下個世代。
              </div>
            </div>
          </div>

          <div className={styles.service_container}>
            <div>
              <div className={styles.service_title}>服務項目</div>
              <ConnectButton
                customeStyle={{
                  position: "relative",
                  width: "165px",
                  top: 0,
                }}
                btnText="medium 看完整內容"
              />
            </div>
            <div className={styles.service_card_container}>
              <div className={styles.service_card_title}>
                <div>項目工程開發</div>
                <div>Line 驗證 NFT 服務</div>
                <div>品牌發行 NFT 商業顧問</div>
              </div>
              <div className={styles.service_card_desc}>
                <img src={service01} alt="service01" />
                <img src={service02} alt="service02" />
                <img src={service03} alt="service03" />
                <img src={service04} alt="service04" />
              </div>
            </div>
          </div>

          <div className={styles.strategy_container}>
            <div>
              <div className={styles.strategy_title}>策略夥伴</div>
              <div></div>
            </div>
            <div className={styles.strategy_card_container}>
              <img src={strategy01} alt="strategy01" />
              <img src={strategy02} alt="strategy02" />
              <img src={strategy03} alt="strategy03" />
              <img src={strategy04} alt="strategy04" />
              <img src={strategy05} alt="strategy05" />
              <img src={strategy06} alt="strategy06" />
              <img src={strategy07} alt="strategy07" />
              <img src={strategy08} alt="strategy08" />
            </div>
          </div>

          <div className={styles.team_container}>
            <div>
              <div className={styles.team_title}>團隊成員</div>
              <div></div>
            </div>
            <div className={styles.team_card_container}>
              <img src={team01} alt="team01" />
              <img src={team02} alt="team02" />
              <img src={team03} alt="team03" />
              <img src={team04} alt="team04" />
              <img src={team05} alt="team05" />
              <img src={team06} alt="team06" />
            </div>
          </div>
          {isMobile ? (
            <div className={styles.bottomBannerMobile}>
              <img src={bottomBannerMobile} alt="bottomBanner" />
            </div>
          ) : (
            <div
              className={styles.bottomBanner}
              style={{ textAlign: "center", marginTop: "100px" }}
            >
              <img src={bottomBanner} alt="bottomBanner" />
            </div>
          )}
        </div>

        <div className={styles.marquee_container}>
          <div style={{ borderRight: "2px solid #EE9DF5", paddingTop: "6px" }}>
            ☾
          </div>
          <div style={{ borderRight: "2px solid #EE9DF5", paddingTop: "6px" }}>
            INFINITE TSUKUYOMI CORP.
          </div>
          <Marquee gradient={false} speed={50}>
            Be the gate of Web 2.0 and 3.0
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Main;
