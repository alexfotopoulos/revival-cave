import styles from "./PricingTable.module.scss";

export default function PricingTable() {
  return (
    <>
      <h2 className={styles.tableTitle}>60 Min Services</h2>
      <table className={styles.pricingTable}>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeading}>Service</th>
          <th className={styles.tableHeading}>Member Pricing</th>
          <th className={styles.tableHeading}>Non-Member Pricing</th>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Swedish</td>
          <td className={styles.tableData}>$90</td>
          <td className={styles.tableData}>$120</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Deep Tissue</td>
          <td classe={styles.tableData}>$100</td>
          <td className={styles.tableData}>$135</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Performance</td>
          <td className={styles.tableData}>$110</td>
          <td className={styles.tableData}>$150</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Prenatal</td>
          <td className={styles.tableData}>$110</td>
          <td className={styles.tableData}>$150</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Lymphatic</td>
          <td className={styles.tableData}>$110</td>
          <td className={styles.tableData}>$150</td>
        </tr>
      </table>
      <h2 className={styles.tableTitle}>90 Min Services</h2>
      <table className={styles.pricingTable}>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeading}>Service</th>
          <th className={styles.tableHeading}>Member Pricing</th>
          <th className={styles.tableHeading}>Non-Member Pricing</th>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Swedish</td>
          <td className={styles.tableData}>$120</td>
          <td className={styles.tableData}>$160</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Deep Tissue</td>
          <td className={styles.tableData}>$140</td>
          <td className={styles.tableData}>$190</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Performance</td>
          <td className={styles.tableData}>$150</td>
          <td className={styles.tableData}>$200</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Prenatal</td>
          <td className={styles.tableData}>$150</td>
          <td className={styles.tableData}>$200</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Lymphatic</td>
          <td className={styles.tableData}>$150</td>
          <td className={styles.tableData}>$200</td>
        </tr>
      </table>
      <h2 className={styles.tableTitle}>120 Min Services</h2>
      <table className={styles.pricingTable}>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeading}>Service</th>
          <th className={styles.tableHeading}>Member Pricing</th>
          <th className={styles.tableHeading}>Non-Member Pricing</th>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Swedish</td>
          <td className={styles.tableData}>$150</td>
          <td className={styles.tableData}>$200</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Deep Tissue</td>
          <td className={styles.tableData}>$205</td>
          <td className={styles.tableData}>$275</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Performance</td>
          <td className={styles.tableData}>$205</td>
          <td className={styles.tableData}>$275</td>
        </tr>
      </table>
      <h2 className={styles.tableTitle}>Facials</h2>
      <table className={styles.pricingTable}>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeading}>Service</th>
          <th className={styles.tableHeading}>Member Pricing</th>
          <th className={styles.tableHeading}>Non-Member Pricing</th>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Signature Facial</td>
          <td className={styles.tableData}>$120</td>
          <td className={styles.tableData}>$160</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Signature Back Facial</td>
          <td className={styles.tableData}>$130</td>
          <td className={styles.tableData}>$175</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Peel/SWiCH</td>
          <td className={styles.tableData}>$150</td>
          <td className={styles.tableData}>$200</td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableData}>Signature Men's Facial</td>
          <td className={styles.tableData}>$120</td>
          <td className={styles.tableData}>$160</td>
        </tr>
      </table>
    </>
  );
}