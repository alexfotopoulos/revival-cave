import styles from "./NewPricingTable.module.scss";

export default function NewPricingTable() {
  return (
    <>
      <h2 className={styles.tableTitle}>Massage</h2>
      <table className={styles.pricingTableU}>
        <thead>
          <tr>
            <th>Service</th>
            <th>Pricing</th>
            <th>60 Min</th>
            <th>90 Min</th>
            <th>120 Min</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">Swedish</td>
            <td className={styles.memberPricing}>Member</td>
            <td className={styles.memberPricing}>$110</td>
            <td className={styles.memberPricing}>$145</td>
            <td className={styles.memberPricing}>$180</td>
          </tr>
          <tr>
            <td>Non-Member</td>
            <td>$140</td>
            <td>$180</td>
            <td>$225</td>
          </tr>
          <tr>
            <td rowspan="2">Deep Tissue</td>
            <td className={styles.memberPricing}>Member</td>
            <td className={styles.memberPricing}>$120</td>
            <td className={styles.memberPricing}>$170</td>
            <td className={styles.memberPricing}>$220</td>
          </tr>
          <tr>
            <td>Non-Member</td>
            <td>$150</td>
            <td>$215</td>
            <td>$275</td>
          </tr>
          <tr>
            <td rowspan="2">Performance</td>
            <td className={styles.memberPricing}>Member</td>
            <td className={styles.memberPricing}>$135</td>
            <td className={styles.memberPricing}>$185</td>
            <td className={styles.memberPricing}>$235</td>
          </tr>
          <tr>
            <td>Non-Member</td>
            <td>$170</td>
            <td>$230</td>
            <td>$295</td>
          </tr>
          <tr>
            <td rowspan="2">Prenatal</td>
            <td className={styles.memberPricing}>Member</td>
            <td className={styles.memberPricing}>$130</td>
            <td className={styles.memberPricing}>$180</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Non-Member</td>
            <td>$165</td>
            <td>$225</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="2">Lymphatic</td>
            <td className={styles.memberPricing}>Member</td>
            <td className={styles.memberPricing}>$130</td>
            <td className={styles.memberPricing}>$180</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Non-Member</td>
            <td>$165</td>
            <td>$225</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.tableTitle}>Massage with Adam (Owner)</h2>
      <table className={styles.pricingTableU}>
        <thead>
          <tr>
            <th>Service</th>
            <th>Pricing</th>
            <th>60 Min</th>
            <th>90 Min</th>
            <th>120 Min</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">Swedish</td>
            <td className={styles.memberPricing}>Member</td>
            <td className={styles.memberPricing}>$175</td>
            <td className={styles.memberPricing}>$225</td>
            <td className={styles.memberPricing}>-</td>
          </tr>
          <tr>
            <td>Non-Member</td>
            <td>$220</td>
            <td>$280</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="2">Deep Tissue</td>
            <td className={styles.memberPricing}>Member</td>
            <td className={styles.memberPricing}>$190</td>
            <td className={styles.memberPricing}>$240</td>
            <td className={styles.memberPricing}>$330</td>
          </tr>
          <tr>
            <td>Non-Member</td>
            <td>$240</td>
            <td>$300</td>
            <td>$410</td>
          </tr>
          <tr>
            <td rowspan="2">Performance</td>
            <td className={styles.memberPricing}>Member</td>
            <td className={styles.memberPricing}>$210</td>
            <td className={styles.memberPricing}>$255</td>
            <td className={styles.memberPricing}>$345</td>
          </tr>
          <tr>
            <td>Non-Member</td>
            <td>$260</td>
            <td>$320</td>
            <td>$430</td>
          </tr>
          <tr>
            <td rowspan="2">Lymphatic</td>
            <td className={styles.memberPricing}>Member</td>
            <td className={styles.memberPricing}>$210</td>
            <td className={styles.memberPricing}>$255</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Non-Member</td>
            <td>$260</td>
            <td>$320</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.tableTitle}>Facials</h2>
      <table className={styles.pricingTable}>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeading}>Service</th>
          <th className={styles.tableHeading}>Member</th>
          <th className={styles.tableHeading}>Non-Member</th>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Signature Facial</td>
          <td className={`${styles.tableData} ${styles.memberPricing}`}>$120</td>
          <td className={styles.tableData}>$150</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Signature Back Facial</td>
          <td className={`${styles.tableData} ${styles.memberPricing}`}>$130</td>
          <td className={styles.tableData}>$165</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Peel/SWiCH</td>
          <td className={`${styles.tableData} ${styles.memberPricing}`}>$150</td>
          <td className={styles.tableData}>$190</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Signature Men's Facial</td>
          <td className={`${styles.tableData} ${styles.memberPricing}`}>$120</td>
          <td className={styles.tableData}>$160</td>
        </tr>
      </table>
    </>
  );
}