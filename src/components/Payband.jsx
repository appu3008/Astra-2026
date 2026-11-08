export default function Payband({ tone = "dark" }) {
  return (
    <aside
      className={`payband${tone === "amber" ? " payband--amber" : ""}`}
      aria-label="Payment announcement"
    >
      <p className="payband__kicker">
        <span>IMPORTANT PAYMENT INFORMATION</span>
        <i aria-hidden="true" />
        <span lang="kn">ಪ್ರಮುಖ ಪಾವತಿ ಮಾಹಿತಿ</span>
      </p>

      <p className="payband__line">PAY AT EXAM ENTRANCE</p>
      <p className="payband__line payband__line--kn" lang="kn">
        ಪರೀಕ್ಷಾ ಪ್ರವೇಶದ್ವಾರದಲ್ಲಿ ಪಾವತಿಸಿ
      </p>

      <div className="payband__fees">
        <div className="payband__fee">
          <b>
            Grade IV &amp; V: <span>₹100</span>
          </b>
          <span lang="kn">
            4 ಮತ್ತು 5ನೇ ತರಗತಿ: <span>₹100</span>
          </span>
        </div>
        <div className="payband__fee">
          <b>
            Grade IX &amp; X: <span>₹200</span>
          </b>
          <span lang="kn">
            9 ಮತ್ತು 10ನೇ ತರಗತಿ: <span>₹200</span>
          </span>
        </div>
      </div>

      <p className="payband__when">
        <span>15 November 2026 | RDS Campus</span>
        <span lang="kn">15 ನವೆಂಬರ್ 2026 | RDS ಕ್ಯಾಂಪಸ್</span>
      </p>
    </aside>
  );
}
